import React from "react";

const SecureShopping: React.FC = () => {
  return (
    <div className="min-h-screen px-6 py-20 bg-gradient-to-br from-green-50 via-white to-green-100">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="mb-6 text-4xl font-bold text-green-700">Secure Shopping</h1>
        <p className="mb-10 text-lg text-gray-600">
          Shop with confidence! Your transactions and data are protected with
          <span className="font-semibold text-green-600"> industry-leading security</span>.
        </p>

        <div className="p-8 mb-10 bg-white shadow-xl rounded-2xl">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">Our Security Features:</h2>
          <ul className="space-y-3 text-left text-gray-600">
            <li>🔐 End-to-end encrypted payments</li>
            <li>🛡️ Fraud detection & 24/7 monitoring</li>
            <li>💳 Multiple secure payment gateways</li>
            <li>📦 Safe handling of your delivery data</li>
          </ul>
        </div>

        <button className="px-6 py-3 font-semibold text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700">
          Learn More About Security
        </button>
      </div>
    </div>
  );
};

export default SecureShopping;
