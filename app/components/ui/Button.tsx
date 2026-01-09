import type {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ReactNode,
} from "react";

interface ButtonBaseProps {
  variant?: "primary" | "secondary" | "ghost" | "icon";
  size?: "sm" | "md" | "lg" | "icon";
  className?: string;
  children?: ReactNode;
}

interface ButtonAsButton
  extends ButtonBaseProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined;
}

interface ButtonAsAnchor
  extends ButtonBaseProps,
    AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonAsButton | ButtonAsAnchor) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xs transition-all duration-300 select-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 font-semibold",
    secondary:
      "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-100 border border-gray-800 font-medium",
    ghost:
      "text-white hover:bg-gray-800/80 active:bg-gray-700 border-b border-gray-700/30",
    icon: "bg-gray-800/90 text-gray-100 hover:bg-gray-700 hover:text-white focus:ring-blue-400 focus:ring-offset-1",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "h-12 px-6 md:px-8 text-base",
    icon: "p-2",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (props.href) {
    return (
      <a
        className={combinedClasses}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={combinedClasses}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
