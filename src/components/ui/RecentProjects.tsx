"use client";

import Image from "next/image";
import { FaLocationArrow, FaCode } from "react-icons/fa6";
import { projects } from "../../../data";

const RecentProjects = () => {
  return (
    <div className="py-20">
      {/* Centered heading with increased top margin */}
    <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
      A small selection of{" "}
      <span className="text-[#3a644a]">recent projects</span>
    </h1>
      
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl sm:w-96 w-[80vw] h-auto bg-gradient-to-b from-[#f0f9e8]/90 to-[#dcedc2]/90 border border-[#8db580]/30"
            style={{
              boxShadow: "0 6px 20px rgba(108, 169, 95, 0.2)"
            }}
          >
            {/* Project image container with Ghibli-style clouds */}
            <div className="relative w-full h-[200px] overflow-hidden bg-[#a8cee2]">
              {/* Decorative clouds */}
              <div className="absolute left-[10%] top-[30%] w-16 h-8 bg-white/80 rounded-full"></div>
              <div className="absolute left-[5%] top-[25%] w-12 h-6 bg-white/70 rounded-full"></div>
              <div className="absolute right-[15%] top-[40%] w-20 h-10 bg-white/80 rounded-full"></div>
              <div className="absolute right-[10%] top-[35%] w-14 h-7 bg-white/70 rounded-full"></div>
              
              {/* Project image */}
              <div className="relative z-10 flex justify-center items-end h-full w-full pb-0">
                <Image
                  src={item.img}
                  alt={`${item.title} cover`}
                  width={500}
                  height={100}
                  className="object-contain transform hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
            
            {/* Content area */}
            <div className="flex flex-col p-5 flex-grow">
              <h1 className="font-bold text-[#3a644a] lg:text-2xl md:text-xl text-base mb-2 line-clamp-1">
                {item.title}
              </h1>
              
              <p
                className="lg:text-lg text-sm font-light line-clamp-2 mb-4 text-[#5c8d62]"
              >
                {item.des}
              </p>
              
             {/* Technology icons - contained within a scrollable area if they overflow */}
<div className="relative mb-4 ml-2">
  <p className="text-xs text-[#5c8d62] mb-1">Technologies:</p>
  <div className="flex overflow-x-auto pb-2 scrollbar-hide">
    <div className="flex">
      {item.iconLists.map((icon, index) => (
        <div
          key={index}
          className="flex-shrink-0 border border-[#6ea95f]/20 bg-white/80 rounded-full lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center mr-2"
          style={{
            boxShadow: "0 2px 6px rgba(108, 169, 95, 0.1)"
          }}
        >
          <Image
            src={icon}
            alt={`Technology icon ${index+1}`}
            width={20}
            height={20}
            className="w-5 h-5 lg:w-6 lg:h-6 object-contain"
          />
        </div>
      ))}
    </div>
  </div>
</div>
              
            {/* Action buttons - now with two buttons side by side */}
<div className="mt-auto flex justify-end gap-2">
  <a 
    href={item.code.startsWith("/") ? item.code.substring(1) : item.code}
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center px-3 py-2 rounded-full bg-[#8db580]/20 hover:bg-[#8db580]/40 transition-colors duration-300"
  >
    <p className="text-[#3a644a] lg:text-sm text-xs">
      View Code
    </p>
    <FaCode className="ms-2 text-[#6ea95f]" />
  </a>
  
  <a 
    href={item.link.startsWith("/") ? item.link.substring(1) : item.link}
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center px-3 py-2 rounded-full bg-[#a0c297]/20 hover:bg-[#a0c297]/40 transition-colors duration-300"
  >
    <p className="text-[#3a644a] lg:text-sm text-xs">
      Visit Project
    </p>
    <FaLocationArrow className="ms-2 text-[#6ea95f]" />
  </a>
</div>
            </div>
            
            {/* Decorative Ghibli leaf elements */}
            <div className="absolute -bottom-3 -left-3 w-12 h-12 rotate-45 bg-[#8db580]/30 rounded-full"></div>
            <div className="absolute -top-3 -right-3 w-10 h-10 rotate-12 bg-[#a0c297]/30 rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;