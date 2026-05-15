import { copyFileSync, existsSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = 'out';
const landing = join(outDir, 'landing.html');
const index = join(outDir, 'index.html');
const nojekyll = join(outDir, '.nojekyll');

if (!existsSync(outDir)) {
  console.log('[build-pages] No out/ directory; skipping (next export not run).');
  process.exit(0);
}

if (existsSync(landing)) {
  copyFileSync(landing, index);
  console.log('[build-pages] Copied out/landing.html → out/index.html');
} else {
  console.warn('[build-pages] WARNING: out/landing.html missing.');
}

writeFileSync(nojekyll, '');
console.log('[build-pages] Created out/.nojekyll (lets _next/ assets serve on GitHub Pages).');
