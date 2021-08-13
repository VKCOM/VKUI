const { resolve, relative } = require('path');
const { readFileSync } = require('fs');
const { cwd } = require('process');
const postcss = require('postcss');
const babel = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const glob = require('glob');

const vkuiCssPath = resolve(__dirname, '../dist/vkui.css');
const vkuiSelectors = new Set();
postcss.parse(readFileSync(vkuiCssPath), { from: vkuiCssPath }).walkRules(rule => {
  const sel = rule.selector.match(/\.[a-z-_]+/ig) || [];
  sel.forEach(cls => vkuiSelectors.add(cls.replace(/\.(vkui(?=[A-Z]))?/g, '')));
});

const vkuiJsSources = glob.sync(resolve(__dirname, '../dist/**/*.js'));
vkuiJsSources.forEach(src => {
  const ast = babel.parse('' + readFileSync(src), {
    sourceFileName: src,
    sourceType: 'module',
  });
  traverse(ast, {
    CallExpression(path) {
      if (path.node.callee.name === 'getClassName') {
        const block = path.node.arguments[0].value;
        ['ios', 'android', 'vkcom'].forEach((platform) => {
          vkuiSelectors.add(`${block}--${platform}`);
        });
      }
    },
  });
});

const vkuiBlocks = new Set();
vkuiSelectors.forEach(sel => {
  if (sel.match(/^[A-Z]/)) {
    const block = sel.replace(/(--|__).*/, '');
    vkuiBlocks.add(block);
    vkuiSelectors.add(block);
  }
});
const candidateRE = new RegExp(`\\.(${Array.from(vkuiBlocks).join('|')})(\b|[-_][-_a-zA-Z0-9]+)`, 'g');

module.exports = () => ({
  postcssPlugin: 'postcss-prefix-vkui',
  Once: (root) => {
    root.walkRules(candidateRE, rule => {
      const res = rule.selector.replace(candidateRE, sel => {
        const cls = sel.substring(1);
        if (vkuiSelectors.has(cls)) {
          return `.vkui${cls}`;
        }
        console.log(`${cls} in ${relative(cwd(), rule.source.input.file)} looks like VKUI selector, but does not exist in VKUI`);
        return sel;
      });
      rule.selector = res;
    });
  }
});
module.exports.postcss = true;
