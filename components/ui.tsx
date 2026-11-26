"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

export const ease = [0.16, 1, 0.3, 1] as const;

/** Blago pojavljivanje pri skrolu. */
export function Reveal({ children, delay = 0, className, ...rest }: HTMLMotionProps<"div"> & { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, ease, delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

type BtnProps = { children: ReactNode; variant?: "solid" | "ghost" | "link"; className?: string; href: string };

export function Button({ children, variant = "solid", className = "", href }: BtnProps) {
  const styles = {
    solid: "min-h-12 px-7 bg-tomato text-paper hover:bg-ink",
    ghost: "min-h-12 px-7 border border-current hover:border-tomato hover:text-tomato",
    link: "border-b border-current py-2 hover:text-tomato",
  }[variant];
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-3 text-[0.78rem] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 ${styles} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
        {external ? "↗" : "→"}
      </span>
    </a>
  );
}
