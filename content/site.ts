export const site = {
  name: "Cross Missions",
  legalName: "Associação Cross Missions",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://crossmissions.com",
  description:
    "Cross Missions é uma associação cristã que leva o amor de Jesus a crianças, famílias e comunidades nos países de língua portuguesa. Conheça os nossos projetos.",
  vision: "Fazer Jesus conhecido, impactando vidas e comunidades através do amor, da fé e da solidariedade.",
  phone: "+55 11 98927-0283",
  phoneHref: "tel:+5511989270283",
  email: "contato.cmissions@gmail.com",
  instagram: {
    handle: "@crossmissionsorg",
    url: "https://www.instagram.com/crossmissionsorg/",
  },
  whatsapp: "https://api.whatsapp.com/send/?phone=5511989270283&text=Ol%C3%A1%21+Vim+do+site+da+Cross+Missions.",
  logo: {
    /** logotipo com texto branco, para fundos escuros */
    white: "/img/marca/cross-missions-branco.png",
    symbol: "/img/marca/cross-missions-simbolo.png",
    /** proporção largura/altura do logotipo */
    ratio: 4736 / 1798,
  },
} as const;

/** Países de língua portuguesa onde a missão atua ou quer chegar */
export const countries = [
  { code: "br", name: "Brasil" },
  { code: "gw", name: "Guiné-Bissau" },
  { code: "pt", name: "Portugal" },
  { code: "cv", name: "Cabo Verde" },
  { code: "ao", name: "Angola" },
  { code: "mz", name: "Moçambique" },
  { code: "st", name: "São Tomé e Príncipe" },
  { code: "gq", name: "Guiné Equatorial" },
  { code: "tl", name: "Timor-Leste" },
  { code: "mo", name: "Macau" },
] as const;
