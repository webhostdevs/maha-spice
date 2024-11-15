import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Menu as MenuIcon, X, ChevronDown } from 'lucide-react';
import Logo from "../assets/1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'Home', path: '/' },
    { 
      title: 'Menus', 
      path: '/menus',
      submenu: [
        { title: 'Wedding Menu', path: '/menus/wedding' },
        { title: 'Corporate Menu', path: '/menus/corporate' },
        { title: 'Special Events', path: '/menus/special-events' }
      ]
    },
    { title: 'About', path: '/about' },
    { title: 'Services', path: '/services' },
    { title: 'Contact', path: '/contact' }
  ];

  return (
    <div className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'translate-y-0' : 'translate-y-0'
    }`}>
      {/* Top contact bar */}
     <div className="bg-green-600 text-white py-2 px-4">
  <div className="max-w-sm mx-auto flex items-center justify-between">
    <div className="flex items-center gap-4 ml-auto"> {/* This pushes the content to the right */}
      <div className="flex items-center gap-2">
        <Phone size={18} />
        <span className="text-md">040-2222 8888 / 969779 8888</span>
      </div>
    </div>
  </div>
</div>


      {/* Main navbar */}
      <nav className={`bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-10">
              <img src={Logo} alt="Maha Spice Logo" className="h-14 w-auto" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map((item) => (
                <div key={item.title} className="relative group">
                  {item.submenu ? (
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                      className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors"
                    >
                      {item.title}
                      <ChevronDown size={16} className={`transition-transform ${
                        activeDropdown === item.title ? 'rotate-180' : ''
                      }`} />
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors"
                    >
                      {item.title}
                    </Link>
                  )}
                  
                  {/* Dropdown Menu */}
                  {item.submenu && (
                    <div className={`absolute top-full left-0 w-48 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 ${
                      activeDropdown === item.title ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}>
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          to={subItem.path}
                          className="block px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/"
                className="ml-4 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
              >
                Login
              </Link>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-green-50 transition-colors"
            >
              {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white`}>
          <div className="px-4 py-2 space-y-1">
            {menuItems.map((item) => (
              <div key={item.title}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                      className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors"
                    >
                      {item.title}
                      <ChevronDown size={16} className={`transition-transform ${
                        activeDropdown === item.title ? 'rotate-180' : ''
                      }`} />
                    </button>
                    <div className={`pl-4 space-y-1 transition-all duration-300 ${
                      activeDropdown === item.title ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}>
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          to={subItem.path}
                          className="block px-3 py-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/"
              className="block w-full text-center px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;