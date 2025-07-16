import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => {
    return currentPath === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[#2E5A5C] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">LAIR</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-[#2E5A5C]">LAIR</h1>
              <p className="text-sm text-[#333333] -mt-1">Gestion & Patrimoine</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/') 
                  ? 'text-[#2E5A5C] border-b-2 border-[#2E5A5C] pb-1' 
                  : 'text-[#333333] hover:text-[#2E5A5C]'
              }`}
            >
              Accueil
            </Link>
            <Link 
              to="/le-cabinet" 
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/le-cabinet') 
                  ? 'text-[#2E5A5C] border-b-2 border-[#2E5A5C] pb-1' 
                  : 'text-[#333333] hover:text-[#2E5A5C]'
              }`}
            >
              Le Cabinet
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/contact') 
                  ? 'text-[#2E5A5C] border-b-2 border-[#2E5A5C] pb-1' 
                  : 'text-[#333333] hover:text-[#2E5A5C]'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <Button 
            className="bg-[#2E5A5C] hover:bg-[#1e3d3f] text-white px-6 py-2 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            onClick={() => window.open('https://calendly.com/contact-lairgestion/30min', '_blank')}
          >
            Prendre rendez-vous
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;