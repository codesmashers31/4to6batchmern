import React from 'react';
import { Zap, ShieldCheck, BarChart3, RotateCw } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <div 
    className="group p-8 rounded-3xl border border-white/10 glass-morphism hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="w-12 h-12 mb-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-blue/20 group-hover:border-brand-blue/30 transition-all">
      <Icon className="w-6 h-6 text-brand-blue group-hover:text-brand-cyan transition-colors" />
    </div>
    <h3 className="text-2xl font-bold mb-4 tracking-tight">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm">
      {description}
    </p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Atomic Swaps",
      description: "Our smart-contract-inspired system ensures both parties deliver value. Milestone-based skill releases protect your time and effort.",
      delay: 0
    },
    {
      icon: ShieldCheck,
      title: "Verified Network",
      description: "Every user is vetted for professional credentials. No beginners, only builders and experts ready to exchange.",
      delay: 100
    },
    {
      icon: BarChart3,
      title: "Reports on ROI",
      description: "Track your skill growth and project ROI with our advanced enterprise partner analytics dashboard.",
      delay: 200
    },
    {
      icon: RotateCw,
      title: "Zero Cash Flow Burn",
      description: "Redirect your capital to scaling your strongest assets. Keep your equity, share your expertise.",
      delay: 300
    }
  ];

  return (
    <section className="px-6 py-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, i) => (
          <FeatureCard key={i} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
