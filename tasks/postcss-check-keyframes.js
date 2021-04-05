const findAnimationName = require('stylelint/lib/utils/findAnimationName');

module.exports = () => ({
  postcssPlugin: 'postcss-scope-keyframes',
  Once: (root) => {
    const animations = {};
    root.walkAtRules('keyframes', atrule => {
      if (animations[atrule.params]) {
        throw atrule.error(`duplicate @keyframes ${atrule.params}`);
      }
      animations[atrule.params] = true;
    });
    root.walkDecls(/^animation(-name)?/, decl => {
      findAnimationName(decl.value).forEach(({ value }) => {
        if (value !== 'none' && !animations[value]) {
          throw decl.error(`@keyframes ${value} not found`, { word: value });
        }
      });
    });
  }
});
module.exports.postcss = true;
