import { cn } from "@/lib/utils";

interface SimpleBackgroundProps {
  className?: string;
}

export default function SimpleBackground({ className }: SimpleBackgroundProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 z-0 select-none m-0", className)}>
      <div
        className="absolute inset-0 h-full w-full opacity-[0.03]"
        style={{
          background: "linear-gradient(180deg, #85c5ff 0%, #0388fc 50%, #808080 100%)",
        }}
      />
    </div>
  );
}
