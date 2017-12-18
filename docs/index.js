const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./generateMarkdown');

const jsonDoc = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'doc.json')));

for (let filepath in jsonDoc) {
  const name = getComponentName(filepath);
  const markdown = generateMarkdown(name, jsonDoc[filepath]);
  fs.writeFileSync(path.resolve(__dirname, '../wiki', name + '.md'), markdown);
}

function getComponentName(filepath) {
  var name = path.basename(filepath);
  var ext;
  while ((ext = path.extname(name))) {
    name = name.substring(0, name.length - ext.length);
  }
  return name;
}
