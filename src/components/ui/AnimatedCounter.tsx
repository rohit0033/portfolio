import { useRef,  } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { counterItems } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef<HTMLDivElement | null>(null);
  const countersRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    countersRef.current.forEach((counter, index) => {
      if (!counter) return;

      const numberElement = counter.querySelector(".counter-number") as HTMLElement;
      const item = counterItems[index];

      gsap.set(numberElement, { innerText: "0" });

      gsap.to(numberElement, {
        innerText: item.value,
        duration: 2.5,
        ease: "power2.out",
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: counterRef.current,
          start: "top center",
        },
        onComplete: () => {
          numberElement.textContent = `${item.value}${item.suffix}`;
        },
      });
    });
  }, []);

  return (
    <section
      id="counter"
      ref={counterRef}
      className="relative padding-x-lg xl:mt-0 mt-32"
    >
      {/* 🍁 Ghibli-style falling leaves */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="absolute text-2xl animate-leaf"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              top: `-${Math.random() * 100}px`,
            }}
          >
            🍃
          </span>
        ))}
      </div>

      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => {countersRef.current[index] = el}}
            className="bg-emerald-100 dark:bg-emerald-950/80 shadow-xl rounded-xl p-10 flex flex-col justify-center items-center font-ghibli border border-emerald-300 dark:border-emerald-700"
          >
            <div className="counter-number text-4xl sm:text-5xl text-emerald-800 dark:text-lime-300 font-bold mb-2">
              0{item.suffix}
            </div>
            <div className="text-lg text-emerald-900 dark:text-lime-200 text-center">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedCounter;
