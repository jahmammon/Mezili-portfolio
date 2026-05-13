"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Search, X } from "lucide-react";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }

      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-start justify-center pt-32 px-4"
        >
          <m.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="w-full max-w-2xl rounded-2xl border border-white/10 bg-panel/95 shadow-2xl overflow-hidden"
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-4">
              <Search size={18} className="text-emerald-primary" />

              <input
                autoFocus
                type="text"
                placeholder="Search systems..."
                className="w-full bg-transparent outline-none text-sm text-white placeholder:text-gray-500"
              />

              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6 text-sm text-gray-400 font-mono">
              No indexed commands available.
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
