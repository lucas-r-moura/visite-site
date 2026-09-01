"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandLogo } from "./BrandLogo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header-inner shell">
        <Link href="/" className="header-logo" onClick={() => setOpen(false)}>
          <BrandLogo priority variant="wordmark" />
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          <span />
          <span />
        </button>

        <nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Navegação principal">
          <Link href="/sobre" onClick={() => setOpen(false)}>A VISITE</Link>
          <Link href="/#atuamos" onClick={() => setOpen(false)}>ATUAÇÃO</Link>
          <Link href="/metodo" onClick={() => setOpen(false)}>MÉTODO</Link>
          <Link href="/cases" onClick={() => setOpen(false)}>CASES</Link>
          <Link href="/#contato" onClick={() => setOpen(false)}>CONTATO</Link>
        </nav>

        <Link className="button button-small header-cta" href="/#contato">
          CONTE SEU DESAFIO <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </header>
  );
}
