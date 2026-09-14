import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://escruta.com",
  adapter: cloudflare(),
  session: false,
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    port: 3000,
  },
});
