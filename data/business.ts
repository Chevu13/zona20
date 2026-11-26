/**
 * Podaci o lokalu. VERIFIKOVANO = preuzeto sa Instagram profila @zona20_pizzeriaeosteria
 * (bio, objave, štampani jelovnik) ili sa njihovih Wolt stranica (novembar 2026).
 * Polja sa TODO treba potvrditi sa vlasnikom pre objave.
 */
export type Location = {
  id: string;
  name: string;
  street: string;
  area: string;
  phone: { display: string; href: string; e164: string };
  wolt: string;
  maps: string;
  embed: string;
};

const mapsUrl = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const embedUrl = (q: string) => `https://maps.google.com/maps?q=${encodeURIComponent(q)}&z=15&output=embed`;

// VERIFIKOVANO (bio): dve lokacije i dva broja telefona
export const locations: Location[] = [
  {
    id: "vozdovac",
    name: "Voždovac",
    street: "Vojvode Stepe 118",
    area: "Voždovac, Beograd",
    phone: { display: "066 / 520-0025", href: "tel:+381665200025", e164: "+381665200025" },
    wolt: "https://wolt.com/sr/srb/belgrade/restaurant/zona-20-pizzeria-e-osterria",
    maps: mapsUrl("Zona 20 Pizzeria e Osteria, Vojvode Stepe 118, Beograd"),
    embed: embedUrl("Zona 20 Pizzeria e Osteria, Vojvode Stepe 118, Beograd"),
  },
  {
    id: "stepa",
    name: "Naselje Stepa Stepanović",
    street: "Generala Štefanika 18",
    area: "Naselje Stepa Stepanović, Beograd",
    phone: { display: "065 / 680-0086", href: "tel:+381656800086", e164: "+381656800086" },
    wolt: "https://wolt.com/sr/srb/belgrade/restaurant/pizzeria-zona-20-naselje-stepa",
    maps: mapsUrl("Generala Štefanika 18, Beograd"),
    embed: embedUrl("Generala Štefanika 18, Beograd"),
  },
];

export const main = locations[0];

export const business = {
  name: "Zona 20 Pizzeria e Osteria",
  shortName: "Zona 20",
  tagline: "Napuljska pizza", // VERIFIKOVANO (bio: "Neapolitan pizza place")
  since: 2016, // VERIFIKOVANO (logo)
  city: "Beograd",
  country: "RS",

  // VERIFIKOVANO (bio): "MON-SAT 8-23:30 SUN 9-23:30"
  hours: [
    { label: "Pon – sub", open: "08:00", close: "23:30" },
    { label: "Nedelja", open: "09:00", close: "23:30" },
  ],
  hoursSchema: ["Mo-Sa 08:00-23:30", "Su 09:00-23:30"],
  breakfast: "08:30 – 13:00", // VERIFIKOVANO (štampani jelovnik)

  // VERIFIKOVANO (bio): rezervacije preko Ontopo
  reservations: "https://ontopo.com/zona20",

  instagram: { handle: "@zona20_pizzeriaeosteria", url: "https://www.instagram.com/zona20_pizzeriaeosteria/" },

  /** Glavno dugme "Naruči" vodi na Wolt prve lokacije. */
  wolt: { url: main.wolt },

  // TODO: upisati pravi domen pre objave (koristi se za SEO i Open Graph).
  siteUrl: "https://zona20.vercel.app",
} as const;
