import React, { useState, useEffect } from "react";

const steps = [
  "Order Placed",
  "Shipped",
  "Out for Delivery",
  "Delivered",
];

const OrderTracking: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  // Simulate order progress every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen px-6 py-12 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="w-full max-w-2xl p-8 bg-white shadow-xl rounded-2xl">
        <h1 className="mb-8 text-3xl font-bold text-center text-blue-700">
          🚚 Order Tracking
        </h1>

        <div className="relative">
          <div className="absolute w-full border-t-4 border-gray-200 top-1/2"></div>
          <div className="relative z-10 flex justify-between">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center w-1/4">
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full border-4 font-bold text-sm
                  ${
                    index <= currentStep
                      ? "bg-blue-600 border-blue-600 text-white"
                      : "bg-gray-100 border-gray-300 text-gray-400"
                  }`}
                >
                  {index + 1}
                </div>
                <p
                  className={`mt-2 text-sm ${
                    index <= currentStep ? "text-blue-600 font-semibold" : "text-gray-500"
                  }`}
                >
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-lg font-medium text-gray-700">
            Current Status:{" "}
            <span className="font-bold text-blue-600">{steps[currentStep]}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
