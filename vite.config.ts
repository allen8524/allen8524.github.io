import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: "assets/img/**/*", dest: "assets/img", rename: { stripBase: 2 } },
        { src: "assets/files/**/*", dest: "assets/files", rename: { stripBase: 2 } },
        { src: "robots.txt", dest: "." },
        { src: "sitemap.xml", dest: "." },
        { src: "sitemap.txt", dest: "." },
        { src: ".nojekyll", dest: "." },
      ],
    }),
  ],
  base: "/",
  build: {
    outDir: "dist",
    assetsDir: "assets/react",
  },
});
