import type { Metadata } from "next";
import { SiteAnalytics } from "@/components/SiteAnalytics";
import "./globals.css";

const SITE_URL = "https://visiteconexoes.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "VISITE | Parcerias, patrocínios e collabs",
  description: "A VISITE estrutura parcerias, patrocínios e collabs entre marcas, artistas e eventos — da oportunidade à ativação.",
  keywords: ["parcerias", "patrocínios", "collabs", "ativações", "marcas", "artistas", "eventos"],
  robots: { index: true, follow: true },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  openGraph: {
    title: "VISITE | Parcerias, patrocínios e collabs",
    description: "Relações comerciais entre marcas, artistas e eventos — da oportunidade à ativação.",
    url: SITE_URL,
    siteName: "VISITE",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/assets/og-visite.png", width: 1200, height: 630, alt: "VISITE — conexões estratégicas" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VISITE | Parcerias, patrocínios e collabs",
    description: "Relações comerciais entre marcas, artistas e eventos — da oportunidade à ativação.",
    images: ["/assets/og-visite.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VISITE",
  legalName: "VISITE MARKETING LTDA",
  taxID: "29.399.459/0001-91",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/visite-logo.png`,
  image: `${SITE_URL}/assets/og-visite.png`,
  description: "A VISITE estrutura parcerias, patrocínios e collabs entre marcas, artistas e eventos — da oportunidade à ativação.",
  email: "comercial@visiteconexoes.com.br",
  telephone: "+55-51-3378-1033",
  sameAs: ["https://www.instagram.com/visite.conexoes/"],
  areaServed: { "@type": "Country", name: "Brasil" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Carlos Gomes, 222, salas 801 e 802",
    addressLocality: "Porto Alegre",
    addressRegion: "RS",
    postalCode: "90480-000",
    addressCountry: "BR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <a className="skip-link" href="#conteudo-principal">Pular para o conteúdo</a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <SiteAnalytics />
      </body>
    </html>
  );
}
