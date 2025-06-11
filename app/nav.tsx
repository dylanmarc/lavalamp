import { useState } from 'react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-6 px-6 max-w-6xl mx-auto flex justify-end">
      {/* Desktop menu - aligned right */}
      <div className="hidden md:flex gap-8">
        <a href="#services" className="hover:text-purple-300 transition-colors">Services</a>
        <a href="#contact" className="hover:text-purple-300 transition-colors">Contact</a>
      </div>

      {/* Mobile menu button - aligned right */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu dropdown - aligned right */}
      {isMenuOpen && (
        <div className="absolute top-20 right-6 bg-gray-900 z-50 md:hidden py-4 px-6 rounded-lg shadow-lg">
          <div className="flex flex-col space-y-4 items-end">
            <a 
              href="#services" 
              className="hover:text-purple-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#contact" 
              className="hover:text-purple-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;