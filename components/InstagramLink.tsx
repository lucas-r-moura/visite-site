import { ArrowUpRight } from "./ArrowUpRight";

const INSTAGRAM_URL = "https://www.instagram.com/visite.conexoes/";

type InstagramLinkProps = {
  location?: "contact" | "footer";
};

export function InstagramLink({ location = "contact" }: InstagramLinkProps) {
  return (
    <a
      className={`instagram-link instagram-link-${location}`}
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Acompanhe a VISITE no Instagram: @visite.conexoes"
    >
      <span className="instagram-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle className="instagram-dot" cx="17.4" cy="6.8" r="1" />
        </svg>
      </span>
      <span className="instagram-handle">@visite.conexoes</span>
      <ArrowUpRight className="instagram-arrow" />
    </a>
  );
}
