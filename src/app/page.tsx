"use client";

import Grid from "@/components/ui/Grid";
import Hero from "@/components/ui/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "../../data";
import RecentProjects from "@/components/ui/RecentProjects";
import Experience from "@/components/ui/Experience";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
    <div className="min-h-screen flex flex-col">
       <FloatingNav navItems={navItems}/>
       <section id="about">
         <Hero />
       </section>
       <Grid />
       <section id="projects">
         <RecentProjects />
       </section>
       <Experience />
       <section id="contact" className="mt-auto">
         <Footer />
       </section>
    </div>
    </>
  );
}