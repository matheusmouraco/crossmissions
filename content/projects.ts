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
  logo?: { src: string; ratio: number };
  image?: { src: string; alt: string };
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
      "Educação infantil, alimentação, saúde, formação de professores e apadrinhamento de crianças na Guiné-Bissau. Um futuro de esperança para a próxima geração.",
    url: "https://newgeneration.one",
    urlLabel: "newgeneration.one",
    logo: { src: "/img/marca/new-generation-branco.png", ratio: 1000 / 380 },
    image: { src: "/img/fotos/voluntarias-com-criancas.jpg", alt: "Voluntárias brincando com crianças numa aldeia da Guiné-Bissau" },
    tags: ["Educação", "Alimentação", "Saúde", "Apadrinhamento"],
    tint: "#ec722a",
  },
  {
    slug: "escola-do-sobrenatural",
    name: "Escola do Sobrenatural",
    kind: "Formação",
    description: "Um espaço de formação e crescimento na fé, para viver e anunciar o Reino de Deus. O site está em fase final.",
    tint: "#8f97f5",
  },
  {
    slug: "the-best-gift",
    name: "The Best Gift",
    kind: "Novo projeto",
    description: "Um novo projeto da Cross Missions está a caminho. Em breve, mais novidades por aqui.",
    tint: "#f6b42a",
  },
];
