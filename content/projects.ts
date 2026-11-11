export type HubProject = {
  slug: string;
  name: string;
  /** rótulo curto que aparece acima do nome */
  kind: string;
  description: string;
  /** endereço do site do projeto; sem ele o cartão mostra "Em breve" */
  url?: string;
  /** como o endereço aparece escrito no botão */
  urlLabel?: string;
  /** logotipo em versão branca (para o fundo escuro do cartão) */
  logo?: { src: string; ratio: number; /** logotipo mais alto que largo: mostra um pouco maior */ tall?: boolean };
  image?: { src: string; alt: string; /** enquadramento da foto (CSS object-position) */ position?: string };
  tags?: string[];
  /** cor de destaque do cartão quando não há foto */
  tint: string;
};

/**
 * Para ligar um projeto novo ao hub, basta preencher `url` (e o logotipo, quando chegar).
 */
export const hubProjects: HubProject[] = [
  {
    slug: "new-generation",
    name: "New Generation",
    kind: "Projeto social",
    description:
      "Educação, alimentação, saúde e apadrinhamento de crianças na Guiné-Bissau. Um futuro de esperança para a próxima geração.",
    url: "https://newgeneration.one",
    urlLabel: "newgeneration.one",
    logo: { src: "/img/marca/new-generation-branco.png", ratio: 1000 / 380 },
    image: { src: "/img/fotos/voluntarias-com-criancas.jpg", alt: "Voluntárias brincando com crianças numa aldeia da Guiné-Bissau" },
    tags: ["Educação", "Alimentação", "Saúde", "Apadrinhamento"],
    tint: "#ec722a",
  },
  {
    slug: "enjoy-4-families",
    name: "Enjoy 4 Families",
    kind: "Famílias",
    description:
      "Encontros e oficinas para famílias em Portugal: diversão para miúdos, conversas úteis para pais e laços familiares mais fortes.",
    url: "https://www.enjoy4famlies.info/",
    urlLabel: "enjoy4famlies.info",
    logo: { src: "/img/marca/enjoy-branco.png", ratio: 884 / 592, tall: true },
    image: { src: "/img/fotos/equipa-enjoy.jpg", alt: "Equipa Enjoy com t-shirts do projeto num parque", position: "50% 30%" },
    tags: ["Oficinas", "Família", "Natureza", "Comunidade"],
    tint: "#f28c38",
  },
  {
    slug: "crossgifts",
    name: "CrossGifts",
    kind: "Evangelismo",
    description:
      "Livretos cristãos gratuitos em PDF. Um movimento evangelístico que partilha o melhor presente: o amor de Deus.",
    url: "https://www.crossgift.org/",
    urlLabel: "crossgift.org",
    logo: { src: "/img/marca/crossgifts-branco.svg", ratio: 2117 / 1657, tall: true },
    image: { src: "/img/fotos/abraco.jpg", alt: "Duas pessoas num abraço apertado, num jardim", position: "58% 40%" },
    tags: ["Livretos", "Evangelismo", "Porto"],
    tint: "#f26508",
  },
  {
    slug: "escola-do-sobrenatural",
    name: "Escola do Sobrenatural",
    kind: "Formação",
    description: "Seis cursos em vídeo, com ebooks: dos dons do Espírito às missões transculturais. Crie a sua conta e comece.",
    url: "https://escoladosobrenatural.vercel.app",
    urlLabel: "escoladosobrenatural.vercel.app",
    logo: { src: "/img/marca/cross-missions-school.png", ratio: 1400 / 575 },
    image: { src: "/img/fotos/alessandro-ministrando.jpg", alt: "Alessandro Pontes a ministrar de microfone na mão", position: "68% 20%" },
    tags: ["Vídeo-aulas", "Ebooks", "Missões"],
    tint: "#fc843c",
  },
];
