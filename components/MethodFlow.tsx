type Step = {
  number: string;
  title: string;
  description: string;
  icon: "search" | "connect" | "deal" | "activate" | "relate";
};

const steps: Step[] = [
  { number: "01", title: "IDENTIFICAR", description: "Mapeamos objetivos, territórios e oportunidades.", icon: "search" },
  { number: "02", title: "CONECTAR", description: "Apresentamos parceiros com afinidade real.", icon: "connect" },
  { number: "03", title: "NEGOCIAR", description: "Alinhamos propostas, contrapartidas e acordos.", icon: "deal" },
  { number: "04", title: "ATIVAR", description: "Planejamos e acompanhamos a parceria.", icon: "activate" },
  { number: "05", title: "RELACIONAR", description: "Criamos continuidade e novas oportunidades.", icon: "relate" },
];

function StepIcon({ name }: { name: Step["icon"] }) {
  if (name === "search") return <svg viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="5.5"/><path d="m15 15 4.5 4.5"/></svg>;
  if (name === "connect") return <svg viewBox="0 0 24 24"><circle cx="8" cy="8" r="3"/><circle cx="16" cy="8" r="3"/><path d="M3.5 19c.6-3.2 2.3-5 4.5-5s3.9 1.8 4.5 5M11.5 19c.6-3.2 2.3-5 4.5-5s3.9 1.8 4.5 5"/></svg>;
  if (name === "deal") return <svg viewBox="0 0 24 24"><path d="m3 9 4-4 4 2 2-1 8 7-4 4-4-3-2 2-8-7Z"/><path d="m9 8 6 5M7 12l4 4"/></svg>;
  if (name === "activate") return <svg viewBox="0 0 24 24"><path d="M7 14.5 14.5 7H18v3.5L10.5 18 6 19l1-4.5Z"/><path d="m13 8.5 2.5 2.5M5 7h5M7.5 4.5v5"/></svg>;
  return <svg viewBox="0 0 24 24"><circle cx="12" cy="7" r="3"/><circle cx="5" cy="17" r="2.5"/><circle cx="19" cy="17" r="2.5"/><path d="M10 9.5 6.5 14M14 9.5l3.5 4.5M7.5 17h9"/></svg>;
}

export function MethodFlow({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "method-flow is-compact" : "method-flow"}>
      {steps.map((step, index) => (
        <article className={index % 2 ? "method-step is-warm" : "method-step"} key={step.number}>
          <span className="step-number">{step.number}</span>
          <div className="method-icon"><StepIcon name={step.icon} /></div>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </article>
      ))}
    </div>
  );
}
