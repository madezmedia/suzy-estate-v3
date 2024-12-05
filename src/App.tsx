import React from 'react';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/Hero';
import { Introduction } from './components/home/Introduction';
import { WhyChooseUs } from './components/home/WhyChooseUs';
import { Services } from './components/Services';
import { MarketInsights } from './components/home/MarketInsights';
import { AgentProfile } from './components/home/AgentProfile';
import { FeaturedListings } from './components/home/FeaturedListings';
import { ResourceCenter } from './components/home/ResourceCenter';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/home/FAQ';
import { Contact } from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Introduction />
      <WhyChooseUs />
      <Services />
      <AgentProfile />
      <MarketInsights />
      <FeaturedListings />
      <ResourceCenter />
      <Testimonials />
      <FAQ />
      <Contact />
    </Layout>
  );
}

export default App;