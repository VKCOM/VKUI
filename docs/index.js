const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./generateMarkdown');
const jsonDoc = require('./doc.json');

Object.keys(jsonDoc).forEach((filepath) => {
  const name = getComponentName(filepath);
  const markdown = generateMarkdown(name, jsonDoc[filepath]);
  fs.writeFileSync(path.resolve(__dirname, '../wiki', name + '.md'), markdown);
});

function getComponentName(filepath) {
  let name = path.basename(filepath);
  let ext;
  while ((ext = path.extname(name))) {
    name = name.substring(0, name.length - ext.length);
  }
  return name;
}
