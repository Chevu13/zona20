"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { business } from "@/data/business";
import { img } from "@/lib/images";
import { Button, Reveal, ease } from "./ui";
import { h2, section, wrap } from "./styles";

// Šest kadrova, svaki za drugi deo Mammite; "area" određuje mesto u editorijalnoj mreži (globals.css).
const photos = [
  { src: img.terasa, alt: "Postavljen sto na terasi u hladu drveta", area: "a" },
  { src: img.pec, alt: "Plamen u peći za pizzu", area: "b" },
  { src: img.salsiccia, alt: "Pizza Con Salsiccia na terazzo stolu", area: "c" },
  { src: img.ulaz, alt: "Ulaz u Zonu 20 sa logom i terasom", area: "d" },
  { src: img.enterijer, alt: "Enterijer sa velikim staklenim zidovima", area: "e" },
  { src: img.aperitivo, alt: "Aperol, cappuccino i pizza bianca na terasi", area: "f" },
];

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const go = useCallback((d: number) => setIndex((i) => (i === null ? i : (i + d + photos.length) % photos.length)), []);
  const openAt = (i: number) => {
    lastFocus.current = document.activeElement as HTMLElement;
    setIndex(i);
  };
  const close = useCallback(() => {
    setIndex(null);
    lastFocus.current?.focus();
  }, []);

  useEffect(() => {
    if (index === null) return;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, go, close]);

  return (
    <section id="galerija" aria-labelledby="galerija-naslov" className={`bg-paper ${section}`}>
      <div className={wrap}>
        <Reveal className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
          <h2 id="galerija-naslov" className={h2}>
            Trenuci iz <span className="font-serif normal-case italic text-tomato">Zone</span>
          </h2>
          <Button variant="link" href={business.instagram.url}>
            {business.instagram.handle}
          </Button>
        </Reveal>

        <ul className="gallery-grid grid gap-2 md:gap-4">
          {photos.map((p, i) => (
            <li key={p.alt} style={{ gridArea: p.area }}>
              <button type="button" onClick={() => openAt(i)} className="group relative block h-full w-full overflow-hidden bg-ink" aria-label={`Uvećaj: ${p.alt}`}>
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {index !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Galerija fotografija"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-4 md:p-16"
            onClick={close}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4, ease }}
                className="relative h-full w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image src={photos[index].src} alt={photos[index].alt} fill sizes="100vw" className="object-contain" />
              </motion.div>
            </AnimatePresence>
            <p className="absolute bottom-5 left-1/2 w-[calc(100%-8rem)] -translate-x-1/2 text-center text-sm text-paper/70">
              {photos[index].alt} <span className="ml-2 text-paper/40">{index + 1} / {photos.length}</span>
            </p>
            <button ref={closeRef} type="button" onClick={close} aria-label="Zatvori galeriju" className="absolute top-4 right-4 grid h-12 w-12 place-items-center text-3xl text-paper">
              ×
            </button>
            {[-1, 1].map((d) => (
              <button
                key={d}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  go(d);
                }}
                aria-label={d < 0 ? "Prethodna fotografija" : "Sledeća fotografija"}
                className={`absolute bottom-3 grid h-12 w-12 place-items-center rounded-full border border-paper/30 text-paper transition-colors hover:bg-paper hover:text-ink md:top-1/2 md:bottom-auto md:-translate-y-1/2 ${d < 0 ? "left-3 md:left-6" : "right-3 md:right-6"}`}
              >
                {d < 0 ? "←" : "→"}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
