import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { renderToStaticMarkup } from "react-dom/server";
import { chromium } from "playwright";
import { slides } from "./slides";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const buildDir = join(root, "build");
const imgDir = join(root, "images");
mkdirSync(buildDir, { recursive: true });
mkdirSync(imgDir, { recursive: true });

const only = process.argv.slice(2);
const todo = only.length ? slides.filter((s) => only.some((o) => s.id.includes(o))) : slides;

const head = `<!doctype html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600..800&family=IBM+Plex+Mono:wght@500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=block" rel="stylesheet">
<style>*{box-sizing:border-box}html,body{margin:0;padding:0;background:#fff}
body{-webkit-font-smoothing:antialiased;text-rendering:geometricPrecision}</style>
</head><body>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });

for (const s of todo) {
  const html = head + renderToStaticMarkup(s.el) + "</body></html>";
  const file = join(buildDir, `${s.id}.html`);
  writeFileSync(file, html);
  await page.goto(pathToFileURL(file).href, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: join(imgDir, `${s.id}.png`), clip: { x: 0, y: 0, width: 1920, height: 1080 } });
  console.log("rendered", s.id);
}

await browser.close();
