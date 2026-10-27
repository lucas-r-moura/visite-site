import Script from "next/script";
import { CONSENT_STORAGE_KEY, CONSENT_TYPES } from "@/lib/cookie-consent";

/**
 * Rastreamento pedido no briefing: Google Tag Manager, GA4 e Meta Pixel.
 *
 * Cada bloco só é injetado se o ID correspondente existir. Os IDs entram como
 * variáveis de ambiente no painel do Cloudflare Pages (Settings -> Environment
 * variables) e são embutidos no HTML durante o build. Sem ID configurado, o
 * site sai sem nenhum script de terceiro.
 *
 * Consentimento (LGPD): tudo começa negado pelo Consent Mode v2 do Google e
 * pelo `fbq('consent', 'revoke')` da Meta. Só depois do "aceitar" no
 * `CookieBanner` os cookies passam a ser gravados; a escolha fica no
 * localStorage e é lida aqui antes de qualquer tag disparar. Por isso não há
 * os fallbacks <noscript>: sem JavaScript não há como pedir consentimento.
 *
 * A verificação do Google Search Console é feita pela meta tag em
 * NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION (ver app/layout.tsx).
 */
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

const READ_CONSENT = `var v='denied';try{if(localStorage.getItem('${CONSENT_STORAGE_KEY}')==='granted')v='granted'}catch(e){}`;

export function SiteAnalytics() {
  return (
    <>
      {(GTM_ID || GA_ID) && (
        // Um único script, para garantir a ordem: o consentimento padrão
        // precisa chegar ao dataLayer antes da configuração do GA4 e do GTM.
        <Script id="google-tags" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
(function(){${READ_CONSENT}var c={};${JSON.stringify(CONSENT_TYPES)}.forEach(function(k){c[k]=v});gtag('consent','default',c);})();
${GA_ID ? `gtag('js',new Date());gtag('config','${GA_ID}');` : ""}
${GTM_ID ? `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');` : ""}`}
        </Script>
      )}

      {GA_ID && <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />}

      {META_PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
(function(){${READ_CONSENT}fbq('consent',v==='granted'?'grant':'revoke');})();
fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`}
        </Script>
      )}
    </>
  );
}
