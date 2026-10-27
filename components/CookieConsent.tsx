"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CONSENT_STORAGE_KEY, HAS_TRACKING, consentState, type ConsentChoice } from "@/lib/cookie-consent";

// Disparado pelo botão do rodapé para reabrir o aviso: revogar o consentimento
// precisa ser tão fácil quanto concedê-lo.
const OPEN_PREFERENCES_EVENT = "visite:cookie-preferences";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

function readChoice(): ConsentChoice | null {
  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

function saveChoice(choice: ConsentChoice) {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  } catch {
    // Navegação privada ou armazenamento bloqueado: a escolha vale só para esta página.
  }
  window.gtag?.("consent", "update", consentState(choice));
  window.fbq?.("consent", choice === "granted" ? "grant" : "revoke");
}

export function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!HAS_TRACKING) return;
    if (!readChoice()) setOpen(true);

    const show = () => setOpen(true);
    window.addEventListener(OPEN_PREFERENCES_EVENT, show);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, show);
  }, []);

  if (!open) return null;

  const choose = (choice: ConsentChoice) => {
    saveChoice(choice);
    setOpen(false);
  };

  return (
    <section className="cookie-banner" aria-label="Aviso de cookies">
      <p>
        Usamos cookies do Google Analytics para entender como o site é usado e melhorar a sua experiência.
        O site funciona normalmente se você recusar. Saiba mais na{" "}
        <Link href="/privacidade">Política de Privacidade</Link>.
      </p>
      <div className="cookie-banner-actions">
        <button type="button" className="cookie-banner-reject" onClick={() => choose("denied")}>RECUSAR</button>
        <button type="button" className="button button-small" onClick={() => choose("granted")}>ACEITAR</button>
      </div>
    </section>
  );
}

export function CookiePreferencesButton() {
  if (!HAS_TRACKING) return null;

  return (
    <button type="button" className="footer-link-button" onClick={() => window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT))}>
      Preferências de cookies
    </button>
  );
}
