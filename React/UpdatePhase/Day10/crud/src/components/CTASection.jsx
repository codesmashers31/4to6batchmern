import React from 'react';

const CTASection = () => {
  return (
    <section className="px-6 py-24 mb-24">
      <div className="max-w-4xl mx-auto p-12 rounded-[2rem] bg-gradient-to-br from-brand-blue/90 to-brand-cyan/80 text-white text-center shadow-2xl relative overflow-hidden group">
        {/* Animated Orbs */}
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-brand-navy/20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
        
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 relative z-10 leading-tight">
          Ready to grow <br /> without the burn?
        </h2>
        <p className="max-w-lg mx-auto text-white/90 mb-10 text-lg relative z-10 font-medium">
          Join the new economy where your expertise is the ultimate currency. Create your profile in less than 2 minutes.
        </p>
        
        <button className="px-12 py-5 bg-white text-brand-blue rounded-3xl font-extrabold text-lg hover:bg-brand-navy hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl relative z-10">
          Join the Network
        </button>
      </div>
    </section>
  );
};

export default CTASection;
