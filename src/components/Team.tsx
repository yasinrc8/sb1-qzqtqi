import React from 'react';
import { MapPin } from 'lucide-react';

export default function Team() {
  const team = [
    {
      name: 'Mohammed Abuabdalla',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
      location: 'Granada'
    },
    {
      name: 'Yasin Romero',
      role: 'Chief Financial Officer',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
      location: 'Madrid'
    }
  ];

  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Leadership Team</h2>
          <p className="mt-4 text-lg text-gray-600">
            With offices in Granada, Madrid, and Tripoli, we bring a global perspective to your social media strategy.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          {team.map((member) => (
            <div key={member.name} className="space-y-4">
              <div className="aspect-w-3 aspect-h-3">
                <img className="object-cover shadow-lg rounded-lg" src={member.image} alt={member.name} />
              </div>
              <div className="space-y-2">
                <div className="text-lg leading-6 font-medium space-y-1">
                  <h3 className="text-gray-900">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
                <div className="flex items-center text-gray-500">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{member.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}