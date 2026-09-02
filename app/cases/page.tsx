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
    tag: "ATIVAÇÃO · RELACIONAMENTO",
    title: "Menos É Mais + JBL",
    lead: <p>A aproximação com o Menos é Mais aconteceu através do Grupo Onda, conexão que possibilitou à VISITE atuar na articulação e no relacionamento entre as partes.</p>,
    connection: <p>A partir dessa ponte, conduzimos os alinhamentos necessários e contribuímos para transformar a oportunidade em uma conexão estratégica.</p>,
    stats: [["Rede", "de embaixadores estratégicos"], ["Além", "do espaço físico"]],
    images: ["/cases/menos-01.webp", "/cases/menos-02.webp", "/cases/menos-03.webp"],
  },
  {
    number: "02",
    tag: "EXPERIÊNCIA · REGISTRO HISTÓRICO",
    title: "Luan Santana + JBL",
    lead: <p>A ativação convidou fãs a entrar no universo do artista e sentir, por alguns minutos, como seria ocupar o seu palco.</p>,
    connection: <p>A VISITE atuou presencialmente na organização da experiência e na distribuição de fitas salva celular, aproximando a JBL do público com uma entrega útil, segura e memorável.</p>,
    stats: [["Fãs", "no centro da ativação"], ["Presença", "funcional e emocional"]],
    images: ["/cases/luan-01.webp", "/cases/luan-02.webp", "/cases/luan-03.webp", "/cases/luan-04.webp"],
  },
  {
    number: "03",
    tag: "BASTIDORES · MÚSICA ELETRÔNICA",
    title: "Cena eletrônica + JBL",
    lead: <>
      <h3 className="case-story-heading">JBL nos bastidores da música eletrônica</h3>
      <p className="case-story-subtitle">Uma conexão que chegou aos grandes nomes da cena</p>
      <p>Durante uma programação que reuniu grandes nomes da música eletrônica, a JBL esteve presente também nos bastidores, aproximando a marca de artistas e projetos relevantes da cena.</p>
      <p>A ação contemplou 18 artistas e projetos musicais, entre eles <strong>WhoMadeWho</strong>, <strong>Dubdogz</strong>, <strong>Ashibah</strong>, <strong>Sarah Stenzel</strong> e <strong>Vintage Culture</strong>, que recebeu uma entrega especial e personalizada da JBL, criando um momento exclusivo de relacionamento com a marca.</p>
    </>,
    connection: <>
      <p>Através da conexão com a Morebass, a VISITE viabilizou a aproximação da JBL com os artistas e projetos presentes na programação, articulando o relacionamento entre marca, produção e talentos.</p>
      <p>Nossa atuação envolveu a organização e o acompanhamento das entregas, o alinhamento com as produções e a condução dos acessos necessários para que cada produto chegasse aos artistas de forma cuidadosa e alinhada ao posicionamento da JBL.</p>
      <p>Ao todo, foram realizadas 19 entregas para 18 artistas e projetos musicais. A conexão com a Morebass possibilitou transformar a presença da JBL nos bastidores em uma oportunidade de relacionamento com nomes relevantes da música eletrônica, ampliando a proximidade da marca com a cena e com os talentos que fazem parte dela.</p>
    </>,
    stats: [["19", "entregas realizadas"], ["18", "artistas e projetos"]],
    gallery: "portrait",
    images: ["/cases/entrega-05.webp", "/cases/entrega-02.webp", "/cases/entrega-03.webp"],
  },
  {
    number: "04",
    tag: "MEET & GREET · RELACIONAMENTO",
    title: "Dubdogz + JBL",
    lead: <p>Uma experiência de proximidade planejada para acontecer com organização, fluidez e naturalidade.</p>,
    connection: <p>A VISITE conectou produção, artistas e convidados, alinhou os acessos e ofereceu o suporte presencial necessário para tornar o encontro seguro e especial.</p>,
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
