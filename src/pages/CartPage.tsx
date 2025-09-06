import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ShoppingBag, CreditCard, Moon, Sun, Star } from 'lucide-react';
import { RootState } from '../store';
import { loadCart } from '../store/slices/cartSlice';
import CartItem from '../components/Cart/CartItem';
import EmptyCart from '../components/Cart/EmptyCart';

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const { items, total, loading } = useSelector((state: RootState) => state.cart);
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  const [darkMode, setDarkMode] = useState(false);
  const [trackingStage, setTrackingStage] = useState<string | null>(null);
  const [reviews, setReviews] = useState<{ [key: string]: string }>({});

  const trackingSteps = [
    "Order Placed",
    "Packed",
    "Shipped",
    "Out for Delivery",
    "Delivered ✅"
  ];

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(loadCart() as any);
    }
  }, [dispatch, isAuthenticated]);

  // Toggle dark mode on body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleCheckout = () => {
    let step = 0;
    setTrackingStage(trackingSteps[0]);

    const interval = setInterval(() => {
      step++;
      if (step < trackingSteps.length) {
        setTrackingStage(trackingSteps[step]);
      } else {
        clearInterval(interval);
      }
    }, 2000);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen py-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="py-20 text-center">
            <ShoppingBag className="w-24 h-24 mx-auto mb-6 text-gray-400" />
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Please sign in to view your cart</h2>
            <Link
              to="/login"
              className="inline-flex items-center px-6 py-3 space-x-2 font-semibold text-white transition-colors duration-200 bg-blue-100 rounded-lg hover:bg-blue-700"
            >
              <span>Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen py-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-20">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-12 h-12 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
              <p className="text-gray-600 dark:text-gray-300">Loading your cart...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 transition-colors duration-300 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
        
        {/* Dark Mode Toggle */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center px-4 py-2 space-x-2 text-gray-800 bg-gray-200 rounded-lg dark:bg-gray-700 dark:text-gray-200"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </div>

        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">Shopping Cart</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {items.length === 0 ? 'Your cart is empty' : `${items.length} item${items.length !== 1 ? 's' : ''} in your cart`}
          </p>
        </div>

        {items.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              {items.map((item) => (
                <div key={item.id} className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                  <CartItem item={item} />

                  {/* Product Review */}
                  <div className="mt-4">
                    <h4 className="mb-2 text-sm font-semibold text-gray-800 dark:text-gray-200">Leave a Review</h4>
                    <div className="flex items-center mb-2 space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className={`h-5 w-5 ${star <= 4 ? "text-yellow-400" : "text-gray-400"}`} />
                      ))}
                    </div>
                    <textarea
                      value={reviews[item.id] || ""}
                      onChange={(e) => setReviews({ ...reviews, [item.id]: e.target.value })}
                      placeholder="Write your review..."
                      className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky p-6 bg-white shadow-md dark:bg-gray-800 rounded-xl top-8">
                <h3 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">Order Summary</h3>
                
                <div className="mb-6 space-y-4 text-gray-700 dark:text-gray-300">
                  <div className="flex justify-between">
                    <span>Subtotal ({items.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${(total * 0.08).toFixed(2)}</span>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex justify-between text-lg font-bold text-gray-900 dark:text-white">
                      <span>Total</span>
                      <span>${(total * 1.08).toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="flex items-center justify-center w-full px-6 py-4 mb-4 space-x-2 font-semibold text-white transition-colors duration-200 bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  <CreditCard className="w-5 h-5" />
                  <span>Proceed to Checkout</span>
                </button>

                {trackingStage && (
                  <div className="p-4 text-center bg-gray-100 rounded-lg dark:bg-gray-700">
                    <p className="font-medium text-gray-800 dark:text-gray-200">Order Status:</p>
                    <p className="font-semibold text-blue-600 dark:text-blue-400">{trackingStage}</p>
                  </div>
                )}

                <Link
                  to="/products"
                  className="block w-full mt-4 font-medium text-center text-blue-600 transition-colors duration-200 dark:text-blue-400 hover:underline"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
