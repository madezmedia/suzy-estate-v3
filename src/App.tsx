import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

import { ServicesPage } from './pages/ServicesPage';
import { ListingsPage } from './pages/ListingsPage';
import { AboutPage } from './pages/AboutPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ContactPage } from './pages/ContactPage';

function HomePage() {
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
        <Route path="/listings" element={<Layout><ListingsPage /></Layout>} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/testimonials" element={<Layout><TestimonialsPage /></Layout>} />
        <Route path="/resources" element={<Layout><ResourcesPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
