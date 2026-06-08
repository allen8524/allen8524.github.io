import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: "assets/img", dest: "." },
        { src: "assets/vendor", dest: "." },
        { src: "assets/css", dest: "." },
        { src: "assets/js", dest: "." },
        { src: "assets/files", dest: "." },
      ],
    }),
  ],
  base: "/",
  build: {
    outDir: "dist",
    assetsDir: "assets/react",
  },
});
