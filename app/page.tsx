import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { MobileOrderBar } from "@/components/MobileOrderBar";
import { Nav } from "@/components/Nav";
import { Signature } from "@/components/Signature";

export default function Home() {
  return (
    <>
      <a href="#sadrzaj" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[90] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper">
        Preskoči na sadržaj
      </a>
      <Nav />
      <main id="sadrzaj">
        <Hero />
        <Signature />
        <Menu />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <MobileOrderBar />
    </>
  );
}
