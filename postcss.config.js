const { makePostcssPlugins } = require('./packages/vkui/scripts/postcss');

module.exports = () => {
  const plugins = makePostcssPlugins();

  return { plugins };
};
