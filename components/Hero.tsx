import Image from "next/image";
import { business } from "@/data/business";
import { img } from "@/lib/images";
import { Button } from "./ui";
import { label, wrap } from "./styles";

export function Hero() {
  return (
    <section id="pocetna" className="relative overflow-hidden bg-ink lg:min-h-[100svh] lg:bg-cream">
      {/* Fotografija: gornji deo ekrana na telefonu, leva polovina na desktopu */}
      <div className="hero-in absolute inset-x-0 top-0 h-[48svh] overflow-hidden lg:inset-auto lg:top-24 lg:bottom-10 lg:left-10 lg:h-auto lg:w-[48%] lg:rounded-[2px]">
        <Image
          src={img.hero}
          alt="Napuljska pizza sa pršutom, maslinama i bosiljkom, izbliza sa naduvanom koricom"
          fill
          priority
          placeholder="blur"
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-[50%_45%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(21,21,21,.45),transparent_25%,transparent_50%,#151515_98%)] lg:hidden" />
      </div>

      <div className={`${wrap} relative z-10 flex min-h-[84svh] flex-col justify-end pt-28 pb-10 text-paper lg:min-h-[100svh] lg:items-end lg:justify-center lg:pb-0 lg:text-ink`}>
        <div className="hero-in hero-in-delay lg:w-[44%]">
          <p className={`${label} text-crust lg:text-basil`}>Pizzeria e osteria · od {business.since}.</p>
          <h1 className="mt-5 font-display text-[clamp(2.6rem,4.3vw,4rem)] font-medium leading-[1.04] tracking-[-0.015em]">
            Prava napuljska.
            <span className="block italic text-crust lg:text-basil">Pravo uživanje.</span>
          </h1>
          <p className="mt-6 max-w-[25rem] text-[1.1rem] leading-relaxed text-paper/85 lg:mt-7 lg:text-ink-soft">
            Od prve jutarnje kafe do večere uz čašu vina — dobar plan je uvek u Zoni.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#meni" className="w-full sm:w-auto">
              Pogledaj meni
            </Button>
            <Button variant="ghost" href={business.reservations} className="w-full sm:w-auto">
              Rezerviši sto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
