import assert from "node:assert/strict";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { chromium, firefox, webkit } from "playwright";
import { base, viewports, routes, createContext as isolatedContext, closeContext, openRoute, observeErrors } from "./qa-browser.mjs";

const axeSource = await readFile(new URL(import.meta.resolve("axe-core/axe.min.js")), "utf8");
assert.equal(routes.length * viewports.length * 2, 256, "legacy Chromium matrix size");
const manualReview = [];
const browserResults = [];
const failures = [];
let executed = 0;
let incomplete = 0;
let interactionsPassed = 0;
let viewsCompleted = 0;

const engines = { chromium, firefox, webkit };
const edgeWidths = [767, 768, 769, 991, 992, 993, 1199, 1200, 1201, 1399, 1400, 1401];
const smokeRoutes = ["/", "/projects/cineflow", "/services/auth", "/not-found-qa"];

for (const [engine, browserType] of Object.entries(engines)) {
  const browser = await browserType.launch(engine === "chromium" ? { channel: "chromium" } : {});
  const createContext = (...options) => isolatedContext(browser, ...options);
  const interactionCases = [[390,844,"reduce"],[1440,900,"reduce"],[390,844,"no-preference"],[1440,900,"no-preference"]];
  const before = { views: viewsCompleted, interactions: interactionsPassed };
  try {
    for (const [width,height,motion] of interactionCases) {
      const context = await createContext(width,height,"light",motion,width === 390);
      const errors = [];
      await context.addInitScript(() => {
        Object.defineProperty(navigator, "clipboard", { configurable: true, value: {
          async writeText(value) {
            if (sessionStorage.getItem("qa-deny-clipboard")) throw new DOMException("QA fixture", "NotAllowedError");
            if (value !== document.querySelector("#contactEmailAddress")?.value) throw new Error("Unexpected clipboard payload");
            sessionStorage.setItem("qa-clipboard-written", "true");
          },
        } });
      });
      const page = await context.newPage();
      observeErrors(page, errors);
      let stage = "open home";
      page.setDefaultTimeout(12000);
      const mark = (name) => { stage = name; console.log("interaction "+engine+" "+motion+" "+width+"x"+height+" stage: "+name); };
      try {
        await openRoute(page,"/","interaction");
        mark("skip navigation");
        await page.keyboard.press("Tab");
        assert.equal(await page.locator(".skip-navigation").evaluate(el=>el===document.activeElement), true);
        await page.keyboard.press("Enter");
        assert.equal(await page.evaluate(()=>document.activeElement?.id),"main-content");
        mark("theme toggle");
        const theme = page.locator(".theme-orb-toggle");
        if (width === 390) await theme.tap();
        else await theme.click();
        assert.equal(await page.locator("html").getAttribute("data-theme"), "dark");
        mark("diagram focus and open");
        const diagram = page.getByRole("button",{name:/Client 상영 회차 선택/});
        await diagram.focus();
        await page.keyboard.press("Enter");
        await page.locator("#backend-design-detail a").waitFor();
        assert.equal(await page.evaluate(()=>document.activeElement?.closest("#backend-design-detail")?.id),"backend-design-detail");
        mark("diagram close and restore focus");
        await page.keyboard.press("Escape");
        assert.equal(await diagram.evaluate(el=>el===document.activeElement),true);
        mark("open navigation");
        if (width < 1200) {
          const menu = page.locator(".site-topbar-menu-toggle");
          await menu.focus();
          await page.keyboard.press("Enter");
          await page.locator("#navmenu button").first().focus();
          await page.keyboard.press("Escape");
          assert.equal(await menu.getAttribute("aria-expanded"), "false");
          assert.equal(await menu.evaluate(el=>el===document.activeElement), true);
          await page.keyboard.press("Enter");
        }
        await page.locator("#navmenu").getByRole("button",{name:"프로젝트",exact:true}).click();
        mark("section focus");
        await page.waitForFunction(()=>document.activeElement?.id==="portfolio");
        assert.equal(await page.locator("#portfolio").evaluate(el=>getComputedStyle(el).outlineStyle),"none");
        mark("section reload focus");
        await page.reload({ waitUntil: "load" });
        await page.waitForFunction(()=>document.activeElement?.id==="portfolio");
        assert.equal(await page.locator("#portfolio").evaluate(el=>getComputedStyle(el).outlineStyle),"none");
        assert.equal(await page.locator("html").getAttribute("data-theme"), "dark");
        mark("project filter");
        const springFilter = page.getByRole("button",{name:"Spring",exact:true});
        await springFilter.focus();
        await page.keyboard.press("Enter");
        await page.waitForURL("**/?filter=spring#portfolio");
        await page.waitForFunction(()=>document.querySelectorAll(".portfolio-card").length===1);
        assert.equal(await springFilter.evaluate(el=>el===document.activeElement), true);
        mark("card image keyboard preview");
        const cardPreview = page.locator(".portfolio-preview-button").first();
        await cardPreview.focus();
        assert.equal(await cardPreview.evaluate(el=>getComputedStyle(el).outlineStyle), "solid");
        await page.keyboard.press("Enter");
        await page.getByRole("button", {name:"미리보기 닫기"}).waitFor({state:"visible"});
        await page.keyboard.press("Escape");
        await page.getByRole("dialog").waitFor({state:"detached"});
        assert.equal(await cardPreview.evaluate(el=>el===document.activeElement), true);
        mark("project detail navigation");
        await page.locator(".portfolio-cta .primary").first().focus();
        await page.keyboard.press("Enter");
        await page.locator(".project-detail-hero h1").waitFor();
        assert.equal(await page.evaluate(()=>document.activeElement?.id), "main-content");
        mark("gallery screenshot layers");
        const galleryCard = page.locator(".project-gallery-item").first();
        await galleryCard.waitFor();
        assert.equal(await galleryCard.locator(".project-gallery-fan__sheet[aria-hidden=true]").count(), 3);
        const galleryButton = galleryCard.locator("button");
        if (width >= 1200 && motion === "no-preference") {
          const sheet = galleryCard.locator(".project-gallery-fan__sheet--3");
          await galleryButton.scrollIntoViewIfNeeded();
          await page.mouse.move(0, 0);
          const settleFan = () => sheet.evaluate(el => Promise.allSettled(el.getAnimations().map(animation => animation.finished)));
          await settleFan();
          const initial = await sheet.evaluate(el => getComputedStyle(el).transform);
          const waitForFan = value => page.waitForFunction(expected => {
            const layer = document.querySelector(".project-gallery-fan__sheet--3");
            return layer && (getComputedStyle(layer).transform === expected.value) === expected.matches;
          }, { value: initial, matches: value });
          await galleryButton.focus();
          await waitForFan(false);
          await settleFan();
          await galleryButton.blur();
          await waitForFan(true);
          if (await page.evaluate(() => matchMedia("(hover: hover)").matches)) {
            await galleryButton.hover();
            await waitForFan(false);
            await settleFan();
          } else {
            console.log(engine + " does not advertise hover; gallery fan verified via keyboard focus");
          }
        }
        mark("gallery image modal");
        if (width === 390) await galleryButton.tap();
        else await galleryButton.click();
        const galleryDialog = page.getByRole("dialog");
        await galleryDialog.getByRole("button", { name: "다음 이미지" }).waitFor();
        const current = await galleryDialog.getAttribute("aria-label");
        if (engine === "chromium" && width === 390) {
          const stage = await galleryDialog.locator(".image-preview__stage").boundingBox();
          assert(stage, "touch stage is visible");
          const client = await context.newCDPSession(page);
          try {
            const y = stage.y + stage.height / 2;
            const start = stage.x + stage.width * 0.75;
            const end = stage.x + stage.width * 0.25;
            await client.send("Input.dispatchTouchEvent", { type: "touchStart", touchPoints: [{ x: start, y }] });
            await client.send("Input.dispatchTouchEvent", { type: "touchMove", touchPoints: [{ x: end, y }] });
            await client.send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] });
          } finally { await client.detach(); }
        } else {
          await page.keyboard.press("ArrowRight");
        }
        await page.waitForFunction(name => document.querySelector('[role="dialog"]')?.getAttribute("aria-label") !== name, current);
        await page.keyboard.press("Escape");
        await galleryDialog.waitFor({state:"detached"});
        assert.equal(await galleryButton.evaluate(el=>el===document.activeElement), true);
        mark("image modal open");
        await page.locator(".project-detail-hero .project-detail-image-button").click();
        mark("image modal close control");
        await page.getByRole("button",{name:"미리보기 닫기"}).waitFor({state:"visible"});
        await page.keyboard.press("Escape");
        mark("image modal close and focus restore");
        await page.locator(".image-preview").waitFor({state:"detached"});
        assert.equal(await page.locator(".project-detail-hero .project-detail-image-button").evaluate(el=>el===document.activeElement),true);
        mark("browser back");
        await page.goBack();
        await page.locator("#portfolio").waitFor();
        assert.equal(await page.locator(".portfolio-card").count(), 1);
        assert.equal(await springFilter.getAttribute("aria-pressed"), "true");
        assert.equal(await page.evaluate(()=>document.activeElement?.id), "portfolio");
        mark("back to top focus");
        const scrollTop = page.getByRole("button", {name:"맨 위로 이동"});
        await page.waitForFunction(() => window.scrollY > 100);
        await scrollTop.press("Enter");
        await page.waitForFunction(() => window.scrollY === 0);
        assert.equal(await page.evaluate(() => document.activeElement?.id), "main-content");
        mark("forward and back");
        await page.goForward();
        await page.locator(".project-detail-hero h1").waitFor();
        await page.goBack();
        await page.waitForFunction(() => document.activeElement?.id === "portfolio");
        assert.equal(await springFilter.getAttribute("aria-pressed"), "true");
        mark("email copy and fallback");
        const copy = page.getByRole("button", { name: "이메일 복사", exact: true });
        await copy.evaluate(el => el.scrollIntoView({ behavior: "instant", block: "center" }));
        await copy.click();
        await page.getByRole("status").filter({ hasText: "이메일 주소가 복사되었습니다." }).waitFor();
        assert.equal(await page.evaluate(() => sessionStorage.getItem("qa-clipboard-written")), "true");
        await page.evaluate(() => sessionStorage.setItem("qa-deny-clipboard", "true"));
        await page.getByRole("button", { name: "이메일 주소 복사" }).click();
        await page.getByRole("status").filter({ hasText: "직접 선택해 주세요." }).waitFor();
        assert.deepEqual(errors, [], "unexpected browser errors");
        mark("light theme persistence");
        const themePage = await context.newPage();
        const themeErrors = [];
        observeErrors(themePage, themeErrors);
        await openRoute(themePage, "/", "theme");
        assert.equal(await themePage.locator("html").getAttribute("data-theme"), "dark");
        const lightToggle = themePage.locator(".theme-orb-toggle");
        if (width === 390) await lightToggle.tap();
        else await lightToggle.click();
        assert.equal(await themePage.locator("html").getAttribute("data-theme"), "light");
        await themePage.reload({ waitUntil: "domcontentloaded" });
        await themePage.locator("main#main-content h1").waitFor();
        assert.equal(await themePage.locator("html").getAttribute("data-theme"), "light");
        assert.deepEqual(themeErrors, [], "unexpected theme page errors");
        await themePage.close();
        mark("lazy route unavailable and retry");
        const recoveryPage = await context.newPage();
        const recoveryErrors = [];
        observeErrors(recoveryPage, recoveryErrors);
        let injected = false;
        const failChunk = async route => {
          await route.fulfill({ status: 503, headers: { "cache-control": "no-store" }, body: "QA fixture: unavailable" });
          injected = true;
        };
        await recoveryPage.route("**/ServiceDetailPage-*.js", failChunk);
        await recoveryPage.goto(base + "/#/services/auth");
        await recoveryPage.getByRole("heading", { name: "페이지를 불러오지 못했습니다" }).waitFor();
        assert(injected, "503 fixture should be served");
        assert(recoveryErrors.some(error => /^(HTTP 503|requestfailed): .*ServiceDetailPage/.test(error)), "failed chunk should be recorded");
        await recoveryPage.unroute("**/ServiceDetailPage-*.js", failChunk);
        await recoveryPage.getByRole("button", { name: "다시 시도" }).click();
        await recoveryPage.locator("main#main-content h1").waitFor();
        interactionsPassed++;
        console.log("interaction "+engine+" "+motion+" "+width+"x"+height+" passed");
      } catch(error) {
        const failure = "interaction "+engine+" "+motion+" "+width+"x"+height+" stage="+stage+" "+error.name+" "+error.message;
        failures.push(failure);
        console.error(failure);
      } finally { await finishContext(context, engine); }
    }
    const batches = [];
    for (const theme of ["light","dark"]) {
      if (engine === "chromium") {
        for (const [width,height] of viewports) batches.push({ theme, width, height, motion: "reduce", pages: routes });
      }
      for (const motion of ["reduce","no-preference"]) {
        for (const [width,height] of [[390,844],[1440,900]]) {
          if (engine !== "chromium" || motion !== "reduce") batches.push({ theme,width,height,motion,pages:smokeRoutes });
        }
      }
    }
    if (engine === "chromium") {
      for (const width of edgeWidths) batches.push({ theme: "light", width, height: 900, motion: "reduce", pages: ["/"] });
    }
    for (const { theme, width, height, motion, pages } of batches) {
        const context = await createContext(width,height,theme,motion);
        const page = await context.newPage();
        const errors = [];
        observeErrors(page, errors);
        for (const [i, route] of pages.entries()) {
          const label = engine+" "+motion+" "+theme+" "+width+"x"+height+" "+route;
          errors.length = 0;
          executed++;
          try {
            await openRoute(page,route,i);
            assert.equal(await page.locator("html").getAttribute("data-theme"),theme);
            const overflow = await page.evaluate(() => Math.max(0,document.documentElement.scrollWidth - document.documentElement.clientWidth));
            if (overflow > 1) failures.push(label+" document overflow "+overflow+"px");
            const clippedControls = await page.evaluate(() => {
              const selectors = ".site-topbar button, .site-topbar .logo, .portfolio-cta a, .portfolio-preview-button, .project-detail-image-button, .contact .submit-btn";
              return [...document.querySelectorAll(selectors)].filter(el => {
                const rect = el.getBoundingClientRect();
                return rect.width > 0 && rect.height > 0 && getComputedStyle(el).visibility === "visible"
                  && (rect.left < -1 || rect.right > document.documentElement.clientWidth + 1);
              }).length;
            });
            if (clippedControls) failures.push(label+" controls outside viewport: "+clippedControls);
            await checkMetadata(page, route);
            await page.addScriptTag({ content: axeSource });
            const result = await page.evaluate(async () => {
              await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
              // Contrast is evaluated after the existing entrance transition has completed.
              const reveal = document.getAnimations().filter(animation =>
                animation.effect?.target?.classList.contains("reveal-item") &&
                Number.isFinite(animation.effect.getComputedTiming().endTime)
              );
              await Promise.allSettled(reveal.map(animation => animation.finished));
              const results = await window.axe.run({ runOnly: { type: "tag", values: ["wcag2a","wcag2aa","wcag21a","wcag21aa","wcag22aa"] } });
              return { violations: results.violations.map(v=>({id:v.id,count:v.nodes.length})), incomplete: results.incomplete.map(({id, impact, description, helpUrl, nodes}) => ({ id, impact, description, helpUrl, nodes: nodes.map(({target, failureSummary, any, all, none}) => ({ target, failureSummary, checks: [...any, ...all, ...none].map(({id, message, data}) => ({id, message, data})) })) })) };
            });
            incomplete += result.incomplete.length;
            if (result.incomplete.length) manualReview.push({ view: label, rules: result.incomplete });
            for (const violation of result.violations) failures.push(label+" axe "+violation.id+" ("+violation.count+")");
            if (errors.length) failures.push(label+" runtime/console errors: "+errors.join(", "));
            viewsCompleted++;
            console.log(label+" checked; overflow="+overflow+"; axe violations="+result.violations.length+"; incomplete="+result.incomplete.length);
          } catch (error) {
            const failure = label+" load/check failed: "+error.name+" "+error.message;
            failures.push(failure);
            console.error(failure);
          }
        }
        await finishContext(context, engine);
    }
    const expected = batches.reduce((total, batch) => total + batch.pages.length, 0);
    const result = { engine, expected, completed: viewsCompleted - before.views, interactionExpected: interactionCases.length, interactions: interactionsPassed - before.interactions };
    browserResults.push(result);
    if (result.completed !== expected || result.interactions !== interactionCases.length) failures.push(engine + " coverage incomplete");
  } finally { await browser.close(); }
}

