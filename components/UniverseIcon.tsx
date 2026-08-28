export function UniverseIcon({ type }: { type: "brand" | "event" | "talent" }) {
  if (type === "brand") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="8" y="12" width="32" height="25" rx="4" />
        <path d="M15 37v-8h8v8M8 20h32" />
        <path d="m31 24 1.4 2.8 3.1.5-2.2 2.2.5 3.1-2.8-1.5-2.8 1.5.5-3.1-2.2-2.2 3.1-.5L31 24Z" />
      </svg>
    );
  }

  if (type === "event") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="8" y="11" width="32" height="29" rx="4" />
        <path d="M8 20h32M16 7v8M32 7v8" />
        <path d="m24 24 2.1 4.2 4.7.7-3.4 3.3.8 4.7-4.2-2.2-4.2 2.2.8-4.7-3.4-3.3 4.7-.7L24 24Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="19" cy="17" r="7" />
      <path d="M7 39c1.5-8 5.5-12 12-12s10.5 4 12 12" />
      <path d="m35 10 1.5 3.1 3.5.5-2.5 2.5.6 3.5-3.1-1.7-3.1 1.7.6-3.5-2.5-2.5 3.5-.5L35 10Z" />
    </svg>
  );
}
