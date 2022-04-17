const path = require("path");
const cssCustomProperties = require("postcss-custom-properties");
const scopeRoot = require("./tasks/postcss-scope-root.js");
const restructureVariable = require("./tasks/postcss-restructure-variable.js");
const cssImport = require("postcss-import");
const autoprefixer = require("autoprefixer");
const cssModules = require("postcss-modules");
const csso = require("postcss-csso");
const checkKeyframes = require("./tasks/postcss-check-keyframes");
const { defaultSchemeId } = require("./package.json");
const VkSansMandatoryDeclarations = require("./postcss-plugin-vk-sans");
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
    ].map((pathSegment) => path.resolve(pathSegment))
  ),
  autoprefixer(),
  cssModules({
    generateScopedName: (name) =>
      name.startsWith("vkui") || name === "mount" ? name : `vkui${name}`,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    getJSON: () => {},
  }),
  // eslint-disable-next-line new-cap
  VkSansMandatoryDeclarations({
    platform: "vkui",
    debug: false,
    ignoreFiles: [],
    ignoreSelectors: [],
    explicitNormalLetterSpacing: false,
    respectImportant: true,
    features: {
      injectLetterSpacing: true,
      injectVkSansDisplay: true,
      overrideToVkSansDisplay: true,
      overrideCustomFonts: true,
    },
    varName: "--font-display",
    customPropertiesFiles: [
      path.resolve(
        "./node_modules/@vkontakte/vkui-tokens/themes/vkBase/cssVars/declarations/index.css"
      ),
    ],
  }),
  customPropertiesFallback({
    importFrom: path.join(
      __dirname,
      "node_modules/@vkontakte/vkui-tokens/themes/vkBase/cssVars/declarations/onlyVariables.css"
    ),
    // match only vkui tokens
    shouldTransformableDecl: (decl) =>
      /(^|[^\w-])var\([\W\w]+\)/.test(decl.value) &&
      decl.value.match(/var\(/g).length ===
        (decl.value.match(/var\(--vkui--/g) || []).length,
  }),
];

if (process.env.NODE_ENV === "production") {
  plugins.push(csso({ restructure: false }));
}

module.exports = { plugins, cssPropSources };
