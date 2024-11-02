import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Monthly Social Media Plan",
      price: "200€",
      features: [
        "8 reels (scripted, filmed, and edited)",
        "Content calendar",
        "Hashtag strategy",
        "Analytics report"
      ]
    },
    {
      name: "Ad Management",
      price: "5%",
      description: "of ad budget",
      features: [
        "Targeted ad setup",
        "Audience research",
        "A/B testing",
        "Weekly performance reports",
        "Optional: Ad graphic design (+15€)",
      ]
    },
    {
      name: "Competition Plan",
      price: "120€",
      features: [
        "5 pre-made posts",
        "Captions and hashtags",
        "Prize suggestions",
        "Engagement tracking",
        "Competition setup guide"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Pricing Plans</h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the perfect plan for your social media needs
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">{plan.price}</span>
                  {plan.description && (
                    <span className="ml-1 text-xl font-semibold text-gray-500">{plan.description}</span>
                  )}
                </p>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check className="h-5 w-5 text-gray-900 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-8 w-full bg-gray-900 text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-colors">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}