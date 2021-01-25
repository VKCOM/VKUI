module.exports = {
  extends: './babel.css-modules.config.js',
  plugins: [['babel-plugin-transform-remove-imports', { test: '\\.css$' }]],
};
