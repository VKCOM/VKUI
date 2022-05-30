const path = require("path");
const cssCustomProperties = require("postcss-custom-properties");
const scopeRoot = require("./tasks/postcss-scope-root.js");
const restructureVariable = require("./tasks/postcss-restructure-variable.js");
const cssImport = require("postcss-import");
const autoprefixer = require("autoprefixer");
const cssModules = require("postcss-modules");
const cssnano = require("cssnano");
const checkKeyframes = require("./tasks/postcss-check-keyframes");
const { defaultSchemeId } = require("./package.json");
// TODO: включить после добавления поддержки VK-Sans-Text
// const VkSansMandatoryDeclarations = require("./postcss-plugin-vk-sans");
const customPropertiesFallback = require("./postcss-custom-properties-fallback");

const animationsSource = path.join(__dirname, "src/styles/animations.css");
const cssPropSources = [
  path.join(__dirname, "src/styles/bright_light.css"),
  path.join(__dirname, "src/styles/constants.css"),
  animationsSource,
];

let plugins = [
  cssImport(),
  checkKeyframes({
    importFrom: animationsSource,
  }),
  cssCustomProperties({
    importFrom: cssPropSources,
    preserve: true,
    disableDeprecationNotice: true,
  }),
  // postcss-custom-properties only works with :root
  scopeRoot({
    customPropRoot: ".vkui__root, .vkui__portal-root",
    except: [
      path.resolve(`./src/styles/${defaultSchemeId}.css`),
      path.resolve(
        "./node_modules/@vkontakte/vkui-tokens/themes/paradigmBase/cssVars/declarations/onlyVariables.css"
      ),
    ],
  }),
  restructureVariable(
    [
      "./src/styles/bright_light.css",
      "./src/styles/space_gray.css",
      "./src/styles/vkcom_light.css",
      "./src/styles/vkcom_dark.css",
      "./node_modules/@vkontakte/vkui-tokens/themes/vkBase/cssVars/declarations/onlyVariables.css",
      "./node_modules/@vkontakte/vkui-tokens/themes/vkBase/cssVars/declarations/onlyVariablesLocal.css",
      "./node_modules/@vkontakte/vkui-tokens/themes/vkBaseDark/cssVars/declarations/onlyVariablesLocal.css",
      "./node_modules/@vkontakte/vkui-tokens/themes/vkIOS/cssVars/declarations/onlyVariablesLocal.css",
      "./node_modules/@vkontakte/vkui-tokens/themes/vkIOSDark/cssVars/declarations/onlyVariablesLocal.css",
      "./node_modules/@vkontakte/vkui-tokens/themes/vkCom/cssVars/declarations/onlyVariablesLocal.css",
      "./node_modules/@vkontakte/vkui-tokens/themes/vkComDark/cssVars/declarations/onlyVariablesLocal.css",
      "./node_modules/@vkontakte/vkui-tokens/themes/paradigmBase/cssVars/declarations/onlyVariables.css",
      "./node_modules/@vkontakte/vkui-tokens/themes/calendar/cssVars/declarations/onlyVariablesLocal.css",
      "./node_modules/@vkontakte/vkui-tokens/themes/calendarDark/cssVars/declarations/onlyVariablesLocal.css",
      "./node_modules/@vkontakte/vkui-tokens/themes/calls/cssVars/declarations/onlyVariablesLocal.css",
      "./node_modules/@vkontakte/vkui-tokens/themes/cloud/cssVars/declarations/onlyVariablesLocal.css",
      "./node_modules/@vkontakte/vkui-tokens/themes/home/cssVars/declarations/onlyVariablesLocal.css",
      "./node_modules/@vkontakte/vkui-tokens/themes/homeDark/cssVars/declarations/onlyVariablesLocal.css",
      "./node_modules/@vkontakte/vkui-tokens/themes/media/cssVars/declarations/onlyVariablesLocal.css",
      "./node_modules/@vkontakte/vkui-tokens/themes/mediaDark/cssVars/declarations/onlyVariablesLocal.css",
      "./node_modules/@vkontakte/vkui-tokens/themes/mycom/cssVars/declarations/onlyVariablesLocal.css",
      "./node_modules/@vkontakte/vkui-tokens/themes/octavius/cssVars/declarations/onlyVariablesLocal.css",
      "./node_modules/@vkontakte/vkui-tokens/themes/octaviusDark/cssVars/declarations/onlyVariablesLocal.css",
      // "./node_modules/@vkontakte/vkui-tokens/themes/octaviusCompact/cssVars/declarations/onlyVariablesLocal.css",
      // "./node_modules/@vkontakte/vkui-tokens/themes/octaviusCompactDark/cssVars/declarations/onlyVariablesLocal.css",
      // "./node_modules/@vkontakte/vkui-tokens/themes/octaviusVK/cssVars/declarations/onlyVariablesLocal.css",
      // "./node_modules/@vkontakte/vkui-tokens/themes/octaviusVKDark/cssVars/declarations/onlyVariablesLocal.css",
      // "./node_modules/@vkontakte/vkui-tokens/themes/octaviusWhite/cssVars/declarations/onlyVariablesLocal.css",
      "./node_modules/@vkontakte/vkui-tokens/themes/otvet/cssVars/declarations/onlyVariablesLocal.css",
      "./node_modules/@vkontakte/vkui-tokens/themes/otvetDark/cssVars/declarations/onlyVariablesLocal.css",
      "./node_modules/@vkontakte/vkui-tokens/themes/paradigmBase/cssVars/declarations/onlyVariablesLocal.css",
      "./node_modules/@vkontakte/vkui-tokens/themes/paradigmBaseDark/cssVars/declarations/onlyVariablesLocal.css",
      "./node_modules/@vkontakte/vkui-tokens/themes/pharma/cssVars/declarations/onlyVariablesLocal.css",
      "./node_modules/@vkontakte/vkui-tokens/themes/promo/cssVars/declarations/onlyVariablesLocal.css",
      "./node_modules/@vkontakte/vkui-tokens/themes/search/cssVars/declarations/onlyVariablesLocal.css",
      "./node_modules/@vkontakte/vkui-tokens/themes/todo/cssVars/declarations/onlyVariablesLocal.css",
    ].map((pathSegment) => path.resolve(pathSegment))
  ),
  autoprefixer(),
  cssModules({
    generateScopedName: (name) =>
      name.startsWith("vkui") || name === "mount" ? name : `vkui${name}`,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    getJSON: () => {},
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
  customPropertiesFallback({
    importFrom: path.join(
      __dirname,
      "node_modules/@vkontakte/vkui-tokens/themes/vkBase/cssVars/declarations/onlyVariables.css"
    ),
    // match only vkui tokens
    shouldTransformableDecl: (decl) => {
      // 1. Исключаем `var(--<appearance_name>, var(--vkui--<name>))`
      if (
        /var\(\s*--.+\s*,\s*var\(\s*(--vkui--.[^,]+)\s*\)\s*\)/.test(decl.value)
      ) {
        return false;
      }

      // 2. Ищем только `var(--vkui--<value>)`, но не `var(--vkui--<name>, <fallback_value>)`
      return /var\(\s*(--vkui--.[^,]+)\s*\)/.test(decl.value);
    },
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

module.exports = { plugins, cssPropSources };
