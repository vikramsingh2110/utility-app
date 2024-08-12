import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header
      ref={ref}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md py-4"
    >
      <nav className="container mx-auto flex justify-between items-center">
        <div className="hidden md:flex md:w-full md:justify-center">
          <ul className="flex space-x-10">
            <li>
              <a href="#home" className="text-lg text-gray-700 hover:text-blue-600 transition-colors duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-lg text-gray-700 hover:text-blue-600 transition-colors duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="text-lg text-gray-700 hover:text-blue-600 transition-colors duration-300">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="text-lg text-gray-700 hover:text-blue-600 transition-colors duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block text-lg text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md transition-colors duration-300">
              Home
            </a>
            <a href="#about" className="block text-lg text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md transition-colors duration-300">
              About
            </a>
            <a href="#services" className="block text-lg text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md transition-colors duration-300">
              Services
            </a>
            <a href="#contact" className="block text-lg text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md transition-colors duration-300">
              Contact
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
