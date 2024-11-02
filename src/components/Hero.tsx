import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gray-900 pt-32 pb-24 lg:pt-40">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mb-8 lg:mb-0">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              Transform Your <span className="text-gray-400">Social Media</span> Presence
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl">
              We help brands build meaningful connections with their audience through strategic social media management and creative content creation.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a href="#pricing" className="bg-white text-gray-900 px-8 py-3 rounded-md text-base font-medium hover:bg-gray-100 transition-colors">
                View Pricing
              </a>
              <a href="#services" className="text-white flex items-center gap-2 hover:gap-3 transition-all">
                Our Services <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              className="rounded-xl shadow-2xl"
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Marketing team collaboration"
            />
          </div>
        </div>
      </div>
    </div>
  );
}