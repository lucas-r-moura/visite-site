import Link from "next/link";
import { ArrowUpRight } from "@/components/ArrowUpRight";
import { ContactSection } from "@/components/ContactSection";
import { MethodFlow } from "@/components/MethodFlow";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata = {
  title: "VISITE Method | Nossa metodologia",
  description: "Identificar, conectar, negociar, ativar e relacionar: conheça o método da VISITE.",
};

export default function MetodoPage() {
  return (
    <main id="conteudo-principal">
      <SiteHeader />
      <section className="method-page-flow method-page-start section shell">
        <p className="eyebrow"><span /> NOSSA METODOLOGIA</p>
        <div className="method-heading"><h2>VISITE <em className="method-word">METHOD</em><sup>®</sup></h2><p>Nossa metodologia, seu resultado.</p></div>
        <MethodFlow />
      </section>

      <section className="opportunity-cycle section">
        <div className="shell">
          <p className="eyebrow"><span /> O QUE ACONTECE NA PRÁTICA</p>
          <div className="cycle-heading"><h2 className="safe-title">Do desafio ao <em>projeto.</em></h2><p>Cada etapa transforma intenção em decisões, materiais e movimentos concretos para fazer a parceria avançar.</p></div>
          <div className="cycle-grid">
            <article><span>01</span><h3>DIAGNÓSTICO</h3><p>Objetivos, público, território, momento e critérios de sucesso.</p></article>
            <article><span>02</span><h3>MAPEAMENTO</h3><p>Uma seleção qualificada de parceiros e formatos com potencial real.</p></article>
            <article><span>03</span><h3>PROPOSTA</h3><p>Argumentos, escopo, contrapartidas e condições para a negociação.</p></article>
            <article><span>04</span><h3>ATIVAÇÃO</h3><p>Plano de ação, acompanhamento e continuidade após a entrega.</p></article>
          </div>
        </div>
      </section>

      <section className="two-sides section shell">
        <div className="two-sides-intro"><p className="eyebrow"><span /> CONSTRUÇÃO</p><h2>Os dois<br />lados do <em>V.</em></h2><p>A VISITE nasce do encontro entre criatividade e estratégia. Dois mundos, um propósito.</p></div>
        <article className="side-card creative"><span>CRIATIVO · PESSOAS</span><h3>O lado que conecta pessoas.</h3><ul><li>Criatividade</li><li>Relacionamento</li><li>Experiências</li><li>Arte e emoção</li></ul></article>
        <article className="side-card corporate"><span>CORPORATIVO · OPORTUNIDADES</span><h3>O lado que gera resultados.</h3><ul><li>Estratégia</li><li>Negócios</li><li>Parcerias</li><li>Marcas e oportunidades</li></ul></article>
      </section>

      <section className="page-bridge section shell"><p>VOCÊ TRAZ O DESAFIO. NÓS DESENHAMOS O CAMINHO COMERCIAL.</p><Link href="/#contato" className="button">CONTAR MEU DESAFIO <ArrowUpRight /></Link></section>
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
