import {
  isRouteErrorResponse,
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
        <meta name="theme-color" content="#121212" />
        <meta name="application-name" content="Escruta" />
        <meta name="format-detection" content="telephone=no" />
        <Meta />
        <Links />
        <script src="/scripts/favicon.js" />
        <script type="application/ld+json">{jsonLd}</script>
      </head>
      <body>
        <div className="min-h-screen text-white bg-gray-900 overflow-x-hidden">
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
  let title = "Error";
  let message = "An unexpected error occurred.";
  const is404 = isRouteErrorResponse(error) && error.status === 404;

  if (is404) {
    title = "404 Not Found";
    message = "The page you are looking for does not exist.";
  } else if (import.meta.env.DEV && error instanceof Error) {
    message = error.message;
  }

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-900 text-gray-200">
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      <p className="text-lg mb-4">{message}</p>

      {is404 ? (
        <Link
          to="/"
          className="bg-blue-500 text-white px-4 py-2 rounded-xs hover:bg-blue-600 transition duration-300 select-none"
        >
          Go back to the application
        </Link>
      ) : (
        error instanceof Error &&
        import.meta.env.DEV && (
          <pre className="w-full max-w-2xl p-4 overflow-x-auto bg-gray-800 rounded">
            <code>{error.stack}</code>
          </pre>
        )
      )}
    </main>
  );
}
