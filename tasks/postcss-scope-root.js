module.exports = ({ customPropRoot, except = [] }) => ({
  postcssPlugin: 'postcss-scope-root',
  Rule: (rule) => {
    if (rule.selector === ':root' && !except.includes(rule.source.input.file)) {
      rule.selector = customPropRoot;
    }
  },
});
module.exports.postcss = true;
