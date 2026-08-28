# Plano de publicação — VISITE

**Status atual:** exportação estática preparada e validada; domínio, caixa postal e credenciais de envio ainda aguardam definição.

## Arquitetura recomendada

- **Site:** Next.js exportado como site estático no Cloudflare Pages.
- **Código e deploy:** repositório privado no GitHub conectado ao Cloudflare Pages.
- **Domínio e DNS:** domínio próprio com DNS gerenciado pela Cloudflare.
- **E-mail profissional:** caixa postal em um provedor de e-mail, usando o mesmo domínio.
- **Formulário:** Cloudflare Pages Function protegida pelo Turnstile e integrada a um serviço transacional de e-mail.

Essa separação mantém o site rápido e econômico sem transformar o projeto em um servidor tradicional.

## 1. Decisões necessárias

- Definir e registrar o domínio oficial.
- Definir quem será o proprietário das contas Cloudflare, GitHub e e-mail. Preferencialmente, as contas devem pertencer à cliente.
- Escolher o provedor da caixa postal: Zoho Mail, Hostinger E-mail, Google Workspace ou equivalente.
- Confirmar os endereços desejados, por exemplo:
  - `contato@dominio.com.br`
  - `comercial@dominio.com.br`
- Confirmar para qual caixa devem chegar as mensagens do formulário.

## 2. Preparação técnica do site

- Configurar o Next.js para exportação estática (`output: "export"`).
- Ajustar o componente de imagens para a exportação estática.
- Gerar e revisar a pasta final `out`.
- Criar estados de envio, sucesso e erro no formulário.
- Adicionar um campo de e-mail do visitante.
- Manter o WhatsApp como canal secundário, sem competir com o envio por e-mail.

## 3. Repositório e fluxo de publicação

- Criar um repositório privado no GitHub.
- Fazer o primeiro commit da versão aprovada.
- Usar a branch `main` como produção.
- Criar uma branch por rodada de alterações.
- Usar os previews do Cloudflare Pages para a cliente aprovar antes da publicação em produção.

## 4. Configuração do Cloudflare Pages

- No painel, acessar **Workers & Pages → Create application → Pages**.
- Importar o repositório do GitHub.
- Selecionar o preset **Next.js (Static HTML Export)**.
- Configurar:
  - Branch de produção: `main`
  - Comando de build: `pnpm build`
  - Diretório de saída: `out`
- Publicar primeiro no endereço temporário `*.pages.dev`.
- Testar todas as páginas e links antes de associar o domínio.

## 5. Domínio próprio

- Adicionar o domínio à conta Cloudflare.
- Se o domínio estiver em outro registrador, trocar os nameservers pelos informados pela Cloudflare.
- Associar o domínio raiz ao projeto Pages.
- Associar também a versão `www`.
- Escolher uma versão canônica e redirecionar a outra.
- Confirmar certificado SSL, HTTPS e redirecionamento automático.

## 6. E-mail profissional

### Opção recomendada

Contratar uma caixa postal real em um provedor de e-mail. A Cloudflare continuará gerenciando o DNS, enquanto o provedor cuidará da caixa de entrada, envio, calendário e autenticação.

Registros que serão configurados no DNS:

- MX para recebimento.
- SPF para autorizar o envio.
- DKIM para assinatura das mensagens.
- DMARC para reduzir falsificação do domínio e melhorar entregabilidade.

### Opção econômica limitada

O Cloudflare Email Routing pode encaminhar mensagens recebidas em `contato@dominio.com.br` para outro endereço. Porém, ele não oferece uma caixa postal completa e uma resposta normal pode sair pelo endereço pessoal de destino. Por isso, serve como solução provisória, não como a melhor configuração profissional.

## 7. Funcionamento do formulário por e-mail

Fluxo planejado:

1. O visitante preenche nome, empresa, e-mail, interesse e mensagem.
2. O Turnstile gera um token antispam.
3. O navegador envia os dados para `/api/contact`.
4. Uma Cloudflare Pages Function valida os campos e o token no servidor.
5. A Function usa uma chave secreta, armazenada no painel da Cloudflare, para enviar a mensagem por um serviço transacional como Resend.
6. A equipe recebe um e-mail organizado em `contato@dominio.com.br`, com o e-mail do visitante configurado para resposta.
7. O visitante vê uma confirmação clara sem sair do site.

Medidas previstas:

- Nenhuma senha ou chave exposta no navegador.
- Validação no cliente e no servidor.
- Turnstile e campo invisível contra robôs.
- Limite de tamanho dos campos.
- Mensagens claras de carregamento, sucesso e falha.
- Registro mínimo de erros sem armazenar dados pessoais desnecessários.

## 8. Checklist antes do lançamento

- Revisão completa em desktop e celular.
- Teste dos formulários e recebimento real de e-mail.
- Teste de resposta usando o endereço profissional.
- Validação de SPF, DKIM e DMARC.
- Revisão de títulos, descrições, Open Graph e favicon.
- Página 404 e links legais.
- Lighthouse de desempenho, acessibilidade, SEO e boas práticas.
- Redirecionamento de `pages.dev` para o domínio oficial.
- Inclusão no Google Search Console após a publicação.

## Ordem recomendada de execução

1. Aprovar domínio e provedor de e-mail.
2. Preparar exportação estática e formulário.
3. Criar GitHub e publicar o preview no Pages.
4. Configurar domínio e DNS.
5. Configurar caixas postais e autenticação de e-mail.
6. Integrar e testar o formulário.
7. Fazer revisão final e publicar.
