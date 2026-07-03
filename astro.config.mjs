import { defineConfig } from "astro/config";

// Minimal repro: on-demand (SSR) output so the endpoint runs per-request.
export default defineConfig({
  output: "server",
});
