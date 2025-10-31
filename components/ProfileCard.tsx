
import React from 'react';

const ProfileCard: React.FC = () => {
  return (
    <div className="animate-fade-in w-full max-w-md mx-auto text-center p-8 backdrop-blur-md bg-gray-900/50 rounded-2xl border border-pink-400/30 shadow-lg shadow-pink-500/20">
      <div className="relative inline-block">
        <img 
          src="/assests/Sami.jpg" 
          alt="Liavble Profile" 
          className="w-32 h-32 rounded-full object-cover border-4 border-pink-400/50 shadow-lg"
        />
        <div className="absolute inset-0 rounded-full border-4 border-pink-400/50 animate-ping-slow opacity-50"></div>
      </div>
      
      <a 
        href="https://discord.com/users/477060276286521375"
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-6 text-4xl font-bold text-white transition-colors hover:text-pink-300"
        style={{ textShadow: '0 0 10px rgba(236, 72, 153, 0.7)' }}
      >
        Liavble
      </a>

      <div className="mt-6 flex justify-center items-center space-x-6 text-white/90">
        <a href="https://www.roblox.com/users/3167520447/profile" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-cyan-300 transition-colors">
          <img src="/assests/icons8-roblox-logo.svg" alt="roblox" className="w-6 h-6" />
          <span className="font-medium drop-shadow-sm">SamiOT_RBX</span>
        </a>
        <a href="https://liavble" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-cyan-300 transition-colors">
          <img src="/assests/icons8-discord.svg" alt="discord" className="w-6 h-6" />
          <span className="font-medium drop-shadow-sm">liavble</span>
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
