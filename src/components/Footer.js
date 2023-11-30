import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
  <div className="container mx-auto flex justify-between items-center">
    <div>
      <h1 className="text-3xl font-bold mb-2">Antiphobia</h1>
      <p className="text-sm">KIET, Ghaziabad, India</p>
      <p className="text-sm">Phone: (123) 456-7890</p>
      <p className="text-sm">Email: info@example.com</p>
    </div>
    <div className="flex space-x-4">
      <Link to="/" className="text-white hover:text-gray-500 transition duration-300">
        Home
      </Link>
      <Link to="/about" className="text-white hover:text-gray-500 transition duration-300">
        About
      </Link>
      <Link to="/contact"className="text-white hover:text-gray-500 transition duration-300">
        Contact
      </Link>
    </div>
  </div>
</footer>

  );
};

export default Footer;
