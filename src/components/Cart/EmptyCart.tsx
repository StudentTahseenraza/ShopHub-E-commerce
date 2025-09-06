import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import Lottie from 'lottie-react';

// Simple empty cart animation
const emptyCartAnimation = {
  "v": "5.7.4",
  "fr": 30,
  "ip": 0,
  "op": 90,
  "w": 400,
  "h": 400,
  "nm": "EmptyCart",
  "ddd": 0,
  "assets": [],
  "layers": [{
    "ddd": 0,
    "ind": 1,
    "ty": 4,
    "nm": "Cart",
    "sr": 1,
    "ks": {
      "o": {"a": 1, "k": [
        {"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 0, "s": [100]},
        {"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 45, "s": [30]},
        {"t": 90, "s": [100]}
      ]},
      "r": {"a": 1, "k": [
        {"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 0, "s": [0]},
        {"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 45, "s": [-10]},
        {"t": 90, "s": [0]}
      ]},
      "p": {"a": 0, "k": [200, 200, 0]},
      "a": {"a": 0, "k": [0, 0, 0]},
      "s": {"a": 0, "k": [100, 100, 100]}
    },
    "ao": 0,
    "shapes": [{
      "ty": "gr",
      "it": [{
        "ty": "rc",
        "d": 1,
        "s": {"a": 0, "k": [80, 60]},
        "p": {"a": 0, "k": [0, 0]},
        "r": {"a": 0, "k": 8}
      }, {
        "ty": "st",
        "c": {"a": 0, "k": [0.6, 0.6, 0.6, 1]},
        "o": {"a": 0, "k": 100},
        "w": {"a": 0, "k": 4},
        "lc": 2,
        "lj": 2
      }]
    }],
    "ip": 0,
    "op": 90,
    "st": 0
  }]
};

const EmptyCart: React.FC = () => {
  return (
    <div className="text-center py-16">
      <div className="w-64 h-64 mx-auto mb-8">
        <Lottie animationData={emptyCartAnimation} loop={true} />
      </div>
      
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">
          Looks like you haven't added any items to your cart yet. Start shopping to fill it up!
        </p>
        
        <Link
          to="/products"
          className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
        >
          <ShoppingBag className="h-5 w-5" />
          <span>Start Shopping</span>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;