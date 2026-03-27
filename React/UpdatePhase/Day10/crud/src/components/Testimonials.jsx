import React from 'react';

const TestimonialCard = ({ name, role, quote, avatar }) => (
  <div className="p-8 rounded-3xl bg-white/5 border border-white/10 glass-morphism mb-6">
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center overflow-hidden border-2 border-white/10">
        <img src={avatar} alt={name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h4 className="font-bold text-lg">{name}</h4>
        <p className="text-brand-blue text-sm font-medium uppercase tracking-wider">{role}</p>
      </div>
    </div>
    <p className="text-gray-300 italic leading-relaxed text-lg">
      "{quote}"
    </p>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: "Scott Jenkins",
      role: "VP OF PRODUCT @ OPTIC",
      quote: "SkillSwap Hub has helped us launch our MVP in record time. Trading my marketing strategy for expert React development was a game changer for our seed round.",
      avatar: "https://i.pravatar.cc/150?u=scott"
    },
    {
      name: "Marcus Thorne",
      role: "FOUNDER @ LUME",
      quote: "The community is incredible. It’s not just about the swap; it’s about the high-level network you build. Every swap has turned into a long-term partnership.",
      avatar: "https://i.pravatar.cc/150?u=marcus"
    },
    {
      name: "Elena Rodriguez",
      role: "HEAD OF DESIGN @ FLUX",
      quote: "Verified Network was essential for me. Knowing I’m working with professionals who value my time as much as theirs makes all the difference.",
      avatar: "https://i.pravatar.cc/150?u=elena"
    }
  ];

  return (
    <section className="px-6 py-24 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Trusted by <br /> Architects of the Future</h2>
        <p className="text-gray-400">Join 2,000+ experts swapping over $2M in value monthly.</p>
      </div>
      
      <div className="space-y-6">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
