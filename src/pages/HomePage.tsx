import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star, Shield, Truck } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">
              Welcome to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                ShopHub
              </span>
            </h1>
            <p className="max-w-2xl mx-auto mb-8 text-xl leading-relaxed text-gray-600">
              Discover amazing products with our premium shopping experience. 
              Quality items, competitive prices, and exceptional service.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-8 py-4 space-x-2 text-lg font-semibold text-white transition-all duration-200 bg-blue-600 shadow-lg rounded-xl hover:bg-blue-700 hover:shadow-xl"
              >
                <ShoppingBag className="w-6 h-6" />
                <span>Shop Now</span>
              </Link>
              <Link
                to="/signup"
                className="inline-flex items-center justify-center px-8 py-4 space-x-2 text-lg font-semibold text-blue-600 transition-all duration-200 bg-white border-2 border-blue-600 rounded-xl hover:bg-blue-50"
              >
                <span>Join Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Why Choose ShopHub?</h2>
            <p className="text-xl text-gray-600">Experience shopping like never before</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Premium Quality */}
            <div className="p-8 text-center transition-all duration-300 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-blue-600 rounded-full">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Premium Quality</h3>
              <p className="mb-6 text-gray-600">
                Get exclusive access to offers, premium discounts, and curated items.
              </p>
              <Link
                to="/premium"
                className="inline-block px-6 py-2 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Learn More
              </Link>
            </div>
            
            {/* Secure Shopping */}
            <div className="p-8 text-center transition-all duration-300 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100 hover:shadow-xl">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-teal-600 rounded-full">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Secure Shopping</h3>
              <p className="mb-6 text-gray-600">
                Shop confidently with industry-leading security and safe transactions.
              </p>
              <Link
                to="/secure"
                className="inline-block px-6 py-2 font-semibold text-white transition bg-teal-600 rounded-lg hover:bg-teal-700"
              >
                Learn More
              </Link>
            </div>
            
            {/* Fast Delivery */}
            <div className="p-8 text-center transition-all duration-300 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-xl">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-orange-600 rounded-full">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Fast Delivery</h3>
              <p className="mb-6 text-gray-600">
                Quick and reliable shipping to get your products to you in no time.
              </p>
              <Link
                to="/delivery"
                className="inline-block px-6 py-2 font-semibold text-white transition bg-orange-600 rounded-lg hover:bg-orange-700"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-4xl font-bold text-white">Ready to Start Shopping?</h2>
          <p className="mb-8 text-xl text-blue-100">
            Join thousands of satisfied customers who trust ShopHub for their shopping needs.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center px-8 py-4 space-x-2 text-lg font-semibold text-blue-600 transition-all duration-200 bg-white shadow-lg rounded-xl hover:bg-gray-50"
          >
            <span>Get Started Today</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
