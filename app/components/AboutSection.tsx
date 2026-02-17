import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

function TypewriterText({
  text,
  className = "",
  delay = 0,
  speed = 30,
}: TypewriterTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [isInView, delay]);

  useEffect(() => {
    if (!started) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setFinished(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [started, text, speed]);

  return (
    <span ref={ref} className={`${className} inline-block`}>
      <span className="select-none" style={{ color: "transparent" }}>
        {text}
      </span>
      <span className="absolute left-0 top-0">
        {displayedText}
        {!finished && (
          <span className="inline-block w-0.75 h-[1em] bg-blue-400 ml-1 animate-pulse" />
        )}
      </span>
    </span>
  );
}

export default function AboutSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  } as const;

  return (
    <section className="relative flex w-full overflow-hidden bg-gray-950">
      <div className="w-full md:w-[calc(100%-8rem)] lg:w-[calc(100%-16rem)] xl:w-[calc(100%-24rem)] mx-auto pt-12 pb-12 sm:pb-16 lg:pb-20 flex flex-col gap-4 z-10">
        <motion.div
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true }}
          transition={fadeInUp.transition}
          className="px-8"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-xs text-sm font-semibold bg-blue-950 text-blue-300 border border-blue-800 select-none">
            <svg className="size-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 6C12.8284 6 13.5 5.32843 13.5 4.5C13.5 3.67157 12.8284 3 12 3C11.1716 3 10.5 3.67157 10.5 4.5C10.5 5.32843 11.1716 6 12 6ZM9 10H11V18H9V20H15V18H13V8H9V10Z"></path>
            </svg>
            About
          </span>
        </motion.div>

        <motion.p
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true }}
          transition={fadeInUp.transition}
          className="px-8 text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight"
        >
          <span className="text-white font-bold">
            Your personal intelligence layer.{" "}
          </span>
          <TypewriterText
            text="Built for thinkers who want to organize ideas, ask questions, and learn from their own information."
            className="font-semibold text-blue-400 relative"
            delay={400}
            speed={25}
          />
        </motion.p>
      </div>
    </section>
  );
}
