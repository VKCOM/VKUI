const { VERSION, URLS, PATHS, getCustomMedias } = require('./packages/vkui/shared.config');

module.exports = {
  VKUI_PACKAGE: {
    VERSION,
    URLS,
    PATHS,
  },

  VKUI_TOKENS_CSS: [
    './node_modules/@vkontakte/vkui-tokens/themes/vkBase/cssVars/declarations/onlyVariables.css',
    './node_modules/@vkontakte/vkui-tokens/themes/vkBase/cssVars/declarations/onlyVariablesLocal.css',
    './node_modules/@vkontakte/vkui-tokens/themes/vkBaseDark/cssVars/declarations/onlyVariablesLocal.css',
    './node_modules/@vkontakte/vkui-tokens/themes/vkIOS/cssVars/declarations/onlyVariablesLocal.css',
    './node_modules/@vkontakte/vkui-tokens/themes/vkIOSDark/cssVars/declarations/onlyVariablesLocal.css',
    './node_modules/@vkontakte/vkui-tokens/themes/vkCom/cssVars/declarations/onlyVariablesLocal.css',
    './node_modules/@vkontakte/vkui-tokens/themes/vkComDark/cssVars/declarations/onlyVariablesLocal.css',
  ],

  getCustomMedias,

  generateScopedName: (name) => {
    return name.startsWith('vkui') || name === 'mount' ? name : `vkui${name}`;
  },
};
