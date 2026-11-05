import { Flag } from "@/components/Flag";
import { countries } from "@/content/site";

/** Faixa de bandeiras dos países lusófonos rodando sem parar (pausa ao passar o mouse) */
export function FlagsMarquee() {
  const items = [...countries, ...countries];
  return (
    <div className="marquee-mask group/mq relative overflow-hidden" role="region" aria-label="Países onde atuamos e queremos chegar">
      <ul className="sr-only">
        {countries.map((c) => (
          <li key={c.code}>{c.name}</li>
        ))}
      </ul>
      <div className="flex w-max animate-marquee gap-3 group-hover/mq:[animation-play-state:paused]" aria-hidden>
        {items.map((c, i) => (
          <span key={`${c.code}-${i}`} className="flex shrink-0 items-center gap-2.5 rounded-full bg-white/[0.06] py-2 pl-2.5 pr-4 ring-1 ring-white/10">
            <Flag code={c.code} className="w-7" />
            <span className="whitespace-nowrap font-ui text-[13px] font-medium text-white/85">{c.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
