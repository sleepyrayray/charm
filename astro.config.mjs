import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://sleepyrayray.github.io",
  base: "/charm",
  vite: {
    plugins: [tailwindcss()],
  },
});
