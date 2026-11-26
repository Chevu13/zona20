import Image from "next/image";
import { img } from "@/lib/images";
import { Button, Reveal } from "./ui";
import { h2, section, wrap } from "./styles";

export function About() {
  return (
    <section id="o-nama" aria-labelledby="o-nama-naslov" className={`bg-basil text-paper ${section}`}>
      <div className={`${wrap} grid items-center gap-10 md:grid-cols-2 md:gap-16 lg:gap-24`}>
        <Reveal className="relative aspect-[4/5] overflow-hidden">
          <Image src={img.konobar} alt="Konobar dodaje biber na pizzu za stolom" fill placeholder="blur" sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 id="o-nama-naslov" className={h2}>
            Pizzeria <span className="font-serif normal-case italic text-crust">e osteria</span>
          </h2>
          <div className="mt-8 max-w-md space-y-5 text-lg leading-relaxed text-paper/80">
            <p>Zona 20 je napuljska pizzeria i osteria u Beogradu, od 2016. godine. Testo pažljivo fermentiše, a pizze izlaze iz peći mekane, sa karakterističnom napuljskom koricom.</p>
            <p>Dočekujemo vas od jutra — doručak, kafa i ceđeni sokovi — do večere uz pizzu i čašu vina. Na Voždovcu i u naselju Stepa Stepanović.</p>
          </div>
          <div className="mt-10">
            <Button variant="link" href="#kontakt">
              Pronađite nas
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
