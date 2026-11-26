import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://kipu360.github.io",
  output: "static",
  trailingSlash: "always",
  build: { format: "directory" },
});
