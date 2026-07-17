interface SimpleBackgroundProps {
  className?: string;
}

export default function SimpleBackground({ className }: SimpleBackgroundProps) {
  return (
    <div className={`pointer-events-none fixed inset-0 z-0 select-none ${className || ""}`}>
      <div
        className="absolute inset-0 h-full w-full opacity-[0.07]"
        style={{
          background: "linear-gradient(180deg, #85c5ff 0%, #0388fc 50%, #808080 100%)",
        }}
      />
    </div>
  );
}
