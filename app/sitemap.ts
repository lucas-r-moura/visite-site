import type { MetadataRoute } from "next";

const SITE_URL = "https://visiteconexoes.com.br";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number; changeFrequency: "monthly" | "yearly" }[] = [
    { path: "", priority: 1, changeFrequency: "monthly" },
    { path: "/sobre", priority: 0.8, changeFrequency: "monthly" },
    { path: "/metodo", priority: 0.8, changeFrequency: "monthly" },
    { path: "/cases", priority: 0.8, changeFrequency: "monthly" },
    { path: "/privacidade", priority: 0.3, changeFrequency: "yearly" },
    { path: "/termos", priority: 0.3, changeFrequency: "yearly" },
  ];

  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency,
    priority,
  }));
}
