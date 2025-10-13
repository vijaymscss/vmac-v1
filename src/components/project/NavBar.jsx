import React, { useState, useEffect } from "react";
import { navLinks } from "../../utils/constants";
import { Search, ShoppingBag, Menu, X } from "lucide-react";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Page load animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <header className={`bg-white border-b border-gray-200 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='flex-shrink-0 transition-transform duration-300 hover:scale-110'>
            <img src='/images/apple.png' alt='Apple Logo' className='h-6 w-5 bg-white transition-opacity duration-300 hover:opacity-80' />
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-8'>
              {navLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={`#${link.label.toLowerCase()}`}
                  className={`text-sm font-medium transition-all duration-700 hover:text-blue-600 hover:scale-105
                    relative group py-2 px-1 text-gray-800 delay-${200 + index * 100} transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
                  {link.label}
                  <span
                    className='absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 
                    group-hover:scale-x-100 transition-transform duration-300 origin-left'></span>
                </a>
              ))}
            </div>
          </div>

          {/* Right side icons */}
          <div className='hidden md:flex items-center space-x-4'>
            <button className={`p-2 rounded-full transition-all duration-600 hover:bg-gray-100 hover:scale-110 text-gray-600 hover:text-gray-800 delay-800 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
              <Search className='h-5 w-5' />
            </button>

            <button className={`p-2 rounded-full transition-all duration-600 hover:bg-gray-100 hover:scale-110 text-gray-600 hover:text-gray-800 delay-900 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
              <ShoppingBag className='h-5 w-5' />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className='p-2 rounded-full transition-all duration-300 hover:bg-gray-100 text-gray-600'>
              {isMobileMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0 pb-0"}`}>
          <div className='px-2 pt-4 pb-3 space-y-2 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg'>
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={`#${link.label.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 text-base font-medium text-gray-900 hover:text-blue-600 
                  hover:bg-gray-50 rounded-lg transition-all duration-300 transform
                  ${isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}
                  transition-all duration-300 delay-${index * 50}`}>
                {link.label}
              </a>
            ))}

            <div className='flex items-center justify-center space-x-6 pt-4 border-t border-gray-200'>
              <button className='p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300'>
                <Search className='h-5 w-5 text-gray-700' />
              </button>
              <button className='p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300'>
                <ShoppingBag className='h-5 w-5 text-gray-700' />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
