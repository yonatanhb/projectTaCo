import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white py-3 shadow-lg">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="./dow_logo_transparent.png"
            alt="Dust of War Logo"
            className="h-16 md:h-20 object-contain"
          />
        </div>

        {/* Navigation (Desktop) */}
        <nav className="hidden md:flex space-x-8 items-center flex-1 justify-center">
          <a href="#hero" className="hover:text-blue-500 font-medium">
            Home
          </a>
          <a href="#about" className="hover:text-blue-500 font-medium">
            About
          </a>
          <a href="#contact" className="hover:text-blue-500 font-medium">
            Contact
          </a>
        </nav>

        {/* Social Links */}
        <div className="hidden md:flex space-x-4">
          <a
            href="#"
            className="text-blue-500 hover:text-blue-400 transition duration-300"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-pink-500 hover:text-pink-400 transition duration-300"
            aria-label="Instagram"
          >
            Instagram
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-400 transition duration-300"
            aria-label="X (Twitter)"
          >
            X
          </a>
          <a
            href="#"
            className="text-purple-500 hover:text-purple-400 transition duration-300"
            aria-label="Discord"
          >
            Discord
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white space-y-4 p-4">
          <a href="#hero" className="block hover:text-blue-500">
            Home
          </a>
          <a href="#about" className="block hover:text-blue-500">
            About
          </a>
          <a href="#contact" className="block hover:text-blue-500">
            Contact
          </a>
          {/* Social Links for Mobile */}
          <div className="flex flex-col space-y-2">
            <a
              href="#"
              className="text-blue-500 hover:text-blue-400 transition duration-300"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-pink-500 hover:text-pink-400 transition duration-300"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-400 transition duration-300"
              aria-label="X (Twitter)"
            >
              X
            </a>
            <a
              href="#"
              className="text-purple-500 hover:text-purple-400 transition duration-300"
              aria-label="Discord"
            >
              Discord
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
