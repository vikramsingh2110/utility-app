import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="relative bg-gradient-to-t from-blue-50 to-white py-12"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1533641617067-96490c9d37fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fHNlYXMlMjBhbmQlMjBza3l8fDB8fHx8MTY4MzY4NTY1Mg&ixlib=rb-1.2.1&q=80&w=1080')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.85, // Adjust opacity here
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 bg-white opacity-75"></div> {/* Overlay to adjust brightness */}
      <div className="relative container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-center md:text-left">
        <motion.div
          className="md:col-span-1 flex flex-col items-center md:items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1675876811776-709d60ac9c8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3VwcmVtZSUyMGdyb3VwJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Supreme Group Logo"
            className="mb-4 w-24 opacity-75"  // Reduced size and opacity
          />
          <p>&copy; 2024 Supreme Inc. All rights reserved.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h4 className="font-semibold mb-4">APPLICATIONS</h4>
          <ul>
            <li><a href="#" className="hover:underline">Apparel</a></li>
            <li><a href="#" className="hover:underline">Automotive</a></li>
            <li><a href="#" className="hover:underline">Filtration</a></li>
            <li><a href="#" className="hover:underline">Customised Solutions</a></li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h4 className="font-semibold mb-4">COMPANY</h4>
          <ul>
            <li><a href="#" className="hover:underline">Innovation</a></li>
            <li><a href="#" className="hover:underline">Global Competency</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h4 className="font-semibold mb-4">MORE</h4>
          <ul>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms and Conditions</a></li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h4 className="font-semibold mb-4">FOLLOW US</h4>
          <ul>
            <li><a href="#" className="hover:underline">Twitter</a></li>
            <li><a href="#" className="hover:underline">LinkedIn</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
          </ul>
        </motion.div>
      </div>
      <div className="text-center mt-8 text-sm relative z-10">
        <p>Supreme house: 110, 16th Road, Chembur, Mumbai - 400071</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
