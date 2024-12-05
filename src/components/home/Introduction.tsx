import React from 'react';
import { Container } from '../layout/Container';

export function Introduction() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Welcome to Your Future Home</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            With over 15 years of experience in both real estate and estate planning, 
            I'm dedicated to helping retirees make their transition into the next chapter 
            of life as smooth as possible. My unique combination of expertise ensures that 
            not only will you find the perfect home, but your future will be secured 
            through comprehensive estate planning services.
          </p>
        </div>
      </Container>
    </section>
  );
}