import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const basePath = process.env.GITHUB_PAGES_BASE_PATH || "/refugio-conexao-site";
const outDir = path.join(repoRoot, ".gh-pages-dist");
const appDir = path.join(repoRoot, ".next/server/app");

const ensureDir = (dir) => mkdirSync(dir, { recursive: true });

const copyIfExists = (from, to) => {
  if (!existsSync(from)) return;
  ensureDir(path.dirname(to));
  cpSync(from, to, { recursive: true });
};

const writeRoute = (from, routePath) => {
  const target = routePath === "/" ? path.join(outDir, "index.html") : path.join(outDir, routePath, "index.html");
  ensureDir(path.dirname(target));
  writeFileSync(target, readFileSync(from, "utf8"));
};

const walk = (dir, visitor) => {
  for (const entry of readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    const stats = statSync(fullPath);
    if (stats.isDirectory()) {
      walk(fullPath, visitor);
    } else {
      visitor(fullPath);
    }
  }
};

const rewriteAssetPaths = (filePath) => {
  const textExtensions = new Set([".css", ".html", ".js", ".json", ".svg", ".txt", ".webmanifest", ".xml"]);
  if (!textExtensions.has(path.extname(filePath))) return;

  const before = readFileSync(filePath, "utf8");
  const after = before
    .replaceAll('href="/', `href="${basePath}/`)
    .replaceAll('src="/', `src="${basePath}/`)
    .replaceAll('content="/', `content="${basePath}/`)
    .replaceAll('url(/', `url(${basePath}/`)
    .replaceAll('"/_next/', `"${basePath}/_next/`)
    .replaceAll('"/images/', `"${basePath}/images/`)
    .replaceAll('"/logo-refugio', `"${basePath}/logo-refugio`)
    .replaceAll('"/favicon', `"${basePath}/favicon`)
    .replaceAll('"/icon', `"${basePath}/icon`)
    .replaceAll('"/apple-icon', `"${basePath}/apple-icon`)
    .replaceAll('"/manifest.webmanifest', `"${basePath}/manifest.webmanifest`)
    .replaceAll("'/api/availability", "'https://refugioconexao.com/api/availability")
    .replaceAll('"/api/availability', '"https://refugioconexao.com/api/availability');

  if (after !== before) {
    writeFileSync(filePath, after);
  }
};

rmSync(outDir, { recursive: true, force: true });
ensureDir(outDir);

copyIfExists(path.join(repoRoot, "public"), outDir);
copyIfExists(path.join(repoRoot, ".next/static"), path.join(outDir, "_next/static"));

writeRoute(path.join(appDir, "index.html"), "/");
writeRoute(path.join(appDir, "domos/domo-one.html"), "domos/domo-one");
writeRoute(path.join(appDir, "domos/domo-two.html"), "domos/domo-two");
writeRoute(path.join(appDir, "domos/domo-three.html"), "domos/domo-three");
writeRoute(path.join(appDir, "politicas-de-reserva.html"), "politicas-de-reserva");

copyIfExists(path.join(appDir, "robots.txt.body"), path.join(outDir, "robots.txt"));
copyIfExists(path.join(appDir, "sitemap.xml.body"), path.join(outDir, "sitemap.xml"));
copyIfExists(path.join(appDir, "manifest.webmanifest.body"), path.join(outDir, "manifest.webmanifest"));
copyIfExists(path.join(appDir, "favicon.ico.body"), path.join(outDir, "favicon.ico"));
copyIfExists(path.join(appDir, "icon.png.body"), path.join(outDir, "icon.png"));
copyIfExists(path.join(appDir, "apple-icon.png.body"), path.join(outDir, "apple-icon.png"));

writeFileSync(path.join(outDir, ".nojekyll"), "");

walk(outDir, rewriteAssetPaths);

console.log(`GitHub Pages static build ready at ${path.relative(repoRoot, outDir)} with base path ${basePath}`);
