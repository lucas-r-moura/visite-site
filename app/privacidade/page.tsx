import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata = {
  title: "Política de Privacidade | VISITE",
  description: "Como a VISITE trata os dados pessoais coletados em seus canais digitais e quais são os seus direitos.",
  alternates: { canonical: "/privacidade" },
};

export default function Privacidade() {
  return (
    <main id="conteudo-principal">
      <SiteHeader />
      <article className="legal">
        <Link href="/">← Voltar para a VISITE</Link>
        <p className="legal-kicker">ÚLTIMA ATUALIZAÇÃO: AGOSTO DE 2026</p>
        <h1>Política de Privacidade</h1>
        <p>A VISITE MARKETING LTDA, CNPJ 29.399.459/0001-91, valoriza sua privacidade e protege os dados pessoais coletados em seus canais digitais.</p>
        <h2>Dados que coletamos</h2>
        <p>Tratamos os dados fornecidos no formulário, como nome, e-mail, empresa ou projeto, interesse e mensagem, para responder ao contato e iniciar uma conversa comercial.</p>
        <h2>Como usamos seus dados</h2>
        <p>Utilizamos essas informações para atendimento, relacionamento comercial e melhoria dos nossos serviços. Não vendemos seus dados pessoais.</p>
        <h2>Compartilhamento e segurança</h2>
        <p>Podemos utilizar fornecedores de tecnologia necessários para a operação e proteção do site, incluindo serviços de hospedagem, prevenção contra spam e entrega de e-mails, sempre com medidas adequadas de segurança. O acesso aos dados é limitado às pessoas autorizadas.</p>
        <h2>Seus direitos</h2>
        <p>Você pode solicitar acesso, correção, atualização ou exclusão dos seus dados pelo e-mail comercial@visiteconexoes.com.br.</p>
        <h2>Contato</h2>
        <p>VISITE MARKETING LTDA · Avenida Carlos Gomes, 222, salas 801 e 802, Porto Alegre/RS, CEP 90480-000.</p>
      </article>
      <SiteFooter />
    </main>
  );
}
