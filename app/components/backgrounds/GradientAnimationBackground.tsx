import { motion } from "motion/react";

export default function GradientAnimationBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden w-full h-full select-none pointer-events-none">
      <div className="absolute inset-0 w-full h-full opacity-35 transition-opacity duration-500">
        {/* Main shifting gradient */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-linear-to-br from-gray-950 via-gray-900 to-blue-950"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            backgroundSize: ["400% 400%", "600% 600%", "400% 400%"],
          }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
          }}
        />

        {/* Pulsing gradient layer */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-linear-to-tr from-transparent via-blue-900/20 to-blue-800/30"
          animate={{
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
          }}
        />

        {/* Floating gradient layer */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-linear-to-bl from-gray-900/80 via-transparent to-blue-900/40"
          animate={{
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 12,
            times: [0, 0.33, 1],
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      </div>
    </div>
  );
}
