#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const scheme = require('@vkontakte/appearance/main.valette/scheme');
const palette = require('@vkontakte/appearance/main.valette/palette');
const pkg = require('../package.json');

/**
* @param {object} palette палитра цветов
* @param {string} colorId идентификатор цвета из палитры
* @return {string} color цвет в браузерном представлении
*/
function resolveColor (palette, colorId) {
  const color = palette[colorId];

  if (color.indexOf('#') === 0 && color.length === 9) { // ahex
    return ahex2rgba(color.replace('#', ''));
  }
  return color;
}

/**
 * @param {string} ahex цвет в формате ahex: #00ffffff
 * @return {string} цвет в формате rgba
 */
function ahex2rgba (ahex) {
  const opacity = parseInt(ahex.slice(0, 2), 16) / 255;
  const colorHex = ahex.slice(2);
  return opacify(colorHex, opacity);
}

/**
 * @param hex цвет в формате hex: #ffffff
 * @param opacity прозрачность в диапазоне [0, 1]
 * @return {string} цвет в формате rgba
 */
function opacify (hex, opacity) {
  return `rgba(${parseInt(hex.slice(0, 2), 16)}, ${parseInt(hex.slice(2, 4), 16)}, ${parseInt(hex.slice(4), 16)}, ${opacity.toFixed(2)})`;
}

function generateScheme () {
  Object.keys(scheme).forEach((schemeId) => {
    const colors = scheme[schemeId].colors;
    let css = '/* stylelint-disable */\n/*\n* Этот файл сгенерирован автоматически. Не надо править его руками.\n*/\n';
    css += schemeId === pkg.defaultSchemeId ? ':root {\n' : `body[scheme="${schemeId}"] {\n`;
    Object.keys(colors).forEach((schemeItemId) => {
      const colorId = colors[schemeItemId].color_identifier;
      css += `  --${schemeItemId}: ${resolveColor(palette, colorId).toLowerCase()};\n`;
    });
    css += '}\n/* stylelint-enable */';
    fs.writeFileSync(path.resolve(__dirname, '../src/styles', `${schemeId}.css`), css);
  });
}

generateScheme();
