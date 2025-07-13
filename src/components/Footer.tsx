
import React from 'react';
import { Mail, Phone, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white border-t border-red-600/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="animate-fade-in-up">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/551e6dc7-4364-4a06-b31b-fe1f04715716.png" 
                alt="Red-X Logo"
                className="h-8 w-auto glow-effect"
              />
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Adventure. Service. Community. <br />
              MIT Manipal's premier socio-adventure club making a difference through exploration and service.
            </p>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold mb-4 text-red-400">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="mailto:redxmanipal@gmail.com"
                className="flex items-center space-x-3 text-gray-400 hover:text-red-400 transition-all duration-300 hover:translate-x-1"
              >
                <Mail size={18} className="text-red-500" />
                <span>redx.mit@manipal.edu</span>
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center space-x-3 text-gray-400 hover:text-red-400 transition-all duration-300 hover:translate-x-1"
              >
                <Phone size={18} className="text-red-500" />
                <span>+91 98765 43210</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-lg font-semibold mb-4 text-red-400">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/redxmanipal"
                className="p-3 bg-gray-800 rounded-xl hover:bg-red-600 transition-all duration-300 glow-effect hover:scale-110 hover:rotate-6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com/company/redxmanipal"
                className="p-3 bg-gray-800 rounded-xl hover:bg-red-600 transition-all duration-300 glow-effect hover:scale-110 hover:rotate-6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://facebook.com/redxmanipal"
                className="p-3 bg-gray-800 rounded-xl hover:bg-red-600 transition-all duration-300 glow-effect hover:scale-110 hover:rotate-6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-gray-400">
            © 2024 Red-X Club, MIT Manipal. All rights reserved. | Made with ❤️ for adventure and service.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
