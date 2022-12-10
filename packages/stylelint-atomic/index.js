const path = require('path');
const stylelint = require('stylelint');
const selectorParser = require('postcss-selector-parser');

const ruleName = 'vkui/atomic';
const messages = stylelint.utils.ruleMessages(ruleName, {});
const isPseudo = (sel) =>
  (sel.type === 'pseudo' && !sel.value.startsWith(':global')) ||
  (sel.parent && isPseudo(sel.parent));

module.exports = stylelint.createPlugin(ruleName, function () {
  return function (root, result) {
    const { file } = root.source.input;
    // Only apply to component CSS, not styles/*.css
    if (file.split(path.sep).includes('styles')) {
      return;
    }
    const cssCmp = path.basename(file).split('.')[0];
    root.walkRules((node) => {
      if (node.parent.name === 'keyframes') {
        return;
      }
      node.selector.split(/,\s*/).forEach((sel) => {
        let hasComponentScope = false;
        let selTarget = '';
        selectorParser((selectors) => {
          selectors.walk((selector) => {
            // exclude :not contents
            if (isPseudo(selector)) {
              return;
            }
            if (selector.type === 'combinator') {
              hasComponentScope = false;
              selTarget = '';
              return;
            }
            if (selector.type !== 'pseudo') {
              selTarget += String(selector.value || '');
            }
            if (selector.type === 'class') {
              const ruleCmp = selector.value.split(/(--|__)/g)[0];
              hasComponentScope = hasComponentScope || ruleCmp === cssCmp;
            }
          });
        }).processSync(sel);
        if (!hasComponentScope) {
          stylelint.utils.report({
            ruleName,
            node,
            result,
            message: `"${selTarget}" must reference .${cssCmp}`,
          });
        }
      });
    });
  };
});

module.exports.ruleName = ruleName;
module.exports.messages = messages;
