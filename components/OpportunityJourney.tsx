const stages = [
  {
    number: "01",
    title: "CONEXÃO",
    copy: "Encontramos o parceiro ideal para o objetivo, o público e o momento de cada projeto.",
    icon: "connection",
  },
  {
    number: "02",
    title: "ESTRATÉGIA",
    copy: "Transformamos afinidade em uma proposta relevante, viável e valiosa para todos.",
    icon: "strategy",
  },
  {
    number: "03",
    title: "RELACIONAMENTO",
    copy: "Alinhamos interesses, conduzimos a negociação e cuidamos da construção conjunta.",
    icon: "relationship",
  },
  {
    number: "04",
    title: "RESULTADO",
    copy: "Colocamos a parceria em movimento para gerar presença, negócio e novas oportunidades.",
    icon: "result",
  },
] as const;

function JourneyIcon({ name }: { name: (typeof stages)[number]["icon"] }) {
  if (name === "connection") return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="8" cy="8" r="3"/><circle cx="16" cy="8" r="3"/><path d="M3.5 19c.6-3.2 2.3-5 4.5-5s3.9 1.8 4.5 5M11.5 19c.6-3.2 2.3-5 4.5-5s3.9 1.8 4.5 5"/></svg>;
  if (name === "strategy") return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="13" r="7"/><circle cx="11" cy="13" r="3"/><path d="m13 11 7-7M16 4h4v4"/></svg>;
  if (name === "relationship") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 9 4-4 4 2 2-1 8 7-4 4-4-3-2 2-8-7Z"/><path d="m9 8 6 5M7 12l4 4"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20V12h4v8M10 20V8h4v12M16 20V4h4v16M3 20h18"/><path d="m5 8 5-4 4 2 6-5"/></svg>;
}

export function OpportunityJourney() {
  return (
    <section className="opportunity-journey section" aria-labelledby="journey-title">
      <div className="shell">
        <div className="journey-heading">
          <div>
            <p className="eyebrow"><span /> COMO CRIAMOS OPORTUNIDADES</p>
            <h2 id="journey-title" className="safe-title">Transformamos conexões em<br /><em>oportunidades de negócio.</em></h2>
          </div>
          <p>Uma boa parceria não nasce apenas de um contato. Ela precisa de leitura, direção comercial e cuidado em cada etapa.</p>
        </div>

        <div className="journey-flow">
          {stages.map((stage) => (
            <article className="journey-step" key={stage.number}>
              <div className="journey-icon"><JourneyIcon name={stage.icon} /></div>
              <span>{stage.number}</span>
              <h3>{stage.title}</h3>
              <p>{stage.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
