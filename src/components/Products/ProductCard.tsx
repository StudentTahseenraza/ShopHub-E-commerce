import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import Lottie from 'lottie-react';
import { RootState } from '../../store';
import { addToCart } from '../../store/slices/cartSlice';
import { Product } from '../../types';

// Simple success animation for add to cart
const addToCartAnimation = {
  "v": "5.7.4",
  "fr": 30,
  "ip": 0,
  "op": 30,
  "w": 100,
  "h": 100,
  "nm": "AddCart",
  "ddd": 0,
  "assets": [],
  "layers": [{
    "ddd": 0,
    "ind": 1,
    "ty": 4,
    "nm": "Cart",
    "sr": 1,
    "ks": {
      "o": {"a": 0, "k": 100},
      "r": {"a": 0, "k": 0},
      "p": {"a": 0, "k": [50, 50, 0]},
      "a": {"a": 0, "k": [0, 0, 0]},
      "s": {"a": 1, "k": [
        {"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 0, "s": [100]},
        {"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 10, "s": [120]},
        {"t": 20, "s": [100]}
      ]}
    },
    "ao": 0,
    "shapes": [{
      "ty": "gr",
      "it": [{
        "ty": "rc",
        "d": 1,
        "s": {"a": 0, "k": [20, 15]},
        "p": {"a": 0, "k": [0, 0]},
        "r": {"a": 0, "k": 2}
      }, {
        "ty": "fl",
        "c": {"a": 0, "k": [0.2, 0.8, 0.2, 1]},
        "o": {"a": 0, "k": 100}
      }]
    }],
    "ip": 0,
    "op": 30,
    "st": 0
  }]
};

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const { loading } = useSelector((state: RootState) => state.cart);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleAddToCart = async () => {
    if (!isAuthenticated) return;
    
    await dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1
    }) as any);
    
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 1000);
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200"
        >
          <Heart 
            className={`h-5 w-5 transition-colors duration-200 ${
              isLiked ? 'text-red-500 fill-current' : 'text-gray-600'
            }`} 
          />
        </button>
        {product.stock < 10 && (
          <div className="absolute top-4 left-4 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            Only {product.stock} left
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
            {product.category}
          </span>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{product.rating}</span>
            <span className="text-xs text-gray-400">({product.reviews})</span>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price}
          </span>
          
          {isAuthenticated ? (
            <button
              onClick={handleAddToCart}
              disabled={loading || product.stock === 0}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {showSuccess ? (
                <div className="w-5 h-5">
                  <Lottie animationData={addToCartAnimation} loop={false} />
                </div>
              ) : (
                <ShoppingCart className="h-4 w-4" />
              )}
              <span className="text-sm font-medium">
                {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
              </span>
            </button>
          ) : (
            <div className="text-sm text-gray-500">
              Login to add to cart
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;