import React from 'react';
import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { FileText, Download, Video, Calendar, BookOpen, ArrowRight, FileCheck, Building, Briefcase, Phone } from 'lucide-react';
import { Button } from '../ui/Button';

const resources = [
  {
    icon: FileText,
    title: "Senior Living Guide",
    description: "Comprehensive guide to choosing the perfect retirement home in Fort Mill.",
    items: [
      "Housing options comparison",
      "Financial planning tips",
      "Location considerations",
      "Community features checklist"
    ],
    ctaText: "Download Guide (PDF)",
    type: "featured"
  },
  {
    icon: Building,
    title: "Community Tours",
    description: "Take virtual tours of our featured senior-friendly properties and communities.",
    items: [
      "360° virtual walkthroughs",
      "Community amenities",
      "Neighborhood highlights",
      "Resident testimonials"
    ],
    ctaText: "Watch Tours",
    type: "featured"
  },
  {
    icon: Briefcase,
    title: "Estate Planning Kit",
    description: "Essential resources for organizing your estate and planning ahead.",
    items: [
      "Legal document checklist",
      "Asset inventory template",
      "Family meeting guide",
      "Decision tracker"
    ],
    ctaText: "Access Kit",
    type: "featured"
  },
  {
    icon: BookOpen,
    title: "Senior Living Blog",
    description: "Expert insights about retirement living, estate planning, and local events.",
    items: [
      "Market updates",
      "Lifestyle tips",
      "Community events",
      "Success stories"
    ],
    ctaText: "Read Articles",
    type: "featured"
  }
];

const quickGuides = [
  {
    title: "Downsizing Tips",
    description: "Smart strategies for simplifying your move",
    icon: FileCheck
  },
  {
    title: "Market Reports",
    description: "Monthly Fort Mill real estate updates",
    icon: Building
  },
  {
    title: "Moving Timeline",
    description: "Week-by-week moving checklist",
    icon: Calendar
  }
];

export function ResourceCenter() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <SectionTitle
          subtitle="Access our comprehensive collection of senior living and real estate resources"
        >
          Resource Center
        </SectionTitle>

        {/* Featured Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {resources.map((resource, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-warm hover:shadow-warmer transition-all duration-300 hover:transform hover:translate-y-[-4px] border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-primary-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors">
                <resource.icon className="w-7 h-7 text-primary-600" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{resource.title}</h3>
              <p className="text-gray-600 mb-6 text-sm">{resource.description}</p>
              
              <ul className="space-y-2 mb-6">
                {resource.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button 
                variant="outline" 
                className="w-full justify-center group"
              >
                <Download className="w-4 h-4" />
                {resource.ctaText}
              </Button>
            </div>
          ))}
        </div>

        {/* Quick Access Guides */}
        <div className="bg-white rounded-2xl shadow-warmer border border-gray-100 p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {quickGuides.map((guide, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary-50 transition-colors group cursor-pointer"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center group-hover:bg-white transition-colors">
                  <guide.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{guide.title}</h4>
                  <p className="text-sm text-gray-600">{guide.description}</p>
                  <div className="flex items-center gap-1 text-primary-600 text-sm font-medium mt-2 group-hover:translate-x-1 transition-transform">
                    Access Now
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Consultation CTA */}
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Need Personalized Guidance?</h3>
            <p className="text-gray-600 mb-8">
              Schedule a free 30-minute consultation to discuss your specific needs and get expert advice tailored to your situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="sm:w-auto">
                <Calendar className="w-5 h-5" />
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg" className="sm:w-auto">
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}