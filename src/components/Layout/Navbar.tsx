import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ShoppingCart, User, LogOut} from 'lucide-react';
import { RootState } from '../../store';
import { logout } from '../../store/slices/authSlice';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
  const { items } = useSelector((state: RootState) => state.cart);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const cartItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-50 shadow-lg bg-gradient-to-r from-purple-500 via-green-500 to-gray-500">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingCart className="w-8 h-8 text-gray-200" />
            <span className="text-2xl font-bold text-gray-200 hover:text-black">ShopHub</span>
          </Link>

          <div className="items-center hidden space-x-8 md:flex">
            <Link
              to="/products"
              className="font-medium text-gray-200 transition-colors duration-200 hover:text-black"
            >
              Products
            </Link>
            {isAuthenticated && (
              <Link
                to="/cart"
                className="relative flex items-center space-x-1 font-medium text-gray-200 transition-colors duration-200 hover:text-black"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Cart</span>
                {cartItemsCount > 0 && (
                  <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-2 -right-2 animate-pulse">
                    {cartItemsCount}
                  </span>
                )}
              </Link>
            )}
          </div>

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/cart"
                  className="relative p-2 text-gray-700 transition-colors duration-200 hover:text-blue-600 md:hidden"
                >
                  <ShoppingCart className="w-6 h-6" />
                  {cartItemsCount > 0 && (
                    <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-1 -right-1 animate-pulse">
                      {cartItemsCount}
                    </span>
                  )}
                </Link>
                <div className="flex items-center space-x-2 text-gray-100">
                  <User className="w-5 h-5" />
                  <span className="hidden font-medium sm:inline">{user?.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center px-3 py-2 space-x-1 text-red-700 transition-colors duration-200 rounded-lg hover:bg-gray-100"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  className="px-4 py-2 font-medium text-white transition-colors duration-200 bg-blue-600 rounded-lg hover:bg-black"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 font-medium text-white transition-colors duration-200 bg-blue-600 rounded-lg hover:bg-black"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;