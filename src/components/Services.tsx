import React from 'react';
import { Home, ScrollText, Users } from 'lucide-react';
import { ServiceCard } from './ServiceCard';
import { Container } from './layout/Container';
import { SectionTitle } from './ui/SectionTitle';

export function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <SectionTitle>Our Services</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Real Estate Services"
            description="Helping you find your dream home tailored specifically for your retirement needs."
            Icon={Home}
            ctaText="Explore Listings"
            onClick={() => {}}
          />
          <ServiceCard
            title="Estate Planning Services"
            description="Protecting your legacy with comprehensive will and trust packages."
            Icon={ScrollText}
            ctaText="Learn More"
            onClick={() => {}}
          />
          <ServiceCard
            title="Collaborative Family Solutions"
            description="Involving family members in the planning process to ensure peace of mind."
            Icon={Users}
            ctaText="Get Started"
            onClick={() => {}}
          />
        </div>
      </Container>
    </section>
  );
}