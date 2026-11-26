"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { reserve, wolt } from "./Nav";
import { ease } from "./ui";

/** Lepljiva traka na telefonu: rezervacija i Wolt na dohvat palca, posle hero sekcije. */
export function MobileOrderBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const btn = "flex min-h-13 items-center justify-center rounded-full py-3.5 font-label text-[0.74rem] font-semibold uppercase tracking-[0.16em]";
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          exit={{ y: "110%" }}
          transition={{ duration: 0.5, ease }}
          className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden"
        >
          <a {...reserve} className={`${btn} bg-basil text-paper shadow-[0_10px_30px_rgba(21,21,21,.3)]`}>
            Rezerviši sto
          </a>
          <a {...wolt} className={`${btn} bg-tomato text-paper shadow-[0_10px_30px_rgba(21,21,21,.3)]`}>
            Wolt ↗
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
