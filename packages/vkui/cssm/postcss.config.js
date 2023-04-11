const path = require('path');
const postcssGlobalData = require('@csstools/postcss-global-data');
const restructureVariable = require('@project-tools/postcss-restructure-variable');
const autoprefixer = require('autoprefixer');
const postcssCustomMedia = require('postcss-custom-media');
const cssImport = require('postcss-import');
const { generateCustomMedias, customMediasPath } = require('../../../postcss.config.js');
const { VKUI_TOKENS_CSS } = require('../../../shared');

generateCustomMedias();

module.exports = () => {
  const plugins = [
    cssImport(),
    restructureVariable(
      VKUI_TOKENS_CSS.map((pathSegment) => path.join(__dirname, '../../../', pathSegment)),
    ),
    postcssGlobalData({
      files: [customMediasPath].map((pathSegment) =>
        path.join(__dirname, '../../../', pathSegment),
      ),
    }),
    autoprefixer(),
    postcssCustomMedia(),
  ];

  return { plugins };
};
