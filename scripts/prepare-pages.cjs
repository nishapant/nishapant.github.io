// Give each BrowserRouter route a real entry point on GitHub Pages.
const fs = require('fs');
const path = require('path');
for (const route of ['archive', 'photos', 'writing', 'writing/building-a-cpu', 'writing/family-history']) {
  const directory = path.join('build', route);
  fs.mkdirSync(directory, { recursive: true });
  fs.copyFileSync('build/index.html', path.join(directory, 'index.html'));
}
fs.copyFileSync('build/index.html', 'build/404.html');
fs.writeFileSync('build/.nojekyll', '');
