import HeroSection from "~/components/HeroSection";
import AboutSection from "~/components/AboutSection";
import FeatureSection from "~/components/FeatureSection";
import type { Route } from "./+types/home";

export function meta(_: Route.MetaArgs) {
  const title = "Escruta - Think, ask, learn";
  const description =
    "Organize, analyze, and learn from your own knowledge. Ask questions, connect ideas, and get insights—all in a open-source platform.";
  const url = "https://escruta.com";
  const image = "https://escruta.com/OpenGraphImage.webp";
  const keywords =
    "knowledge management, AI research, structured thinking, open source, study tools, academic research, knowledge base, documentation, learning platform";

  return [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { name: "author", content: "Francisco Mesa" },
    {
      name: "robots",
      content:
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    { name: "googlebot", content: "index, follow" },
    { tagName: "link", rel: "canonical", href: url },

    // OpenGraph
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:site_name", content: "Escruta" },
    { property: "og:locale", content: "en_US" },
    { property: "og:image", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "600" },
    {
      property: "og:image:alt",
      content: "Escruta - AI-powered knowledge management platform",
    },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
    {
      name: "twitter:image:alt",
      content: "Escruta - AI-powered knowledge management platform",
    },
    { name: "twitter:creator", content: "@franc_ids" },
    { name: "twitter:site", content: "@franc_ids" },
  ];
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeatureSection />
    </>
  );
}
