// Originalne fotografije sa @zona20_pizzeriaeosteria. Statički import daje dimenzije i blur placeholder.
import hero from "@/assets/images/hero.jpg";
import prosciuttoBurrata from "@/assets/images/prosciutto-burrata.jpg";
import bresaola from "@/assets/images/bresaola.jpg";
import specolina from "@/assets/images/specolina.jpg";
import konobar from "@/assets/images/konobar.jpg";
import terasa from "@/assets/images/terasa.jpg";
import pec from "@/assets/images/pec.jpg";
import salsiccia from "@/assets/images/salsiccia.jpg";
import ulaz from "@/assets/images/ulaz.jpg";
import enterijer from "@/assets/images/enterijer.jpg";
import aperitivo from "@/assets/images/aperitivo.jpg";

export const img = { hero, prosciuttoBurrata, bresaola, specolina, konobar, terasa, pec, salsiccia, ulaz, enterijer, aperitivo };

export type ImageKey = keyof typeof img;
