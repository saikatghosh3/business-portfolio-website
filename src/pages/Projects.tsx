import React from 'react';
import { ProjectGrid } from '../components/projects/ProjectGrid';
import { ProjectHero } from '../components/projects/ProjectHero';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80',
    technologies: ['React', 'Node.js', 'MongoDB'],
    link: '#',
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    description: 'Secure and user-friendly mobile banking application',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80',
    technologies: ['React Native', 'TypeScript', 'Firebase'],
    link: '#',
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard for business intelligence',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    technologies: ['Vue.js', 'D3.js', 'Python'],
    link: '#',
  },
];

export const Projects: React.FC = () => {
  return (
    <div className="pt-16">
      <ProjectHero />
      <ProjectGrid projects={projects} />
    </div>
  );
};