import Image from "next/image";
import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const realCases = [
  {
    number: "01",
    tag: <>JBL + <strong>GUNS N’ ROSES</strong> · BRASIL 2026</>,
    title: "Uma ativação na dimensão de uma turnê histórica",
    lead: "Um item promocional passou a fazer parte do visual do público e da atmosfera dos shows.",
    connection: <>A VISITE articulou e executou a ativação nas sete cidades, coordenando equipes, entregas e parceiros para transformar a distribuição em um ponto real de contato entre JBL, <strong>Guns N’ Roses</strong> e milhares de fãs.</>,
    stats: [["7", "cidades brasileiras"], ["100 mil", "bandanas distribuídas"]],
    images: ["/cases/guns-01.webp", "/cases/guns-02.webp", "/cases/guns-03.webp"],
  },
  {
    number: "02",
    tag: <><strong>MENOS É MAIS</strong> · EMBAIXADORES</>,
    title: "Influência construída a partir das conexões certas",
    lead: "Pessoas com presença, credibilidade e afinidade com o público ampliaram organicamente a repercussão do evento.",
    connection: "A VISITE identificou perfis estratégicos, conduziu os contatos e alinhou cada participação, funcionando como ponte entre o evento, os talentos e os objetivos de comunicação.",
    stats: [["Rede", "de embaixadores estratégicos"], ["Além", "do espaço físico"]],
    images: ["/cases/menos-01.webp", "/cases/menos-02.webp", "/cases/menos-03.webp"],
  },
  {
    number: "03",
    tag: <>JBL + <strong>LUAN SANTANA</strong> · REGISTRO HISTÓRICO</>,
    title: "O Palco é Seu: do público para o centro da experiência",
    lead: "A ativação convidou fãs a entrar no universo do artista e sentir, por alguns minutos, como seria ocupar o seu palco.",
    connection: "A VISITE atuou presencialmente na organização da experiência e na distribuição de fitas salva celular, aproximando a JBL do público com uma entrega útil, segura e memorável.",
    stats: [["Fãs", "no centro da ativação"], ["Presença", "funcional e emocional"]],
    images: ["/cases/luan-santana.webp"],
  },
  {
    number: "04",
    tag: "JBL + CENA ELETRÔNICA",
    title: "Uma conexão que chegou aos grandes nomes da cena",
    lead: <>Produtos promocionais chegaram a artistas e projetos como <strong>WhoMadeWho</strong>, <strong>Dubdogz</strong>, <strong>Ashibah</strong>, <strong>Sarah Stenzel</strong> e <strong>Vintage Culture</strong>.</>,
    connection: <>A VISITE conectou marca, produções e talentos, organizando acessos e acompanhando cada entrega. A caixa personalizada para <strong>Vintage Culture</strong> transformou o produto em uma experiência exclusiva de marca.</>,
    stats: [["19", "entregas realizadas"], ["18", "artistas e projetos"]],
    images: ["/cases/entrega-05.webp", "/cases/entrega-02.webp", "/cases/entrega-03.webp"],
  },
  {
    number: "05",
    tag: <>MEET & GREET · <strong>DUBDOGZ</strong></>,
    title: "Um encontro exclusivo entre artistas e convidados",
    lead: "Uma experiência de proximidade planejada para acontecer com organização, fluidez e naturalidade.",
    connection: "A VISITE conectou produção, artistas e convidados, alinhou os acessos e ofereceu o suporte presencial necessário para tornar o encontro seguro e especial.",
    stats: [["Acesso", "organizado de ponta a ponta"], ["Encontro", "próximo e memorável"]],
    images: ["/cases/dubdogz-04.webp", "/cases/dubdogz-01.webp", "/cases/dubdogz-03.webp"],
  },
];

export const metadata = {
  title: "Cases | VISITE",
  description: "Conheça projetos reais articulados e executados pela VISITE entre marcas, artistas, eventos e públicos.",
};

export default function CasesPage() {
  return (
    <main id="conteudo-principal">
      <SiteHeader />

      <section className="cases-intro section shell">
        <p className="eyebrow"><span /> CASES</p>
        <div className="cases-intro-grid">
          <h1>Conexões que<br /><em>ganharam forma.</em></h1>
          <div><p>Da estratégia à operação, estes projetos mostram como uma boa articulação transforma presença em experiência, relacionamento e valor de marca.</p></div>
        </div>
      </section>

      <section className="real-case-list shell">
        {realCases.map((item, itemIndex) => (
          <article className={item.images.length ? "real-case" : "real-case real-case-no-photo"} key={item.number}>
            <div className="real-case-media">
              {item.images.length ? (
                <>
                  <div className="real-case-cover"><Image src={item.images[0]} alt={`${item.title} — registro principal`} fill priority={itemIndex === 0} sizes="(max-width: 860px) 100vw, 53vw" /></div>
                  <div className="real-case-gallery">
                    {item.images.slice(1).map((image, index) => <div key={image}><Image src={image} alt={`${item.title} — registro ${index + 2}`} fill sizes="(max-width: 860px) 50vw, 26vw" /></div>)}
                  </div>
                </>
              ) : (
                <div className="case-brand-poster"><span>O PALCO<br />É SEU</span><Image src="/assets/visite-symbol.png" alt="Símbolo VISITE" width={180} height={180} /></div>
              )}
            </div>

            <div className="real-case-copy">
              <span className="real-case-tag">{item.number} · {item.tag}</span>
              <h2>{item.title}</h2>
              <p className="real-case-lead">{item.lead}</p>
              <div className="case-stats">{item.stats.map(([value, label]) => <div key={label}><b>{value}</b><span>{label}</span></div>)}</div>
              <div className="visite-connection"><span>A CONEXÃO VISITE</span><p>{item.connection}</p></div>
            </div>
          </article>
        ))}
      </section>

      <section className="page-bridge section shell"><p>QUAL CONEXÃO PODE MOVER O SEU PRÓXIMO PROJETO?</p><Link href="/#contato" className="button">CONTE SEU DESAFIO <span>↗</span></Link></section>
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
