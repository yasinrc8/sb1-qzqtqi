import React from 'react';
import { Instagram, BarChart3, Users, Mail } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Instagram,
      name: 'Social Media Management',
      description: 'Comprehensive social media management including content creation, scheduling, and engagement.'
    },
    {
      icon: BarChart3,
      name: 'Analytics & Reporting',
      description: 'Detailed performance tracking and analytics to optimize your social media strategy.'
    },
    {
      icon: Users,
      name: 'Influencer Marketing',
      description: 'Strategic influencer partnerships to amplify your brand reach and engagement.'
    },
    {
      icon: Mail,
      name: 'Email Marketing',
      description: 'Integrated email marketing campaigns that complement your social media presence.'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive social media solutions tailored to your brand's needs
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.name}
              className="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center">
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{service.name}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}