import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '100+', label: 'Happy Clients' },
  { value: '50+', label: 'Team Members' },
  { value: '10+', label: 'Years Experience' },
];

export const Stats: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gradient-to-r from-cyan-300 to-green-400 dark:from-gray-600 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center hover:animate-bounce cursor-pointer"
            >
              <div className="text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-blue-100">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};