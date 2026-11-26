import Image from "next/image";
import { signatureItems } from "@/data/menu";
import { img } from "@/lib/images";
import { Button, Reveal } from "./ui";
import { accent, h2, wrap } from "./styles";

export function Signature() {
  return (
    <section aria-labelledby="potpisi-naslov" className="bg-paper pt-20 pb-12 md:pt-28 md:pb-16">
      <div className={wrap}>
        <Reveal className="mb-10 md:mb-14">
          <h2 id="potpisi-naslov" className={h2}>
            Premium <span className={accent}>pizze</span>
          </h2>
        </Reveal>

        {/* Telefon: horizontalni niz koji se prevlači; desktop: tri kolone */}
        <ul className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0 lg:gap-10">
          {signatureItems.map((item, i) => (
            <li key={item.id} className="w-[72%] shrink-0 snap-start md:w-auto">
              <Reveal delay={i * 0.08}>
                <div className="group relative aspect-[4/5] overflow-hidden bg-ink">
                  <Image
                    src={img[item.image!]}
                    alt={`Pizza ${item.name}`}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 768px) 33vw, 72vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <h3 className="mt-6 font-display text-[1.75rem] font-medium leading-tight">{item.name}</h3>
                <p className="mt-2 max-w-sm text-[1.02rem] leading-relaxed text-ink-soft">{item.ingredients}</p>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-10 md:mt-14">
          <Button variant="link" href="#meni">
            Pogledaj ceo meni
          </Button>
        </div>
      </div>
    </section>
  );
}
