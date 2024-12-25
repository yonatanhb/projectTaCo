import React from "react";

const Footer = () => (
  <footer className="bg-gray-900 text-white py-6">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
      <div className="text-center md:text-left mb-4 md:mb-0">
        <h5 className="font-bold">Dust of War</h5>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
      <div className="flex space-x-4">
        <a href="#" className="text-blue-500">
          LinkedIn
        </a>
        <a href="#" className="text-pink-500">
          Instagram
        </a>
        <a href="#" className="text-black">
          X
        </a>
        <a href="#" className="text-purple-500">
          Discord
        </a>
      </div>
      <div className="text-center md:text-right">
        <a href="#about" className="text-gray-400 hover:text-white mx-2">
          About
        </a>
        <a href="#contact" className="text-gray-400 hover:text-white mx-2">
          Contact
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
