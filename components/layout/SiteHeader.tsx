import Image from "next/image";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons";
import { site } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="shrink-0 bg-navy py-4">
      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <a href="/" className="relative block h-10 shrink-0 md:h-11" style={{ aspectRatio: site.logo.ratio }} aria-label="Cross Missions, página inicial">
          <Image src={site.logo.white} alt="Cross Missions" fill sizes="130px" priority className="object-contain" />
        </a>
        <div className="flex items-center gap-2">
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram ${site.instagram.handle}`}
            className="grid size-10 place-items-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            <InstagramIcon className="size-5" />
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 font-ui text-[14px] font-semibold text-on-accent transition-colors hover:bg-accent-dark md:px-5"
          >
            <WhatsAppIcon className="size-[18px]" />
            Fale conosco
          </a>
        </div>
      </div>
    </header>
  );
}
