import { motion } from "motion/react";
import appDesktopImage from "../assets/AppDesktop.webp";
import GradientAnimationBackground from "./backgrounds/GradientAnimationBackground";
import InteractiveCard from "./InteractiveCard";
import SimpleBackground from "./backgrounds/SimpleBackground";

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
    <section className="relative flex pb-6 md:pb-0 w-full min-h-screen overflow-hidden bg-gray-950">
      <GradientAnimationBackground />
      <SimpleBackground />
      <div className="absolute size-full bg-linear-to-b from-transparent to-gray-950" />

      <div className="w-full md:w-[calc(100%-8rem)] lg:w-[calc(100%-16rem)] xl:w-[calc(100%-24rem)] mx-auto pt-40 pb-24 flex flex-col gap-6 z-10">
        <motion.div
          initial={fadeInUpScale.initial}
          animate={fadeInUpScale.animate}
          transition={fadeInUpScale.transition}
          className="px-8"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-xs text-sm font-semibold bg-blue-950 text-blue-300 border border-blue-800 select-none">
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
          className="px-8"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-12 sm:leading-16">
            Think, ask, <span className="text-blue-400">learn</span>
          </h1>
        </motion.div>

        <motion.div
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={{ ...fadeInUp.transition, delay: 0.4 }}
          className="px-8"
        >
          <p className="max-w-4xl text-lg sm:text-xl text-gray-300 font-semibold tracking-normal leading-8 -mt-2">
            Organize, analyze, and learn from your own knowledge. Ask questions,
            take notes, and gain valuable insights.{" "}
            <span className="font-bold text-white">All in one platform.</span>
          </p>
        </motion.div>

        <motion.div
          className="my-4"
          initial={fadeInUpScale.initial}
          animate={fadeInUpScale.animate}
          transition={{ ...fadeInUpScale.transition, delay: 0.65 }}
        >
          <InteractiveCard className="p-4 mx-4 md:mx-0">
            <div className="relative overflow-hidden rounded-xs">
              <img
                src={appDesktopImage}
                alt="Escruta Desktop Interface"
                className="w-full h-auto select-none border border-gray-700"
                loading="lazy"
              />
            </div>
          </InteractiveCard>
        </motion.div>
      </div>
    </section>
  );
}
