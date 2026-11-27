import { stat } from "node:fs/promises";
import path from "node:path";
import { preview } from "vite";

const command = process.argv[2];
const baseline = process.env.VISUAL_BASELINE_DIST;
const servers = [];
const blockRedirects = {
  name: "qa-block-redirects",
  configurePreviewServer(server) {
    server.middlewares.use((_request, response, next) => {
      const writeHead = response.writeHead;
      response.writeHead = function (status, ...args) {
        if (status >= 300 && status < 400 && status !== 304) {
          this.removeHeader("location");
          return writeHead.call(this, 502);
        }
        return writeHead.call(this, status, ...args);
      };
      next();
    });
  },
};

async function serve(directory, port) {
  await stat(path.join(directory, "index.html"));
  const server = await preview({
    configFile: false,
    plugins: [blockRedirects],
    build: { outDir: directory },
    preview: { host: "127.0.0.1", port, strictPort: true },
  });
  servers.push(server.httpServer);
}

try {
  if (command === "visual" && !baseline) {
    throw new Error("Set VISUAL_BASELINE_DIST to the production build of the fixed baseline commit");
  }
  await serve(path.resolve("dist"), 4173);
  if (command === "visual") {
    await serve(path.resolve(baseline), 4174);
    await import("./visual-qa.mjs");
  } else {
    await import("./frontend-qa.mjs");
  }
} finally {
  await Promise.all(servers.map(server => new Promise(resolve => server.close(resolve))));
}
