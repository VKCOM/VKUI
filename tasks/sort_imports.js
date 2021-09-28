/*
  Сортировка импортов. 
  За референс берется CSS, так как порядок импортов в JS важен для работы в CSS модулях
*/
const path = require('path');
const fs = require('fs/promises');
const chalk = require('chalk');

const ROOT = path.resolve(__dirname, '..');

const JS_ENTRY_PATH = path.resolve(ROOT, 'src', 'index.ts');
const CSS_ENTRY_PATH = path.resolve(ROOT, 'src', 'styles', 'components.css');

/**
 * @param {string} importString
 * @returns string
 */
function extractJSComponentName(importString) {
  return /from '.*\/components\/(.*)\//ig.exec(importString)?.[1];
}

/**
 * @param {string} importString
 * @returns string
 */
function extractCSSComponentName(importString) {
  return /\@import '.*\/components\/(.*)\//.exec(importString)?.[1];
}

async function main() {
  const js = await fs.readFile(JS_ENTRY_PATH);
  const css = await fs.readFile(CSS_ENTRY_PATH);

  const cssOrder = css
    .toString()
    .split('\n')
    .map((importString) => extractCSSComponentName(importString) || '')
    .filter((name) => name !== '');

  const formattedJS = js
    .toString()
    .split('\n')
    .sort((a, b) => {
      const aName = extractJSComponentName(a);
      const bName = extractJSComponentName(b);
      if (!aName || !bName) {
        return 0;
      }

      const aIndex = cssOrder.indexOf(aName);
      const bIndex = cssOrder.indexOf(bName);
      if (aIndex > bIndex) {
        return 1;
      } else if (aIndex < bIndex) {
        return -1;
      }

      return 0;
    })
    .join('\n');

  const isSame = formattedJS === js.toString();

  if (!isSame) {
    console.log(chalk.yellow('[Sort Imports] JS imports order not equals CSS order. Code has been formatted'));
    await fs.writeFile(JS_ENTRY_PATH, formattedJS);
  }
}

main();
