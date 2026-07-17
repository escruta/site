import { useEffect, useRef } from "react";
import InteractiveCard from "./InteractiveCard";
import { cn } from "@/lib/utils";

const features: string[] = [
  "Organize your knowledge in structured workspaces",
  "AI assistant to answer questions about your sources",
  "Capture and link ideas with rich context",
  "Generate mind maps and flashcards",
];

function FeatureCard({ text }: { text: string }) {
  return (
    <InteractiveCard className={cn("shrink-0 px-8 py-4")}>
      <span className="text-gray-700 dark:text-gray-300">{text}</span>
    </InteractiveCard>
  );
}

export default function FeatureSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPos = 0;
    const speed = 0.36;

    const animate = () => {
      scrollPos += speed;
      if (scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0;
      }
      scrollContainer.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="relative flex w-full overflow-hidden bg-white pb-16 dark:bg-gray-950">
      <div ref={scrollRef} className="flex gap-8 overflow-x-hidden py-4 whitespace-nowrap">
        {features.map((feature) => (
          <FeatureCard key={feature} text={feature} />
        ))}
        {features.map((feature) => (
          <FeatureCard key={`dup-${feature}`} text={feature} />
        ))}
      </div>
    </section>
  );
}
