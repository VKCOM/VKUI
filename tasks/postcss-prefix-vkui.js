const path = require('path');
const { readFileSync } = require('fs');
const postcss = require('postcss');
const { cwd } = require('process');

const vkuiCssPath = path.resolve(__dirname, '../dist/vkui.css');
const vkuiSelectors = new Set();
postcss.parse(readFileSync(vkuiCssPath), { from: vkuiCssPath }).walkRules(rule => {
  const sel = rule.selector.match(/\.[a-z-_]+/ig) || [];
  sel.forEach(cls => vkuiSelectors.add(cls.replace(/\.(vkui(?=[A-Z]))?/g, '')));
});
const vkuiBlocks = new Set();
vkuiSelectors.forEach(sel => {
  if (sel.match(/^[A-Z]/)) {
    vkuiBlocks.add(sel.replace(/(--|__).*/, ''));
  }
});
vkuiBlocks.forEach(b => {
  // ensure block selector validates
  vkuiSelectors.add(b);

  const platformClasses = ['ios', 'android', 'vkcom'].map(p => `${b}--${p}`);
  if (platformClasses.some(c => vkuiSelectors.has(c))) {
    // ensure all platform modifiers
    platformClasses.forEach(c => vkuiSelectors.add(c));
  }
});
const candidateRE = new RegExp(`\\.(${Array.from(vkuiBlocks).join('|')})(?=\b|-|_)`, 'g');

module.exports = () => {
  return {
    postcssPlugin: 'postcss-prefix-vkui',
    Once: (root) => {
      root.walkRules(candidateRE, rule => {
        // TODO validate EM
        const res = rule.selector.replace(candidateRE, m => `.vkui${m.substring(1)}`);
        const results = (res.match(/\.vkui[a-z_-]+/i) || []).map(s => s.replace('.vkui', ''));
        results.filter(res => !vkuiSelectors.has(res)).forEach(res => {
          console.log(`${res} in ${path.relative(cwd(), rule.source.input.file)} is missing from VKUI`);
        });
        // rule.selector = res;
      });
    }
  };
};
module.exports.postcss = true;
