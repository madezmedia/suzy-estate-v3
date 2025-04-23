import React from 'react';
import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { Award, Shield, Clock, HeartHandshake, CheckCircle, Phone } from 'lucide-react';

const benefits = [
  {
    icon: Award,
    title: "15+ Years Experience",
    description: "Dedicated expertise in both real estate and estate planning, specifically serving the Fort Mill senior community.",
    highlights: [
      "SRES Certified Specialist",
      "Estate Planning Expert",
      "Senior Living Solutions"
    ]
  },
  {
    icon: Shield,
    title: "Licensed Professional",
    description: "Fully licensed in real estate and estate planning with continuous education in senior living solutions.",
    highlights: [
      "Licensed Realtor",
      "Continuous Education",
      "Professional Network"
    ]
  },
  {
    icon: Clock,
    title: "Timely Service",
    description: "Quick response times and flexible scheduling to accommodate your needs and timeline.",
    highlights: [
      "24/7 Availability",
      "Flexible Scheduling",
      "Fast Response Time"
    ]
  },
  {
    icon: HeartHandshake,
    title: "Family-Focused Approach",
    description: "Including family members in decisions while respecting our clients' independence and wishes.",
    highlights: [
      "Family Involvement",
      "Client Independence",
      "Personalized Care"
    ]
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-gradient-to-b from-primary-50 to-white">
      <Container>
        <SectionTitle
          subtitle="Discover why seniors and their families trust Suzanne Croutch for their real estate needs"
        >
          Why Choose Suzanne?
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-warm hover:shadow-warmer transition-all duration-300 hover:transform hover:translate-y-[-4px] border border-gray-100 group"
            >
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors mx-auto">
                <benefit.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                {benefit.description}
              </p>
              <ul className="space-y-3">
                {benefit.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <span className="text-sm">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="bg-white p-8 rounded-xl shadow-warmer border border-gray-100">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's work together to find your perfect senior living solution in Fort Mill and surrounding areas.
            </p>
            <div className="inline-flex items-center justify-center bg-primary-50 px-6 py-3 rounded-lg text-primary-700 font-medium">
              <Phone className="w-5 h-5 mr-2" />
              (704) 819-0620
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
