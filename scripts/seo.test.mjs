import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { test } from "node:test";

const origin = "https://allen8524.github.io";
const html = await readFile("index.html", "utf8");

test("site discovery references the canonical crawlable URL", async () => {
  const robots = await readFile("robots.txt", "utf8");
  const sitemap = await readFile("sitemap.xml", "utf8");
  assert(robots.includes("Sitemap: " + origin + "/sitemap.xml"));
  assert(robots.includes("Allow: /"));
  assert.deepEqual([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]), [origin + "/"]);
  assert(html.includes('<link rel="canonical" href="' + origin + '/"'));
});

test("structured data connects the profile to the person and local image", async () => {
  const json = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
  assert(json, "structured data script");
  const data = JSON.parse(json);
  assert.equal(data["@context"], "https://schema.org");
  const profile = data["@graph"].find(item => item["@type"] === "ProfilePage");
  const person = data["@graph"].find(item => item["@type"] === "Person");
  assert.equal(profile.mainEntity["@id"], person["@id"]);
  assert.equal(profile.url, origin + "/");
  assert.equal(new URL(person.image).origin, origin);
  await access("." + new URL(person.image).pathname);
  for (const [, href] of html.matchAll(/href="(\/assets\/img\/favicon\/[^"]+)"/g)) {
    await access("." + new URL(href, origin).pathname);
  }
});
