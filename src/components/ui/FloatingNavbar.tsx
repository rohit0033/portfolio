"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Define proper type for navItems
interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex w-[95%] max-w-fit md:min-w-[50vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-3 sm:px-6 py-2 sm:py-3 rounded-full items-center justify-center space-x-3 sm:space-x-6",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(167, 201, 87, 0.75)",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.15)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
        }}
      >
        {navItems.map((navItem: NavItem, idx: number) => (
          <Link
            key={`link-${idx}`}
            href={navItem.link}
            className="relative text-green-900 dark:text-lime-100 items-center flex hover:text-lime-900 dark:hover:text-lime-900 group whitespace-nowrap"
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="text-xs sm:text-sm font-[var(--font-nunito)] !cursor-pointer">{navItem.name}</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-900 dark:bg-lime-900 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
        <a
          href="#contact"
          className="relative overflow-hidden px-2 sm:px-4 py-1 sm:py-1.5 rounded-full bg-lime-600 text-white text-xs sm:text-sm transition-all duration-300 hover:bg-green-700 active:scale-95 shadow-md group font-[var(--font-nunito)] whitespace-nowrap"
        >
          <span className="relative z-10">Say Hello</span>
          <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
        </a>
      </motion.div>
    </AnimatePresence>
  );
};