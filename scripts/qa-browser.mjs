import assert from "node:assert/strict";

export const base = "http://127.0.0.1:4173";
const placeholder = '<svg xmlns="http://www.w3.org/2000/svg" width="960" height="540"><rect width="960" height="540" fill="#718096"/></svg>';
export const viewports = [[320,568],[375,667],[390,844],[768,1024],[1024,768],[1280,800],[1440,900],[1920,1080]];
const projects = ["cineflow","esports","shopping","bakery","seoul-bike","movie-analysis","undead-survivor","healthyup"];
const services = ["auth","order","board","database"];
export const routes = ["/", ...projects.map(x => "/projects/" + x), ...services.map(x => "/services/" + x), "/not-found-qa", "/projects/not-found-qa", "/services/not-found-qa"];

export async function createContext(browser, width, height, theme, reducedMotion = "reduce", hasTouch = false, origin = base) {
  const context = await browser.newContext({ viewport: { width, height }, colorScheme: theme, reducedMotion, hasTouch, serviceWorkers: "block" });
  await context.addInitScript(value => {
    if (localStorage.getItem("portfolio-theme") === null) localStorage.setItem("portfolio-theme", value);
  }, theme);
  await context.routeWebSocket("**/*", ws => ws.close());
  await context.route("**/*", async route => {
    const request = route.request();
    const url = new URL(request.url());
    if (!["GET", "HEAD"].includes(request.method())) return route.abort();
    if (url.origin !== origin) {
      if (request.resourceType() === "image" && url.hostname === "raw.githubusercontent.com") {
        return route.fulfill({ status: 200, contentType: "image/svg+xml", body: placeholder });
      }
      return route.abort();
    }
    // This origin is a local static preview server with no external redirects.
    return route.continue();
  });
  return context;
}

export async function closeContext(context) {
  await context.close();
}

export async function openRoute(page, route, index, origin = base) {
  const response = await page.goto(origin + "/?qa=" + index + "#" + route, { waitUntil: "load" });
  assert.equal(response?.status(), 200, "HTTP response");
  await page.locator("main#main-content h1").waitFor({ state: "visible" });
  await page.evaluate(async () => { await document.fonts.ready; });
}

export function observeErrors(page, errors) {
  const resource = url => new URL(url).pathname;
  page.on("pageerror", error => errors.push("pageerror: " + error.name));
  page.on("console", message => {
    if (message.type() === "error") errors.push("console: " + resource(message.location().url || base));
  });
  page.on("requestfailed", request => {
    if (request.url().startsWith(base + "/") && !/aborted|cancelled|canceled/i.test(request.failure()?.errorText ?? "")) {
      errors.push("requestfailed: " + resource(request.url()));
    }
  });
  page.on("response", response => {
    if (response.url().startsWith(base + "/") && response.status() >= 400) {
      errors.push("HTTP " + response.status() + ": " + resource(response.url()));
    }
  });
}
