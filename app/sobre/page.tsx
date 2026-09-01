import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/ArrowUpRight";
import { ContactSection } from "@/components/ContactSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata = {
  title: "Sobre a VISITE | Conexões estratégicas",
  description: "Conheça a essência, o propósito e a forma de atuação da VISITE.",
};

export default function SobrePage() {
  return (
    <main id="conteudo-principal">
      <SiteHeader />
      <section className="internal-hero shell">
        <p className="eyebrow"><span /> A VISITE</p>
        <h1>Relacionamento<br />que abre <em>caminhos.</em></h1>
        <p>A VISITE estrutura parcerias, patrocínios e collabs a partir do encontro entre repertório criativo, direção comercial e relações de confiança.</p>
      </section>

      <section className="about-story section">
        <div className="shell editorial-grid">
          <p className="eyebrow story-eyebrow"><span /> NOSSA HISTÓRIA</p>
          <h2 className="safe-title">Mais de duas décadas entendendo que negócios começam por pessoas.</h2>
          <div className="editorial-copy">
            <p>A VISITE nasce da trajetória de sua fundadora, construída ao longo de mais de 20 anos aproximando pessoas, projetos e organizações.</p>
            <p>Essa experiência permite enxergar além do contato imediato: identificamos interesses complementares, traduzimos expectativas, estruturamos propostas e ajudamos cada encontro a evoluir para uma relação comercial sustentável.</p>
          </div>
        </div>
      </section>

      <section className="dual-origin section">
        <div className="shell">
          <p className="eyebrow"><span /> NOSSA CONSTRUÇÃO</p>
          <div className="origin-heading">
            <h2 className="safe-title">Os dois lados<br />do <em>V.</em></h2>
            <p>A VISITE nasce do encontro entre criatividade e estratégia. Um lado aproxima pessoas; o outro transforma afinidades em oportunidades consistentes.</p>
          </div>
          <div className="origin-stage">
            <article className="origin-side origin-creative">
              <span>CRIATIVO · PESSOAS</span>
              <h3>O universo que cria significado.</h3>
              <ul>{["Criatividade", "Relacionamento", "Experiências", "Arte", "Emoção", "Conexão"].map((item, index) => <li key={item}><b>{String(index + 1).padStart(2, "0")}</b>{item}</li>)}</ul>
            </article>
            <div className="origin-mark" aria-hidden="true"><Image src="/assets/visite-symbol.png" alt="" width={190} height={190} /></div>
            <article className="origin-side origin-corporate">
              <span>CORPORATIVO · OPORTUNIDADES</span>
              <h3>O universo que gera movimento.</h3>
              <ul>{["Estratégia", "Resultados", "Negócios", "Parcerias", "Marcas", "Oportunidades"].map((item, index) => <li key={item}><b>{String(index + 1).padStart(2, "0")}</b>{item}</li>)}</ul>
            </article>
          </div>
          <p className="origin-conclusion">O encontro entre esses dois universos dá origem à <strong>essência da VISITE.</strong></p>
        </div>
      </section>

      <section className="values section shell">
        <p className="eyebrow"><span /> O QUE NOS MOVE</p>
        <div className="value-grid">
          <article><span>PROPÓSITO</span><h3>Aproximar pessoas e organizações com interesses complementares.</h3></article>
          <article><span>POSICIONAMENTO</span><h3>Ser a ponte comercial entre marcas, artistas e eventos.</h3></article>
          <article><span>PROMESSA</span><h3>Transformar afinidade em projetos, contratos e experiências.</h3></article>
          <article><span>TERRITÓRIO</span><h3>Parcerias, patrocínios, collabs e ativações com propósito.</h3></article>
        </div>
      </section>

      <section className="principles section">
        <div className="shell principles-grid">
          <div><p className="eyebrow"><span /> COMO PENSAMOS</p><h2 className="safe-title">Toda parceria forte<br />começa com <em>valor compartilhado.</em></h2></div>
          <ol>
            <li><span>01</span><div><h3>Afinidade antes da exposição</h3><p>Uma boa parceria nasce de objetivos e valores que realmente convergem.</p></div></li>
            <li><span>02</span><div><h3>Estratégia antes da ativação</h3><p>Cada movimento precisa responder a um objetivo claro de negócio e relacionamento.</p></div></li>
            <li><span>03</span><div><h3>Relação além da entrega</h3><p>O resultado de hoje também deve preparar oportunidades para o futuro.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="page-bridge section shell">
        <p>CONHEÇA NOSSA FORMA DE TRANSFORMAR CONEXÕES EM RESULTADOS.</p>
        <Link href="/metodo" className="button">EXPLORAR O VISITE METHOD <ArrowUpRight /></Link>
      </section>
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
