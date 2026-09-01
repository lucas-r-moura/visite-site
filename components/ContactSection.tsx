"use client";

import { FormEvent, useState } from "react";
import Script from "next/script";
import { InstagramLink } from "./InstagramLink";

const WHATSAPP = "5551997911036";
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

declare global {
  interface Window {
    turnstile?: { reset: () => void };
  }
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const turnstileToken = data.get("cf-turnstile-response");

    if (!turnstileToken) {
      setStatus("error");
      setFeedback("Confirme a verificação de segurança antes de enviar.");
      return;
    }

    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          interest: data.get("interest"),
          message: data.get("message"),
          privacy: data.get("privacy") === "yes",
          website: data.get("website"),
          turnstileToken,
        }),
      });

      const result = await response.json().catch(() => null);
      if (!response.ok) throw new Error(result?.message || "Não foi possível enviar sua mensagem.");

      form.reset();
      window.turnstile?.reset();
      setStatus("success");
      setFeedback("Mensagem enviada. A equipe da VISITE responderá em breve.");
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Não foi possível enviar agora. Tente novamente.");
      window.turnstile?.reset();
    }
  }

  return (
    <section id="contato" className="contact section">
      <div className="shell contact-grid">
        <div className="contact-intro">
          <p className="eyebrow"><span /> VAMOS CONVERSAR?</p>
          <h2 className="safe-title">Seu próximo<br />projeto começa<br /><em>agora.</em></h2>
          <p>Conte o contexto, o objetivo e o que precisa avançar. Nós ajudamos a desenhar o caminho — e a encontrar os parceiros — certos.</p>
          <div className="contact-channels">
            <a className="contact-phone" href={`https://wa.me/${WHATSAPP}`}>+55 51 99791-1036 <span>↗</span></a>
            <InstagramLink />
          </div>
        </div>
        <form onSubmit={submit}>
          <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
          <p className="form-guidance">Preencha os campos e conte o que precisa avançar. Sua mensagem seguirá diretamente para a equipe da VISITE.</p>
          <label>SEU NOME<input required name="name" autoComplete="name" maxLength={100} placeholder="Como podemos te chamar?" /></label>
          <label>SEU E-MAIL<input required name="email" type="email" autoComplete="email" maxLength={254} placeholder="voce@empresa.com.br" /></label>
          <label>EMPRESA OU PROJETO<input required name="company" autoComplete="organization" maxLength={150} placeholder="Qual é o seu universo?" /></label>
          <label>O QUE VOCÊ PROCURA?
            <select required name="interest" defaultValue="">
              <option value="" disabled>Selecione uma opção</option>
              <option>Conexões para uma marca</option>
              <option>Parcerias para um evento</option>
              <option>Oportunidades para um talento</option>
              <option>Outro assunto</option>
            </select>
          </label>
          <label>MENSAGEM <small>(OPCIONAL)</small><textarea name="message" rows={3} maxLength={3000} placeholder="Conte um pouco mais." /></label>
          <label className="form-honeypot" aria-hidden="true">NÃO PREENCHA<input name="website" tabIndex={-1} autoComplete="off" /></label>
          <label className="check"><input required name="privacy" value="yes" type="checkbox" /><span>Li e concordo com a <a href="/privacidade">Política de Privacidade</a>.</span></label>
          {TURNSTILE_SITE_KEY ? (
            <div className="turnstile-wrap"><div className="cf-turnstile" data-sitekey={TURNSTILE_SITE_KEY} data-theme="dark" /></div>
          ) : (
            <p className="form-note form-note-error">Formulário temporariamente indisponível: verificação de segurança não configurada.</p>
          )}
          <button className="button" type="submit" disabled={status === "submitting" || !TURNSTILE_SITE_KEY}>
            {status === "submitting" ? "ENVIANDO..." : "ENVIAR MENSAGEM"} <span>↗</span>
          </button>
          {feedback && <p className={`form-note${status === "error" ? " form-note-error" : " form-note-success"}`} role={status === "error" ? "alert" : "status"}>{feedback}</p>}
        </form>
      </div>
    </section>
  );
}
