const vkuiCssOptimizerPlugin = () => [require.resolve('babel-plugin-module-resolver'), {
  alias: {
    // leave explicit commonjs imports as-is
    '@vkontakte/vkui/dist/cjs': '@vkontakte/vkui/dist/cjs',
    // resolve direct component imports to css modules
    '@vkontakte/vkui/dist': '@vkontakte/vkui/dist/cssm',
    // resolve lib import to css modules
    '@vkontakte/vkui$': '@vkontakte/vkui/dist/cssm',
  }
}];

module.exports = vkuiCssOptimizerPlugin;
module.exports.detault = vkuiCssOptimizerPlugin;