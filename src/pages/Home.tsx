import React from 'react';
import { Hero } from '../components/home/Hero';
import { Features } from '../components/home/Features';
import { Stats } from '../components/home/Stats';
import { Testimonials } from '../components/home/Testimonials';

export const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
    </div>
  );
};