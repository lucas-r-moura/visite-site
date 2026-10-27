// Consentimento de cookies (LGPD) compartilhado entre o banner, que roda no
// navegador, e o script inicial de rastreamento em `components/SiteAnalytics.tsx`.

export type ConsentChoice = "granted" | "denied";

export const CONSENT_STORAGE_KEY = "visite-cookie-consent";

// Tipos do Consent Mode v2 do Google. Todos começam negados e mudam juntos:
// o banner oferece só "aceitar" ou "recusar".
export const CONSENT_TYPES = ["analytics_storage", "ad_storage", "ad_user_data", "ad_personalization"] as const;

// Sem nenhum ID configurado o site não grava cookie algum, então nem há o que perguntar.
export const HAS_TRACKING = Boolean(
  process.env.NEXT_PUBLIC_GTM_ID || process.env.NEXT_PUBLIC_GA_ID || process.env.NEXT_PUBLIC_META_PIXEL_ID,
);

export function consentState(choice: ConsentChoice) {
  return Object.fromEntries(CONSENT_TYPES.map((type) => [type, choice]));
}
