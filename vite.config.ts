import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: "assets", dest: "." },
        { src: "portfolio-*.html", dest: "." },
        { src: "service-*.html", dest: "." },
      ],
    }),
  ],
  base: "/",
  build: {
    outDir: "dist",
    assetsDir: "assets/react",
  },
});
