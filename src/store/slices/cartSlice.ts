import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { CartItem, CartState } from '../../types';
import { RootState } from '../index';

export const loadCart = createAsyncThunk(
  'cart/load',
  async (_, { getState }) => {
    const state = getState() as RootState;
    const userId = state.auth.user?.id;
    if (!userId) return [];
    
    const cartData = localStorage.getItem(`cart_${userId}`);
    return cartData ? JSON.parse(cartData) : [];
  }
);

export const addToCart = createAsyncThunk(
  'cart/add',
  async (item: Omit<CartItem, 'quantity'> & { quantity?: number }, { getState, dispatch }) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const state = getState() as RootState;
    const userId = state.auth.user?.id;
    if (!userId) throw new Error('User not authenticated');
    
    const currentCart = [...state.cart.items];
    const existingItemIndex = currentCart.findIndex(cartItem => cartItem.productId === item.id);
    
    if (existingItemIndex >= 0) {
      currentCart[existingItemIndex].quantity += item.quantity || 1;
    } else {
      currentCart.push({
        id: Date.now().toString(),
        productId: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity || 1,
        image: item.image,
      });
    }
    
    localStorage.setItem(`cart_${userId}`, JSON.stringify(currentCart));
    return currentCart;
  }
);

export const updateQuantity = createAsyncThunk(
  'cart/updateQuantity',
  async ({ itemId, quantity }: { itemId: string; quantity: number }, { getState }) => {
    const state = getState() as RootState;
    const userId = state.auth.user?.id;
    if (!userId) throw new Error('User not authenticated');
    
    const currentCart = state.cart.items.map(item =>
      item.id === itemId ? { ...item, quantity: Math.max(0, quantity) } : item
    ).filter(item => item.quantity > 0);
    
    localStorage.setItem(`cart_${userId}`, JSON.stringify(currentCart));
    return currentCart;
  }
);

export const removeFromCart = createAsyncThunk(
  'cart/remove',
  async (itemId: string, { getState }) => {
    const state = getState() as RootState;
    const userId = state.auth.user?.id;
    if (!userId) throw new Error('User not authenticated');
    
    const currentCart = state.cart.items.filter(item => item.id !== itemId);
    localStorage.setItem(`cart_${userId}`, JSON.stringify(currentCart));
    return currentCart;
  }
);

const initialState: CartState = {
  items: [],
  total: 0,
  loading: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    calculateTotal: (state) => {
      state.total = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCart.fulfilled, (state, action) => {
        state.items = action.payload;
        state.total = action.payload.reduce((sum: number, item: CartItem) => sum + (item.price * item.quantity), 0);
      })
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.total = action.payload.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      })
      .addCase(addToCart.rejected, (state) => {
        state.loading = false;
      })
      .addCase(updateQuantity.fulfilled, (state, action) => {
        state.items = action.payload;
        state.total = action.payload.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.items = action.payload;
        state.total = action.payload.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      });
  },
});

export const { calculateTotal, clearCart } = cartSlice.actions;
export default cartSlice.reducer;