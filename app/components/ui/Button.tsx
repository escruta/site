import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  icon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

export function Button({
  children,
  onClick,
  className = "",
  variant = "primary",
  disabled = false,
  icon,
  size = "md",
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xs font-semibold transition-all duration-200 focus:outline-none select-none whitespace-nowrap cursor-pointer";

  const sizeStyles: Record<"sm" | "md" | "lg", string> = {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-6 text-base",
  };

  const iconSizeStyles: Record<"sm" | "md" | "lg", string> = {
    sm: "size-4",
    md: "size-5",
    lg: "size-6",
  };

  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      "bg-blue-500 border-2 border-blue-600 text-white shadow-sm shadow-blue-500/30 hover:shadow-md hover:shadow-blue-500/40 hover:ring-2 hover:ring-blue-300 hover:ring-offset-1 hover:ring-offset-white dark:hover:ring-offset-gray-900 active:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 dark:bg-blue-600 dark:border-blue-500 dark:hover:ring-blue-500/50",
    secondary:
      "bg-white border border-gray-200 text-gray-600 hover:border-blue-300 hover:bg-blue-50 hover:ring-1 hover:ring-blue-200 hover:ring-offset-1 hover:ring-offset-white dark:hover:ring-offset-gray-900 active:bg-blue-100 dark:active:bg-gray-800 focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:border-gray-500",
  };

  const disabledStyles =
    "opacity-50 cursor-not-allowed pointer-events-none shadow-none ring-0 hover:ring-0";

  return (
    <button
      onClick={onClick}
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className, {
        [disabledStyles]: disabled,
      })}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {icon && (
        <span className={cn("mr-2 flex items-center justify-center", iconSizeStyles[size])}>
          {icon}
        </span>
      )}
      {children}
    </button>
  );
}
