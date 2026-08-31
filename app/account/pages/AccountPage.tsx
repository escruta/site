import { Link } from "react-router";
import { Logotype } from "@account/components";
import { AccountSection } from "@account/components/settings";
import { useAuth } from "@account/hooks";
import { Button } from "@account/components/ui";
import { websiteUrl } from "@account/config";

export function AccountPage() {
  const { signOut } = useAuth();

  return (
    <main className="min-h-dvh bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <header className="flex items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-gray-800">
        <Link to={websiteUrl} aria-label="Escruta home">
          <Logotype className="h-4 w-auto fill-black dark:fill-white" />
        </Link>
        <Button variant="secondary" onClick={signOut}>
          Sign out
        </Button>
      </header>
      <div className="mx-auto w-full max-w-2xl px-6 py-10">
        <h1 className="mb-6 text-2xl font-bold">Account</h1>
        <AccountSection />
      </div>
    </main>
  );
}

export default AccountPage;
