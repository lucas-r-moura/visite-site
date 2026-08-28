import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { InstagramLink } from "./InstagramLink";

export function SiteFooter() {
  return (
    <footer className="site-footer shell">
      <Link href="/" className="footer-logo"><BrandLogo /></Link>
      <div className="footer-company">
        <p>VISITE MARKETING LTDA · CNPJ 29.399.459/0001-91 · IE 096/3863851</p>
        <p>Av. Carlos Gomes, 222, salas 801 e 802 · Porto Alegre/RS · CEP 90480-000</p>
        <p>51 3378-1033 · 51 99791-1036</p>
      </div>
      <div className="footer-links">
        <InstagramLink location="footer" />
        <a href="mailto:lucasrmoura94@gmail.com">lucasrmoura94@gmail.com</a>
        <Link href="/privacidade">Privacidade</Link>
        <Link href="/termos">Termos de uso</Link>
      </div>
    </footer>
  );
}
