"use client";

import { FormEvent, useState } from "react";
import { InstagramLink } from "./InstagramLink";

const WHATSAPP = "5551997911036";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      `Olá, VISITE! Meu nome é ${data.get("name")}.`,
      `Empresa/projeto: ${data.get("company")}.`,
      `Interesse: ${data.get("interest")}.`,
      data.get("message") ? `Mensagem: ${data.get("message")}` : "",
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setSent(true);
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
          <p className="form-guidance">Preencha os campos. No próximo passo, abriremos o WhatsApp com sua mensagem pronta.</p>
          <label>SEU NOME<input required name="name" placeholder="Como podemos te chamar?" /></label>
          <label>EMPRESA OU PROJETO<input required name="company" placeholder="Qual é o seu universo?" /></label>
          <label>O QUE VOCÊ PROCURA?
            <select required name="interest" defaultValue="">
              <option value="" disabled>Selecione uma opção</option>
              <option>Conexões para uma marca</option>
              <option>Parcerias para um evento</option>
              <option>Oportunidades para um talento</option>
              <option>Outro assunto</option>
            </select>
          </label>
          <label>MENSAGEM <small>(OPCIONAL)</small><textarea name="message" rows={3} placeholder="Conte um pouco mais." /></label>
          <label className="check"><input required type="checkbox" /><span>Li e concordo com a <a href="/privacidade">Política de Privacidade</a>.</span></label>
          <button className="button" type="submit">CONTINUAR NO WHATSAPP <span>↗</span></button>
          {sent && <p className="form-note">Abrimos o WhatsApp para você continuar a conversa.</p>}
        </form>
      </div>
    </section>
  );
}
