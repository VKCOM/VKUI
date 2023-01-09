const { VERSION, URLS, PATHS, getCustomMedias } = require('./packages/vkui/shared.config');

module.exports = {
  VKUI_PACKAGE: {
    VERSION,
    URLS,
    PATHS,
  },

  getCustomMedias,

  generateScopedName: (name) => {
    return name.startsWith('vkui') || name === 'mount' ? name : `vkui${name}`;
  },
};
