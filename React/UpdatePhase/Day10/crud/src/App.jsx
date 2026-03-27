import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MainImage from './components/MainImage';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';

const App = () => {
  // Persistence logic from previous version (can be used for 'Join the Network' flow later)
  const [formData, setFormData] = useState({ username: "", email: "", age: "" });
  const [showData, setShowData] = useState({});

  const getDatas = () => {
    const takeData = localStorage.getItem("register");
    if (takeData) {
      const changeData = JSON.parse(takeData);
      setShowData(changeData);
    }
  };

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <div className="min-h-screen bg-brand-navy selection:bg-brand-blue/30 selection:text-white">
      {/* Background radial gradient for depth */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(62,123,250,0.05)_0%,transparent_50%)] pointer-events-none"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <MainImage />
        <Features />
        
        {/* Decorative Divider */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>
        
        <Testimonials />
        <CTASection />
      </main>
      
      <Footer />
      <BottomNav />
    </div>
  );
};

export default App;