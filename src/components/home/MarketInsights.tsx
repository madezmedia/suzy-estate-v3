import React from 'react';
import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { TrendingUp, Home, DollarSign, Users, BarChart, Award, Star, Clock, Calendar } from 'lucide-react';
import { Button } from '../ui/Button';

const stats = [
  {
    icon: TrendingUp,
    value: "15%",
    label: "Market Growth",
    description: "Year over year in Fort Mill",
    trend: "+3% from last year",
    color: "text-emerald-600"
  },
  {
    icon: Home,
    value: "350+",
    label: "Senior Homes Sold",
    description: "In Fort Mill communities",
    trend: "98% satisfaction rate",
    color: "text-blue-600"
  },
  {
    icon: DollarSign,
    value: "$3.2M",
    label: "Average Property Value",
    description: "For senior communities",
    trend: "Market-beating returns",
    color: "text-violet-600"
  },
  {
    icon: Users,
    value: "99%",
    label: "Client Satisfaction",
    description: "Based on 200+ reviews",
    trend: "Consistently 5-star rated",
    color: "text-amber-600"
  }
];

const achievements = [
  {
    icon: BarChart,
    title: "Market Performance",
    points: [
      "Top 1% in Fort Mill market",
      "15% above market average prices",
      "30-day average closing time"
    ]
  },
  {
    icon: Award,
    title: "Industry Recognition",
    points: [
      "SRES Certified Specialist",
      "Best of Fort Mill 2023",
      "Top Producer Award"
    ]
  },
  {
    icon: Star,
    title: "Client Success",
    points: [
      "350+ families helped",
      "98% client satisfaction",
      "60+ five-star reviews"
    ]
  },
  {
    icon: Clock,
    title: "Time Efficiency",
    points: [
      "24/7 availability",
      "Same-day responses",
      "Fast closing process"
    ]
  }
];

export function MarketInsights() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-primary-50">
      <Container>
        <SectionTitle
          subtitle="Proven track record of success in Fort Mill's senior real estate market"
        >
          Market Performance
        </SectionTitle>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-warm hover:shadow-warmer transition-all duration-300 border border-gray-100 group hover:transform hover:translate-y-[-4px]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                  <stat.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">{stat.label}</h3>
                <p className="text-sm text-gray-600">{stat.description}</p>
                <p className={`text-sm font-medium ${stat.color}`}>{stat.trend}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="bg-white rounded-2xl shadow-warmer border border-gray-100 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center">
                  <achievement.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900">{achievement.title}</h3>
                <ul className="space-y-2">
                  {achievement.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="relative mt-12 pt-12 border-t border-gray-100">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Experience the Difference?</h3>
              <p className="text-gray-600 mb-8">
                Let's discuss how our market expertise can help you achieve your senior living goals in Fort Mill.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" showArrow className="sm:w-auto">
                  <Calendar className="w-5 h-5" />
                  Schedule a Consultation
                </Button>
                <Button variant="outline" size="lg" className="sm:w-auto">
                  Learn More About Our Process
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}