import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Logotype from "./Logotype";
import { repoUrl, appUrl } from "../config";
import { Button } from "./ui";

interface NavbarOption {
  name: string;
  href: string;
  icon?: string;
}

const navbarOptions: NavbarOption[] = [
  // {
  //   name: "Docs",
  //   href: "/docs",
  //   icon: "...",
  // },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="px-16 py-4 bg-gray-900/85 border-b border-blue-700 rounded-xs flex items-center justify-between backdrop-blur-lg transition-all duration-300 ease-out w-full fixed z-50">
        <div className="flex items-center gap-6">
          <a href="/" className="flex items-center group">
            <Logotype className="w-auto h-8 py-2 fill-white transition-all duration-300 group-hover:fill-blue-400" />
          </a>
          <div className="hidden lg:flex gap-2">
            {navbarOptions.map((option) => (
              <Button
                key={option.name}
                href={option.href}
                variant="secondary"
                size="sm"
                className="group relative"
              >
                {option.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden lg:flex gap-2 items-center">
            <Button
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="sm"
              className="group relative gap-2"
            >
              <svg
                className="size-3 shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z" />
              </svg>
              Star on GitHub
            </Button>

            <Button href={appUrl} variant="primary" size="sm">
              Get started
            </Button>
          </div>

          <div className="lg:hidden relative">
            <Button
              onClick={toggleMenu}
              type="button"
              variant="icon"
              size="icon"
              aria-label="Toggle menu"
            >
              <motion.svg
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z" />
                ) : (
                  <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" />
                )}
              </motion.svg>
            </Button>

            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  className="absolute right-0 top-full mt-2 w-56 bg-gray-900 border border-gray-600 rounded-xs overflow-hidden shadow-lg z-50"
                >
                  <div className="py-1">
                    {navbarOptions.map((option) => (
                      <Button
                        key={option.name}
                        href={option.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        variant="ghost"
                        className="w-full justify-start rounded-none px-4 py-3 gap-3"
                      >
                        {option.icon && (
                          <svg
                            className="size-4 shrink-0"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            {option.icon}
                          </svg>
                        )}
                        {option.name}
                      </Button>
                    ))}

                    <Button
                      href={repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                      variant="ghost"
                      className="w-full justify-start rounded-none px-4 py-3 gap-3"
                    >
                      <svg
                        className="size-4 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z" />
                      </svg>
                      Star on GitHub
                    </Button>

                    <div className="px-3 py-2">
                      <Button
                        href={appUrl}
                        onClick={() => setIsMobileMenuOpen(false)}
                        variant="primary"
                        className="w-full"
                      >
                        Get started
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
