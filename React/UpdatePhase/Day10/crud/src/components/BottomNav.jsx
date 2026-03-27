import React from 'react';
import { Home, Zap, LayoutGrid, MessageSquare, User } from 'lucide-react';

const BottomNav = () => {
  const tabs = [
    { icon: Home, label: "Home", active: true },
    { icon: Zap, label: "Swap" },
    { icon: LayoutGrid, label: "Market" },
    { icon: MessageSquare, label: "Chat" },
    { icon: User, label: "Profile" }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-6 py-4 bg-brand-navy/80 backdrop-blur-xl border-t border-white/10 flex justify-between items-center md:hidden">
      {tabs.map((tab, i) => (
        <button 
          key={i} 
          className={`flex flex-col items-center gap-1 transition-all ${tab.active ? 'text-brand-blue' : 'text-gray-500 hover:text-white'}`}
        >
          <tab.icon className={`w-6 h-6 ${tab.active ? 'stroke-[2.5px]' : 'stroke-2'}`} />
          <span className="text-[10px] uppercase font-bold tracking-widest">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default BottomNav;
