import Image from "next/image";
import { business } from "@/data/business";
import { img } from "@/lib/images";
import { Button, Reveal } from "./ui";
import { h2, label, section, wrap } from "./styles";

const day = ["Doručak", "Kafa", "Ručak", "Večera"];

export function About() {
  return (
    <section id="o-nama" aria-labelledby="o-nama-naslov" className={`bg-basil text-paper ${section}`}>
      <div className={`${wrap} grid items-center gap-10 md:grid-cols-2 md:gap-16 lg:gap-24`}>
        <Reveal className="relative aspect-[4/5] overflow-hidden">
          <Image src={img.konobar} alt="Konobar dodaje biber na pizzu za stolom" fill placeholder="blur" sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
        </Reveal>

        <Reveal delay={0.1}>
          <p className={`${label} text-crust`}>Od {business.since}. godine</p>
          <h2 id="o-nama-naslov" className={`${h2} mt-5`}>
            Pizzeria <span className="italic text-crust">e osteria</span>
          </h2>
          <div className="mt-8 max-w-md space-y-5 text-lg leading-relaxed text-paper/85">
            <p>
              Zona 20 je napuljska pizzeria i osteria u Beogradu, od {business.since}. godine. Testo pažljivo fermentiše, a pizze izlaze iz peći mekane, sa
              karakterističnom napuljskom koricom.
            </p>
            <p>Mesto za ceo dan — od jutarnje kafe i doručka, preko ručka, do večere uz pizzu i čašu vina. Na Voždovcu i u naselju Stepa Stepanović.</p>
          </div>
          <ul className={`${label} mt-9 flex flex-wrap items-center gap-x-4 gap-y-2 text-paper/70`} aria-label="Tokom celog dana">
            {day.map((d, i) => (
              <li key={d} className="flex items-center gap-4">
                {i > 0 && <span aria-hidden className="h-px w-5 bg-crust/70" />}
                {d}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button variant="link" href="#lokacije">
              Pronađite nas
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
