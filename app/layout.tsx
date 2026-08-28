import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VISITE | Parcerias, patrocínios e collabs",
  description: "A VISITE estrutura parcerias, patrocínios e collabs entre marcas, artistas e eventos — da oportunidade à ativação.",
  keywords: ["parcerias", "patrocínios", "collabs", "ativações", "marcas", "artistas", "eventos"],
  openGraph: {
    title: "VISITE | Parcerias, patrocínios e collabs",
    description: "Relações comerciais entre marcas, artistas e eventos — da oportunidade à ativação.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><a className="skip-link" href="#conteudo-principal">Pular para o conteúdo</a>{children}</body></html>;
}
