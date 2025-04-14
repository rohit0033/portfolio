"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { workExperience } from "../../../data";
import { MovingBorder } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full relative">
      {/* Floating leaf decorations */}
      <div className="absolute top-10 left-10 opacity-20 animate-float-slow">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 10C40 20 45 40 30 50C15 40 20 20 30 10Z" fill="#8db580" />
          <path d="M30 10C35 20 35 40 30 50" stroke="#5c8d62" strokeWidth="1" />
        </svg>
      </div>
      <div className="absolute bottom-20 right-10 opacity-20 animate-float-medium">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 5C30 15 30 25 20 35C10 25 10 15 20 5Z" fill="#a0c297" />
          <path d="M20 5C22 15 22 25 20 35" stroke="#6ea95f" strokeWidth="1" />
        </svg>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        My <span className="text-[#3a644a]">work experience</span>
      </h1>

      {/* Decorative branch connecting the cards */}
      <div className="absolute left-1/2 top-[220px] bottom-20 w-1 bg-gradient-to-b from-[#6ea95f]/0 via-[#6ea95f]/20 to-[#6ea95f]/0 hidden lg:block"></div>
      
      {/* Flowing path with decorative leaves */}
      <div className="absolute left-1/2 top-[220px] bottom-0 hidden lg:block">
        <svg width="100" height="100%" viewBox="0 0 100 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M50 0V800" stroke="#a0c297" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="50" cy="160" r="8" fill="#f0f9e8" stroke="#8db580" strokeWidth="1" />
          <circle cx="50" cy="400" r="8" fill="#f0f9e8" stroke="#8db580" strokeWidth="1" />
          <circle cx="50" cy="640" r="8" fill="#f0f9e8" stroke="#8db580" strokeWidth="1" />
        </svg>
      </div>

      {/* Staggered card layout */}
      <div className="w-full mt-12 relative">
        {workExperience.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`relative flex mb-12 ${
              index % 2 === 0 
                ? "lg:flex-row lg:mr-auto lg:ml-[5%] lg:pr-[5%]" 
                : "lg:flex-row-reverse lg:ml-auto lg:mr-[5%] lg:pl-[5%]"
            } max-w-2xl mx-auto lg:max-w-[90%]`}
          >
            {/* Timeline connector (desktop only) */}
            <div className={`absolute top-1/2 hidden lg:block ${
              index % 2 === 0 ? "right-0 w-[calc(5%_+_1px)]" : "left-0 w-[calc(5%_+_1px)]"
            } h-0.5 bg-gradient-to-r from-[#8db580]/40 to-[#8db580]/0`}></div>

            {/* Experience card */}
            <div className="w-full lg:w-[95%] relative flex flex-col rounded-xl overflow-hidden h-auto bg-gradient-to-b from-[#f0f9e8]/90 to-[#dcedc2]/90 border border-[#8db580]/30 z-10"
              style={{
                boxShadow: "0 6px 20px rgba(108, 169, 95, 0.2)"
              }}
            >
              {/* Moving border effect */}
              <div className="absolute inset-0 rounded-xl">
                <MovingBorder duration={8000} rx="12px" ry="12px">
                  <div className="h-16 w-16 opacity-[0.15] bg-[radial-gradient(#6ea95f_40%,transparent_60%)]" />
                </MovingBorder>
              </div>

              {/* Ghibli cloud decorations */}
              <div className="absolute left-[10%] top-[10%] w-12 h-6 bg-white/70 rounded-full"></div>
              <div className="absolute right-[15%] top-[15%] w-16 h-8 bg-white/60 rounded-full"></div>

              {/* Content */}
              <div className="flex lg:flex-row flex-col lg:items-center p-6 gap-4 relative z-10">
                <div className="relative overflow-visible">
                  {/* Company logo with magical glow */}
                  <div className="relative lg:w-24 lg:h-24 w-20 h-20 flex-shrink-0 bg-[#a8cee2]/30 rounded-full flex items-center justify-center overflow-hidden border border-[#8db580]/30">
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff_10%,transparent_70%)] opacity-40"></div>
                    <Image
                      src={card.thumbnail}
                      alt={card.title}
                      width={80}
                      height={80}
                      className="object-contain p-3 relative z-10"
                    />
                  </div>
                  
                  {/* Decorative dust particles */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-60 animate-pulse-slow"></div>
                  <div className="absolute -bottom-2 left-2 w-2 h-2 bg-white rounded-full opacity-40 animate-pulse-medium"></div>
                </div>
                
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-bold text-[#3a644a]">
                    {card.title}
                  </h2>
                  <p className="mt-2 text-[#5c8d62] leading-relaxed">
                    {card.desc}
                  </p>
                  
                  {/* Fading tree branch decoration */}
                  <div className="absolute bottom-2 right-2 h-16 w-24 opacity-20">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 80C30 60 50 70 70 50C80 40 90 30 95 20" stroke="#6ea95f" strokeWidth="2" />
                      <path d="M30 70C35 65 35 60 30 55" stroke="#6ea95f" strokeWidth="1.5" />
                      <path d="M50 60C55 55 55 50 50 45" stroke="#6ea95f" strokeWidth="1.5" />
                      <path d="M70 40C75 35 75 30 70 25" stroke="#6ea95f" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Bottom decorative element with gradient */}
              <div className="h-2 w-full bg-gradient-to-r from-[#8db580]/0 via-[#8db580]/40 to-[#8db580]/0"></div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Decorative Totoro-inspired silhouette in background */}
      <div className="absolute -z-10 bottom-0 left-1/2 transform -translate-x-1/2 w-full h-40 opacity-5">
        <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="100" cy="80" rx="70" ry="20" fill="#3a644a" />
          <ellipse cx="100" cy="50" rx="40" ry="50" fill="#3a644a" />
          <circle cx="80" cy="30" r="8" fill="#3a644a" />
          <circle cx="120" cy="30" r="8" fill="#3a644a" />
          <path d="M85 40C90 45 110 45 115 40" stroke="#5c8d62" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
};

export default Experience;