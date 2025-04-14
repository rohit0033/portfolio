import { FaLeaf } from "react-icons/fa";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Button } from "./button";
import { motion } from "framer-motion";
import { MaskedImage } from "./masked-image";

const Hero = () => {
  return (
    <div className="pb-20 pt-30 relative overflow-hidden min-h-screen">
      {/* Ghibli-inspired layered background - keeping original colors */}
      <div className="absolute inset-0" />

      {/* Distant hills - Ghibli style - keeping original colors */}
      <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-[#8db580] rounded-t-[100%] opacity-30 z-[1]" />
      <div className="absolute bottom-0 left-[10%] w-[80%] h-[25vh] bg-[#a0c297] rounded-t-[100%] opacity-40 z-[2]" />
      <div className="absolute bottom-0 left-[20%] w-[60%] h-[20vh] bg-[#b7d4aa] rounded-t-[100%] opacity-50 z-[3]" />

      {/* Floating elements - Ghibli-inspired */}
      <motion.div
        className="absolute top-[20%] right-[10%] z-[2] opacity-70"
        animate={{
          y: [0, 15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-32 h-32 bg-white rounded-full blur-3xl opacity-30" />
      </motion.div>

      <motion.div
        className="absolute top-[15%] left-[15%] z-[2]"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-24 h-24 bg-[#f0f9e8] rounded-full blur-xl opacity-50" />
      </motion.div>

      {/* Magical Spotlights - soft Ghibli light */}
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen mix-blend-soft-light opacity-60"
        fill="#f8f8d9"
      />
      <Spotlight
        className="h-[80vh] w-[50vw] top-10 left-full mix-blend-soft-light opacity-60"
        fill="#f8edd2"
      />

      {/* Central content */}
      <div className="flex justify-center relative z-10 mt-10 md:mt-16 mb-20">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
          {/* Masked image ABOVE the heading */}
          <motion.div
            className="mb-12 w-[200px] h-[200px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px] z-[4] relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full h-full"
            >
              <MaskedImage
                src="/profile-image.jpg"
                alt="Ghibli-inspired portrait"
                width={300}
                height={900}
                variant="shape6"
                className="w-full h-full"
              />
              {/* Add a subtle glow effect */}
              <div className="absolute inset-0 rounded-full bg-[#f8f8d9]/30 filter blur-md -z-10 scale-105" />
            </motion.div>
          </motion.div>

          {/* <motion.p 
            className="uppercase tracking-widest text-xs text-[#5c8d62] mb-3 font-[var(--font-ghibli)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Crafting Digital Dreams
          </motion.p> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <TextGenerateEffect
              words="Rohit Sharma"
              className="text-center text-[56px] md:text-5xl lg:text-9xl leading-tight bg-clip-text text-transparent bg-gradient-to-b from-[#6ea95f] to-[#2a4d36]"
            />
          </motion.div>

          <motion.p
            className="text-[#5c8d62] mt-6 mb-8 text-sm md:text-lg lg:text-xl font-[var(--font-nunito)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            Hi! I&apos;m Rohit, a web developer weaving code into meaningful.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            <a href="https://drive.google.com/file/d/1UGDjS9kpOXmElUjH4JdvV62qJuEtL2Tz/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Button
              title="My resume "
              icon={<FaLeaf className="text-lime-200" />}
              position="right"
              className="bg-[#409227] hover:bg-[#394e3c] text-white shadow-lg transition-all duration-300 rounded-full px-8 py-6 font-[var(--font-ghibli)]"
              />
            </a>
            <a
              href="#projects"
              className="text-[#3a644a] hover:text-[#5c8d62] transition-colors duration-300 font-[var(--font-nunito)]"
            >
              View My Projects
            </a>
          </motion.div>

          {/* Ghibli-inspired decorative element */}
          <motion.div
            className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 z-10 opacity-10"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-[50vw] h-[1px] bg-gradient-to-r from-transparent via-[#5c8d62] to-transparent" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
