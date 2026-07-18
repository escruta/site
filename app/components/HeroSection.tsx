import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { GaussianBlurGradientBackground } from "./backgrounds/GaussianBlurGradientBackground";
import { TechPatternBackground } from "./backgrounds/TechPatternBackground";

export default function HeroSection() {
  const fadeInUpScale = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  } as const;

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  } as const;

  return (
    <section
      className={cn(
        "relative flex min-h-screen w-full overflow-hidden px-6",
        "bg-white text-gray-900 dark:bg-gray-950 dark:text-white",
      )}
    >
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-6 border-x border-gray-200 px-12 pt-40 dark:border-gray-800">
        <GaussianBlurGradientBackground />
        <TechPatternBackground />

        <motion.div
          className="relative z-10"
          initial={fadeInUpScale.initial}
          animate={fadeInUpScale.animate}
          transition={fadeInUpScale.transition}
        >
          <span className="inline-flex items-center gap-2 rounded-xs border border-blue-300 bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700 select-none dark:border-blue-800 dark:bg-blue-950 dark:text-blue-300">
            <svg
              className="size-3.5 text-blue-500 dark:text-blue-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M10.9999 12L3.92886 19.0711L2.51465 17.6569L8.1715 12L2.51465 6.34317L3.92886 4.92896L10.9999 12ZM10.9999 19H20.9999V21H10.9999V19Z" />
            </svg>
            In development
          </span>
        </motion.div>

        <motion.div
          className="relative z-10"
          initial={fadeInUpScale.initial}
          animate={fadeInUpScale.animate}
          transition={{ ...fadeInUpScale.transition, delay: 0.2 }}
        >
          <h1 className="text-center text-5xl leading-12 font-bold tracking-tight text-gray-900 md:text-7xl md:leading-18 dark:text-white">
            The place where{" "}
            <span className="text-blue-500 dark:text-blue-400">your knowledge lives</span>
          </h1>
        </motion.div>

        <motion.div
          className="relative z-10"
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={{ ...fadeInUp.transition, delay: 0.4 }}
        >
          <p className="-mt-2 max-w-2xl text-center text-lg leading-8 font-semibold tracking-normal text-gray-600 sm:text-xl dark:text-gray-300">
            Organize your notes and ideas in one place. Chat with your sources, generate summaries,
            and let AI spot patterns you'd miss on your own.{" "}
            <span className="font-bold text-gray-900 dark:text-white">
              Learn smarter, not harder.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
