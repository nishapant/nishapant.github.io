// Give each BrowserRouter route a real entry point on GitHub Pages.
const fs = require('fs');
const path = require('path');
// Keep the small site stylesheet with each HTML entry point. Cached HTML
// remains styled even when a deployment replaces hashed asset files.
const entry = path.join('build', 'index.html');
const html = fs.readFileSync(entry, 'utf8').replace(
  /<link\b[^>]*href="([^"]+\.css)"[^>]*>/g,
  (tag, href) => {
    const cssFile = path.join('build', href.replace(/^\//, ''));
    return fs.existsSync(cssFile) ? `<style>${fs.readFileSync(cssFile, 'utf8')}</style>` : tag;
  }
);
fs.writeFileSync(entry, html);

const publishedEssays = require('../src/essays.json').filter(essay => !essay.draft);
for (const route of ['archive', 'photos', 'writing', ...publishedEssays.map(essay => `writing/${essay.slug}`)]) {
  const directory = path.join('build', route);
  fs.mkdirSync(directory, { recursive: true });
  fs.copyFileSync('build/index.html', path.join(directory, 'index.html'));
}
fs.copyFileSync('build/index.html', 'build/404.html');
fs.writeFileSync('build/.nojekyll', '');
