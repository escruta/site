import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Button } from "./components/ui";

export const links: Route.LinksFunction = () => [
  {
    rel: "icon",
    href: "/LightIcon.svg",
    media: "(prefers-color-scheme: light)",
    id: "favicon-light",
  },
  {
    rel: "icon",
    href: "/DarkIcon.svg",
    media: "(prefers-color-scheme: dark)",
    id: "favicon-dark",
  },
];

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Escruta",
  description: "Organize, analyze, and learn from your own knowledge.",
  url: "https://escruta.com",
  applicationCategory: "ProductivityApplication",
  operatingSystem: "Web",
  author: {
    "@type": "Person",
    name: "Francisco Mesa",
    url: "https://francids.com",
  },
  screenshot: "https://escruta.com/AppScreenshot.webp",
  featureList: [
    "AI-powered knowledge management",
    "Note taking and organization",
    "Document analysis",
    "Study guide generation",
    "Flashcard creation",
    "Mind mapping",
    "Audio summaries",
  ],
});

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="application-name" content="Escruta" />
        <meta name="format-detection" content="telephone=no" />
        <Meta />
        <Links />
        <script src="/scripts/favicon.js" />
        <script type="application/ld+json">{jsonLd}</script>
      </head>
      <body>
        <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
          <div className="md:min-h-[calc(100vh-80px)] w-full">
            <Navbar />
            <main className="w-full">{children}</main>
            <Footer />
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "An unexpected error occurred.";

  if (import.meta.env.DEV && error instanceof Error) {
    message = error.message;
  }

  return (
    <main className="flex flex-col gap-4 items-center justify-center h-screen bg-gray-950 text-white">
      <h1 className="text-4xl font-bold">An error occurred</h1>
      <p className="text-lg text-gray-400">{message}</p>

      {error instanceof Error && import.meta.env.DEV && (
        <pre className="w-full max-w-2xl p-4 overflow-x-auto bg-gray-900 rounded-xs text-gray-400">
          <code>{error.stack}</code>
        </pre>
      )}

      <Link to="/">
        <Button variant="secondary">Return to Homepage</Button>
      </Link>
    </main>
  );
}
