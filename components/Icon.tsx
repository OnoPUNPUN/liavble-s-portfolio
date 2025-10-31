
import React from 'react';

interface IconProps {
  name: 'discord' | 'roblox';
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className = 'w-6 h-6' }) => {
  const icons = {
    discord: (
      <svg fill="currentColor" viewBox="0 0 24 24" className={className}>
        <path d="M20.22,4.31H3.78a1.5,1.5,0,0,0-1.48,1.34L.13,18.1a1.5,1.5,0,0,0,1.48,1.65h15.2l.29-3.53a2.3,2.3,0,0,1,2-2.11,2.54,2.54,0,0,1,2.5,2.4,2.54,2.54,0,0,1-2.5,2.4,2.3,2.3,0,0,1-2,2.11L20.2,23.3a1.5,1.5,0,0,0,1.48-1.34l2.17-12.45a1.5,1.5,0,0,0-1.48-1.65H20.22ZM8.63,16.59a2.09,2.09,0,0,1-2.22-2.11,2.09,2.09,0,0,1,2.22-2.11,2.15,2.15,0,0,1,0,4.22Zm6.74,0a2.09,2.09,0,0,1-2.22-2.11,2.09,2.09,0,0,1,2.22-2.11,2.15,2.15,0,0,1,0,4.22Z" />
      </svg>
    ),
    roblox: (
       <svg fill="currentColor" viewBox="0 0 24 24" className={className}>
        <path d="M22.5,2.25,2.25,22.5,2.25,2.25,22.5,22.5Z" />
        <path d="M22.5,2.25,2.25,22.5,2.25,2.25,22.5,22.5Z" transform="translate(24.75 24.75) rotate(180)" />
        <path d="M21.5,1.5l-19,19" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="3" />
      </svg>
    ),
  };

  return icons[name] || null;
};

export default Icon;
