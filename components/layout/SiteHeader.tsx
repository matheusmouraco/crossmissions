"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/cn";
import { nav, site } from "@/content/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-300",
        scrolled ? "bg-navy/90 py-3 shadow-[0_10px_30px_-18px_rgb(0_0_0/0.6)] backdrop-blur-md" : "bg-transparent py-5",
      )}
    >
      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="relative block h-11 shrink-0 md:h-12" style={{ aspectRatio: site.logo.ratio }} aria-label="Cross Missions, voltar ao início">
          <Image src={site.logo.white} alt="Cross Missions" fill sizes="140px" priority className="object-contain" />
        </a>
        <nav aria-label="Principal" className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="rounded-full px-4 py-2 font-ui text-[15px] font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 font-ui text-[14px] font-semibold text-on-accent transition-colors hover:bg-accent-dark md:ml-3 md:px-5"
          >
            Nossos projetos
            <ArrowDown className="size-4" aria-hidden />
          </a>
        </nav>
      </div>
    </header>
  );
}
