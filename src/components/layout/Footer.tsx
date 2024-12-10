import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mx-auto bg-gradient-to-r dark:from-gray-600 dark:to-gray-900 from-cyan-300 to-green-400 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BusinessPro</h3>
            <p className="dark:text-gray-400 text-gray-700">
              Transforming ideas into exceptional digital experiences.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="dark:text-gray-400 text-gray-700 hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="dark:text-gray-400 text-gray-700 hover:text-white">Services</Link></li>
              <li><Link to="/projects" className="dark:text-gray-400 text-gray-700 hover:text-white">Projects</Link></li>
              <li><Link to="/contact" className="dark:text-gray-400 text-gray-700 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="dark:text-gray-400 text-gray-700 hover:text-white">Web Development</li>
              <li className="dark:text-gray-400 text-gray-700 hover:text-white">Mobile Apps</li>
              <li className="dark:text-gray-400 text-gray-700 hover:text-white">UI/UX Design</li>
              <li className="dark:text-gray-400 text-gray-700 hover:text-white">Digital Marketing</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="dark:text-gray-400 text-gray-700 hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="dark:text-gray-400 text-gray-700 hover:text-white">
                <Twitter size={24} />
              </a>
              <a href="#" className="dark:text-gray-400 text-gray-700 hover:text-white">
                <Linkedin size={24} />
              </a>
              <a href="#" className="dark:text-gray-400 text-gray-700 hover:text-white">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center dark:text-gray-400 text-gray-700 hover:text-white">
          <p>&copy; {new Date().getFullYear()} BusinessPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};