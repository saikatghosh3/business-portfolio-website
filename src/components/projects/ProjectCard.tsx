import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../types';
import { ExternalLink } from 'lucide-react';
import { Tag } from 'antd';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
    >
      <div className="relative h-48 W-full">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Tag key={tech} color="blue">{tech}</Tag>
          ))}
        </div>
        <a
          href={project.link}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          View Project <ExternalLink size={16} className="ml-1" />
        </a>
      </div>
    </motion.div>
  );
};