import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/ArrowUpRight";
import { ContactSection } from "@/components/ContactSection";
import { HeroCursor } from "@/components/HeroCursor";
import { MethodFlow } from "@/components/MethodFlow";
import { OpportunityJourney } from "@/components/OpportunityJourney";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { UniverseIcon } from "@/components/UniverseIcon";
import { HIDDEN_CASES } from "@/lib/hidden-cases";

const deliverables = [
  { number: "01", title: "Parcerias e patrocínios", copy: "Desenhamos o encontro entre objetivos, público e território para construir propostas com valor para todos os lados." },
  { number: "02", title: "Prospecção e negociação", copy: "Mapeamos parceiros, conduzimos abordagens e alinhamos escopo, contrapartidas e condições comerciais." },
  { number: "03", title: "Collabs e ativações", copy: "Criamos formatos que aproximam marca, cultura e audiência para transformar presença em experiência." },
  { number: "04", title: "Gestão e continuidade", copy: "Acompanhamos o projeto, organizamos expectativas e cultivamos os próximos ciclos da relação." },
];

const featuredCases = [
  { tag: "ATIVAÇÃO · RELACIONAMENTO", title: "Menos É Mais + JBL", copy: "A aproximação através do Grupo Onda possibilitou à VISITE conduzir a articulação e o relacionamento entre as partes.", image: "/cases/menos-01.webp" },
  { tag: "EXPERIÊNCIA · REGISTRO HISTÓRICO", title: "Luan Santana + JBL", copy: "Uma ativação que colocou os fãs no centro da experiência e aproximou a JBL do público.", image: "/cases/luan-01.webp" },
  { tag: "BASTIDORES · MÚSICA ELETRÔNICA", title: "Cena eletrônica + JBL", copy: "Articulação e acompanhamento de 19 entregas para 18 artistas e projetos musicais.", image: "/cases/entrega-05.webp" },
];

