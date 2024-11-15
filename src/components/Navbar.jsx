// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Phone, Menu as MenuIcon } from 'lucide-react';
import Logo from "../assets/1.png";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Top contact bar */}
      <div className="bg-orange-600 text-white py-2 px-4 text-center">
        <div className="flex items-center justify-center gap-2">
          <Phone size={16} />
          <span>040-2222 8888 / 969779 8888</span>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
                <img src={Logo} alt="Logo" className="h-10 w-auto" />
            </div>


            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-orange-600">Home</a>
              <a href="/about" className="text-gray-700 hover:text-orange-600">About</a>
              <a href="/menu" className="text-gray-700 hover:text-orange-600">Menu</a>
              <a href="/contact" className="text-gray-700 hover:text-orange-600">Contact</a>
              <a href="/login" className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700">Login</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
                <MenuIcon size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="/" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Home</a>
              <a href="/about" className="block px-3 py-2 text-gray-700 hover:text-orange-600">About</a>
              <a href="/menu" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Menu</a>
              <a href="/contact" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Contact</a>
              <a href="/login" className="block px-3 py-2 text-orange-600">Login</a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;