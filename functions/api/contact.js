const JSON_HEADERS = { "Content-Type": "application/json; charset=utf-8" };
const ALLOWED_INTERESTS = new Set([
  "Conexões para uma marca",
  "Parcerias para um evento",
  "Oportunidades para um talento",
  "Outro assunto",
]);

function json(body, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: JSON_HEADERS });
}

function clean(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character]);
}

export async function onRequestPost({ request, env }) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 20_000) return json({ message: "Mensagem muito grande." }, 413);

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ message: "Dados inválidos." }, 400);
  }

  if (clean(body.website, 200)) return json({ ok: true });

  const name = clean(body.name, 100);
  const email = clean(body.email, 254).toLowerCase();
  const company = clean(body.company, 150);
  const interest = clean(body.interest, 100);
  const message = clean(body.message, 3000);
  const turnstileToken = clean(body.turnstileToken, 2048);

  if (name.length < 2 || company.length < 2 || !ALLOWED_INTERESTS.has(interest)) {
    return json({ message: "Revise os campos obrigatórios." }, 400);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ message: "Informe um e-mail válido." }, 400);
  }
  if (body.privacy !== true) {
    return json({ message: "É necessário concordar com a Política de Privacidade." }, 400);
  }
  if (!turnstileToken) {
    return json({ message: "Confirme a verificação de segurança." }, 400);
  }

  if (!env.RESEND_API_KEY || !env.TURNSTILE_SECRET_KEY || !env.CONTACT_TO_EMAIL || !env.RESEND_FROM_EMAIL) {
    console.error("Missing contact form environment variables");
    return json({ message: "O formulário está temporariamente indisponível." }, 503);
  }

  const verificationResponse = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      secret: env.TURNSTILE_SECRET_KEY,
      response: turnstileToken,
      remoteip: request.headers.get("CF-Connecting-IP"),
    }),
  });
  const verification = await verificationResponse.json();
  if (!verification.success) {
    return json({ message: "A verificação de segurança expirou. Tente novamente." }, 400);
  }

  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    company: escapeHtml(company),
    interest: escapeHtml(interest),
    message: escapeHtml(message || "Não informada").replace(/\n/g, "<br>"),
  };
  const text = [
    "Novo contato pelo site da VISITE",
    "",
    `Nome: ${name}`,
    `E-mail: ${email}`,
    `Empresa ou projeto: ${company}`,
    `Interesse: ${interest}`,
    `Mensagem: ${message || "Não informada"}`,
  ].join("\n");

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `Site VISITE <${env.RESEND_FROM_EMAIL}>`,
      to: [env.CONTACT_TO_EMAIL],
      reply_to: email,
      subject: `Novo contato do site — ${interest}`,
      text,
      html: `<h2>Novo contato pelo site da VISITE</h2><p><strong>Nome:</strong> ${safe.name}</p><p><strong>E-mail:</strong> ${safe.email}</p><p><strong>Empresa ou projeto:</strong> ${safe.company}</p><p><strong>Interesse:</strong> ${safe.interest}</p><p><strong>Mensagem:</strong><br>${safe.message}</p>`,
    }),
  });

  if (!resendResponse.ok) {
    console.error("Resend contact error", resendResponse.status, await resendResponse.text());
    return json({ message: "Não foi possível enviar agora. Tente novamente em alguns minutos." }, 502);
  }

  return json({ ok: true });
}
