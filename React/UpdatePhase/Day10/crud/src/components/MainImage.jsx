import React from 'react';

const MainImage = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto px-6 mb-24">
      {/* Decorative Gradient Background */}
      <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue/20 to-brand-cyan/20 blur-3xl opacity-30 -z-10 animate-pulse"></div>
      
      {/* Dashboard Preview Container */}
      <div className="rounded-2xl border border-white/10 bg-[#0F121D] shadow-2xl overflow-hidden glass-morphism">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
          </div>
          <div className="h-4 w-32 bg-white/5 rounded-full mx-auto"></div>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-12 gap-4">
            {/* Sidebar Simulation */}
            <div className="col-span-3 space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-8 bg-white/5 rounded-lg w-full"></div>
              ))}
            </div>
            
            {/* Main Content Simulation */}
            <div className="col-span-9 space-y-6">
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-24 bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col justify-end">
                    <div className="h-2 w-1/2 bg-white/10 rounded-full mb-2"></div>
                    <div className="h-4 w-3/4 bg-brand-blue/20 rounded-full"></div>
                  </div>
                ))}
              </div>
              
              <div className="h-64 bg-white/5 rounded-2xl border border-white/5 p-6 relative">
                 <div className="flex items-end gap-2 h-full justify-between">
                    {[40, 70, 45, 90, 65, 80, 55, 95, 75, 85].map((height, i) => (
                       <div 
                         key={i} 
                         className="flex-1 bg-brand-blue/10 border-t-2 border-brand-blue/40 rounded-t-sm"
                         style={{ height: `${height}%` }}
                       ></div>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Decorative Elements */}
      <div className="absolute -top-12 -right-8 w-24 h-24 bg-brand-blue/10 border border-brand-blue/20 rounded-2xl backdrop-blur-xl -z-10 rotate-12 animate-bounce-slow"></div>
      <div className="absolute -bottom-8 -left-12 w-32 h-32 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full backdrop-blur-xl -z-10 animate-pulse"></div>
    </div>
  );
};

export default MainImage;
