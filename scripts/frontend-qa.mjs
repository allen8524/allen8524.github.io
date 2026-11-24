import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { readFile } from "node:fs/promises";
import path from "node:path";

const moduleRoot = process.env.QA_MODULES;
if (!moduleRoot || !path.isAbsolute(moduleRoot)) throw new Error("QA_MODULES must point to isolated dependencies");
const require = createRequire(path.join(moduleRoot, "qa-entry.cjs"));
const { chromium } = require("playwright");
const axeSource = await readFile(require.resolve("axe-core/axe.min.js"), "utf8");
const base = "http://127.0.0.1:4173";
const placeholder = '<svg xmlns="http://www.w3.org/2000/svg" width="960" height="540" viewBox="0 0 960 540"><rect width="960" height="540" fill="#718096"/></svg>';
const viewports = [[320,568],[375,667],[390,844],[768,1024],[1024,768],[1280,800],[1440,900],[1920,1080]];
const projects = ["cineflow","esports","shopping","bakery","seoul-bike","movie-analysis","undead-survivor","healthyup"];
const services = ["auth","order","board","database"];
const routes = ["/", ...projects.map(x=>"/projects/"+x), ...services.map(x=>"/services/"+x), "/not-found-qa", "/projects/not-found-qa", "/services/not-found-qa"];
const browser = await chromium.launch();
const failures = [];
let executed = 0;
let incomplete = 0;

async function createContext(width, height, theme) {
  const context = await browser.newContext({ viewport: { width, height }, colorScheme: theme, reducedMotion: "reduce", serviceWorkers: "block" });
  await context.addInitScript((value) => { localStorage.setItem("portfolio-theme", value); }, theme);
  await context.routeWebSocket("**/*", (ws) => ws.close());
  await context.route("**/*", async (route) => {
    const request = route.request();
    const url = new URL(request.url());
    if (!["GET","HEAD"].includes(request.method())) return route.abort();
    if (url.origin !== base) {
      if (request.resourceType() === "image" && url.hostname === "raw.githubusercontent.com") {
        return route.fulfill({ status: 200, contentType: "image/svg+xml", body: placeholder });
      }
      return route.abort();
    }
    const response = await route.fetch({ maxRedirects: 0 });
    if (response.status() >= 300 && response.status() < 400) return route.abort();
    return route.fulfill({ response });
  });
  return context;
}

async function openRoute(page, route, index) {
  const response = await page.goto(base + "/?qa=" + index + "#" + route, { waitUntil: "load" });
  assert.equal(response?.status(), 200, "HTTP response");
  await page.locator("main#main-content h1").waitFor({ state: "visible" });
  await page.evaluate(async () => { await document.fonts.ready; });
}

try {
  for (const theme of ["light","dark"]) {
    for (const [width,height] of viewports) {
      const context = await createContext(width,height,theme);
      const page = await context.newPage();
      const errors = [];
      page.on("pageerror", () => errors.push("pageerror"));
      page.on("console", msg => { if (msg.type() === "error") errors.push("console-error"); });
      for (let i=0;i<routes.length;i++) {
        const route = routes[i];
        const label = theme+" "+width+"x"+height+" "+route;
        errors.length = 0;
        executed++;
        try {
          await openRoute(page,route,i);
          assert.equal(await page.locator("html").getAttribute("data-theme"),theme);
          const overflow = await page.evaluate(() => Math.max(0,document.documentElement.scrollWidth - document.documentElement.clientWidth));
          if (overflow > 1) failures.push(label+" document overflow "+overflow+"px");
          await page.addScriptTag({ content: axeSource });
          const result = await page.evaluate(async () => {
            const results = await window.axe.run({ runOnly: { type: "tag", values: ["wcag2a","wcag2aa","wcag21a","wcag21aa","wcag22aa"] } });
            return { violations: results.violations.map(v=>({id:v.id,count:v.nodes.length})), incomplete: results.incomplete.length };
          });
          incomplete += result.incomplete;
          for (const violation of result.violations) failures.push(label+" axe "+violation.id+" ("+violation.count+")");
          if (errors.length) failures.push(label+" runtime/console errors: "+errors.length);
          console.log(label+" checked; overflow="+overflow+"; axe violations="+result.violations.length+"; incomplete="+result.incomplete);
        } catch (error) {
          failures.push(label+" load/check failed: "+error.name);
        }
      }
      await context.close();
    }
  }
  for (const [width,height] of [[390,844],[1440,900]]) {
    const context = await createContext(width,height,"light");
    const page = await context.newPage();
    try {
      await openRoute(page,"/","interaction");
      await page.locator(".skip-navigation").focus();
      await page.keyboard.press("Enter");
      assert.equal(await page.evaluate(()=>document.activeElement?.id),"main-content");
      const theme = page.locator(".theme-orb-toggle");
      await theme.click();
      assert.equal(await page.locator("html").getAttribute("data-theme"),"dark");
      const diagram = page.getByRole("button",{name:/Client 상영 회차 선택/});
      await diagram.focus();
      await page.keyboard.press("Enter");
      await page.locator("#backend-design-detail a").waitFor();
      assert.equal(await page.evaluate(()=>document.activeElement?.closest("#backend-design-detail")?.id),"backend-design-detail");
      await page.keyboard.press("Escape");
      assert.equal(await diagram.evaluate(el=>el===document.activeElement),true);
      if (width < 1200) await page.locator(".site-topbar-menu-toggle").click();
      await page.locator("#navmenu").getByRole("button",{name:"프로젝트",exact:true}).click();
      await page.waitForFunction(()=>document.activeElement?.id==="portfolio");
      await page.getByRole("button",{name:"Spring",exact:true}).click();
      assert.equal(await page.locator(".portfolio-card").count(),1);
      await page.locator(".portfolio-cta .primary").first().click();
      await page.locator(".project-detail-hero h1").waitFor();
      await page.locator(".project-detail-hero .project-detail-image-button").click();
      await page.getByRole("button",{name:"미리보기 닫기"}).waitFor({state:"visible"});
      await page.keyboard.press("Escape");
      await page.locator(".image-preview").waitFor({state:"detached"});
      assert.equal(await page.locator(".project-detail-hero .project-detail-image-button").evaluate(el=>el===document.activeElement),true);
      await page.goBack();
      await page.locator("#portfolio").waitFor();
      console.log("interaction "+width+"x"+height+" passed");
    } catch(error) {
      failures.push("interaction "+width+"x"+height+" "+error.name);
    } finally { await context.close(); }
  }
} finally { await browser.close(); }
console.log("View checks executed: "+executed+"/"+(routes.length*viewports.length*2)+"; axe incomplete: "+incomplete+"; failure records: "+failures.length);
for (const failure of failures) console.error(failure);
if (failures.length) process.exitCode=1;
