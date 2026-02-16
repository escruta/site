import type { Route } from "./+types/not-found";
import { Button } from "../components/ui";
import SimpleBackground from "../components/backgrounds/SimpleBackground";
import { motion } from "motion/react";
import { Link } from "react-router";

export function meta(_: Route.MetaArgs) {
  return [
    {
      title: "404 - Escruta",
    },
    {
      name: "description",
      content:
        "The information you are looking for is currently unavailable. Return to Escruta's homepage to continue your research journey.",
    },
  ];
}

export default function NotFound() {
  const fadeInSlight = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" },
  } as const;

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gray-950 px-6 text-center">
      <SimpleBackground />

      <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          <h1 className="text-6xl md:text-7xl font-extrabold text-white tracking-tight">
            404
          </h1>
        </motion.div>

        <motion.div
          initial={fadeInSlight.initial}
          animate={fadeInSlight.animate}
          transition={{ ...fadeInSlight.transition, delay: 0.1 }}
          className="space-y-4"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-100">
            Lost in knowledge
          </h2>
          <p className="text-gray-400 text-lg max-w-md mx-auto leading-relaxed">
            The information you are looking for is currently unavailable or has
            found a new home.
          </p>
        </motion.div>

        <motion.div
          initial={fadeInSlight.initial}
          animate={fadeInSlight.animate}
          transition={{ ...fadeInSlight.transition, delay: 0.2 }}
          className="pt-2"
        >
          <Link to="/">
            <Button variant="secondary">Return to Homepage</Button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
