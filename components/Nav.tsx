"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { business, main } from "@/data/business";
import { navLinks } from "@/data/nav";
import { Logo } from "./Logo";
import { ease } from "./ui";

export const wolt = { href: business.wolt.url, target: "_blank", rel: "noopener noreferrer" } as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,color,box-shadow,padding] duration-500 ${
          solid ? "bg-cream/92 py-2 text-ink shadow-[0_1px_0_rgba(23,19,16,.12)] backdrop-blur-md" : "py-4 text-paper lg:text-ink"
        } ${menuOpen ? "!bg-ink !text-paper !shadow-none" : ""}`}
      >
        <nav aria-label="Glavna navigacija" className="mx-auto flex w-full max-w-[1320px] items-center justify-between px-5 md:px-10">
          <a href="#pocetna" aria-label="Zona 20 — početna" onClick={() => setMenuOpen(false)}>
            <Logo priority height={solid ? 34 : 42} tone={menuOpen ? "light" : solid ? "dark" : "auto"} />
          </a>

          <ul className="hidden items-center gap-9 lg:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="group relative text-[0.78rem] font-semibold uppercase tracking-[0.2em]">
                  {l.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-tomato transition-transform duration-500 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 md:gap-4">
            <a
              {...wolt}
              className="hidden min-h-11 items-center bg-tomato px-6 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-paper transition-colors duration-300 hover:bg-ink sm:inline-flex"
            >
              Naruči na Wolt-u
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobilni-meni"
              aria-label={menuOpen ? "Zatvori meni" : "Otvori meni"}
              className="grid h-11 w-11 place-items-center lg:hidden"
            >
              <span className="relative block h-3 w-6">
                <span className={`absolute left-0 h-[1.5px] w-full bg-current transition-all duration-500 ${menuOpen ? "top-1.5 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 h-[1.5px] w-full bg-current transition-all duration-500 ${menuOpen ? "top-1.5 -rotate-45" : "top-3"}`} />
              </span>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobilni-meni"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, ease }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-ink px-6 pt-28 pb-10 text-paper lg:hidden"
          >
            <ul className="space-y-1">
              {navLinks.map((l, i) => (
                <li key={l.href} className="overflow-hidden">
                  <motion.a
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease, delay: 0.15 + i * 0.06 }}
                    className="flex items-baseline gap-4 py-1 font-display text-[3.4rem] uppercase leading-[1.05]"
                  >
                    <span className="font-sans text-xs tracking-widest text-crust">0{i + 1}</span>
                    {l.label}
                  </motion.a>
                </li>
              ))}
            </ul>
            <div className="space-y-5">
              <a {...wolt} className="flex min-h-14 w-full items-center justify-center bg-tomato text-sm font-semibold uppercase tracking-[0.2em]">
                Naruči na Wolt-u ↗
              </a>
              <div className="flex justify-between text-sm text-paper/70">
                <a href={main.phone.href}>{main.phone.display}</a>
                <a href={business.instagram.url} target="_blank" rel="noopener noreferrer">
                  {business.instagram.handle}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