await mkdir("qa-artifacts", { recursive: true });
await writeFile("qa-artifacts/browser.json", JSON.stringify({ browserResults, incomplete, failures, manualReview }, null, 2));
console.log("View checks executed: "+executed+"; completed: "+viewsCompleted+"; interactions passed: "+interactionsPassed+"; axe incomplete: "+incomplete+"; failure records: "+failures.length);
for (const failure of failures) console.error(failure);
if (failures.length) process.exitCode=1;

async function finishContext(context, engine) {
  try {
    await closeContext(context);
  } catch (error) {
    const failure = engine + " context teardown failed: " + error.message;
    failures.push(failure);
    console.error(failure);
  }
}

async function checkMetadata(page, route) {
  const notFound = route.includes("not-found-qa");
  await page.waitForFunction(missing => document.querySelector('meta[name="robots"]')?.content.includes("noindex") === missing, notFound);
  const meta = await page.evaluate(() => {
    const read = (key, attribute = "name") => document.querySelector('meta[' + attribute + '="' + key + '"]')?.content;
    return {
      title: document.title, description: read("description"), canonical: document.querySelector('link[rel="canonical"]')?.href,
      og: ["title", "description", "image", "url"].map(key => read("og:" + key, "property")),
      twitter: ["title", "description", "image", "card"].map(key => read("twitter:" + key)),
    };
  });
  assert(meta.title && meta.description && meta.og[2]);
  assert.equal(meta.canonical, "https://allen8524.github.io/" + (route === "/" || notFound ? "" : "#" + route));
  assert.deepEqual(meta.og, [meta.title, meta.description, meta.twitter[2], meta.canonical]);
  assert.deepEqual(meta.twitter, [meta.title, meta.description, meta.og[2], "summary_large_image"]);
  if (notFound) assert.match(meta.title, /찾을 수 없습니다/);
}
