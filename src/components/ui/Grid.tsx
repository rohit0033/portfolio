import { gridItems } from "../../../data";
import {  BentoGridItem } from "./ui/bento-grid";
import { motion } from "framer-motion";

const Grid = () => {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Add soft ghibli background elements */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#dcedc2] to-transparent opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#dcedc2] to-transparent opacity-40 pointer-events-none" />
      
      {/* Add soft floating elements */}
      <motion.div 
        className="absolute top-20 right-10 w-20 h-20 rounded-full bg-[#a0c297]/20 blur-xl"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-40 left-20 w-16 h-16 rounded-full bg-[#b9dcd8]/15 blur-xl"
        animate={{ y: [0, -15, 0], x: [0, -5, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-[#3a644a] dark:text-[#a0c297] font-[var(--font-pt-sans)]">
            About Me
          </h2>
          <p className="mt-4 text-[#5c8d62] dark:text-[#8db580] max-w-2xl mx-auto font-[var(--font-nunito)]">
            Explore my journey through the digital landscape, where technology meets creativity with coding.
          </p>
        </motion.div>
        
        {/* Updated BentoGrid with better structure */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {gridItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${
                // Apply different sizes to specific cards for visual interest
                i === 0 ? "md:col-span-2 md:row-span-1" : 
                i === 3 ? "md:col-span-2 md:row-span-1" : 
                "col-span-1"
              }`}
            >
              <BentoGridItem
                id={item.id}
                title={item.title}
                description={item.description}
                className={`h-full ${item.className}`}
                img={item.img}
                imgClassName={item.imgClassName}
                titleClassName={item.titleClassName}
                spareImg={item.spareImg}
              />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Add subtle path connector between cards */}
      <div className="absolute left-1/2 top-1/2 h-[60%] w-[1px] bg-gradient-to-b from-transparent via-[#77a668]/20 to-transparent transform -translate-x-1/2 -translate-y-1/2 hidden md:block pointer-events-none" />
    </section>
  );
};

export default Grid;