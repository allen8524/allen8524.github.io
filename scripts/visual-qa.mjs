import assert from "node:assert/strict";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { chromium } from "playwright";
import { base, closeContext, createContext, openRoute } from "./qa-browser.mjs";

const baseline = "http://127.0.0.1:4174";
const root = "qa-artifacts/visual";
const pages = { home: "/", project: "/projects/cineflow", service: "/services/auth", missing: "/not-found-qa" };

// Use grayscale glyph antialiasing in both captures to avoid LCD compositing variance.
const browser = await chromium.launch({ channel: "chromium", args: ["--disable-gpu", "--disable-lcd-text"] });
async function capture(origin, directory) {
  await mkdir(directory, { recursive: true });
  const files = [];
  for (const [device, width, height] of [["desktop",1440,900],["mobile",390,844]]) {
    for (const theme of ["light", "dark"]) {
      const context = await createContext(browser, width, height, theme, "reduce", device === "mobile", origin);
      try {
        const page = await context.newPage();
        async function screenshot(name) {
          await page.evaluate(async () => {
            await document.fonts.ready;
            const visible = [...document.images].filter(image => {
              const rect = image.getBoundingClientRect();
              return rect.bottom > 0 && rect.top < innerHeight && rect.width > 0 && image.closest('[aria-hidden="true"]') === null;
            });
            await Promise.all(visible.map(image => image.decode()));
            await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
          });
          const file = device + "-" + theme + "-" + name + ".png";
          const options = { animations: "disabled", caret: "hide", scale: "css" };
          let previous = await page.screenshot(options);
          for (let attempt = 0; attempt < 8; attempt++) {
            const current = await page.screenshot(options);
            if (previous.equals(current)) {
              await writeFile(directory + "/" + file, current);
              files.push(file);
              return;
            }
            previous = current;
          }
          throw new Error("Screen did not settle: " + file);
        }
        for (const [name, route] of Object.entries(pages)) {
          await openRoute(page, route, name, origin);
          await screenshot(name);
          if (name === "home") {
            if (device === "mobile") {
              const menu = page.locator(".site-topbar-menu-toggle");
              await menu.tap();
              await screenshot("menu");
              await menu.tap();
            }
            await page.getByRole("button", { name: "Spring", exact: true }).click();
            await page.waitForFunction(() => document.querySelectorAll(".portfolio-card").length === 1);
            await page.locator(".portfolio-card").scrollIntoViewIfNeeded();
            await screenshot("filter");
            await page.locator(".portfolio-preview-button").click();
            await page.getByRole("dialog").locator(".is-initial").waitFor({state: "visible"});
            await screenshot("card-modal");
          }
          if (name === "project") {
            const gallery = page.locator(".project-gallery-item").first();
            await gallery.scrollIntoViewIfNeeded();
            await gallery.locator("button").focus();
            await screenshot("gallery");
            await page.keyboard.press("Enter");
            await page.getByRole("dialog").getByRole("button", { name: "다음 이미지" }).waitFor();
            await screenshot("gallery-modal");
          }
        }
      } finally {
        await closeContext(context);
      }
    }
  }
  return files;
}

try {
  const files = await capture(baseline, root + "/baseline");
  assert.equal(files.length, 34);
  assert.deepEqual(await capture(base, root + "/current"), files);
  const differences = [];
  for (const file of files) {
    const [before, after] = await Promise.all(["baseline", "current"].map(side => readFile(root + "/" + side + "/" + file)));
    if (!before.equals(after)) differences.push(file);
  }
  console.log("Visual regression: " + (files.length - differences.length) + "/" + files.length + " identical");
  assert.deepEqual(differences, [], "Changed screenshots");
} finally {
  await browser.close();
}
