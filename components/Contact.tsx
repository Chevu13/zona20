import { business, locations, main } from "@/data/business";
import { Button, Reveal } from "./ui";
import { h2, section, wrap } from "./styles";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const label = "text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-muted";
const link = "underline decoration-ink/20 underline-offset-4 transition-colors hover:text-tomato hover:decoration-tomato";

export function Contact() {
  return (
    <section id="kontakt" aria-labelledby="kontakt-naslov" className={`bg-cream ${section}`}>
      <div className={`${wrap} grid gap-10 md:grid-cols-2 md:gap-16 lg:gap-24`}>
        <Reveal>
          <h2 id="kontakt-naslov" className={h2}>
            Vidimo se u <span className="font-serif normal-case italic text-tomato">Zoni</span>
          </h2>

          <div className="mt-10 grid gap-x-8 gap-y-8 text-lg sm:grid-cols-2">
            {locations.map((l) => (
              <div key={l.id}>
                <p className={label}>{l.name}</p>
                <a href={l.maps} {...ext} className={`mt-2 inline-block ${link}`}>
                  {l.street}
                </a>
                <a href={l.phone.href} className={`mt-1 block w-fit ${link}`}>
                  {l.phone.display}
                </a>
                <a href={l.wolt} {...ext} className="mt-2 block w-fit text-[0.95rem] text-muted transition-colors hover:text-tomato">
                  Wolt ↗
                </a>
              </div>
            ))}
            <div>
              <p className={label}>Radno vreme</p>
              <dl className="mt-2">
                {business.hours.map((h) => (
                  <div key={h.label} className="flex gap-3">
                    <dt className="w-24 shrink-0">{h.label}</dt>
                    <dd>
                      {h.open} – {h.close}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-1 text-[0.95rem] text-muted">Doručak {business.breakfast}</p>
            </div>
            <div>
              <p className={label}>Instagram</p>
              <a href={business.instagram.url} {...ext} className={`mt-2 inline-block break-all ${link}`}>
                {business.instagram.handle}
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={business.reservations} className="w-full sm:w-auto">
              Rezerviši sto
            </Button>
            <Button variant="ghost" href={business.wolt.url} className="w-full sm:w-auto">
              Naruči na Wolt-u
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative aspect-[4/3] overflow-hidden bg-ink/5 md:aspect-auto md:min-h-[26rem]">
          <iframe
            title={`Mapa: ${business.name}, ${main.street}`}
            src={main.embed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0 grayscale-[.6] sepia-[.15]"
          />
        </Reveal>
      </div>
    </section>
  );
}
