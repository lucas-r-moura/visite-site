import Image from "next/image";

type BrandLogoProps = {
  priority?: boolean;
  variant?: "complete" | "wordmark";
};

export function BrandLogo({ priority = false, variant = "complete" }: BrandLogoProps) {
  const isWordmark = variant === "wordmark";

  return (
    <span
      className={`brand-logo${isWordmark ? " brand-logo-wordmark" : ""}`}
      aria-label={isWordmark ? "VISITE" : "VISITE - conexões estratégicas"}
    >
      <Image
        src={isWordmark ? "/assets/visite-logo-wordmark.png" : "/assets/visite-logo.png"}
        alt={isWordmark ? "VISITE" : "VISITE - conexões estratégicas"}
        width={1920}
        height={1080}
        priority={priority}
      />
    </span>
  );
}
