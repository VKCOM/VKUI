#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const scheme = require('@vkontakte/appearance/main.valette/scheme');
const palette = require('@vkontakte/appearance/main.valette/palette');
const pkg = require('../package.json');

/**
* @param {object} palette палитра цветов
* @param {Object} clusterData
* @param {string} clusterData.color_identifier
* @param {number} clusterData.alpha_multiplier
* @return {string} color цвет в браузерном представлении
*/
function resolveColor(palette, clusterData) {
  const color = palette[clusterData.color_identifier];
  const alphaMultiplier = clusterData.alpha_multiplier ? Number(clusterData.alpha_multiplier) : 1;

  if (color.indexOf('#') === 0 && color.length === 9) { // ahex
    return ahex2rgba(color.replace('#', ''), alphaMultiplier);
  } else if (color.indexOf('#') === 0 && clusterData.alpha_multiplier) {
    return opacify(color.replace('#', ''), alphaMultiplier);
  }
  return color;
}

/**
 * @param {string} ahex цвет в формате ahex: 00ffffff
 * @param {number} multiplier
 * @return {string} цвет в формате rgba
 */
function ahex2rgba(ahex, multiplier = 1) {
  const opacity = parseInt(ahex.slice(0, 2), 16) / 255 * multiplier;
  const colorHex = ahex.slice(2);
  return opacify(colorHex, opacity);
}

/**
 * @param {string} hex цвет в формате hex: ffffff
 * @param {number} opacity прозрачность в диапазоне [0, 1]
 * @return {string} цвет в формате rgba
 */
function opacify(hex, opacity) {
  return `rgba(${parseInt(hex.slice(0, 2), 16)}, ${parseInt(hex.slice(2, 4), 16)}, ${parseInt(hex.slice(4), 16)}, ${opacity.toFixed(2)})`;
}

function generateScheme() {
  ['bright_light', 'space_gray'].forEach((schemeId) => {
    const clusters = scheme[schemeId].colors;
    let css = '/* stylelint-disable */\n/*\n* Этот файл сгенерирован автоматически. Не надо править его руками.\n*/\n';
    css += schemeId === pkg.defaultSchemeId ? ':root {\n' : `body[scheme="${schemeId}"] {\n`;
    Object.keys(clusters).forEach((clusterId) => {
      css += `  --${clusterId}: ${resolveColor(palette, clusters[clusterId]).toLowerCase()};\n`;
    });
    css += '}\n/* stylelint-enable */';
    fs.writeFileSync(path.resolve(__dirname, '../src/styles', `${schemeId}.css`), css);
  });
}

generateScheme();
