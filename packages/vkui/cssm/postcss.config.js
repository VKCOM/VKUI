const path = require('path');
const postcssGlobalData = require('@csstools/postcss-global-data');
const restructureVariable = require('@project-tools/postcss-restructure-variable');
const autoprefixer = require('autoprefixer');
const postcssCustomMedia = require('postcss-custom-media');
const cssImport = require('postcss-import');
const { VKUI_TOKENS_CSS, VKUI_PACKAGE } = require('../../../shared');

module.exports = () => {
  const plugins = [
    cssImport(),
    restructureVariable(
      VKUI_TOKENS_CSS.map((pathSegment) => path.join(__dirname, '../../../', pathSegment)),
    ),
    postcssGlobalData({
      files: [VKUI_PACKAGE.PATHS.CSS_CUSTOM_MEDIAS].map((pathSegment) =>
        path.join(__dirname, '../../../', pathSegment),
      ),
    }),
    autoprefixer(),
    postcssCustomMedia(),
  ];

  return { plugins };
};
