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
        "group grain relative isolate flex flex-col overflow-hidden rounded-[var(--radius-card)] bg-navy p-7 text-white shadow-lift md:p-9 lg:p-6 xl:p-7 short:p-5",
        featured ? "min-h-[440px] lg:min-h-[320px]" : "min-h-[300px] lg:min-h-[320px]",
        live && "transition-transform duration-500 hover:-translate-y-1",
      )}
    >
      {project.image ? (
        <>
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(min-width: 1024px) 520px, 100vw"
            className="-z-20 object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            style={project.image.position ? { objectPosition: project.image.position } : undefined}
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy from-20% via-navy/85 via-55% to-navy/25" aria-hidden />
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

      <div className="mb-auto pb-6 short:pb-3">
        <StatusBadge live={live} />
      </div>

      <p className="font-ui text-[13px] font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--tint)" }}>
        {project.kind}
      </p>

      {project.logo ? (
        <h3 id={titleId} className="mt-4">
          <span
            className={cn("relative block", project.logo.tall ? "h-20 lg:h-16 xl:h-[72px] short:h-14" : "h-16 lg:h-12 xl:h-14 short:h-10")}
            style={{ aspectRatio: project.logo.ratio }}
          >
            <Image src={project.logo.src} alt={project.name} fill sizes="220px" className="object-contain object-left" />
          </span>
        </h3>
      ) : (
        <h3 id={titleId} className="mt-3 font-display text-[30px] font-extrabold leading-[1.05] tracking-[-0.01em] md:text-[34px] lg:text-[26px] xl:text-[30px] short:text-[24px]">
          {project.name}
        </h3>
      )}

      <p className="mt-4 max-w-xl text-[16px] text-white/80 lg:mt-3 lg:text-[14px] lg:leading-[1.55] xl:text-[15px]">{project.description}</p>

      {project.tags && (
        <ul className="mt-5 flex flex-wrap gap-2 lg:hidden" aria-label="Frentes do projeto">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-white/20 px-3 py-1 font-ui text-[13px] font-medium text-white/85">
              {tag}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-7 lg:mt-5 short:mt-4">
        {live ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visitar ${project.urlLabel ?? project.name} (abre em nova aba)`}
            className="group/link inline-flex max-w-full items-center gap-2 whitespace-nowrap rounded-[var(--radius-btn)] bg-accent px-6 py-3.5 font-ui text-[15px] font-semibold lg:px-5 lg:py-3 lg:text-[14px] xl:text-[15px] text-on-accent shadow-[0_10px_24px_-10px_rgb(252_132_60/0.6)] transition-colors after:absolute after:inset-0 after:content-[''] hover:bg-accent-dark md:text-[16px]"
          >
            <span className="min-w-0 truncate">
              Visitar <span className="lg:hidden">{project.urlLabel ?? "site"}</span>
              <span className="hidden lg:inline">site</span>
            </span>
            <ArrowUpRight className="size-[18px] shrink-0 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" aria-hidden />
            <span className="sr-only">(abre em nova aba)</span>
          </a>
        ) : null}
        {live && project.urlLabel ? (
          <p className="mt-2.5 hidden font-ui text-[13px] text-white/60 lg:block">{project.urlLabel}</p>
        ) : null}
        {live ? null : (
          <p className="inline-flex items-center gap-2 rounded-[var(--radius-btn)] border border-dashed border-white/25 px-5 py-3 font-ui text-[14px] font-medium text-white/70 lg:px-4 lg:py-2.5 lg:text-[13px]">
            <span className="lg:hidden">O site deste projeto será lançado em breve</span>
            <span className="hidden lg:inline">Site em preparação</span>
          </p>
        )}
      </div>
    </article>
  );
}
