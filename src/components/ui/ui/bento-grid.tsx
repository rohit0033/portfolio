import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-6 md:auto-rows-[20rem] md:grid-cols-3 px-4 sm:px-6",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  // Add a slight bounce animation for hover
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-2xl border border-[#a8cee2]/30 bg-gradient-to-b from-[#f8f8f0] to-[#f0f9e8] p-5 transition duration-300 hover:shadow-[0_10px_20px_rgba(137,170,115,0.15)] dark:from-[#2d3c35] dark:to-[#1f2c24] dark:border-[#5c8d62]/30 overflow-hidden relative",
        className,
      )}
    >
      {/* Add a subtle ghibli-inspired decorative corner */}
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#a0c297]/20 rounded-full z-0" />
      <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-[#b9dcd8]/15 rounded-full z-0" />
      
      {header}
      
      {/* Render image with standard Next.js Image if available */}
      {img && (
        <div className={cn("relative z-10 overflow-hidden h-48 rounded-lg", imgClassName)}>
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={img}
              alt={typeof title === 'string' ? title : 'Bento grid item'}
              width={900}
              height={300}
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover/bento:scale-105"
              priority
            />
          </div>
          
          {/* Ghibli-inspired decorative elements */}
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#77a668]/20 to-transparent opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          {/* Add soft glow on hover */}
          <div className="absolute inset-0 bg-[#f8f8d9]/0 group-hover/bento:bg-[#f8f8d9]/10 transition-all duration-500 pointer-events-none" />
        </div>
      )}
      
      <div className="transition duration-300 ease-out group-hover/bento:translate-x-2 relative z-10">
        {icon && <div className="text-[#5c8d62] dark:text-[#8db580]">{icon}</div>}
        
        {title && (
          <div className={cn("mt-3 mb-2 font-[var(--font-ghibli)] font-bold text-[#3a644a] dark:text-[#a0c297]", titleClassName)}>
            {title}
          </div>
        )}
        
        {description && (
          <div className="font-[var(--font-nunito)] text-sm font-normal text-[#5c8d62] dark:text-[#8db580] leading-relaxed">
            {description}
          </div>
        )}
      </div>
      
      {/* Render spare image with standard Next.js Image if available */}
      {spareImg && (
        <div className="mt-2 relative z-10 overflow-hidden h-32 rounded-lg">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={spareImg}
              alt="Additional content"
              width={300}
              height={200}
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover/bento:scale-105"
              priority
            />
          </div>
          
          {/* Add soft glow on hover */}
          <div className="absolute inset-0 bg-[#f8f8d9]/0 group-hover/bento:bg-[#f8f8d9]/10 transition-all duration-500 pointer-events-none" />
        </div>
      )}
      
      {/* Add a subtle leaf decoration in bottom corner */}
      <div className="absolute bottom-3 right-3 w-8 h-8 opacity-10 group-hover/bento:opacity-20 transition-opacity duration-300 z-0">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C7.58 2 4 5.58 4 10C4 16.08 12 22 12 22C12 22 20 16.08 20 10C20 5.58 16.42 2 12 2ZM12 7C13.1 7 14 7.9 14 9C14 10.1 13.1 11 12 11C10.9 11 10 10.1 10 9C10 7.9 10.9 7 12 7Z" fill="#5c8d62"/>
        </svg>
      </div>
    </motion.div>
  );
};