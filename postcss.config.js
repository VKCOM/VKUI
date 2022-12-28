const fs = require('fs');
const path = require('path');
const cssCustomProperties = require('postcss-custom-properties');
const restructureVariable = require('@project-tools/postcss-restructure-variable');
const cssImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const cssModules = require('postcss-modules');
const cssnano = require('cssnano');
const checkKeyframes = require('@project-tools/postcss-check-keyframes');
const { VKUI_PACKAGE, generateScopedName, getCustomMedias } = require('./shared');
const postcssCustomMedia = require('postcss-custom-media');

function getSafelyTmpDirPath(rootPath = __dirname) {
  const tmpDir = path.join(rootPath, 'tmp');

  if (!fs.existsSync(tmpDir)) {
    fs.mkdirSync(tmpDir);
  }

  return tmpDir;
}

module.exports = (ctx) => {
  const plugins = [
    cssImport(),
    checkKeyframes({
      importFrom: path.join(__dirname, VKUI_PACKAGE.PATHS.CSS_ANIMATIONS),
    }),
    cssCustomProperties({
      importFrom: [path.join(__dirname, VKUI_PACKAGE.PATHS.CSS_CONSTANTS)],
      preserve: true,
      disableDeprecationNotice: true,
    }),
    restructureVariable(
      [
        './node_modules/@vkontakte/vkui-tokens/themes/vkBase/cssVars/declarations/onlyVariables.css',
        './node_modules/@vkontakte/vkui-tokens/themes/vkBase/cssVars/declarations/onlyVariablesLocal.css',
        './node_modules/@vkontakte/vkui-tokens/themes/vkBaseDark/cssVars/declarations/onlyVariablesLocal.css',
        './node_modules/@vkontakte/vkui-tokens/themes/vkIOS/cssVars/declarations/onlyVariablesLocal.css',
        './node_modules/@vkontakte/vkui-tokens/themes/vkIOSDark/cssVars/declarations/onlyVariablesLocal.css',
        './node_modules/@vkontakte/vkui-tokens/themes/vkCom/cssVars/declarations/onlyVariablesLocal.css',
        './node_modules/@vkontakte/vkui-tokens/themes/vkComDark/cssVars/declarations/onlyVariablesLocal.css',
      ].map((pathSegment) => path.join(__dirname, pathSegment)),
    ),
    autoprefixer(),
    cssModules({
      generateScopedName: ctx.options.isSandbox ? (name) => name : generateScopedName,
      getJSON: () => void 0,
    }),
    postcssCustomMedia({
      importFrom: getCustomMedias,
      // см. CONTRIBUTING.md
      exportTo: path.join(getSafelyTmpDirPath(), 'customMedias.generated.css'),
    }),
  ];

  if (process.env.NODE_ENV === 'production') {
    plugins.push(
      cssnano({
        preset: [
          'default',
          {
            // Отключаем из-за того, что `postcss-calc` меняет порядок операндов при умножении -1 на переменную
            // Подробности здесь https://github.com/VKCOM/VKUI/issues/2963
            calc: false,
            // Отключаем для webpack-сборки песочницы, т.к. пустые CSS блоки удаляются раньше, чем их обработает
            // `css-loader` с настройками для CSS Modules
            // Подробности здесь https://github.com/webpack-contrib/css-loader/issues/266
            discardEmpty: !ctx.options.isSandbox,
          },
        ],
      }),
    );
  }

  return { plugins };
};
