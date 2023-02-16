import type { PluginCreator } from 'postcss';
import { getCustomVariables, getVKUIToken } from './styleProperty';

const pluginCreator: PluginCreator<{}> = () => {
  return {
    postcssPlugin: 'postcss-token-translator',
    Root(root) {
      root.walkAtRules((node) => {
        const customVariables = getCustomVariables(node.params);
        customVariables.forEach((customVariable) => {
          const vkuiToken = getVKUIToken('', node.name, customVariable);
          if (!vkuiToken) {
            return;
          }

          node.params = node.params.replace(customVariable, vkuiToken);
        });
      });

      root.walkDecls((decl) => {
        // @ts-expect-error TS7053 У Rule может быть selector
        const selector: string = decl.parent?.['selector'] || '';

        const customVariables = getCustomVariables(decl.value);
        customVariables.forEach((customVariable) => {
          const vkuiToken = getVKUIToken(selector, decl.prop, customVariable);
          if (!vkuiToken) {
            return;
          }

          decl.value = decl.value.replace(customVariable, vkuiToken);
        });
      });
    },
  };
};

pluginCreator.postcss = true;

export default pluginCreator;
