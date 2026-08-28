import Image from "next/image";

export function BrandLogo({ priority = false }: { priority?: boolean }) {
  return (
    <span className="brand-logo" aria-label="VISITE - conexões estratégicas">
      <Image
        src="/assets/visite-logo.png"
        alt="VISITE - conexões estratégicas"
        width={1920}
        height={1080}
        priority={priority}
      />
    </span>
  );
}
