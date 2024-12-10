import React from 'react';
import { motion } from 'framer-motion';

export const ServiceHero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-300 to-green-400 dark:from-gray-600 dark:to-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-50">
            Comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </motion.div>
      </div>
    </div>
  );
};