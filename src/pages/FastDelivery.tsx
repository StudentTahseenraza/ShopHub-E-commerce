import React from "react";

const FastDelivery: React.FC = () => {
  return (
    <div className="min-h-screen px-6 py-20 bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="mb-6 text-4xl font-bold text-orange-700">Fast & Reliable Delivery</h1>
        <p className="mb-10 text-lg text-gray-600">
          Get your products quickly with <span className="font-semibold text-orange-600">ShopHub Express</span> — no delays, just fast and reliable delivery.
        </p>

        <div className="p-8 mb-10 bg-white shadow-xl rounded-2xl">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">Delivery Perks:</h2>
          <ul className="space-y-3 text-left text-gray-600">
            <li>🚀 Same-day delivery on selected products</li>
            <li>📍 Real-time delivery tracking</li>
            <li>🛵 Free delivery on premium orders</li>
            <li>🌍 Delivery available across major cities</li>
          </ul>
        </div>

        <button className="px-6 py-3 font-semibold text-white bg-orange-600 rounded-lg shadow-md hover:bg-orange-700">
          Check Delivery Options
        </button>
      </div>
    </div>
  );
};

export default FastDelivery;
