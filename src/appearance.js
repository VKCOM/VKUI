const fs = require('fs');
const scheme = require('./appearance/scheme');
const palette = require('./appearance/palette');
const pkg = require('../package.json');
const customScheme = require('./appearance/custom_scheme');
const customPalette = require('./appearance/custom_palette');
const { resolveColor } = require('./lib/colors');

const summaryPalette = { ...palette, ...customPalette };

function generateScheme () {
  Object.keys(scheme).forEach((schemeId) => {
    const colors = {...scheme[schemeId].colors, ...customScheme[schemeId].colors};
    let css = schemeId === pkg.defaultSchemeId ? ':root {\n' : `body[scheme="${schemeId}"] {\n`;
    Object.keys(colors).forEach((schemeItemId) => {
      const colorId = colors[schemeItemId].color_identifier;
      css += `  --${schemeItemId}: ${resolveColor(summaryPalette, colorId)};\n`;
    });
    css += '}';
    fs.writeFileSync(`src/styles/generated/${schemeId}.css`, css);
  });
}

function generatePalette () {
  let css = ':root {\n';
  Object.keys(summaryPalette).forEach((colorId) => {
    css += `  --${colorId}: ${resolveColor(summaryPalette, colorId)};\n`;
  });
  css += '}';
  fs.writeFileSync(`src/styles/generated/palette.css`, css);
}

module.exports = { generateScheme, generatePalette };
