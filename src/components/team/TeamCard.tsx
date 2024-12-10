import React from 'react';
import { motion } from 'framer-motion';
import { TeamMember } from '../../types';
import { Linkedin, Twitter, Github } from 'lucide-react';

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl group"
    >
      <div className="relative h-64">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold mb-1 dark:text-white group-hover:text-blue-600">
          {member.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 group-hover:text-gray-900 dark:group-hover:text-gray-100">
          {member.role}
        </p>
        <div className="flex justify-center space-x-4">
          {member.social.linkedin && (
            <a
              href={member.social.linkedin}
              className="text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
          )}
          {member.social.twitter && (
            <a
              href={member.social.twitter}
              className="text-gray-400 group-hover:text-blue-400 dark:group-hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={20} />
            </a>
          )}
          {member.social.github && (
            <a
              href={member.social.github}
              className="text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
