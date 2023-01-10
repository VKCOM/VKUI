const babelCommonConfig = require('../../babel.config');

module.exports = {
  ...babelCommonConfig,
  ignore: [...babelCommonConfig.ignore, 'src/vkui.js'],
};
