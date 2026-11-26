import Image from "next/image";
import { business } from "@/data/business";
import { img } from "@/lib/images";
import { Button } from "./ui";
import { wrap } from "./styles";

export function Hero() {
  return (
    <section id="pocetna" className="relative overflow-hidden bg-ink lg:min-h-[100svh] lg:bg-cream">
      {/* Fotografija: gornji deo ekrana na telefonu, dominantni stub na desktopu */}
      <div
        className="hero-in absolute inset-x-0 top-0 h-[46svh] overflow-hidden lg:inset-auto lg:top-24 lg:right-10 lg:bottom-10 lg:h-auto lg:w-[47%]"
      >
        <Image src={img.heroMobile} alt="Pizza sa kajganom, rukolom i čeri paradajzom na plavom tanjiru" fill priority placeholder="blur" sizes="100vw" className="object-cover lg:hidden" />
        <Image
          src={img.hero}
          alt="Napuljska pizza sa pršutom, maslinama i bosiljkom izbliza"
          fill
          priority
          placeholder="blur"
          sizes="47vw"
          className="hidden object-cover object-[50%_50%] lg:block"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(23,19,16,.45),transparent_25%,transparent_50%,#171310_98%)] lg:hidden" />
      </div>

      <div className={`${wrap} relative z-10 flex min-h-[84svh] flex-col lg:min-h-[100svh] justify-end pt-28 pb-10 text-paper lg:justify-center lg:pb-0 lg:text-ink`}>
        <div className="hero-in hero-in-delay lg:max-w-[46%]">
          <h1 className="font-display text-[clamp(3.5rem,14vw,8.25rem)] leading-[0.86] uppercase">
            Prava
            <span className="block pl-[0.5em] font-serif text-[0.7em] normal-case italic leading-[1.05] text-crust lg:text-tomato">napuljska</span>
            pizza<span className="text-tomato">.</span>
          </h1>
          <p className="mt-6 max-w-[21rem] font-serif text-[1.35rem] leading-snug text-paper/85 lg:mt-8 lg:text-ink-soft">
            Od jutarnje kafe do večere uz vino — dobar plan je uvek u Zoni.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#meni" className="w-full sm:w-auto">
              Pogledaj meni
            </Button>
            <Button variant="ghost" href={business.wolt.url} className="w-full sm:w-auto">
              Naruči na Wolt-u
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
