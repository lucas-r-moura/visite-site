import Image from "next/image";
import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";
import { ArrowUpRight } from "@/components/ArrowUpRight";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { HIDDEN_CASES } from "@/lib/hidden-cases";

const realCases = [
  {
    number: "01",
    tag: "TURNÊ NACIONAL · ATIVAÇÃO",
    title: "Guns N’ Roses + JBL",
    lead: <>
      <p className="case-story-subtitle">Uma ativação na dimensão de uma turnê histórica</p>
      <p>A passagem do Guns N’ Roses pelo Brasil reuniu milhares de fãs em uma das turnês mais aguardadas do ano. Para ampliar a presença da JBL durante essa experiência, foi realizada uma ativação de grande escala em sete cidades brasileiras (Porto Alegre, Campo Grande, Cariacica, Salvador, Fortaleza, São Luís e Belém).</p>
      <p>Ao longo da turnê, foram distribuídas 100 mil bandanas personalizadas. Mais do que um brinde, elas passaram a fazer parte do visual do público e da atmosfera dos shows, criando uma presença de marca espontânea, coletiva e altamente fotografável.</p>
      <p>A ação transformou um item promocional em um símbolo da experiência, conectando a identidade da JBL à energia do Guns N’ Roses e deixando uma lembrança física para os fãs.</p>
    </>,
    connection: <>
      <p>A VISITE atuou na articulação e na execução da ativação nas sete cidades, conectando estratégia, produção e operação para garantir que as 100 mil bandanas chegassem ao público de maneira organizada e alinhada à experiência da turnê.</p>
      <p>Nossa participação envolveu o planejamento da operação, a coordenação das equipes, o acompanhamento das entregas e a conexão entre os diferentes profissionais e parceiros envolvidos.</p>
      <p>Com presença próxima em todas as etapas, contribuímos para transformar a distribuição em um ponto real de contato entre a JBL, o Guns N’ Roses e milhares de fãs pelo Brasil.</p>
    </>,
    stats: [["7", "cidades brasileiras"], ["100 mil", "bandanas distribuídas"]],
    images: ["/cases/guns-01.webp", "/cases/guns-02.webp", "/cases/guns-03.webp"],
  },
  {
    number: "02",
    tag: "EMBAIXADORES · RELACIONAMENTO",
    title: "Menos É Mais + JBL",
    lead: <>
      <p className="case-story-subtitle">Influência construída a partir das conexões certas</p>
      <p>A presença do Menos É Mais foi potencializada por uma estratégia de aproximação com embaixadores capazes de ampliar organicamente a repercussão do evento. A proposta foi conectar o projeto a pessoas com presença, credibilidade e afinidade com o público, criando uma divulgação próxima, verdadeira e relevante.</p>
      <p>A participação dos convidados ajudou a expandir a experiência para além do espaço físico, gerando conteúdo, visibilidade e novas conversas em torno do evento.</p>
    </>,
    connection: <>
      <p>A aproximação com o Menos é Mais aconteceu através do Grupo Onda, conexão que possibilitou à VISITE atuar na articulação e no relacionamento entre as partes.</p>
      <p>A partir dessa ponte, conduzimos os alinhamentos necessários e contribuímos para transformar a oportunidade em uma conexão estratégica.</p>
    </>,
    stats: [["Rede", "de embaixadores estratégicos"], ["Além", "do espaço físico"]],
    images: ["/cases/menos-01.webp", "/cases/menos-02.webp", "/cases/menos-03.webp"],
  },
  {
    number: "03",
    tag: "EXPERIÊNCIA · REGISTRO HISTÓRICO",
    title: "Luan Santana + JBL",
    lead: <>
      <p className="case-story-subtitle">Do público para o centro do palco</p>
      <p>Criada pela JBL para a turnê Registro Histórico, de Luan Santana, a ativação “O Palco é Seu” transformou o sonho dos fãs em uma experiência de protagonismo. A proposta convidava o público a entrar no universo do artista e sentir, por alguns minutos, como seria ocupar o seu palco.</p>
      <p>A experiência ampliou a presença da JBL para além do show, criando um momento interativo, emocional e diretamente conectado à música. A ação também contou com a distribuição de fitas salva celular, unindo utilidade, segurança e visibilidade de marca durante o evento.</p>
    </>,
    connection: <>
      <p>A VISITE atuou presencialmente na ativação, contribuindo para a organização da experiência e para a aproximação da JBL com o público. Também fomos responsáveis pela distribuição das fitas salva celular, garantindo que os itens chegassem aos fãs de maneira organizada e integrada à jornada do evento.</p>
      <p>Enquanto “O Palco é Seu” colocava os fãs no centro da experiência, nossa atuação ajudava a transformar a presença da marca em um contato próximo, funcional e memorável.</p>
    </>,
    stats: [["Fãs", "no centro da ativação"], ["Presença", "funcional e emocional"]],
    images: ["/cases/luan-01.webp", "/cases/luan-02.webp", "/cases/luan-03.webp", "/cases/luan-04.webp"],
  },
  {
    number: "04",
    tag: "BASTIDORES · MÚSICA ELETRÔNICA",
    title: "Cena eletrônica + JBL",
    lead: <>
      <p className="case-story-subtitle">Uma conexão que chegou aos grandes nomes da cena</p>
      <p>Durante uma programação que reuniu grandes nomes da música eletrônica, a JBL promoveu a entrega de produtos promocionais para 18 artistas e projetos musicais, entre eles <strong>WhoMadeWho</strong>, <strong>Dubdogz</strong>, <strong>Ashibah</strong>, <strong>Sarah Stenzel</strong> e <strong>Vintage Culture</strong>.</p>
      <p>Como destaque especial da ação, <strong>Vintage Culture</strong> recebeu uma caixa personalizada da JBL, desenvolvida para tornar a entrega ainda mais exclusiva e fortalecer a conexão da marca com um dos principais nomes da música eletrônica brasileira.</p>
    </>,
    connection: <>
      <p>Através da conexão com a Morebass, a VISITE aproximou a JBL dos artistas e projetos presentes, articulando marca, produções e talentos. Nossa atuação envolveu a organização das entregas, o alinhamento com as produções e o acompanhamento dos acessos.</p>
      <p>Ao todo, foram 19 entregas para 18 artistas e projetos musicais, fortalecendo a presença da JBL nos bastidores e sua proximidade com nomes relevantes da cena eletrônica.</p>
    </>,
    stats: [["19", "entregas realizadas"], ["18", "artistas e projetos"]],
    gallery: "portrait",
    images: ["/cases/eletronica-01.webp", "/cases/eletronica-02.webp", "/cases/eletronica-03.webp", "/cases/eletronica-04.webp"],
  },
  {
    number: "05",
    tag: "MEET & GREET · RELACIONAMENTO",
    title: "Dubdogz + JBL",
    lead: <>
      <p className="case-story-subtitle">Um encontro exclusivo entre artistas e convidados</p>
      <p>O Meet &amp; Greet com o Dubdogz proporcionou aos convidados uma experiência exclusiva de proximidade com os artistas. O encontro foi planejado para acontecer de maneira organizada e fluida, criando um momento especial dentro da programação.</p>
      <p>A ação aproximou público e artistas em um ambiente reservado, fortalecendo a relação entre experiência, música e marca.</p>
    </>,
    connection: <>
      <p>A VISITE atuou na organização e no acompanhamento do Meet &amp; Greet, realizando a conexão entre produção, artistas e convidados.</p>
      <p>Nossa participação envolveu o alinhamento dos acessos, a organização do encontro e o suporte presencial necessário para que a experiência acontecesse com segurança, fluidez e naturalidade.</p>
      <p>A atuação reforçou o principal papel da VISITE, aproximar as pessoas certas e transformar conexões estratégicas em experiências memoráveis.</p>
    </>,
    stats: [["Acesso", "organizado de ponta a ponta"], ["Encontro", "próximo e memorável"]],
    gallery: "portrait",
    images: ["/cases/dubdogz-01.webp", "/cases/dubdogz-04.webp", "/cases/dubdogz-03.webp"],
  },
];

