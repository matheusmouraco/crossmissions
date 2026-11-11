import { FlagsMarquee } from "@/components/FlagsMarquee";
import { CurrentYear } from "@/components/layout/CurrentYear";
import { Reveal } from "@/components/motion";
import { MatilabSeal } from "@/components/MatilabSeal";
import { ProjectCard } from "@/components/ProjectCard";
import { Container, SectionTitle } from "@/components/ui";
import { hubProjects } from "@/content/projects";
import { site } from "@/content/site";

export default function HomePage() {

  return (
    <>
      <section className="flex flex-1 flex-col py-10 lg:py-8 xl:py-10 short:py-5">
        <Container className="flex flex-1 flex-col">
          <Reveal>
            <SectionTitle
              as="h1"
              eyebrow="Nossos projetos"
              title="Uma missão, várias frentes de esperança."
              intro={<p>Cada projeto da Cross Missions tem o seu próprio site. Escolha um para conhecer de perto e saber como participar.</p>}
              className="max-w-none lg:[&_h1]:text-[42px] xl:[&_h1]:text-[48px] short:[&_h1]:mt-2 short:[&_h1]:text-[36px] [&>div]:mt-3 md:[&>div]:text-[17px] short:[&>div]:mt-2 short:[&>div]:text-[15px]"
            />
          </Reveal>
          <div className="mt-8 grid flex-1 gap-5 lg:mt-7 short:mt-5 md:grid-cols-2 lg:grid-cols-[1.2fr_1.2fr_1.2fr_1fr] xl:gap-6">
            {hubProjects.map((project, i) => (
              <Reveal key={project.slug} delay={0.1 * i} className="[&>article]:h-full">
                <ProjectCard project={project} featured={Boolean(project.url)} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <footer className="shrink-0 bg-navy pb-4 pt-5 text-white short:pb-3 short:pt-3">
        <FlagsMarquee />
        <Container className="mt-4 short:mt-2.5 flex flex-col gap-1 font-ui text-[13px] text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CurrentYear /> {site.legalName}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href={`mailto:${site.email}`} className="hover:text-white">
              {site.email}
            </a>
            <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              {site.instagram.handle}
            </a>
            {site.people.map((p) => (
              <a key={p.url} href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`Instagram de ${p.name}`} className="hover:text-white">
                {p.handle}
              </a>
            ))}
            <MatilabSeal size="sm" className="font-ui" />
          </div>
        </Container>
      </footer>
    </>
  );
}
