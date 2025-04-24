import React from 'react';
import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { MapPin, Award, Phone, Globe, CheckCircle, Calendar } from 'lucide-react';
import { Button } from '../ui/Button';

const areasServed = [
  'Tradesville, SC', 'Buford, SC', 'Lancaster, SC', 'Elgin, SC',
  'Irwin, SC', 'Springdale, SC', 'Unity, SC', 'Van Wyck, SC'
];

const achievements = [
  "Top 1% of Fort Mill Realtors",
  "15+ Years of Experience",
  "100+ Senior Homes Sold",
  "SRES Certified Specialist"
];

export function AgentProfile() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-primary-50">
      <Container>
        <SectionTitle
          subtitle="Your trusted partner in finding the perfect senior living solution"
        >
          Meet Your Agent
        </SectionTitle>
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-warmer border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Image Column */}
              <div className="relative h-[600px] md:h-full bg-primary-50/30">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/10 via-transparent to-transparent z-10" />
                <img
                  src="https://v3.fal.media/files/koala/7ViNgQyILgsCAED2Usu_w_ComfyUI_temp_xqrsl_00120_.png"
                  alt="Suzanne Croutch - Senior Real Estate Specialist"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-6 z-20">
                  <div className="flex flex-wrap gap-3">
                    {achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1.5 bg-white/95 px-4 py-2 rounded-full text-sm font-medium text-primary-700 shadow-lg backdrop-blur-sm"
                      >
                        <CheckCircle className="w-4 h-4" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="p-8 md:p-10 space-y-8">
                <div>
                  <h3 className="text-3xl font-bold mb-2 text-gray-900">Suzanne Croutch</h3>
                  <p className="text-lg text-gray-600 mb-6">Senior Real Estate Specialist</p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0 shadow-warm">
                        <Award className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">SRES Certified</p>
                        <p className="text-sm text-gray-600">Seniors Real Estate Specialist</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0 shadow-warm">
                        <Globe className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">LPT Realty, LLC</p>
                        <p className="text-sm text-gray-600">License: NC 251125, SC 65256</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0 shadow-warm">
                      <MapPin className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 mb-3">Areas Served:</p>
                      <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                        {areasServed.map((area, index) => (
                          <p key={index} className="text-sm text-gray-600 flex items-center gap-1.5">
                            <CheckCircle className="w-3.5 h-3.5 text-primary-500" />
                            {area}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="flex-1 justify-center" size="lg">
                      <Phone className="w-5 h-5" />
                      (704) 819-0620
                    </Button>
                    <Button variant="outline" className="flex-1 justify-center" size="lg">
                      <Calendar className="w-5 h-5" />
                      Schedule Meeting
                    </Button>
                  </div>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    Available 24/7 for your real estate needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
