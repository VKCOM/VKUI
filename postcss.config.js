const path = require("path");
const cssCustomProperties = require("postcss-custom-properties");
const scopeRoot = require("./tasks/postcss-scope-root");
const restructureVariable = require("./tasks/postcss-restructure-variable");
const cssImport = require("postcss-import");
const autoprefixer = require("autoprefixer");
const cssModules = require("postcss-modules");
const cssnano = require("cssnano");
const checkKeyframes = require("./tasks/postcss-check-keyframes");
const {
  generateScopedName,
  cssCustomPropertiesPaths,
  getCustomMedias,
} = require("./shared");
const { defaultSchemeId } = require("./package.json");
// TODO: включить после добавления поддержки VK-Sans-Text
// const VkSansMandatoryDeclarations = require("./postcss-plugin-vk-sans");
const postcssCustomMedia = require("postcss-custom-media");

module.exports = (ctx) => {
  const plugins = [
    cssImport(),
    checkKeyframes({
      importFrom: path.join(__dirname, "src/styles/animations.css"),
    }),
    cssCustomProperties({
      importFrom: cssCustomPropertiesPaths,
      preserve: true,
      disableDeprecationNotice: true,
    }),
    // postcss-custom-properties only works with :root
    scopeRoot({
      customPropRoot: ".vkui__root, .vkui__portal-root",
      except: [
        path.resolve(`./src/styles/${defaultSchemeId}.css`),
        path.resolve(
          "./node_modules/@vkontakte/vkui-tokens/themes/vkBase/cssVars/declarations/onlyVariables.css"
        ),
      ],
    }),
    restructureVariable(
      [
        "./node_modules/@vkontakte/vkui-tokens/themes/vkBase/cssVars/declarations/onlyVariables.css",
        "./node_modules/@vkontakte/vkui-tokens/themes/vkBase/cssVars/declarations/onlyVariablesLocal.css",
        "./node_modules/@vkontakte/vkui-tokens/themes/vkBaseDark/cssVars/declarations/onlyVariablesLocal.css",
        "./node_modules/@vkontakte/vkui-tokens/themes/vkIOS/cssVars/declarations/onlyVariablesLocal.css",
        "./node_modules/@vkontakte/vkui-tokens/themes/vkIOSDark/cssVars/declarations/onlyVariablesLocal.css",
        "./node_modules/@vkontakte/vkui-tokens/themes/vkCom/cssVars/declarations/onlyVariablesLocal.css",
        "./node_modules/@vkontakte/vkui-tokens/themes/vkComDark/cssVars/declarations/onlyVariablesLocal.css",
      ].map((pathSegment) => path.resolve(pathSegment))
    ),
    autoprefixer(),
    cssModules({
      generateScopedName: ctx.options.isSandbox
        ? (name) => name
        : generateScopedName,
      getJSON: () => void 0,
    }),
    // TODO: включить после добавления поддержки VK-Sans-Text
    // VkSansMandatoryDeclarations({
    //   platform: "vkui",
    //   debug: false,
    //   ignoreFiles: [],
    //   ignoreSelectors: [],
    //   explicitNormalLetterSpacing: false,
    //   respectImportant: true,
    //   features: {
    //     injectLetterSpacing: true,
    //     injectVkSansDisplay: true,
    //     overrideToVkSansDisplay: true,
    //     overrideCustomFonts: true,
    //   },
    //   varName: "--font-display",
    //   customPropertiesFiles: [
    //     path.resolve(
    //       "./node_modules/@vkontakte/vkui-tokens/themes/vkBase/cssVars/declarations/index.css"
    //     ),
    //   ],
    // }),
    postcssCustomMedia({
      importFrom: getCustomMedias,
      // см. CONTRIBUTING.md
      exportTo: path.resolve("./src/styles/customMedias.generated.css"),
    }),
  ];

  if (process.env.NODE_ENV === "production") {
    plugins.push(
      cssnano({
        preset: [
          "default",
          {
            // Отключаем из-за того, что `postcss-calc` меняет порядок операндов при умножении -1 на переменную
            // Подробности здесь https://github.com/VKCOM/VKUI/issues/2963
            calc: false,
          },
        ],
      })
    );
  }

  return { plugins };
};
