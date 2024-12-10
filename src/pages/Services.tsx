import React from 'react';
import { ServiceCard } from '../components/services/ServiceCard';
import { ServiceHero } from '../components/services/ServiceHero';
import { Service } from '../types';
import { Code, Smartphone, Palette, LineChart } from 'lucide-react';

const services: Service[] = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.',
    icon: 'code',
  },
  {
    id: 2,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: 'smartphone',
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'User-centered design solutions that enhance user experience and engagement.',
    icon: 'palette',
  },
  {
    id: 4,
    title: 'Digital Marketing',
    description: 'Strategic digital marketing solutions to grow your online presence.',
    icon: 'chart',
  },
];

export const Services: React.FC = () => {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code size={24} />;
      case 'smartphone':
        return <Smartphone size={24} />;
      case 'palette':
        return <Palette size={24} />;
      case 'chart':
        return <LineChart size={24} />;
      default:
        return null;
    }
  };

  return (
    <div className="pt-16">
      <ServiceHero />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              icon={getIconComponent(service.icon)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};