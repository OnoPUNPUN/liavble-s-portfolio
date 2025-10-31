
import React from 'react';
import type { Role } from '../types';

interface RoleCardProps {
  role: Role;
  style?: React.CSSProperties;
}

const RoleCard: React.FC<RoleCardProps> = ({ role, style }) => {
  const statusColor = role.status === 'Current' ? 'text-cyan-300' : 'text-gray-400';
  const borderColor = role.status === 'Current' ? 'border-cyan-400/50 shadow-cyan-500/20' : 'border-pink-400/30 shadow-pink-500/20';

  return (
    <div 
      className={`animate-fade-in backdrop-blur-md bg-gray-900/50 p-6 rounded-2xl border ${borderColor} shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/30 hover:scale-[1.02]`}
      style={style}
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-md">{role.game}</h3>
          <p className="text-sm text-pink-200/80">{role.memberCount} members</p>
          <p className="mt-2 text-md text-white/90">{role.role} - <span className={statusColor}>{role.status}</span></p>
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
