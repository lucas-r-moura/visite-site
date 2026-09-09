// Cases temporariamente ocultos do site, casados pelo campo `title`.
// Os dados continuam nos arrays de `app/cases/page.tsx` e `app/page.tsx`:
// basta acrescentar aqui o título de um case para ele sumir dos dois lugares.
// Lista vazia = todos os cases visíveis.
//
// Atenção ao reativar um case: se as fotos dele também tiverem sido tiradas
// de `public/cases/`, é preciso movê-las de volta de `midia-fonte/cases/`,
// senão o case volta com as imagens quebradas.
export const HIDDEN_CASES: string[] = [
  // Aguardando autorização para divulgação. Fotos em midia-fonte/cases/guns-*.webp.
  "Guns N’ Roses + JBL",
];
