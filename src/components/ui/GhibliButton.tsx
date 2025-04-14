import React from "react";
import Link from "next/link";

interface GhibliButtonProps {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  href?: string;
  otherClasses?: string;
}

const GhibliButton = ({
  title,
  icon,
  position,
  handleClick,
  href,
  otherClasses,
}: GhibliButtonProps) => {
  // If href is provided, render as a link
  if (href) {
    return (
      <Link 
        href={href}
        className="relative group h-12 w-full md:w-64 mt-5 md:mt-8 overflow-hidden inline-block"
      >
        {/* Main button */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#8ef771] to-[#529940] rounded-full transform group-hover:scale-105 transition-transform duration-300 group-hover:shadow-lg"></div>
        
        {/* Subtle floating dust particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-60 transition-opacity duration-500 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 rounded-full bg-white opacity-0 group-hover:opacity-40 transition-opacity duration-700 animate-pulse-medium"></div>
        
        {/* Button content */}
        <div className="relative flex items-center justify-center h-full w-full">
          <span className={`inline-flex items-center justify-center rounded-full px-7 py-2.5 text-sm font-medium text-white gap-3 transform group-hover:scale-105 transition-transform duration-300 ${otherClasses}`}>
            {position === "left" && <span className="text-[#f0f9e8]">{icon}</span>}
            <span className="text-[#f0f9e8]">{title}</span>
            {position === "right" && <span className="text-[#f0f9e8]">{icon}</span>}
          </span>
        </div>
        
        {/* Border glow effect */}
        <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[#8db580]/0 via-[#dcedc2]/30 to-[#8db580]/0 blur-sm opacity-0 group-hover:opacity-100 transform scale-105 transition-opacity duration-500"></div>
      </Link>
    );
  }
  
  // Otherwise, render as a button
  return (
    <button
      className="relative group h-12 w-full md:w-64 mt-5 md:mt-8 overflow-hidden"
      onClick={handleClick}
    >
      {/* Main button */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#336326] to-[#153d0b] rounded-full transform group-hover:scale-105 transition-transform duration-300 group-hover:shadow-lg"></div>
      
      {/* Subtle floating dust particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-60 transition-opacity duration-500 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 rounded-full bg-white opacity-0 group-hover:opacity-40 transition-opacity duration-700 animate-pulse-medium"></div>
      
      {/* Button content */}
      <div className="relative flex items-center justify-center h-full w-full">
        <span className={`inline-flex items-center justify-center rounded-full px-7 py-2.5 text-sm font-medium text-white gap-3 transform group-hover:scale-105 transition-transform duration-300 ${otherClasses}`}>
          {position === "left" && <span className="text-[#f0f9e8]">{icon}</span>}
          <span className="text-[#f0f9e8]">{title}</span>
          {position === "right" && <span className="text-[#f0f9e8]">{icon}</span>}
        </span>
      </div>
      
      {/* Border glow effect */}
      <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[#8db580]/0 via-[#dcedc2]/30 to-[#8db580]/0 blur-sm opacity-0 group-hover:opacity-100 transform scale-105 transition-opacity duration-500"></div>
    </button>
  );
};

export default GhibliButton;