
import React from 'react';

const ProfileCard: React.FC = () => {
  return (
    <div className="animate-fade-in w-full max-w-md mx-auto text-center p-8 glass-card rounded-2xl border border-pink-400/30 soft-glow">
      <div className="relative inline-block">
        <img 
          src="/assests/Sami.jpg" 
          alt="Liavble Profile" 
          className="w-36 h-36 rounded-full object-cover border-4 border-pink-300/60 shadow-lg"
        />
        <div className="absolute inset-0 rounded-full border-4 border-pink-300/50 animate-ping-slow opacity-60"></div>
      </div>
      
      <a 
        href="https://discord.com/users/477060276286521375"
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-6 text-5xl font-extrabold heading-gradient underline-shimmer"
      >
        Liavble
      </a>
      <p className="mt-2 text-white/80">Age: 21</p>

      <div className="mt-6 flex justify-center items-center gap-3 text-white/90 flex-wrap">
        <a href="https://www.roblox.com/users/3167520447/profile" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 transition-colors">
          <img src="/assests/icons8-roblox-logo.svg" alt="roblox" className="w-5 h-5" />
          <span className="font-medium">SamiOT_RBX</span>
        </a>
        <a href="https://liavble" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 transition-colors">
          <img src="/assests/icons8-discord.svg" alt="discord" className="w-5 h-5" />
          <span className="font-medium">liavble</span>
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
