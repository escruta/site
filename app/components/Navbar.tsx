import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Logotype from "./Logotype";
import { appUrl } from "../config";
import { Button } from "./ui";
import { Link } from "react-router";
import { cn } from "@/lib/utils";

interface NavbarLink {
  name: string;
  to: string;
}

const navbarLinks: NavbarLink[] = [];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <nav
        className={cn(
          "fixed z-50 flex max-h-20 w-full items-center justify-between rounded-xs border-b px-12 py-6 backdrop-blur-lg transition-all duration-200 lg:px-36",
          "border-gray-200 bg-white/85 dark:border-gray-800 dark:bg-black/85",
        )}
      >
        <div className="flex items-center gap-6">
          <Link to="/" className="group flex items-center">
            <Logotype className="h-4 w-auto text-gray-900 transition-colors duration-300 group-hover:text-blue-500 dark:text-gray-50 dark:group-hover:text-blue-400" />
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 lg:flex">
            <div className="flex gap-2">
              {navbarLinks.map((link) => (
                <Link key={link.name} to={link.to}>
                  <Button variant="ghost">{link.name}</Button>
                </Link>
              ))}
            </div>

            {navbarLinks.length > 0 && (
              <div className="mx-5 h-8 w-px bg-gray-200 dark:bg-gray-800" />
            )}

            <Link to={appUrl}>
              <Button
                variant="primary"
                icon={
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
                  </svg>
                }
              >
                Download
              </Button>
            </Link>
          </div>

          <div className="relative lg:hidden">
            <Button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              variant="secondary"
              ariaLabel="Toggle menu"
            >
              <motion.svg
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                className="size-5"
                fill="currentColor"
                viewBox="0 0 24 24"
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
                  className={cn(
                    "absolute top-full right-0 z-50 mt-2 w-56 overflow-hidden rounded-xs border shadow-lg",
                    "border-gray-200 bg-white shadow-black/10 dark:border-gray-700 dark:bg-gray-900 dark:shadow-black/30",
                  )}
                >
                  <div className="p-3">
                    {navbarLinks.map((link) => (
                      <Link key={link.name} to={link.to} onClick={() => setIsMobileMenuOpen(false)}>
                        <Button variant="ghost" className="w-full">
                          {link.name}
                        </Button>
                      </Link>
                    ))}

                    {navbarLinks.length > 0 && (
                      <div className="my-3 h-px bg-gray-200 dark:bg-gray-800" />
                    )}

                    <Link to={appUrl}>
                      <Button
                        onClick={() => setIsMobileMenuOpen(false)}
                        variant="primary"
                        className="w-full"
                        icon={
                          <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                            <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
                          </svg>
                        }
                      >
                        Download
                      </Button>
                    </Link>
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
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[1px] lg:hidden dark:bg-black/60"
          />
        )}
      </AnimatePresence>
    </>
  );
}
