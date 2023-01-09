const { readFileSync } = require('fs');
const postcss = require('postcss');
const findAnimationName = require('stylelint/lib/utils/findAnimationName');

function getAnimations(root) {
  const animations = {};
  root.walkAtRules('keyframes', (atrule) => {
    if (animations[atrule.params]) {
      throw atrule.error(`duplicate @keyframes ${atrule.params}`);
    }
    animations[atrule.params] = true;
  });
  return animations;
}

module.exports = ({ importFrom } = {}) => {
  const sharedAnimations = importFrom
    ? getAnimations(postcss.parse(readFileSync(importFrom), { from: importFrom }))
    : {};
  return {
    postcssPlugin: 'postcss-scope-keyframes',
    Once: (root) => {
      const animations = { ...sharedAnimations, ...getAnimations(root) };
      root.walkDecls(/^animation(-name)?/, (decl) => {
        findAnimationName(decl.value).forEach(({ value }) => {
          if (value !== 'none' && !animations[value]) {
            throw decl.error(`@keyframes ${value} not found`, { word: value });
          }
        });
      });
    },
  };
};
module.exports.postcss = true;
