import React from "react";

const PremiumQuality: React.FC = () => {
  const plans = [
    {
      id: 1,
      name: "Monthly",
      price: "₹499",
      features: ["Priority Delivery", "Exclusive Discounts", "Premium Support"],
    },
    {
      id: 2,
      name: "Quarterly",
      price: "₹1299",
      features: ["All Monthly Benefits", "Extra Cashback", "Extended Returns"],
    },
    {
      id: 3,
      name: "Yearly",
      price: "₹4499",
      features: [
        "All Quarterly Benefits",
        "Free Express Shipping",
        "VIP Customer Care",
      ],
    },
  ];

  return (
    <div className="min-h-screen px-6 py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <h1 className="mb-6 text-4xl font-bold text-blue-700">
          Premium Quality Membership
        </h1>
        <p className="mb-10 text-lg text-gray-600">
          Upgrade to{" "}
          <span className="font-semibold text-blue-600">ShopHub Premium</span>{" "}
          and enjoy exclusive offers, extra discounts, faster delivery, and
          curated premium products.
        </p>

        {/* Benefits Section */}
        <div className="p-8 mb-12 bg-white shadow-xl rounded-2xl">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">Benefits:</h2>
          <ul className="space-y-3 text-left text-gray-600">
            <li>⭐ Special discounts up to 50% on premium products</li>
            <li>🚚 Free express delivery on all orders</li>
            <li>🎁 Early access to new arrivals & exclusive collections</li>
            <li>🔒 Extended warranty & return policy on premium items</li>
          </ul>
        </div>

        {/* Premium Plan Cards */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="p-6 transition-transform transform bg-white shadow-lg rounded-2xl hover:scale-105 hover:shadow-2xl"
            >
              <h2 className="mb-2 text-2xl font-bold text-blue-700">{plan.name}</h2>
              <p className="mb-4 text-xl font-semibold text-gray-800">
                {plan.price}
              </p>
              <ul className="mb-6 space-y-2 text-sm text-gray-600">
                {plan.features.map((f, i) => (
                  <li key={i}>✔ {f}</li>
                ))}
              </ul>
              <button className="w-full px-4 py-2 font-semibold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <button className="px-6 py-3 font-semibold text-white rounded-lg shadow-md bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:opacity-90">
            Upgrade to Premium
          </button>
        </div>
      </div>
    </div>
  );
};

export default PremiumQuality;
