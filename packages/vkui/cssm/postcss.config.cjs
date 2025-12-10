const { makePostcssPlugins } = require('../scripts/postcss.cjs');

module.exports = () => {
  const plugins = makePostcssPlugins({ isESNext: true, isVKUIPackageBuild: true });

  return { plugins };
};
