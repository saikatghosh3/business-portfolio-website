import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
  icon: React.ReactNode;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
    >
      <div className="text-blue-600 dark:text-blue-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 dark:text-white">{service.title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
    </motion.div>
  );
};