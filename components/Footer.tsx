import { business, locations } from "@/data/business";
import { navLinks } from "@/data/nav";
import { Logo } from "./Logo";
import { wrap } from "./styles";

export function Footer() {
  return (
    <footer className="bg-ink pt-14 pb-24 text-paper/80 md:pb-10">
      <div className={wrap}>
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <Logo tone="light" height={56} />

          <nav aria-label="Brza navigacija">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-[0.95rem] sm:flex sm:gap-8">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-crust">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <address className="space-y-1.5 text-[0.95rem] not-italic md:text-right">
            {locations.map((l) => (
              <a key={l.id} href={l.phone.href} className="block transition-colors hover:text-crust">
                {l.street} · {l.phone.display}
              </a>
            ))}
            <a href={business.instagram.url} target="_blank" rel="noopener noreferrer" className="block text-crust transition-colors hover:text-paper">
              {business.instagram.handle}
            </a>
          </address>
        </div>

        <p className="mt-12 border-t border-paper/10 pt-6 text-sm text-paper/50">
          © {new Date().getFullYear()} {business.name} · {business.tagline} od {business.since}, {business.city}
        </p>
      </div>
    </footer>
  );
}
