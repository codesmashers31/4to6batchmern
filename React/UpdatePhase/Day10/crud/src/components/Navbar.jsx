import React from 'react';
import { User, Bell } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-brand-navy/80 backdrop-blur-md border-b border-white/10">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-brand-blue to-brand-cyan rounded-lg flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
        </div>
        <span className="text-xl font-bold tracking-tight">SkillSwap Hub</span>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
          <Bell className="w-5 h-5 text-gray-400" />
        </button>
        <button className="flex items-center gap-2 p-1 pl-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors">
          <span className="text-sm font-medium">Profile</span>
          <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-rose-500 rounded-full flex items-center justify-center overflow-hidden">
            <User className="w-5 h-5 text-white" />
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
