import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata = {
  title: "Termos de Uso | VISITE",
  description: "Condições de uso do site institucional da VISITE MARKETING LTDA.",
  alternates: { canonical: "/termos" },
};

export default function Termos() {
  return (
    <main id="conteudo-principal">
      <SiteHeader />
      <article className="legal">
        <Link href="/">← Voltar para a VISITE</Link>
        <p className="legal-kicker">ÚLTIMA ATUALIZAÇÃO: AGOSTO DE 2026</p>
        <h1>Termos de Uso</h1>
        <p>Ao acessar este site, você concorda com estes Termos de Uso. O site é mantido pela VISITE MARKETING LTDA, CNPJ 29.399.459/0001-91.</p>
        <h2>Finalidade do site</h2>
        <p>Este ambiente apresenta institucionalmente a VISITE e permite o contato de marcas, artistas, eventos e demais interessados em conexões estratégicas.</p>
        <h2>Propriedade intelectual</h2>
        <p>Textos, marcas, elementos visuais e demais conteúdos deste site pertencem à VISITE ou são utilizados com a devida autorização. A reprodução sem autorização prévia é proibida.</p>
        <h2>Contato e propostas</h2>
        <p>O envio de um formulário ou mensagem não cria vínculo comercial. Projetos, valores e condições são definidos de forma personalizada após análise de cada demanda.</p>
        <h2>Alterações</h2>
        <p>Estes termos podem ser atualizados a qualquer momento. Recomendamos a consulta periódica desta página.</p>
        <h2>Contato</h2>
        <p>Para dúvidas comerciais, escreva para comercial@visiteconexoes.com.br.</p>
      </article>
      <SiteFooter />
    </main>
  );
}
