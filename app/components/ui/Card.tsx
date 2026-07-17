import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Static card surface mirroring the visual style of the app's Card primitive
 * (border + ring + rounded-xs, white / gray-900 surface). Marketing-only build
 * of the site: no expandable / overlay logic is included.
 */
export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xs border border-gray-200 bg-white p-4 ring-1 ring-gray-500/5",
        "dark:border-gray-700 dark:bg-gray-900 dark:ring-gray-500/10",
        className,
      )}
    >
      {children}
    </div>
  );
}