const faqs = [
  ["Como funciona a VISITE?", "Entendemos o desafio, os objetivos e o momento do projeto. A partir disso, mapeamos parceiros, formatos e caminhos comerciais com potencial real."],
  ["A VISITE apenas apresenta os parceiros?", "Não necessariamente. Conforme o escopo, podemos atuar do diagnóstico e da abordagem à proposta, negociação, ativação e continuidade da relação."],
  ["Quem pode iniciar uma parceria?", "Marcas, organizadores de eventos, artistas, influenciadores e projetos que desejam construir relações comerciais relevantes."],
  ["Preciso já ter um parceiro em mente?", "Não. Parte do nosso trabalho é identificar organizações e pessoas coerentes com seu público, território e objetivo."],
  ["Como acontece a negociação?", "A VISITE aproxima as partes, traduz expectativas e organiza proposta, contrapartidas, condições e próximos passos."],
  ["A VISITE atende projetos em todo o Brasil?", "Sim. A atuação é nacional e cada projeto é organizado de acordo com o mercado, o território e os parceiros necessários."],
  ["Quanto tempo leva para estruturar um projeto?", "O prazo varia conforme o número de envolvidos e a complexidade da entrega. Após o diagnóstico inicial, apresentamos um caminho e uma previsão realista."],
  ["Como funciona o investimento?", "Cada trabalho é personalizado. O formato de contratação e os valores são apresentados depois que entendemos o desafio e o escopo necessário."],
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export const metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main id="conteudo-principal">
      <SiteHeader />

      <section id="inicio" className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span /> PARCERIAS · PATROCÍNIOS · COLLABS</p>
          <h1>A parceria <em>certa</em><br />muda o jogo.</h1>
          <p className="hero-description">A VISITE estrutura relações comerciais entre marcas, artistas e eventos — da identificação da oportunidade à negociação, ativação e continuidade.</p>
          <div className="hero-actions">
            <a className="button" href="#contato">CONTE SEU DESAFIO <ArrowUpRight /></a>
            <a className="text-link" href="#solucoes">VEJA COMO ATUAMOS <ArrowUpRight /></a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-outer" />
          <div className="orbit orbit-inner" />
          <div className="signal"><span /><span /><span /></div>
          <div className="hero-v"><Image src="/assets/visite-symbol.png" alt="" fill sizes="(max-width: 760px) 230px, 340px" /></div>
          <p>REPERTÓRIO<br /><b>ENCONTRA</b> NEGÓCIO</p>
        </div>
        <div className="scroll-cue"><span /> DESCUBRA A VISITE</div>
        <HeroCursor />
      </section>

      <section className="proof-strip">
        <div className="shell proof-grid">
          <article><b>120<span className="plus">+</span></b><span>ações realizadas</span></article>
          <article><b>20<span className="plus">+</span></b><span>anos de experiência</span></article>
          <article><b>1</b><span>propósito:<br />gerar valor para todos os envolvidos</span></article>
        </div>
      </section>

      <section id="atuamos" className="universes section">
        <div className="shell">
          <p className="eyebrow"><span /> PARA QUEM CRIAMOS VALOR</p>
          <h2 className="safe-title">Três universos.<br /><em>Interesses que se encontram.</em></h2>
          <div className="universe-list">
            <article className="universe-brand"><span className="index">01</span><div className="universe-symbol"><UniverseIcon type="brand" /></div><div><h3>MARCAS</h3><p>Patrocínios, collabs e ativações alinhados a posicionamento, audiência e objetivos comerciais.</p></div><a href="#contato" aria-label="Contar o desafio de uma marca"><ArrowUpRight /></a></article>
            <article className="universe-event"><span className="index">02</span><div className="universe-symbol"><UniverseIcon type="event" /></div><div><h3>EVENTOS</h3><p>Prospecção de patrocinadores, proposta de valor e relações comerciais para fortalecer cada projeto.</p></div><a href="#contato" aria-label="Contar o desafio de um evento"><ArrowUpRight /></a></article>
            <article className="universe-talent"><span className="index">03</span><div className="universe-symbol"><UniverseIcon type="talent" /></div><div><h3>TALENTOS</h3><p>Parcerias de marca coerentes com identidade, público, repertório e ambição profissional.</p></div><a href="#contato" aria-label="Contar o desafio de um talento"><ArrowUpRight /></a></article>
          </div>
        </div>
      </section>

      <section id="solucoes" className="commercial-offer section">
        <div className="shell">
          <div className="offer-heading">
            <div><p className="eyebrow"><span /> O QUE ESTRUTURAMOS</p><h2 className="safe-title">Da oportunidade à<br /><em>parceria em movimento.</em></h2></div>
            <p>A VISITE combina leitura de mercado, articulação comercial e acompanhamento para transformar afinidades em projetos viáveis.</p>
          </div>
          <div className="deliverable-grid">
            {deliverables.map((item) => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}
          </div>
        </div>
      </section>

      <OpportunityJourney />

      <section className="essence essence-home section shell">
        <div className="essence-title">
          <p className="eyebrow"><span /> NOSSA ESSÊNCIA</p>
          <h2 className="safe-title">Sensibilidade para aproximar.<br /><em>Direção para realizar.</em></h2>
        </div>
        <div className="essence-panel creative-side">
          <span className="panel-label">CRIATIVO · PESSOAS</span>
          <h3>Leitura cultural<br />e repertório.</h3>
          <p>Entendemos identidades, audiências e contextos para reconhecer afinidades que não são apenas convenientes — são legítimas.</p>
        </div>
        <div className="essence-v" aria-hidden="true"><Image src="/assets/visite-symbol.png" alt="" width={140} height={140} /></div>
        <div className="essence-panel business-side">
          <span className="panel-label">COMERCIAL · EXECUÇÃO</span>
          <h3>Objetivos claros<br />e movimento.</h3>
          <p>Organizamos proposta, negociação, contrapartidas e acompanhamento para fazer a relação avançar com consistência.</p>
        </div>
      </section>

      <section id="metodo" className="method section shell">
        <p className="eyebrow"><span /> NOSSA METODOLOGIA</p>
        <div className="method-heading">
          <h2>VISITE <em className="method-word">METHOD</em><sup>®</sup></h2>
          <p>DA OPORTUNIDADE À CONTINUIDADE.</p>
        </div>
        <MethodFlow compact />
        <div className="section-link-row"><Link className="text-link" href="/metodo">ENTENDA AS ENTREGAS DO MÉTODO <ArrowUpRight /></Link></div>
      </section>

      <section className="cases section shell">
        <div className="case-header">
          <div><p className="eyebrow"><span /> CASES REAIS</p><h2 className="safe-title">Conexões que<br /><em>ganharam forma.</em></h2></div>
          <div><p>Projetos em que estratégia, articulação e execução aproximaram marcas, artistas, eventos e seus públicos.</p></div>
        </div>
        <div className="case-grid">
          {featuredCases
            .filter((item) => !HIDDEN_CASES.includes(item.title))
            .map((item) => (
            <article className="case-card" key={item.title}>
              <div className="case-image"><Image src={item.image} alt={item.title} fill sizes="(max-width: 800px) 100vw, 33vw" /></div>
              <span>{item.tag}</span><h3>{item.title}</h3><p>{item.copy}</p>
            </article>
            ))}
        </div>
        <div className="section-link-row"><Link className="text-link" href="/cases">CONHECER TODOS OS CASES <ArrowUpRight /></Link></div>
      </section>

      <section className="founder-spotlight section">
        <div className="shell founder-grid">
          <div><p className="eyebrow"><span /> EXPERIÊNCIA À FRENTE DA VISITE</p><h2 className="safe-title">Mais de duas décadas<br /><em>fazendo relações avançarem.</em></h2></div>
          <div><p className="founder-lead">A VISITE nasce da trajetória de sua fundadora no mercado de relacionamento, projetos e articulação comercial.</p><p>Esse repertório ajuda a reconhecer o parceiro certo, conduzir conversas sensíveis e transformar intenção em proposta, acordo e entrega.</p><Link className="text-link" href="/sobre">CONHEÇA A HISTÓRIA DA VISITE <ArrowUpRight /></Link></div>
        </div>
      </section>

      <section className="faq section shell">
        <p className="eyebrow"><span /> DÚVIDAS FREQUENTES</p>
        <h2 className="safe-title">Antes do primeiro contato,<br /><em>o essencial.</em></h2>
        {faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </section>

      <ContactSection />
      <SiteFooter />
    </main>
  );
}
