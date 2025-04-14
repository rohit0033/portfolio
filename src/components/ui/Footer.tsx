import React from "react";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "../../../data";
import GhibliButton from "./GhibliButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative overflow-hidden" id="contact">
      {/* Ghibli-style layered hills background */}
    
      
      {/* Decorative clouds */}
      <div className="absolute left-[10%] top-[30%] w-24 h-12 bg-white/40 rounded-full blur-sm -z-10" />
      <div className="absolute right-[15%] top-[20%] w-32 h-16 bg-white/30 rounded-full blur-md -z-10" />
      
      {/* Floating leaves */}
      <div className="absolute top-10 right-10 opacity-20 animate-float-slow">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 10C40 20 45 40 30 50C15 40 20 20 30 10Z" fill="#8db580" />
          <path d="M30 10C35 20 35 40 30 50" stroke="#5c8d62" strokeWidth="1" />
        </svg>
      </div>
      <div className="absolute bottom-20 left-10 opacity-20 animate-float-medium">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 5C30 15 30 25 20 35C10 25 10 15 20 5Z" fill="#a0c297" />
          <path d="M20 5C22 15 22 25 20 35" stroke="#6ea95f" strokeWidth="1" />
        </svg>
      </div>

      <div className="flex flex-col items-center relative z-10">
  <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-[#3a644a] max-w-2xl">
    Ready to take <span className="text-[#5c8d62]">your</span> digital
    presence to the next level?
  </h1>
  <p className="text-[#5c8d62] md:mt-5 my-5 text-center max-w-xl">
    Reach out to me today and let&apos;s discuss how I can help you
    achieve your goals.
  </p>
  {/* Remove the wrapping <a> tag and use the href directly in GhibliButton */}
  <GhibliButton
    title="Let's get in touch"
    icon={<FaLocationArrow />}
    position="right"
    href="mailto:therohitsharma2004@gmail.com"
  />
</div>
      
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center relative z-10">
        <p className="md:text-base text-sm md:font-normal font-light text-[#3a644a]">
          Copyright © 2025 Rohit Sharma
        </p>

        <div className="flex items-center md:gap-4 gap-6 mt-4 md:mt-0">
  {socialMedia.map((info) => (
    <a
      key={info.id}
      href={info.link}
      target="_blank" 
      rel="noopener noreferrer"
      className="w-10 h-10 cursor-pointer flex justify-center items-center rounded-full bg-gradient-to-b from-[#f0f9e8]/90 to-[#dcedc2]/90 border border-[#8db580]/30 transition-all hover:scale-110"
      style={{
        boxShadow: "0 3px 10px rgba(108, 169, 95, 0.2)"
      }}
    >
      <Image src={info.img} alt={`${info.link.split('/').pop()} icon`} width={20} height={20} />
    </a>
  ))}
</div>
      </div>
      
      {/* Totoro-inspired silhouette in background */}
      <div className="absolute -z-20 bottom-0 left-1/2 transform -translate-x-1/2 w-full h-40 opacity-5">
        <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="100" cy="80" rx="70" ry="20" fill="#3a644a" />
          <ellipse cx="100" cy="50" rx="40" ry="50" fill="#3a644a" />
          <circle cx="80" cy="30" r="8" fill="#3a644a" />
          <circle cx="120" cy="30" r="8" fill="#3a644a" />
          <path d="M85 40C90 45 110 45 115 40" stroke="#5c8d62" strokeWidth="2" />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;