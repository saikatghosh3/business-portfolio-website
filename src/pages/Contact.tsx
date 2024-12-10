import React from 'react';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactHero } from '../components/contact/ContactHero';
import { ContactInfo } from '../components/contact/ContactInfo';

export const Contact: React.FC = () => {
  return (
    <div className="pt-16">
      <ContactHero />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};