type ArrowUpRightProps = {
  className?: string;
};

export function ArrowUpRight({ className = "" }: ArrowUpRightProps) {
  return (
    <svg
      aria-hidden="true"
      className={`arrow-icon${className ? ` ${className}` : ""}`}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 12 12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  );
}
