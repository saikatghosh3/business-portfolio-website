import React from 'react';
import { motion } from 'framer-motion';

export const ProjectHero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-300 to-green-400 dark:from-gray-600 dark:to-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-gray-50">
            Explore our portfolio of successful digital transformations and innovative solutions.
          </p>
        </motion.div>
      </div>
    </div>
  );
};