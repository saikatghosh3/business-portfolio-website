import React from 'react';
import { TeamGrid } from '../components/team/TeamGrid';
import { TeamHero } from '../components/team/TeamHero';
import { TeamMember } from '../types';

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Lead Designer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Senior Developer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
    social: {
      linkedin: '#',
      github: '#',
    },
  },
];

export const Team: React.FC = () => {
  return (
    <div className="pt-16">
      <TeamHero />
      <TeamGrid members={teamMembers} />
    </div>
  );
};