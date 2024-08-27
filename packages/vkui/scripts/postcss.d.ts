import type postcss from 'postcss';

interface MakePostcssPluginsOptions {
  isVKUIPackageBuild: boolean;
  isProduction: boolean;
  isCssModulesFile: boolean;
  isESNext: boolean;
  isStorybook: boolean;
  disableMinimizer: boolean;
}

export function makePostcssPlugins(options?: MakePostcssPluginsOptions): postcss.AcceptedPlugin[];
