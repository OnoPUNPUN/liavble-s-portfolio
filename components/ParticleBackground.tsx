
import React, { useState, useEffect } from 'react';

interface Particle {
  id: number;
  style: React.CSSProperties;
}

const ParticleBackground: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 40 }).map((_, i) => {
      const isBokeh = Math.random() > 0.85;
      const size = isBokeh ? Math.random() * 120 + 40 : Math.random() * 18 + 6; // bokeh larger
      const duration = Math.random() * 25 + 20; // duration between 20s and 45s
      const delay = Math.random() * -30; // negative delay to start at different times
      const opacity = isBokeh ? Math.random() * 0.12 + 0.06 : Math.random() * 0.6 + 0.25;
      const blur = isBokeh ? 30 : Math.random() * 6 + 2;

      return {
        id: i,
        style: {
          width: `${size}px`,
          height: `${size}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100 + 100}%`, // Start below the screen
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          opacity,
          filter: `blur(${blur}px)`,
          transform: `translateY(0)`,
        },
      };
    });
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`absolute rounded-full animate-float ${p.style.width && parseInt(p.style.width as string) > 40 ? 'bg-pink-100' : 'bg-pink-300'} `}
          style={p.style}
        ></div>
      ))}
    </div>
  );
};

export default ParticleBackground;
