
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Zap, Users, Trophy } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Secure Solutions',
    description: 'Enterprise-grade security for all your digital assets and data.',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Fast Performance',
    description: 'Lightning-fast applications optimized for maximum efficiency.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'User-Centric',
    description: 'Intuitive designs that prioritize user experience and engagement.',
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    title: 'Award Winning',
    description: 'Recognized excellence in digital innovation and design.',
  },
];

export const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">Why Choose Us</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We combine innovation with proven methodologies to deliver exceptional results.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:shadow-2xl hover:scale-105 transform transition-transform duration-300"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4 inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
