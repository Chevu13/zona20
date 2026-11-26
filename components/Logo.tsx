import Image from "next/image";
import dark from "@/assets/images/logo-dark.png";
import light from "@/assets/images/logo-light.png";

/**
 * Logo "ZONA 20" sa Wolt stranice lokala (1200 px izvor), bez pozadine.
 * tone: "dark" na svetloj podlozi, "light" na tamnoj, "auto" = svetli na telefonu (preko fotografije), tamni na desktopu.
 */
export function Logo({ height = 44, tone = "dark", priority = false, className = "" }: { height?: number; tone?: "dark" | "light" | "auto"; priority?: boolean; className?: string }) {
  const width = Math.round((height * dark.width) / dark.height);
  const common = { alt: "Zona 20 Pizzeria e Osteria", width, height, priority, style: { width, height }, className: "transition-[width,height] duration-500" };
  if (tone === "auto")
    return (
      <span className={`block ${className}`}>
        <Image src={light} {...common} className={`${common.className} lg:hidden`} />
        <Image src={dark} {...common} alt="" aria-hidden className={`${common.className} hidden lg:block`} />
      </span>
    );
  return (
    <span className={`block ${className}`}>
      <Image src={tone === "dark" ? dark : light} {...common} />
    </span>
  );
}
