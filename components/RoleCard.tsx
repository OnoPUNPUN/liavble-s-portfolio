
import React from 'react';
import type { Role } from '../types';

interface RoleCardProps {
  role: Role;
  style?: React.CSSProperties;
}

const RoleCard: React.FC<RoleCardProps> = ({ role, style }) => {
  const statusColor = role.status === 'Current' ? 'bg-cyan-500/90 text-white' : 'bg-pink-500/90 text-white';
  const borderColor = role.status === 'Current' ? 'border-cyan-400/40 shadow-cyan-500/20' : 'border-pink-400/30 shadow-pink-500/20';

  return (
    <div 
      className={`animate-fade-in relative glass-card corner-halo p-6 rounded-2xl border ${borderColor} soft-glow transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/30 hover:scale-[1.015]`}
      style={style}
    >
      <span className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${statusColor}`}>{role.status === 'Current' ? 'Active' : 'Retired'}</span>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-md">{role.game}</h3>
          <p className="text-sm text-pink-100/80">{role.memberCount} Members</p>
          <p className="mt-2 text-md text-white/90">{role.role}</p>
        </div>
        <a 
          href={role.discordLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 sm:mt-0 bg-pink-500/80 text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:bg-pink-500 transition-colors duration-300 flex-shrink-0"
        >
          Join Discord
        </a>
      </div>
    </div>
  );
};

export default RoleCard;
