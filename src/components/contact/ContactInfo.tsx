import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const ContactInfo: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-2xl font-semibold mb-6 dark:text-gray-800">Get in Touch</h2>
        <p className="text-gray-600 dark:text-gray-700 mb-8">
          Have a question or want to work together? We'd love to hear from you.
          Get in touch with us using any of the following methods.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <MapPin className="text-blue-600 mt-1" size={24} />
          <div>
            <h3 className="font-semibold  text-gray-700">Address</h3>
            <p className="text-gray-600 dark:text-gray-700">
              123 Business Street<br />
              San Francisco, CA 94105
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Phone className="text-blue-600 mt-1" size={24} />
          <div>
            <h3 className="font-semibold text-gray-700">Phone</h3>
            <p className="text-gray-600 dark:text-gray-700">+1 (555) 123-4567</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Mail className="text-blue-600 mt-1" size={24} />
          <div>
            <h3 className="font-semibold text-gray-700">Email</h3>
            <p className="text-gray-600 dark:text-gray-700">info@businesspro.com</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Clock className="text-blue-600 mt-1" size={24} />
          <div>
            <h3 className="font-semibold text-gray-700">Business Hours</h3>
            <p className="text-gray-600 dark:text-gray-700">
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday - Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};