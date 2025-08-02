import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  build: {
    minify: true,
  },
  plugins: [react(), tailwindcss()],
  base: "/browser-extensions-manager-ui-main",
});
