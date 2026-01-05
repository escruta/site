import { motion } from "motion/react";
import appDesktopImage from "../assets/AppDesktop.webp";
import { repoUrl, appUrl } from "../config";
import GradientAnimationBackground from "./backgrounds/GradientAnimationBackground";
import SimpleBackground from "./backgrounds/SimpleBackground";
import InteractiveCard from "./InteractiveCard";

export default function HeroSection() {
  const fadeInUpScale = {
    initial: { opacity: 0, y: 40, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
  } as const;

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  } as const;

  const fadeInScale = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
  } as const;

  return (
    <section className="relative flex pb-6 md:pb-0 w-full min-h-screen overflow-hidden bg-gray-900 px-6">
      <SimpleBackground />
      <GradientAnimationBackground />
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900/65" />

      <div className="w-full flex flex-col items-center mt-40 space-y-6 z-10">
        <motion.div
          initial={fadeInUpScale.initial}
          animate={fadeInUpScale.animate}
          transition={fadeInUpScale.transition}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-xs text-sm font-semibold bg-blue-900 text-blue-200 border border-blue-700 select-none">
            <svg className="size-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10.9999 12L3.92886 19.0711L2.51465 17.6569L8.1715 12L2.51465 6.34317L3.92886 4.92896L10.9999 12ZM10.9999 19H20.9999V21H10.9999V19Z" />
            </svg>
            Under development
          </span>
        </motion.div>

        <motion.div
          initial={fadeInUpScale.initial}
          animate={fadeInUpScale.animate}
          transition={{ ...fadeInUpScale.transition, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white text-center leading-12 sm:leading-16">
            Think, ask, <span className="hero-learn-text">learn</span>
          </h1>
        </motion.div>

        <motion.div
          className="relative"
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={{ ...fadeInUp.transition, delay: 0.4 }}
        >
          <p className="max-w-2xl text-lg sm:text-xl text-gray-200 text-center font-semibold tracking-normal leading-8">
            Organize, analyze, and learn from your own knowledge. Ask questions,
            take notes, and gain valuable insights.{" "}
            <span className="font-bold">All in one platform.</span>
          </p>
        </motion.div>

        <motion.div
          className="w-full md:w-auto flex flex-col md:flex-row justify-center gap-4"
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={{ ...fadeInUp.transition, delay: 0.6 }}
        >
          <motion.div
            className="w-full md:w-auto"
            initial={fadeInScale.initial}
            animate={fadeInScale.animate}
            transition={{ ...fadeInScale.transition, delay: 0.8 }}
          >
            <a
              href={appUrl}
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xs bg-blue-600 px-6 md:px-8 font-semibold text-white hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 select-none w-full md:w-auto"
            >
              Start exploring
            </a>
          </motion.div>
          <motion.div
            className="w-full md:w-auto"
            initial={fadeInScale.initial}
            animate={fadeInScale.animate}
            transition={{ ...fadeInScale.transition, delay: 1.0 }}
          >
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white hover:bg-gray-800 group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xs border border-gray-800 px-6 md:px-8 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 select-none w-full md:w-auto"
            >
              Source code
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-4/5 my-12 hidden md:block"
          initial={fadeInUpScale.initial}
          animate={fadeInUpScale.animate}
          transition={{ ...fadeInUpScale.transition, delay: 1.2 }}
        >
          <InteractiveCard className="p-4 mx-4 md:mx-0">
            <div className="relative overflow-hidden rounded-xs">
              <img
                src={appDesktopImage}
                alt="Escruta Desktop Interface"
                className="w-full h-auto select-none border border-gray-700/60"
                loading="lazy"
              />
            </div>
          </InteractiveCard>
        </motion.div>
      </div>

      <style>{`
        .hero-learn-text {
          color: var(--color-blue-300);
          text-shadow:
            0 1px 0 var(--color-blue-500),
            0 2px 2px rgba(3, 136, 252, 0.15),
            0 0 20px rgba(75, 171, 253, 0.2),
            0 0 2px rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </section>
  );
}
