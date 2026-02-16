type ButtonVariant = "primary" | "secondary" | "danger" | "success" | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  icon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
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
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xs font-semibold transition-all duration-200 focus:outline-none select-none whitespace-nowrap cursor-pointer";

  const sizeStyles: Record<"sm" | "md" | "lg", string> = {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-6 text-base",
  };

  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      "bg-blue-600 border-2 border-blue-500 text-white shadow-sm shadow-blue-500/30 hover:shadow-md hover:shadow-blue-500/40 hover:ring-2 hover:ring-blue-500/50 hover:ring-offset-1 hover:ring-offset-gray-900 active:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900",
    secondary:
      "bg-gray-900/50 border border-gray-700 text-gray-300 hover:bg-gray-800/50 hover:border-gray-600 hover:ring-1 hover:ring-gray-700 hover:ring-offset-1 hover:ring-offset-gray-900 active:bg-gray-800 focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-gray-900",
    danger:
      "bg-red-600 border-2 border-red-500 text-white shadow-sm shadow-red-500/30 hover:shadow-md hover:shadow-red-500/40 hover:ring-2 hover:ring-red-500/50 hover:ring-offset-1 hover:ring-offset-gray-900 active:bg-red-700 focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-gray-900",
    success:
      "bg-green-600 border-2 border-green-500 text-white shadow-sm shadow-green-600/30 hover:shadow-md hover:shadow-green-600/40 hover:ring-2 hover:ring-green-500/50 hover:ring-offset-1 hover:ring-offset-gray-900 active:bg-green-700 focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900",
    ghost:
      "bg-transparent border-0 text-gray-400 hover:bg-gray-800/30 hover:border-gray-500 hover:ring-1 hover:ring-gray-600 hover:ring-offset-1 hover:ring-offset-gray-900 active:bg-gray-800/50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900",
  };

  const disabledStyles =
    "opacity-50 cursor-not-allowed pointer-events-none shadow-none ring-0 hover:ring-0";

  return (
    <button
      onClick={onClick}
      className={[
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        className,
        disabled ? disabledStyles : "",
      ].join(" ")}
      type={type}
      disabled={disabled}
    >
      {icon && (
        <span className="mr-2 flex items-center justify-center size-5">
          {icon}
        </span>
      )}
      {children}
    </button>
  );
}
