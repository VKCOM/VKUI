import { makePostcssPlugins } from '../scripts/postcss.js';

const config = () => {
  const plugins = makePostcssPlugins({ isESNext: true, isVKUIPackageBuild: true });

  return { plugins };
};

// eslint-disable-next-line import/no-default-export -- требуется для postcss
export default config;
