const path = require('path');
const stylelint = require('stylelint');
const selectorParser = require('postcss-selector-parser');

const ruleName = 'vkui/modular-selectors';

const normalizePath = part => path.resolve(path.join(__dirname, '../src', part));
const special = {
  [normalizePath('components/View/ViewVkcom.css')]: 'View',
  [normalizePath('components/View/ViewAndroid.css')]: 'View',
  [normalizePath('components/View/ViewIOS.css')]: 'View',
  [normalizePath('styles/global.css')]: 'vkui',
  [normalizePath('components/HorizontalScroll/HorizontalScrollArrow.css')]: 'HorizontalScroll__arrow',
}

const ignore = ['styles/space_gray.css', 'styles/bright_light.css', 'styles/vkcom.css'].map(normalizePath);

module.exports = stylelint.createPlugin(
  ruleName,
  function (primaryOption, secondaryOptionObject) {
    return function (root, result) {
      root.walkRules((rule) => {
        const { file } = rule.source.input;
        const modularTarget = special[file] || path.parse(file).name;
        if ((rule.parent.name || '').endsWith('keyframes') || ignore.includes(file)) {
          return;
        }
        selectorParser(selectors => {
          selectors.each(({ nodes }) => {
            const domNodes = nodes.filter(n => !['pseudo', 'attribute'].includes(n.type));
            const target = domNodes[domNodes.length - 1];
            if (!target) {
              return;
            }
            const targetModule = target.type == 'class' ? target.value.match(/^([a-z0-9]*)/i)[1] : null;
            if (targetModule !== modularTarget) {
              console.log(targetModule || 'none', '\t', modularTarget);
              // const sel = target.type === 'combinator' ? '*' : target.toString();
              // stylelint.utils.report({
              //   ruleName,
              //   node: rule,
              //   index: target.sourceIndex,
              //   result,
              //   message: `${sel} is non-modular, expected .${modularTarget}(...)`
              // });
            }
          });
        }).processSync(rule.selector);
      });
    };
  }
);

module.exports.ruleName = ruleName;