import type { ImageKey } from "@/lib/images";

/**
 * JELOVNIK — jedino mesto gde se menjaju proizvodi i sastojci.
 * Izvor: štampani jelovnik sa Instagrama i Wolt stranica lokala. Cene se namerno ne prikazuju.
 */
export type Tag = "vege" | "ljuta";

export type MenuItem = {
  id: string;
  name: string;
  ingredients: string;
  tags?: Tag[];
  image?: ImageKey; // fotografija za sekciju "Premium pizze"
  signature?: boolean;
};

export type MenuGroup = { label: string; note: string; items: MenuItem[] };

export type MenuCategory = { id: string; label: string; intro: string; groups: MenuGroup[]; compact?: boolean };

const v: Tag[] = ["vege"];

export const menu: MenuCategory[] = [
  {
    id: "pizze",
    label: "Pizze",
    intro: "Napuljsko testo, San Marzano pelat i mocarela fior di latte.",
    groups: [
      {
        label: "STG",
        note: "tradicionalne",
        items: [
          { id: "focaccia", name: "Focaccia", ingredients: "Beli luk, ruzmarin, origano, maslinovo ulje", tags: v },
          { id: "marinara", name: "Antica Tradizionale Marinara", ingredients: "San Marzano pelat, bosiljak, origano, beli luk, maslinovo ulje", tags: v },
          { id: "margherita", name: "Antica Tradizionale Margherita", ingredients: "San Marzano pelat, bosiljak, parmezan, mocarela fior di latte, maslinovo ulje", tags: v },
          { id: "margherita-bufala", name: "Margherita di Bufala", ingredients: "San Marzano pelat, mocarela di bufala, parmezan, bosiljak, maslinovo ulje", tags: v },
        ],
      },
      {
        label: "Rosse",
        note: "sa pelatom",
        items: [
          { id: "capricciosa", name: "Capricciosa", ingredients: "San Marzano pelat, mocarela, cotto šunka, šampinjoni, artičoke, origano, masline, maslinovo ulje" },
          { id: "diavola", name: "Diavola", ingredients: "San Marzano pelat, mocarela, ventricina, bosiljak, maslinovo ulje" },
          { id: "tonno", name: "Tonno e Cipolla", ingredients: "San Marzano pelat, mocarela, Rio Mare tuna, luk, masline, origano, maslinovo ulje" },
          { id: "primavera", name: "Primavera", ingredients: "San Marzano pelat, mocarela, tikvica, patlidžan, luk, paprika, šampinjoni, beli luk, rukola, masline, origano, sušeni paradajz", tags: v },
          { id: "picante", name: "Picante", ingredients: "San Marzano pelat, mocarela, specijal nduja kobasica, bosiljak, maslinovo ulje", tags: ["ljuta"] },
        ],
      },
      {
        label: "Bianche",
        note: "bez pelata",
        items: [
          { id: "bianca", name: "Bianca", ingredients: "Mocarela, parmezan, beli luk, bosiljak, biber, ulje belog luka", tags: v },
          { id: "quattro-formaggi", name: "Quattro Formaggi", ingredients: "Mocarela, scamorza, gorgonzola, parmezan, bosiljak, maslinovo ulje", tags: v },
          { id: "don-giovanni", name: "Don Giovanni con Pancetta", ingredients: "Pesto sos, mocarela, scamorza, parmezan, pancetta, Don Giovanni salsa od paradajza, belog luka i bosiljka" },
          { id: "specolina", name: "Specolina", ingredients: "Mocarela, gorgonzola, speck, suve šljive, biber, bosiljak, maslinovo ulje", image: "specolina", signature: true },
          { id: "salsiccia", name: "Con Salsiccia", ingredients: "Mocarela, parmezan, dimljeni sir, domaća kobasica sa sirom, cherry paradajz, biber, maslinovo ulje" },
        ],
      },
      {
        label: "Premium",
        note: "posebne",
        items: [
          { id: "mortadela-burrata", name: "Mortadela con Burrata", ingredients: "Mocarela, parmezan, mortadela, burata, pistaći, pesto sos, bosiljak, maslinovo ulje" },
          {
            id: "prosciutto-burrata",
            name: "Prosciutto con Burrata",
            ingredients: "San Marzano pelat, mocarela, parmezan, pršuta, burata, rukola, sušeni paradajz, aceto crema",
            image: "prosciuttoBurrata",
            signature: true,
          },
          { id: "tartufata", name: "Tartufata", ingredients: "Krema od tartufa, mocarela, parmezan, lešnik, karpaćo svežih tartufa, ulje od tartufa, bosiljak", tags: v },
          { id: "bresaola", name: "Bresaola", ingredients: "San Marzano pelat, mocarela, bresaola, parmezan, bosiljak, maslinovo ulje", image: "bresaola", signature: true },
          { id: "mangulica", name: "Mangulica", ingredients: "Pelat, parmezan, mocarela, bosiljak, slanina od mangulice, crveni luk, biber" },
        ],
      },
    ],
  },
  {
    id: "dorucak",
    label: "Doručak",
    intro: "Svakog dana od 08:30 do 13:00.",
    groups: [
      {
        label: "Doručak",
        note: "",
        items: [
          { id: "jaja-pica-testo", name: "Jaja na pica testu", ingredients: "San Marzano pelat, mocarela, jaja, rukola, maslinovo ulje", tags: v },
          { id: "jaja-na-oko", name: "Jaja na oko", ingredients: "Pizza pana hleb, jaja, sirni namaz, rukola, paradajz, origano, maslinovo ulje", tags: v },
          { id: "pancetta-kajgana", name: "Pancetta kajgana", ingredients: "Pizza pana hleb, jaja, pancetta, scamorza, mocarela, rukola, cherry paradajz, crveni luk, parmezan" },
          { id: "caprese-prosciutto", name: "Caprese prosciutto", ingredients: "Pelat, mocarela, paradajz, bosiljak, maslinovo ulje, pršuta, biber" },
          { id: "ovsena-kasa", name: "Ovsena kaša", ingredients: "Sojino mleko, ovsene pahuljice, orah, lešnik, suvo grožđe, med", tags: v },
        ],
      },
    ],
  },
  {
    id: "sendvici",
    label: "Sendviči",
    intro: "Sendviči i bruskete od našeg testa, i potaž dana.",
    groups: [
      {
        label: "Sendviči i bruskete",
        note: "",
        items: [
          { id: "sendvic-prsuta", name: "Sendvič sa pršutom", ingredients: "Pršuta, mocarela, paradajz, rukola, origano, maslinovo ulje" },
          { id: "sendvic-mortadela", name: "Sendvič sa mortadelom", ingredients: "Mortadela, parmezan, pesto sos, rukola, origano, maslinovo ulje" },
          { id: "sendvic-cotto", name: "Sendvič sa cotto šunkom", ingredients: "Cotto šunka, sirni namaz, mocarela, sušeni paradajz, rukola, masline, origano" },
          { id: "sendvic-primavera", name: "Sendvič Primavera", ingredients: "San Marzano pelat, paprika, luk, tikvica, šampinjoni, patlidžan, mocarela, rukola, ulje belog luka, origano", tags: v },
          { id: "sendvic-milano", name: "Sendvič Milano", ingredients: "Milano kobasica, paradajz, mocarela, rukola, maslinovo ulje" },
          { id: "brusketi-prsuta", name: "Brusketi sa pršutom", ingredients: "San Marzano pelat, pršuta, mocarela, pesto, rukola" },
          { id: "brusketi-don-giovanni", name: "Brusketi Don Giovanni", ingredients: "Don Giovanni salsa od belog luka, bosiljak, paradajz, pesto sos, rukola", tags: v },
          { id: "potaz", name: "Potaž dana", ingredients: "Paradajz, šampinjoni, tikvice, celer-lešnik, brokoli, šargarepa, spanać ili bundeva", tags: v },
        ],
      },
    ],
  },
  {
    id: "salate",
    label: "Salate",
    intro: "Predjela i obrok salate.",
    groups: [
      {
        label: "Predjela i salate",
        note: "",
        items: [
          { id: "plata", name: "Plata Zona 20", ingredients: "Mix italijanskih sireva i suhomesnatih proizvoda, sušeno voće, origano, pizza pana hleb" },
          { id: "salata-prsuta", name: "Mix zelenih salata sa pršutom", ingredients: "Mix zelenih salata, rukola, paradajz, mocarela, pršuta, jaja, aceto balsamico, pesto sos, maslinovo ulje" },
          { id: "salata-tuna", name: "Mix zelenih salata sa tunjevinom", ingredients: "Mix zelenih salata, rukola, cherry paradajz, mocarela, masline, kapar, Rio Mare, jaja, aceto balsamico, maslinovo ulje, origano" },
          { id: "salata-burrata", name: "Mix zelenih salata sa buratom", ingredients: "Mix zelenih salata, rukola, cherry paradajz, masline, burata, aceto balsamico, maslinovo ulje, biber", tags: v },
        ],
      },
    ],
  },
  {
    id: "dezerti",
    label: "Dezerti",
    intro: "Posle dobre pizze ima mesta za nešto slatko.",
    groups: [
      {
        label: "Dezerti",
        note: "",
        items: [
          { id: "slatka-pizza", name: "Slatka pizza sa Nutellom", ingredients: "Nutella krem, banana, mleveni lešnik", tags: v },
          { id: "palacinke", name: "Zapečene palačinke", ingredients: "Palačinke sa bananom, zapečene u peći", tags: v },
        ],
      },
    ],
  },
  {
    id: "pica",
    label: "Pića",
    intro: "Kafa, ceđeni sokovi i nešto za uz pizzu.",
    compact: true,
    groups: [
      { label: "Kafa", note: "", items: ["Espresso", "Espresso sa mlekom", "Cappuccino", "Nescafe"].map((n) => ({ id: n, name: n, ingredients: "" })) },
      { label: "Ceđeno", note: "", items: ["Ceđena pomorandža", "Ceđeni grejp", "Ceđeni mix", "Limunada"].map((n) => ({ id: n, name: n, ingredients: "" })) },
      { label: "Pivo", note: "", items: ["Zaječarsko", "Heineken", "Kapuziner"].map((n) => ({ id: n, name: n, ingredients: "" })) },
      { label: "Sokovi i voda", note: "", items: ["Coca-Cola", "Coca-Cola Zero", "Next sokovi", "Rosa"].map((n) => ({ id: n, name: n, ingredients: "" })) },
    ],
  },
];

const allItems = menu.flatMap((c) => c.groups.flatMap((g) => g.items));
const order = ["prosciutto-burrata", "bresaola", "specolina"];
export const signatureItems = order.map((id) => allItems.find((i) => i.id === id)!).filter((i) => i?.signature);
