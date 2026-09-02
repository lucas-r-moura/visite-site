import Link from "next/link";
import { ArrowUpRight } from "@/components/ArrowUpRight";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function NotFound() {
  return (
    <main id="conteudo-principal">
      <SiteHeader />

      <section className="internal-hero shell">
        <p className="eyebrow"><span /> ERRO 404</p>
        <h1>Esta conexão<br />não <em>existe.</em></h1>
        <p>O endereço que você acessou mudou de lugar ou nunca esteve aqui. As outras portas da VISITE continuam abertas.</p>
      </section>

      <section className="page-bridge section shell">
        <p>VOLTE AO INÍCIO OU CONTE DIRETO O SEU DESAFIO.</p>
        <Link href="/" className="button">IR PARA A PÁGINA INICIAL <ArrowUpRight /></Link>
      </section>

      <SiteFooter />
    </main>
  );
}
