import { Link } from "react-router";
import { motion } from "motion/react";
import { GaussianBlurGradientBackground } from "./backgrounds/GaussianBlurGradientBackground";
import { appUrl } from "../config";
import { Button } from "./ui";
import { cn } from "@/lib/utils";

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
        "relative flex min-h-screen w-full overflow-hidden pb-6 md:pb-0",
        "bg-white text-gray-900 dark:bg-gray-950 dark:text-white",
      )}
    >
      <GaussianBlurGradientBackground />

      <div className="z-10 mx-auto flex w-full flex-col gap-6 pt-40 md:w-[calc(100%-8rem)] lg:w-[calc(100%-16rem)] lg:pb-24 xl:w-[calc(100%-24rem)]">
        <motion.div
          initial={fadeInUpScale.initial}
          animate={fadeInUpScale.animate}
          transition={fadeInUpScale.transition}
          className="px-8"
        >
          <span className="inline-flex items-center gap-2 rounded-xs border border-blue-300 bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700 select-none dark:border-blue-800 dark:bg-blue-950 dark:text-blue-300">
            <svg
              className="size-3.5 text-blue-500 dark:text-blue-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
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
          <h1 className="text-5xl leading-12 font-bold tracking-tight text-gray-900 sm:leading-16 md:text-6xl dark:text-white">
            The platform for{" "}
            <span className="text-blue-500 dark:text-blue-400">your knowledge</span>
          </h1>
        </motion.div>

        <motion.div
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={{ ...fadeInUp.transition, delay: 0.4 }}
          className="px-8"
        >
          <p className="-mt-2 max-w-4xl text-lg leading-8 font-semibold tracking-normal text-gray-600 sm:text-xl dark:text-gray-300">
            Organize, analyze, and learn from your own knowledge. Ask questions, connect ideas, and
            gain valuable insights.{" "}
            <span className="font-bold text-gray-900 dark:text-white">All in one platform.</span>
          </p>
        </motion.div>

        <motion.div
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={{ ...fadeInUp.transition, delay: 0.6 }}
          className="flex flex-wrap items-center gap-3 px-8 pt-2"
        >
          <Link to={appUrl}>
            <Button variant="primary" size="lg">
              Get started
            </Button>
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
        className="pointer-events-none absolute right-0 bottom-0 left-0 z-0 h-[39vh] select-none"
      >
        <div className="absolute inset-0 bg-linear-to-t from-blue-500/10 to-transparent blur-3xl dark:from-blue-600/5" />
      </motion.div>
    </section>
  );
}
