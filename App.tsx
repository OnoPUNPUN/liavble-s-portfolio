
import React, { useState, useEffect } from 'react';
import type { Role } from './types';
import ParticleBackground from './components/ParticleBackground';
import ProfileCard from './components/ProfileCard';
import RoleCard from './components/RoleCard';

const rolesData: Role[] = [
  {
    game: 'Anime Last Stand',
    memberCount: '1M+',
    role: 'Moderator',
    status: 'Current',
    discordLink: 'https://discord.gg/animelaststand',
  },
  {
    game: 'BestBunny',
    memberCount: '300k',
    role: 'Senior Moderator',
    status: 'Retired',
    discordLink: 'https://discord.gg/bestbunny',
  },
  {
    game: 'Climb And Jump Tower',
    memberCount: '40k',
    role: 'Head Moderator',
    status: 'Retired',
    discordLink: 'https://discord.gg/climbandjump',
  },
  {
    game: 'BestBunny MiniGames',
    memberCount: '10k',
    role: 'Senior Moderator',
    status: 'Retired',
    discordLink: 'https://discord.gg/CrhurWrgGc',
  },
];

const App: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const currentRoles = rolesData.filter(r => r.status === 'Current');
  const previousRoles = rolesData.filter(r => r.status === 'Retired');

  return (
    <div className="relative min-h-screen text-white bg-slate-900">
      <div 
        className="fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: 'url(/assests/hero-bg.jpg)' }}
      >
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-pink-200/20 via-transparent to-pink-300/30"></div>
      </div>
      <ParticleBackground />

      <main className={`relative z-10 p-4 sm:p-8 transition-opacity duration-1000 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto max-w-4xl">
          <ProfileCard />

          <section className="mt-12">
            <h2 
              className="animate-fade-in text-3xl font-extrabold text-center mb-6 heading-gradient underline-shimmer"
              style={{ animationDelay: '200ms' }}
            >
              Current Role
            </h2>
            <div className="space-y-4">
              {currentRoles.map((role, index) => (
                <RoleCard key={index} role={role} style={{ animationDelay: `${300 + index * 100}ms` }} />
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 
              className="animate-fade-in text-3xl font-extrabold text-center mb-6 heading-gradient underline-shimmer"
              style={{ animationDelay: '500ms' }}
            >
              Previous Experience
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {previousRoles.map((role, index) => (
                <RoleCard key={index} role={role} style={{ animationDelay: `${600 + index * 150}ms` }} />
              ))}
            </div>
          </section>

          <footer className="text-center p-8 mt-10 animate-fade-in" style={{ animationDelay: '1s' }}>
            <span className="inline-block px-5 py-2 rounded-full bg-white/15 border border-white/20 text-white/80">
              Building communities and maintaining positive spaces in the Roblox universe ✨
            </span>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default App;
