import type { Metadata, Viewport } from "next";
import { Montserrat, Open_Sans, Raleway } from "next/font/google";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { site } from "@/content/site";
import "./globals.css";

const raleway = Raleway({ variable: "--font-raleway", subsets: ["latin"], weight: ["600", "700", "800", "900"], display: "swap" });
const openSans = Open_Sans({ variable: "--font-open-sans", subsets: ["latin"], display: "swap" });
const montserrat = Montserrat({ variable: "--font-montserrat", subsets: ["latin"], weight: ["500", "600", "700"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Cross Missions | Fazer Jesus conhecido, transformando vidas", template: "%s | Cross Missions" },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
    images: [{ url: "/img/fotos/equipe-na-aldeia.jpg", alt: "Equipe da Cross Missions com moradores de uma aldeia" }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#0f152d" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${raleway.variable} ${openSans.variable} ${montserrat.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <a href="#projetos" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-navy">
          Ir para os projetos
        </a>
        <SiteHeader />
        <main id="inicio" className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
