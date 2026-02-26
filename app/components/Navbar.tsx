import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Logotype from "./Logotype";
import { appUrl } from "../config";
import { Button } from "./ui";
import { Link } from "react-router";

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
      <nav className="fixed z-50 flex max-h-20 w-full items-center justify-between rounded-xs border-b border-gray-800 bg-gray-950/85 px-12 py-6 backdrop-blur-lg transition-all duration-200 lg:px-36">
        <div className="flex items-center gap-6">
          <Link to="/" className="group flex items-center">
            <Logotype className="h-4 w-auto" />
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

            {navbarLinks.length > 0 && <div className="mx-5 h-8 w-px bg-gray-800" />}

            <Link to={appUrl}>
              <Button variant="primary">Get started</Button>
            </Link>
          </div>

          <div className="relative lg:hidden">
            <Button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              variant="secondary"
              aria-label="Toggle menu"
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
                  className="absolute top-full right-0 z-50 mt-2 w-56 overflow-hidden rounded-xs border border-gray-700 bg-gray-900 shadow-lg shadow-black/20"
                >
                  <div className="p-3">
                    {navbarLinks.map((link) => (
                      <Link key={link.name} to={link.to} onClick={() => setIsMobileMenuOpen(false)}>
                        <Button variant="ghost" className="w-full">
                          {link.name}
                        </Button>
                      </Link>
                    ))}

                    {navbarLinks.length > 0 && <div className="my-3 h-px bg-gray-800" />}

                    <Link to={appUrl}>
                      <Button
                        onClick={() => setIsMobileMenuOpen(false)}
                        variant="primary"
                        className="w-full"
                      >
                        Get started
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
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-[1px] lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
