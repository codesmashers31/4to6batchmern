import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="flex flex-col items-center text-center px-6 pt-16 pb-12 overflow-hidden">
      <div className="inline-flex items-center px-3 py-1 mb-8 rounded-full bg-brand-blue/10 border border-brand-blue/20">
        <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase">
          Level up your business
        </span>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
        Swap Skills, <br />
        <span className="text-gradient-blue">Scale Business</span>
      </h1>
      
      <p className="max-w-xl text-lg text-gray-400 mb-10 leading-relaxed">
        The premier exchange for elite professionals. Trade high-value expertise without capital burn. Design for Code, Marketing for Strategy.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm sm:max-w-none justify-center">
        <button className="px-8 py-4 bg-brand-blue hover:bg-brand-blue/90 text-white rounded-2xl font-bold transition-all shadow-lg shadow-brand-blue/25 flex items-center justify-center gap-2 group">
          Get Started
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-bold transition-all backdrop-blur-sm">
          View Marketplace
        </button>
      </div>
    </section>
  );
};

export default Hero;
