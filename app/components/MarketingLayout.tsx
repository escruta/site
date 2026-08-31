import { Outlet } from "react-router";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MarketingLayout() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <div className="w-full md:min-h-[calc(100vh-80px)]">
        <Navbar />
        <main className="w-full">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
