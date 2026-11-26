"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { wolt } from "./Nav";
import { ease } from "./ui";

/** Lepljivo dugme za Wolt na mobilnom, pojavljuje se posle hero sekcije. */
export function MobileOrderBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          exit={{ y: "110%" }}
          transition={{ duration: 0.5, ease }}
          className="fixed inset-x-0 bottom-0 z-40 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden"
        >
          <a {...wolt} className="flex min-h-14 w-full items-center justify-between bg-tomato px-5 text-paper shadow-[0_12px_40px_rgba(23,19,16,.35)]">
            <span className="text-[0.8rem] font-semibold uppercase tracking-[0.18em]">Naruči na Wolt-u</span>
            <span aria-hidden className="font-display text-lg">↗</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
