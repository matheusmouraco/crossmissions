import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";
import type { CSSProperties } from "react";
import type { HubProject } from "@/content/projects";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

function StatusBadge({ live }: { live: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-ui text-[12px] font-semibold uppercase tracking-[0.12em] backdrop-blur",
        live ? "bg-navy/70 text-white ring-1 ring-white/15" : "bg-white/10 text-white/80",
      )}
    >
      {live ? <span className="size-2 rounded-full bg-[#4ade80] shadow-[0_0_0_4px_rgb(74_222_128/0.25)]" aria-hidden /> : <Clock className="size-3.5" aria-hidden />}
      {live ? "Site no ar" : "Em breve"}
    </span>
  );
}

export function ProjectCard({ project, featured = false }: { project: HubProject; featured?: boolean }) {
  const live = Boolean(project.url);
  const titleId = `projeto-${project.slug}`;

  return (
    <article
      aria-labelledby={titleId}
      style={{ "--tint": project.tint } as CSSProperties}
      className={cn(
        "group grain relative isolate flex flex-col overflow-hidden rounded-[var(--radius-card)] bg-navy p-7 text-white shadow-lift md:p-10",
        featured ? "min-h-[540px] lg:min-h-full" : "min-h-[300px]",
        live && "transition-transform duration-500 hover:-translate-y-1",
      )}
    >
      {project.image ? (
        <>
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(min-width: 1024px) 600px, 100vw"
            className="-z-20 object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy via-navy/80 to-navy/5" aria-hidden />
        </>
      ) : (
        <>
          <div
            aria-hidden
            className="absolute -right-24 -top-24 -z-10 size-[340px] rounded-full opacity-45 blur-3xl"
            style={{ background: "var(--tint)" }}
          />
          <div aria-hidden className="dots absolute inset-0 -z-10 opacity-40 [mask-image:linear-gradient(200deg,#000,transparent_60%)]" />
          <div aria-hidden className="absolute -bottom-16 -right-10 -z-10 size-56 opacity-[0.07]">
            <Image src={site.logo.symbol} alt="" fill sizes="224px" className="object-contain grayscale" />
          </div>
        </>
      )}

      <div className="mb-auto pb-10">
        <StatusBadge live={live} />
      </div>

      <p className="font-ui text-[13px] font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--tint)" }}>
        {project.kind}
      </p>

      {project.logo ? (
        <h3 id={titleId} className="mt-4">
          <span className="relative block h-16 md:h-20" style={{ aspectRatio: project.logo.ratio }}>
            <Image src={project.logo.src} alt={project.name} fill sizes="220px" className="object-contain object-left" />
          </span>
        </h3>
      ) : (
        <h3 id={titleId} className="mt-3 font-display text-[30px] font-extrabold leading-[1.05] tracking-[-0.01em] md:text-[38px]">
          {project.name}
        </h3>
      )}

      <p className={cn("mt-4 max-w-xl text-white/80", featured ? "text-[16px] md:text-[18px]" : "text-[15px] md:text-[16px]")}>{project.description}</p>

      {project.tags && (
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Frentes do projeto">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-white/20 px-3 py-1 font-ui text-[13px] font-medium text-white/85">
              {tag}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-7">
        {live ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-2 rounded-[var(--radius-btn)] bg-accent px-6 py-3.5 font-ui text-[15px] font-semibold text-on-accent shadow-[0_10px_24px_-10px_rgb(252_132_60/0.6)] transition-colors after:absolute after:inset-0 after:content-[''] hover:bg-accent-dark md:text-[16px]"
          >
            Visitar {project.urlLabel ?? "site"}
            <ArrowUpRight className="size-[18px] transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" aria-hidden />
            <span className="sr-only">(abre em nova aba)</span>
          </a>
        ) : (
          <p className="inline-flex items-center gap-2 rounded-[var(--radius-btn)] border border-dashed border-white/25 px-5 py-3 font-ui text-[14px] font-medium text-white/70">
            O site deste projeto será lançado em breve
          </p>
        )}
      </div>
    </article>
  );
}
