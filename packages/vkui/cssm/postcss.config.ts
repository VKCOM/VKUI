import { makePostcssPlugins } from '../scripts/postcss.js';

const plugins = makePostcssPlugins({ isESNext: true, isVKUIPackageBuild: true });

// eslint-disable-next-line import/no-default-export -- требуется для postcss
export default { plugins };
