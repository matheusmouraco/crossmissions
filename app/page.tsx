import Image from "next/image";
import { ArrowDown, Mail, Quote } from "lucide-react";
import { Flag } from "@/components/Flag";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons";
import { CurrentYear } from "@/components/layout/CurrentYear";
import { Reveal } from "@/components/motion";
import { ProjectCard } from "@/components/ProjectCard";
import { ButtonLink, Container, Eyebrow, SectionTitle } from "@/components/ui";
import { hubProjects } from "@/content/projects";
import { countries, site } from "@/content/site";

export default function HomePage() {
  const [featured, ...others] = hubProjects;

  return (
    <>
      {/* Abertura */}
      <section className="grain relative overflow-hidden bg-navy pb-24 pt-32 text-white md:pb-32 md:pt-44">
        <div aria-hidden className="dots absolute inset-y-0 right-0 w-2/3 opacity-50 [mask-image:radial-gradient(ellipse_at_70%_30%,#000,transparent_65%)]" />
        <div aria-hidden className="absolute -left-40 top-1/3 size-[520px] rounded-full bg-accent/15 blur-[120px]" />
        <Container className="relative grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal>
            <Eyebrow tone="sun">Associação cristã missionária</Eyebrow>
            <h1 className="mt-6 font-display text-[40px] font-extrabold leading-[1.04] tracking-[-0.02em] sm:text-[56px] lg:text-[68px]">
              Fazer Jesus conhecido, <span className="text-accent">transformando vidas</span> e comunidades.
            </h1>
            <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-white/80 md:text-[19px]">
              Somos a Cross Missions. Levamos amor, fé e solidariedade a crianças, famílias e comunidades nos países de língua portuguesa,
              através de projetos que cuidam de cada pessoa por inteiro.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="#projetos">
                Conheça os nossos projetos
                <ArrowDown className="size-[18px]" aria-hidden />
              </ButtonLink>
              <ButtonLink href={site.whatsapp} variant="outline-light">
                <WhatsAppIcon className="size-5" /> Fale conosco
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative mx-auto w-full max-w-[520px]">
            <div aria-hidden className="absolute -inset-6 rounded-full border-[18px] border-accent/90 [clip-path:polygon(0_0,62%_0,62%_45%,100%_45%,100%_100%,0_100%)] sm:-inset-8" />
            <div className="relative aspect-square overflow-hidden rounded-full shadow-lift">
              <Image src="/img/fotos/equipe-na-aldeia.jpg" alt="Equipe da Cross Missions com moradores de uma aldeia na Guiné-Bissau" fill priority sizes="(min-width: 1024px) 520px, 90vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-4 -left-2 w-[42%] overflow-hidden rounded-[22px] border-4 border-navy shadow-lift sm:-left-8">
              <div className="relative aspect-[4/5]">
                <Image src="/img/fotos/criancas-uniforme.jpg" alt="Crianças de uniforme escolar sorrindo" fill sizes="220px" className="object-cover" />
              </div>
            </div>
            <div className="absolute -right-1 top-6 rounded-2xl bg-white px-5 py-4 text-navy shadow-lift sm:-right-6">
              <p className="font-display text-[28px] font-extrabold leading-none">{hubProjects.length}</p>
              <p className="mt-1 font-ui text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">projetos, uma missão</p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Projetos */}
      <section id="projetos" className="relative -mt-10 rounded-t-[40px] bg-mist py-20 md:py-28">
        <Container>
          <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionTitle
              eyebrow="Nossos projetos"
              title="Uma missão, várias frentes de esperança."
              intro={<p>Cada projeto da Cross Missions tem o seu próprio site. Escolha um para conhecer de perto e saber como participar.</p>}
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:grid-rows-2">
            <Reveal className="lg:row-span-2 [&>article]:h-full">
              <ProjectCard project={featured} featured />
            </Reveal>
            {others.map((project, i) => (
              <Reveal key={project.slug} delay={0.1 * (i + 1)} className="[&>article]:h-full">
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Quem somos */}
      <section id="quem-somos" className="bg-white py-20 md:py-28">
        <Container className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <Reveal>
            <SectionTitle
              eyebrow="Quem somos"
              title="Uma associação cristã com o coração nos países lusófonos."
              intro={
                <>
                  <p>
                    A Cross Missions nasceu do desejo de levar o amor de Jesus a quem mais precisa. Hoje atuamos sobretudo na Guiné-Bissau, com escolas,
                    alimentação, saúde e formação de líderes locais, sempre ao lado das comunidades.
                  </p>
                  <p>O nosso alvo é expandir esse trabalho para todos os países de língua portuguesa, com novos projetos e muitas mãos unidas.</p>
                </>
              }
            />
          </Reveal>
          <Reveal delay={0.1}>
            <figure className="grain relative overflow-hidden rounded-[var(--radius-card)] bg-navy p-8 text-white shadow-lift md:p-12">
              <Quote className="size-10 text-accent" aria-hidden />
              <blockquote className="mt-5 font-display text-[24px] font-bold leading-snug md:text-[30px]">{site.vision}</blockquote>
              <figcaption className="mt-6 font-ui text-[13px] font-semibold uppercase tracking-[0.18em] text-white/60">A nossa visão</figcaption>
            </figure>
          </Reveal>
        </Container>

        <Container className="mt-16 md:mt-20">
          <Reveal>
            <p className="font-ui text-[13px] font-semibold uppercase tracking-[0.18em] text-muted">Onde atuamos e queremos chegar</p>
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {countries.map((c) => (
                <li key={c.code} className="flex items-center gap-3 rounded-2xl border border-line bg-mist/60 px-4 py-3">
                  <Flag code={c.code} className="w-8 shrink-0" />
                  <span className="font-ui text-[14px] font-medium text-ink">{c.name}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Contato e rodapé */}
      <footer id="contato" className="grain relative overflow-hidden bg-navy text-white">
        <div aria-hidden className="absolute -right-32 -top-32 size-[460px] rounded-full bg-accent/20 blur-[120px]" />
        <Container className="relative py-20 md:py-28">
          <Reveal className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <Eyebrow tone="sun">Contato</Eyebrow>
              <h2 className="mt-4 font-display text-[34px] font-extrabold leading-[1.08] tracking-[-0.01em] sm:text-[44px] lg:text-[56px]">
                Quer caminhar com a gente?
              </h2>
              <p className="mt-5 max-w-xl text-[17px] text-white/80 md:text-[18px]">
                Fale com a nossa equipe para apoiar um projeto, ser voluntário ou levar a Cross Missions até a sua igreja.
              </p>
            </div>
            <ul className="space-y-3">
              <li>
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl bg-white/5 px-5 py-4 ring-1 ring-white/10 transition-colors hover:bg-white/10">
                  <WhatsAppIcon className="size-6 shrink-0 text-accent" />
                  <span>
                    <span className="block font-ui text-[12px] font-semibold uppercase tracking-[0.14em] text-white/60">WhatsApp</span>
                    <span className="font-ui text-[16px] font-semibold">{site.phone}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-4 rounded-2xl bg-white/5 px-5 py-4 ring-1 ring-white/10 transition-colors hover:bg-white/10">
                  <Mail className="size-6 shrink-0 text-accent" aria-hidden />
                  <span className="min-w-0">
                    <span className="block font-ui text-[12px] font-semibold uppercase tracking-[0.14em] text-white/60">E-mail</span>
                    <span className="block truncate font-ui text-[16px] font-semibold">{site.email}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl bg-white/5 px-5 py-4 ring-1 ring-white/10 transition-colors hover:bg-white/10">
                  <InstagramIcon className="size-6 shrink-0 text-accent" />
                  <span>
                    <span className="block font-ui text-[12px] font-semibold uppercase tracking-[0.14em] text-white/60">Instagram</span>
                    <span className="font-ui text-[16px] font-semibold">{site.instagram.handle}</span>
                  </span>
                </a>
              </li>
            </ul>
          </Reveal>
        </Container>

        <div className="relative border-t border-white/10">
          <Container className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-5">
              <span className="relative block h-10" style={{ aspectRatio: site.logo.ratio }}>
                <Image src={site.logo.white} alt="Cross Missions" fill sizes="110px" className="object-contain" />
              </span>
              <p className="font-ui text-[13px] text-white/55">
                © <CurrentYear /> {site.legalName}
              </p>
            </div>
            <nav aria-label="Projetos">
              <ul className="flex flex-wrap gap-x-6 gap-y-2 font-ui text-[14px] text-white/70">
                {hubProjects.map((p) => (
                  <li key={p.slug}>
                    {p.url ? (
                      <a href={p.url} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                        {p.name}
                      </a>
                    ) : (
                      <span className="text-white/40">{p.name} (em breve)</span>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </Container>
        </div>
      </footer>
    </>
  );
}
