import { getCustomVariables, getVKUIToken } from "./styleProperty";
import type { PluginCreator } from "postcss";

const pluginCreator: PluginCreator<{}> = () => {
  return {
    postcssPlugin: "postcss-token-translator",
    Root(root) {
      root.walkRules((node) => {
        node.each((decl) => {
          if (decl.type !== "decl") {
            return;
          }

          const customVariables = getCustomVariables(decl.value);
          customVariables.forEach((customVariable) => {
            const vkuiToken = getVKUIToken(
              node.selector,
              decl.prop,
              customVariable
            );
            if (!vkuiToken) {
              return;
            }
            decl.value = decl.value.replace(customVariable, vkuiToken);
          });
        });
      });
    },
  };
};

pluginCreator.postcss = true;

export default pluginCreator;
