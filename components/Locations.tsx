"use client";

import { useState } from "react";
import { business, locations } from "@/data/business";
import { Reveal } from "./ui";
import { accent, h2, label, section, wrap } from "./styles";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const pill =
  "inline-flex min-h-11 items-center justify-center gap-1 rounded-full border px-2 font-label text-[0.68rem] font-semibold uppercase tracking-[0.1em] transition-colors sm:px-4";

export function Locations() {
  const [active, setActive] = useState(locations[0].id);
  const current = locations.find((l) => l.id === active)!;

  return (
    <section id="lokacije" aria-labelledby="lokacije-naslov" className={`bg-cream ${section}`}>
      <div className={wrap}>
        <Reveal className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
          <h2 id="lokacije-naslov" className={h2}>
            Naše <span className={accent}>lokacije</span>
          </h2>
          <div className="md:text-right">
            <p className={`${label} mb-2 text-muted`}>Radno vreme</p>
            <dl className="inline-grid grid-cols-[auto_auto] gap-x-6 gap-y-1 text-[1.02rem]">
              {business.hours.map((h) => (
                <div key={h.label} className="contents">
                  <dt>{h.label}</dt>
                  <dd className="tabular-nums">
                    {h.open} – {h.close}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-1 text-[0.95rem] text-muted">Doručak {business.breakfast}</p>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
          {/* Dve ravnopravne kartice; izabrana se prikazuje na mapi */}
          <div className="grid gap-4 md:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {locations.map((l) => {
              const on = l.id === active;
              return (
                <article
                  key={l.id}
                  className={`rounded-[4px] border p-6 transition-colors duration-300 md:p-7 ${on ? "border-basil bg-paper shadow-[0_1px_0_rgba(47,66,48,.25)]" : "border-ink/15 bg-transparent"}`}
                >
                  <button
                    type="button"
                    onClick={() => setActive(l.id)}
                    aria-pressed={on}
                    aria-label={`Prikaži lokaciju ${l.name} na mapi`}
                    className="block w-full text-left"
                  >
                    <span className={`${label} flex items-center gap-2 ${on ? "text-basil" : "text-muted"}`}>
                      <span aria-hidden className={`h-2 w-2 rounded-full ${on ? "bg-tomato" : "bg-ink/20"}`} />
                      {l.name}
                    </span>
                    <span className="mt-3 block font-display text-[1.7rem] font-medium leading-tight">{l.street}</span>
                  </button>
                  <a href={l.phone.href} className="mt-2 inline-block text-lg underline decoration-ink/25 underline-offset-4 transition-colors hover:text-basil">
                    {l.phone.display}
                  </a>
                  <div className="mt-5 grid grid-cols-3 gap-2 sm:flex sm:flex-wrap">
                    <a href={l.maps} {...ext} className={`${pill} border-ink/25 hover:border-ink hover:bg-ink hover:text-paper`}>
                      Uputstva ↗
                    </a>
                    <a href={business.reservations} {...ext} className={`${pill} border-basil bg-basil text-paper hover:border-ink hover:bg-ink`}>
                      Rezerviši ↗
                    </a>
                    <a href={l.wolt} {...ext} className={`${pill} border-tomato bg-tomato text-paper hover:border-ink hover:bg-ink`}>
                      Wolt ↗
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="flex flex-col gap-3 lg:col-span-7">
            <div role="tablist" aria-label="Izbor lokacije na mapi" className="flex gap-2">
              {locations.map((l) => (
                <button
                  key={l.id}
                  role="tab"
                  type="button"
                  aria-selected={l.id === active}
                  onClick={() => setActive(l.id)}
                  className={`min-h-10 rounded-full px-4 font-label text-[0.7rem] font-semibold uppercase tracking-[0.12em] transition-colors ${
                    l.id === active ? "bg-basil text-paper" : "text-ink/60 hover:text-ink"
                  }`}
                >
                  {l.name}
                </button>
              ))}
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[4px] bg-ink/5 lg:aspect-auto lg:flex-1 lg:min-h-[24rem]">
              <iframe
                key={current.id}
                title={`Mapa: ${business.name}, ${current.street}`}
                src={current.embed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0 grayscale-[.5] sepia-[.12]"
              />
            </div>
          </div>
        </div>

        <p className="mt-8 text-[0.95rem] text-muted">
          Pratite nas na Instagramu:{" "}
          <a href={business.instagram.url} {...ext} className="break-all text-ink underline decoration-ink/25 underline-offset-4 hover:text-basil">
            {business.instagram.handle}
          </a>
        </p>
      </div>
    </section>
  );
}
