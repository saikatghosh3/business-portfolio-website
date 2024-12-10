import React from 'react';
import { TeamCard } from './TeamCard';
import { TeamMember } from '../../types';

interface TeamGridProps {
  members: TeamMember[];
}

export const TeamGrid: React.FC<TeamGridProps> = ({ members }) => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {members.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};