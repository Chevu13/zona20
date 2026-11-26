"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { business } from "@/data/business";
import { menu, type MenuItem } from "@/data/menu";
import { menuPhotos } from "@/lib/menuPhotos";
import { Button, Reveal, ease } from "./ui";
import { h2, wrap } from "./styles";

const PREVIEW_COUNT = 6; // koliko pica se vidi pre "Prikaži ceo meni"

function Item({ item }: { item: MenuItem }) {
  const photo = menuPhotos[item.id];
  const diet = item.tags?.filter((t) => t === "vege" || t === "ljuta") ?? [];
  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="group flex items-center gap-4 border-b border-ink/10 py-4"
    >
      {photo ? (
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-ink/5">
          <Image src={photo} alt="" fill sizes="56px" className="scale-[1.15] object-cover transition-transform duration-500 group-hover:scale-[1.25]" />
        </div>
      ) : (
        <div aria-hidden className="h-14 w-14 shrink-0 rounded-full bg-ink/5" />
      )}
      <div className="min-w-0">
        <h4 className="font-display text-xl uppercase leading-tight tracking-wide">
          {item.name}
          {diet.map((d) => (
            <span key={d} className={`ml-2 align-middle font-sans text-[0.65rem] font-semibold tracking-[0.12em] normal-case ${d === "vege" ? "text-basil/80" : "text-tomato/80"}`}>
              {d}
            </span>
          ))}
        </h4>
        <p className="mt-1 text-base leading-normal text-ink-soft">{item.ingredients}</p>
      </div>
    </motion.li>
  );
}

export function Menu() {
  const [active, setActive] = useState(menu[0].id);
  const [expanded, setExpanded] = useState(false);
  const category = menu.find((c) => c.id === active)!;
  const total = category.groups.reduce((s, g) => s + g.items.length, 0);
  const collapsible = !category.compact && total > PREVIEW_COUNT;
  const collapsed = collapsible && !expanded;
  // U skraćenom prikazu: prvih nekoliko stavki redom kroz grupe.
  let left = collapsed ? PREVIEW_COUNT : Infinity;
  const groups = category.groups
    .map((g) => {
      const items = g.items.slice(0, Math.max(left, 0));
      left -= items.length;
      return { ...g, items };
    })
    .filter((g) => g.items.length > 0);

  return (
    <section id="meni" aria-labelledby="meni-naslov" className="bg-cream pt-12 pb-20 md:pt-16 md:pb-28">
      <div className={wrap}>
        <Reveal className="mb-8 flex flex-col gap-3 md:mb-10 md:flex-row md:items-end md:justify-between">
          <h2 id="meni-naslov" className={h2}>
            Naš <span className="font-serif normal-case italic text-tomato">meni</span>
          </h2>
          <p className="max-w-sm text-ink-soft md:pb-2 md:text-right">{category.intro}</p>
        </Reveal>

        <div>
        <div className="sticky top-[60px] z-20 -mx-5 border-b border-ink/15 bg-cream/95 px-5 backdrop-blur md:-mx-10 md:px-10 lg:top-[68px]">
          <div role="tablist" aria-label="Kategorije jelovnika" className="flex gap-7 overflow-x-auto [scrollbar-width:none]">
            {menu.map((c) => (
              <button
                key={c.id}
                role="tab"
                type="button"
                id={`tab-${c.id}`}
                aria-selected={active === c.id}
                aria-controls="meni-panel"
                onClick={() => {
                  setActive(c.id);
                  setExpanded(false);
                }}
                className={`relative min-h-12 shrink-0 font-display text-xl uppercase tracking-wide transition-colors duration-300 ${
                  active === c.id ? "text-ink" : "text-ink/40 hover:text-ink/70"
                }`}
              >
                {c.label}
                {active === c.id && <motion.span layoutId="tab-line" className="absolute inset-x-0 -bottom-px h-[2px] bg-tomato" transition={{ duration: 0.4, ease }} />}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={category.id}
            id="meni-panel"
            role="tabpanel"
            aria-labelledby={`tab-${category.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease }}
          >
            {category.compact ? (
              <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
                {category.groups.map((g) => (
                  <div key={g.label}>
                    <h3 className="text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-muted">{g.label}</h3>
                    <ul className="mt-3 space-y-1.5">
                      {g.items.map((i) => (
                        <li key={i.id}>{i.name}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              groups.map((g) => (
                <div key={g.label} className="mt-8">
                  {category.groups.length > 1 && (
                    <h3 className="mb-1 flex items-baseline gap-3">
                      <span className="text-[0.75rem] font-semibold uppercase tracking-[0.22em]">{g.label}</span>
                      <span className="font-serif text-lg italic text-muted">{g.note}</span>
                    </h3>
                  )}
                  <ul className="grid gap-x-12 md:grid-cols-2">
                    {g.items.map((item) => (
                      <Item key={item.id} item={item} />
                    ))}
                  </ul>
                </div>
              ))
            )}

            {collapsible && (
              <button
                type="button"
                onClick={() => {
                  // pri skraćivanju vrati posetioca na početak menija
                  if (expanded) document.getElementById("meni")?.scrollIntoView({ behavior: "smooth" });
                  setExpanded(!expanded);
                }}
                aria-expanded={expanded}
                aria-controls="meni-panel"
                className="mt-6 min-h-11 border-b border-current py-2 text-[0.78rem] font-semibold uppercase tracking-[0.18em] transition-colors hover:text-tomato"
              >
                {expanded ? "Prikaži manje" : `Prikaži ceo meni (${total})`}
              </button>
            )}
          </motion.div>
        </AnimatePresence>
        </div>

        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.95rem] text-muted">
            <span className="font-semibold text-basil">vege</span> vegetarijanska · <span className="font-semibold text-tomato">ljuta</span> sa ljutom papričicom · cene na Wolt-u
          </p>
          <Button href={business.wolt.url} className="w-full sm:w-auto">
            Naruči na Wolt-u
          </Button>
        </div>
      </div>
    </section>
  );
}
