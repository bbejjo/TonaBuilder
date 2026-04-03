"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, PhoneCall, X } from "lucide-react";

import { navItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("main");
  const [hasEntered, setHasEntered] = useState(false);
  const [targetWidth, setTargetWidth] = useState(320);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateWidth = () => {
      setTargetWidth(Math.min(window.innerWidth - 32, 1280));
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    const timer = window.setTimeout(() => {
      setHasEntered(true);
    }, 700);

    return () => {
      window.removeEventListener("resize", updateWidth);
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-section]");
    if (!sections.length) {
      return;
    }

    const updateActiveSection = () => {
      const viewportOffset = window.innerHeight * 0.28;

      let currentSection = sections[0]?.id ?? "main";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= viewportOffset) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const close = () => setIsOpen(false);
    window.addEventListener("hashchange", close);

    return () => window.removeEventListener("hashchange", close);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-[1280px] justify-center">
        <motion.div
          initial={false}
          animate={{ width: hasEntered ? targetWidth : 220 }}
          transition={{ duration: 3.0, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "relative isolate overflow-hidden rounded-full border backdrop-saturate-150 transition duration-300",
            isScrolled
              ? "border-blue-200/75 bg-white/68 shadow-panel backdrop-blur-2xl"
              : "border-blue-200/60 bg-white/58 backdrop-blur-xl",
          )}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/45 via-white/25 to-white/10" />

          <div className="relative z-10 flex h-16 items-center justify-between gap-4 px-4 sm:px-6">
            <a
              href="#main"
              onClick={() => setActiveSection("main")}
              className="shrink-0 font-display text-[2rem] tracking-[0.12em] text-blue-950"
            >
              Tona Builder
            </a>

            <motion.nav
              animate={{
                opacity: hasEntered ? 1 : 0,
                y: hasEntered ? 0 : -6,
              }}
              transition={{ duration: 0.65, delay: 0.8 }}
              className="hidden items-center gap-7 lg:flex"
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setActiveSection(item.id)}
                    className={cn(
                      "nav-link",
                      isActive &&
                        "text-blue-950 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-tona-500",
                    )}
                  >
                    {item.label}
                  </a>
                );
              })}
            </motion.nav>

            <motion.div
              animate={{
                opacity: hasEntered ? 1 : 0,
                x: hasEntered ? 0 : 12,
              }}
              transition={{ duration: 0.65, delay: 0.95 }}
              className="hidden items-center gap-3 lg:flex"
            >
              <a
                href="#contact"
                onClick={() => setActiveSection("contact")}
                className="button-primary"
              >
                <PhoneCall className="h-4 w-4" />
                დაგვიკავშირდით
              </a>
            </motion.div>

            <motion.button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? "მენიუს დახურვა" : "მენიუს გახსნა"}
              animate={{
                opacity: hasEntered ? 1 : 0,
                scale: hasEntered ? 1 : 0.92,
              }}
              transition={{ duration: 0.55, delay: 0.85 }}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-900 transition hover:border-blue-400 hover:bg-blue-50 lg:hidden"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.button>
          </div>
        </motion.div>
      </div>

      <div
        className={cn(
          "page-shell overflow-hidden transition-all duration-300 lg:hidden",
          isOpen
            ? "pointer-events-auto max-h-[420px] pt-3 opacity-100"
            : "pointer-events-none max-h-0 opacity-0",
        )}
      >
        <div className="panel rounded-[28px] border-blue-200 bg-white/95 p-5 backdrop-blur-xl">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-sm font-medium transition",
                    isActive
                      ? "bg-blue-800 text-tona-300"
                      : "text-blue-800 hover:bg-blue-50 hover:text-blue-950",
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
          <a
            href="#contact"
            onClick={() => {
              setActiveSection("contact");
              setIsOpen(false);
            }}
            className="button-primary mt-4 w-full"
          >
            <PhoneCall className="h-4 w-4" />
            დაგვიკავშირდით
          </a>
        </div>
      </div>
    </header>
  );
}
