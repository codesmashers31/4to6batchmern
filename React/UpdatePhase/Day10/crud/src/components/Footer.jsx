import React from 'react';

const Footer = () => {
  return (
    <footer className="px-6 pt-24 pb-32 border-t border-white/5 bg-brand-navy/50 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-6 h-6 bg-gradient-to-br from-brand-blue to-brand-cyan rounded flex items-center justify-center">
             <div className="w-2.5 h-2.5 bg-white rounded-sm rotate-45"></div>
          </div>
          <span className="text-lg font-bold tracking-tight">SkillSwap Hub</span>
        </div>
        
        <p className="text-gray-500 text-sm mb-12">
          © 2024 SkillSwap Hub. Empowerment for Excellence.
        </p>
        
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-gray-400">
           <a href="#" className="hover:text-white transition-colors">Privacy</a>
           <a href="#" className="hover:text-white transition-colors">Terms</a>
           <a href="#" className="hover:text-white transition-colors">API</a>
           <a href="#" className="hover:text-white transition-colors">Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
