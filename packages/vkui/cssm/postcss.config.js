const { makePostcssPlugins } = require('../scripts/postcss');

module.exports = () => {
  const plugins = makePostcssPlugins({ isESNext: true, isVKUIPackageBuild: true });

  return { plugins };
};
