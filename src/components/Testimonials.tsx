import React from 'react';
import { Container } from './layout/Container';
import { SectionTitle } from './ui/SectionTitle';
import { Star, Quote, ThumbsUp, Calendar, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/Button';

const testimonials = [
  {
    text: "Suzanne was phenomenal! What a find. She listened to my needs and delivered. By the end of the process, Suzanne felt more like a friend instead of my realtor. I cannot thank you enough, Suzanne, for all you have done.",
    author: "Angela",
    role: "Home Buyer",
    date: "October 28, 2020",
    location: "Fort Mill, SC",
    source: "Google Review",
    verified: true
  },
  {
    text: "Suzanne was amazing! She helped me every step of the way, including a recommendation to a very reasonably priced closing attorney. She showed me every property I wanted to look at in a timely manner and sent me an email when a new house came on the market.",
    author: "C T",
    role: "Home Buyer",
    date: "April 10, 2020",
    location: "Lancaster, SC",
    source: "Google Review",
    verified: true
  },
  {
    text: "Suzanne is very personable. She did a superb job at both selling my old home and with the purchase of my new home. Suzanne is knowledgeable, a hard worker and puts her customers first!",
    author: "Christie Frazier",
    role: "Home Seller & Buyer",
    date: "April 7, 2020",
    location: "Fort Mill, SC",
    source: "Google Review",
    verified: true
  },
  {
    text: "I cannot say enough about Suzanne's professionalism and outgoing attitude. She helped guide my husband and I through our house buying process. She is very knowledgeable and responsive to her clients.",
    author: "Candice Brown",
    role: "Home Buyer",
    date: "March 26, 2020",
    location: "Unity, SC",
    source: "Google Review",
    verified: true
  }
];

const stats = [
  { value: "5.0", label: "Average Rating", icon: Star },
  { value: "8", label: "Total Reviews", icon: ThumbsUp },
  { value: "100%", label: "Satisfaction Rate", icon: Star },
  { value: "100%", label: "Would Recommend", icon: ThumbsUp }
];

export function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-primary-50">
      <Container>
        <SectionTitle
          subtitle="Join our community of satisfied clients who found their perfect home"
        >
          What Our Clients Say
        </SectionTitle>

        {/* Rating Overview */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-warmer border border-gray-100 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mb-2 mx-auto">
                      <stat.icon className="w-6 h-6 text-primary-600" />
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
                    {index === 0 && (
                      <div className="flex -space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-warm hover:shadow-warmer transition-all duration-300 border border-gray-100 group hover:transform hover:translate-y-[-4px]"
            >
              <div className="flex items-start gap-4 mb-6">
                <Quote className="w-8 h-8 text-primary-600" />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-gray-900">{testimonial.author}</span>
                    {testimonial.verified && (
                      <ThumbsUp className="w-4 h-4 text-primary-600" />
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {testimonial.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {testimonial.location}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{testimonial.source}</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white p-8 rounded-xl shadow-warmer border border-gray-100">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-gray-600 mb-8">
              Join our satisfied clients and let us help you find your perfect home in Fort Mill.
              Schedule a consultation today and experience the difference!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="sm:w-auto">
                <Calendar className="w-5 h-5" />
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg" className="sm:w-auto">
                <Phone className="w-5 h-5" />
                Call (704) 819-0620
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}