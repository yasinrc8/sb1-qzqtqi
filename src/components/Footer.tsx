import React from 'react';
import { Building2, Instagram, Twitter, Linkedin, Facebook, MapPin } from 'lucide-react';

export default function Footer() {
  const locations = ['Granada', 'Madrid', 'Tripoli'];
  
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold text-white">Figar Inc</span>
            </div>
            <p className="mt-4 text-gray-400">
              Transforming brands through strategic social media management and creative content creation.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Our Locations</h3>
            <div className="space-y-2">
              {locations.map((location) => (
                <div key={location} className="flex items-center text-gray-400">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{location}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} Figar Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}