export const metadata = {
  title: "Cases | VISITE",
  description: "Conheça projetos reais articulados e executados pela VISITE entre marcas, artistas, eventos e públicos.",
  alternates: { canonical: "/cases" },
};

function galleryClass(item: { images: string[]; gallery?: string }) {
  return [
    "real-case-gallery",
    item.images.length === 4 ? "real-case-gallery-three" : "",
    item.gallery === "portrait" ? "real-case-gallery-portrait" : "",
  ].filter(Boolean).join(" ");
}

function CaseTitle({ title }: { title: string }) {
  const [attraction, ...partnerParts] = title.split(" + ");
  const partner = partnerParts.join(" + ");

  return <h2>{attraction} <span className="case-title-plus">+</span> {partner}</h2>;
}

export default function CasesPage() {
  return (
    <main id="conteudo-principal">
      <SiteHeader />

      <h1 className="visually-hidden">Cases da VISITE: parcerias entre marcas, artistas e eventos</h1>

      <section className="real-case-list real-case-list-no-intro shell" aria-label="Cases">
        {realCases
          .filter((item) => !HIDDEN_CASES.includes(item.title))
          .map((item, itemIndex) => (
          <article className={item.images.length ? "real-case" : "real-case real-case-no-photo"} key={item.number}>
            <div className="real-case-media">
              {item.images.length ? (
                <>
                  <div className="real-case-cover"><Image src={item.images[0]} alt={`${item.title} — registro principal`} fill priority={itemIndex === 0} sizes="(max-width: 860px) 100vw, 53vw" /></div>
                  <div className={galleryClass(item)}>
                    {item.images.slice(1).map((image, index) => <div key={image}><Image src={image} alt={`${item.title} — registro ${index + 2}`} fill sizes="(max-width: 860px) 50vw, 26vw" /></div>)}
                  </div>
                </>
              ) : (
                <div className="case-brand-poster"><span>O PALCO<br />É SEU</span><Image src="/assets/visite-symbol.png" alt="Símbolo VISITE" width={180} height={180} /></div>
              )}
            </div>

            <div className="real-case-copy">
              <span className="real-case-tag">{item.number} · {item.tag}</span>
              <CaseTitle title={item.title} />
              <div className="real-case-lead">{item.lead}</div>
              <div className="case-stats">{item.stats.map(([value, label]) => <div key={label}><b>{value}</b><span>{label}</span></div>)}</div>
              <div className="visite-connection"><span>A CONEXÃO VISITE</span>{item.connection}</div>
            </div>
          </article>
          ))}
      </section>

      <section className="page-bridge section shell"><p>QUAL CONEXÃO PODE MOVER O SEU PRÓXIMO PROJETO?</p><Link href="/#contato" className="button">CONTE SEU DESAFIO <ArrowUpRight /></Link></section>
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
