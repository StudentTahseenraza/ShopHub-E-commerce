import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { User, AuthState } from '../../types';

// Simulated API calls
export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials: { email: string; password: string }) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate authentication
    if (credentials.email === 'admin@demo.com' && credentials.password === 'admin123') {
      const user: User = {
        id: '1',
        name: 'Admin User',
        email: credentials.email,
        isAdmin: true,
      };
      const token = 'mock-jwt-token-admin';
      localStorage.setItem('accessToken', token);
      localStorage.setItem('user', JSON.stringify(user));
      return { user, token };
    } else if (credentials.email === 'user@demo.com' && credentials.password === 'user123') {
      const user: User = {
        id: '2',
        name: 'Demo User',
        email: credentials.email,
      };
      const token = 'mock-jwt-token-user';
      localStorage.setItem('accessToken', token);
      localStorage.setItem('user', JSON.stringify(user));
      return { user, token };
    } else {
      throw new Error('Invalid credentials');
    }
  }
);

export const signupUser = createAsyncThunk(
  'auth/signup',
  async (userData: { name: string; email: string; password: string }) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const user: User = {
      id: Date.now().toString(),
      name: userData.name,
      email: userData.email,
    };
    const token = `mock-jwt-token-${user.id}`;
    localStorage.setItem('accessToken', token);
    localStorage.setItem('user', JSON.stringify(user));
    return { user, token };
  }
);

const initialState: AuthState = {
  user: null,
  accessToken: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.isAuthenticated = false;
      localStorage.removeItem('accessToken');
      localStorage.removeItem('user');
      localStorage.removeItem('cart');
    },
    loadUserFromStorage: (state) => {
      const token = localStorage.getItem('accessToken');
      const userData = localStorage.getItem('user');
      if (token && userData) {
        state.accessToken = token;
        state.user = JSON.parse(userData);
        state.isAuthenticated = true;
      }
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.accessToken = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Login failed';
      })
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.accessToken = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Signup failed';
      });
  },
});

export const { logout, loadUserFromStorage, clearError } = authSlice.actions;
export default authSlice.reducer;