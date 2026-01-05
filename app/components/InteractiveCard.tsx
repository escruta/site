import { motion, useMotionValue, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function InteractiveCard({
  children,
  className,
  style,
}: InteractiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const glowBackground = useTransform(
    [mouseX, mouseY],
    ([x, y]) =>
      `radial-gradient(300px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.1), transparent 60%)`,
  );

  const borderGlowBackground = useTransform(
    [mouseX, mouseY],
    ([x, y]) =>
      `radial-gradient(300px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.6), transparent 60%)`,
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const isDesktop = window.matchMedia("(min-width: 768px)").matches;
      if (!isDesktop || !cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const threshold = 100;
      const isNear =
        e.clientX >= rect.left - threshold &&
        e.clientX <= rect.right + threshold &&
        e.clientY >= rect.top - threshold &&
        e.clientY <= rect.bottom + threshold;

      if (isNear) {
        mouseX.set(x);
        mouseY.set(y);
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleTouchStart = () => {
      setIsTouch(true);
      setTimeout(() => setIsTouch(false), 200);
    };

    window.addEventListener("mousemove", handleMouseMove);
    cardRef.current?.addEventListener("touchstart", handleTouchStart);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cardRef.current?.removeEventListener("touchstart", handleTouchStart);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={cardRef}
      className={`interactive-card group relative rounded-xs bg-gray-900/50 border border-gray-800 transition-all duration-300 cursor-pointer overflow-hidden ${className || ""}`}
      style={style}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => {
        setIsPressed(false);
      }}
    >
      <style>{`
        @media (max-width: 767px) {
          .interactive-card:active {
            outline: 2px solid rgb(59, 130, 246);
            outline-offset: 2px;
          }
        }
      `}</style>

      {/* Glow Effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: glowBackground,
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Border Glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-xs transition-opacity duration-300"
        style={{
          background: borderGlowBackground,
          opacity: isHovered ? 1 : 0,
          padding: "1px",
          WebkitMaskImage:
            "linear-gradient(#fff 0 0), linear-gradient(#fff 0 0)",
          WebkitMaskClip: "content-box, border-box",
          WebkitMaskComposite: "xor",
          maskImage: "linear-gradient(#fff 0 0), linear-gradient(#fff 0 0)",
          maskClip: "content-box, border-box",
          maskComposite: "exclude",
        }}
      />

      {/* Press Effect */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xs transition-opacity duration-200"
        style={{
          opacity: isPressed ? 1 : 0,
          background:
            "linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(30, 64, 175, 0.6))",
          padding: "1px",
          WebkitMaskImage:
            "linear-gradient(#fff 0 0), linear-gradient(#fff 0 0)",
          WebkitMaskClip: "content-box, border-box",
          WebkitMaskComposite: "xor",
          maskImage: "linear-gradient(#fff 0 0), linear-gradient(#fff 0 0)",
          maskClip: "content-box, border-box",
          maskComposite: "exclude",
        }}
      />

      {/* Touch Effect (Mobile) */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xs transition-opacity duration-150"
        style={{
          opacity: isTouch ? 1 : 0,
          background:
            "linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(30, 64, 175, 0.2))",
          padding: "1px",
          WebkitMaskImage:
            "linear-gradient(#fff 0 0), linear-gradient(#fff 0 0)",
          WebkitMaskClip: "content-box, border-box",
          WebkitMaskComposite: "xor",
          maskImage: "linear-gradient(#fff 0 0), linear-gradient(#fff 0 0)",
          maskClip: "content-box, border-box",
          maskComposite: "exclude",
        }}
      />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
