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
        <p className="legal-kicker">ÚLTIMA ATUALIZAÇÃO: OUTUBRO DE 2026</p>
        <h1>Política de Privacidade</h1>
        <p>A VISITE MARKETING LTDA, CNPJ 29.399.459/0001-91, valoriza sua privacidade e protege os dados pessoais coletados em seus canais digitais.</p>
        <h2>Dados que coletamos</h2>
        <p>Tratamos os dados fornecidos no formulário, como nome, e-mail, empresa ou projeto, interesse e mensagem, para responder ao contato e iniciar uma conversa comercial.</p>
        <p>Se você autorizar, também coletamos dados de navegação por meio de cookies, conforme descrito abaixo.</p>
        <h2>Como usamos seus dados</h2>
        <p>Utilizamos essas informações para atendimento, relacionamento comercial e melhoria dos nossos serviços. Não vendemos seus dados pessoais.</p>
        <h2>Cookies e dados de navegação</h2>
        <p>Com a sua autorização, usamos o Google Analytics, por meio do Google Tag Manager, para entender como o site é utilizado: páginas visitadas, tempo de permanência, origem do acesso, tipo de dispositivo e localização aproximada. Esses dados são analisados de forma agregada, para melhorar o conteúdo e a experiência do site, e ficam armazenados por até 14 meses.</p>
        <p>Na primeira visita, um aviso pergunta se você aceita esses cookies. Se recusar, nenhum cookie de medição é gravado no seu navegador e o site funciona normalmente; o Google recebe apenas sinais técnicos, sem cookies, usados em estatísticas agregadas. Você pode mudar sua escolha a qualquer momento em “Preferências de cookies”, no rodapé do site.</p>
        <p>Para proteger o formulário de contato contra spam, usamos o Cloudflare Turnstile. Ele é necessário para o funcionamento do formulário e não é usado para publicidade.</p>
        <h2>Compartilhamento e segurança</h2>
        <p>Podemos utilizar fornecedores de tecnologia necessários para a operação e proteção do site, incluindo serviços de hospedagem, prevenção contra spam, entrega de e-mails e medição de audiência, sempre com medidas adequadas de segurança. Alguns desses fornecedores, como Google e Cloudflare, podem processar dados em servidores fora do Brasil, observadas as garantias previstas na LGPD. O acesso aos dados é limitado às pessoas autorizadas.</p>
        <h2>Seus direitos</h2>
        <p>Você pode solicitar acesso, correção, atualização ou exclusão dos seus dados pelo e-mail comercial@visiteconexoes.com.br. O consentimento para cookies pode ser revogado a qualquer momento em “Preferências de cookies”, no rodapé do site.</p>
        <h2>Contato</h2>
        <p>VISITE MARKETING LTDA · Avenida Carlos Gomes, 222, salas 801 e 802, Porto Alegre/RS, CEP 90480-000.</p>
      </article>
      <SiteFooter />
    </main>
  );
}
