import React from 'react';
import { useDispatch } from 'react-redux';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';
import { updateQuantity, removeFromCart } from '../../store/slices/cartSlice';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity <= 0) {
      dispatch(removeFromCart(item.id) as any);
    } else {
      dispatch(updateQuantity({ itemId: item.id, quantity: newQuantity }) as any);
    }
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id) as any);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-200 hover:shadow-lg">
      <div className="flex items-center space-x-4">
        <img
          src={item.image}
          alt={item.title}
          className="w-20 h-20 object-cover rounded-lg"
        />
        
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
          <p className="text-2xl font-bold text-blue-600">${item.price.toFixed(2)}</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 bg-gray-50 rounded-lg p-1">
            <button
              onClick={() => handleQuantityChange(item.quantity - 1)}
              className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-md transition-colors duration-200"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="px-3 py-1 text-lg font-semibold text-gray-900 min-w-[3rem] text-center">
              {item.quantity}
            </span>
            <button
              onClick={() => handleQuantityChange(item.quantity + 1)}
              className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-md transition-colors duration-200"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          
          <button
            onClick={handleRemove}
            className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors duration-200"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Subtotal:</span>
          <span className="text-lg font-bold text-gray-900">
            ${(item.price * item.quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;