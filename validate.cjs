const fs = require('node:fs');
const vm = require('node:vm');
for (const page of ['index.html', 'profile.html', 'certificates.html', 'thanks.html']) {
  const app = { innerHTML: '' };
  const context = { window: {}, location: { pathname: '/' + page }, document: { querySelector: s => s === '#app' ? app : null } };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync('dist/content.js', 'utf8'), context);
  vm.runInContext(fs.readFileSync('dist/app.js', 'utf8'), context);
  if (!app.innerHTML.includes('<main')) throw Error(page);
  for (const match of app.innerHTML.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (!match[1].startsWith('#') && !fs.existsSync('dist/' + match[1])) throw Error('Missing ' + match[1]);
  }
  if (!fs.existsSync('dist/' + page)) throw Error(page);
  console.log('PASS ' + page);
}
