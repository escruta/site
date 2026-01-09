import type { Route } from "./+types/not-found";
import { Button } from "../components/ui";

export function meta(_: Route.MetaArgs) {
  return [
    {
      title: "404 - Page Not Found - Escruta",
    },
    {
      name: "description",
      content:
        "The page you are looking for does not exist. Return to Escruta's homepage to continue your research journey.",
    },
  ];
}

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-900 text-gray-200">
      <h1 className="text-4xl font-bold mb-2">404 Not Found</h1>
      <p className="text-lg mb-4">
        The page you are looking for does not exist.
      </p>
      <Button href="/" variant="primary">
        Go back to the application
      </Button>
    </main>
  );
}
