import { motion } from "motion/react";

export function GaussianBlurGradientBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-gray-950 opacity-60">
      {/* Outer Blue Auras */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1.1, 1],
          y: [0, -70, -30, 0],
          x: [0, 50, -20, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-[30%] -left-[10%] h-[70%] w-[70%] rounded-full bg-blue-600/20 blur-[140px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1.15, 1],
          y: [0, -90, -40, 0],
          x: [0, -60, 30, 0],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -right-[5%] -bottom-[40%] h-[80%] w-[60%] rounded-full bg-blue-500/20 blur-[140px]"
      />

      {/* Inner White Cores for the glowing wave effect */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1.1, 1],
          y: [0, -50, -15, 0],
          x: [0, 30, -10, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-[40%] -left-[5%] h-[50%] w-[50%] rounded-full bg-blue-900/40 blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.25, 1.1, 1],
          y: [0, -60, -20, 0],
          x: [0, 40, -15, 0],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute -right-[10%] -bottom-[30%] h-[60%] w-[50%] rounded-full bg-blue-800/40 blur-[120px]"
      />
    </div>
  );
}
