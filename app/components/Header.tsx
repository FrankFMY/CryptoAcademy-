"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Программа", href: "#program" },
  { label: "Спикеры", href: "#speakers" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Отзывы", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet to-cyan flex items-center justify-center">
              <span className="text-white font-bold text-xs">CA</span>
            </div>
            <span className="text-lg font-bold text-white font-heading">
              Crypto<span className="text-violet-light">Academy</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-muted hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#pricing"
              className="px-6 py-2.5 bg-violet hover:bg-violet-dark text-white text-sm font-semibold rounded-full transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
            >
              Начать обучение
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-white"
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-bg-card/95 backdrop-blur-xl border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium text-text-muted hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="block w-full text-center px-6 py-2.5 bg-violet hover:bg-violet-dark text-white font-semibold rounded-full transition-colors"
              >
                Начать обучение
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
