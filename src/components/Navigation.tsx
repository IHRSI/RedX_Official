
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Partners', path: '/partners' },
    { name: 'Membership', path: '/membership' },
    { name: 'Team', path: '/team' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-red-600/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src="/lovable-uploads/551e6dc7-4364-4a06-b31b-fe1f04715716.png" 
              alt="Red-X Logo"
              className="h-10 w-auto transform group-hover:scale-110 transition-all duration-300 glow-effect hover:brightness-110"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  isActive(item.path)
                    ? 'text-white bg-red-600/30 border border-red-600/70 glow-effect shadow-lg shadow-red-600/25'
                    : 'text-gray-300 hover:text-white hover:bg-red-600/20 hover:border hover:border-red-600/40 hover:shadow-lg hover:shadow-red-600/20'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-red-600/20 transition-all duration-300 border border-transparent hover:border-red-600/30 hover:scale-110"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 bg-black/95 border-t border-red-600/30 backdrop-blur-sm">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                    isActive(item.path)
                      ? 'text-white bg-red-600/30 border border-red-600/70 shadow-lg shadow-red-600/25'
                      : 'text-gray-300 hover:text-white hover:bg-red-600/20 hover:border hover:border-red-600/40'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
