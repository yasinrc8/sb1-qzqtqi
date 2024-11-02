import React from 'react';
import { Building2, Users, Globe2, ChevronDown, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-gray-900" />
              <span className="ml-2 text-xl font-bold text-gray-900">Figar Inc</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-gray-900">Services</a>
              <a href="#team" className="text-gray-600 hover:text-gray-900">Team</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <button className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Services />
        <Team />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}

export default App;