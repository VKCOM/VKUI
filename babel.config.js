const { NODE_ENV, BABEL_KEEP_CSS, BABEL_USED_BY_WEBPACK } = process.env;
const isProduction = NODE_ENV === "production";
const isDevelopment = NODE_ENV === "development";
const useESModules = isProduction || isDevelopment;
const isUsedByWebpack = Boolean(BABEL_USED_BY_WEBPACK);
const keepCss = Boolean(BABEL_KEEP_CSS);
const runtimeVersion = require("./package.json").dependencies["@babel/runtime"];
const { generateScopedName } = require("./shared");

const testFiles = [
  "./src/**/*.test.ts",
  "./src/**/*.test.tsx",
  "./src/**/*.spec.ts",
  "./src/**/*.spec.tsx",
  "./src/**/*.e2e.ts",
  "./src/**/*.e2e.tsx",
  "./e2e/",
  "./src/testing/",
];

const plugins = [
  "@babel/plugin-proposal-class-properties",
  "@babel/plugin-proposal-object-rest-spread",
  ["@babel/plugin-transform-runtime", { version: runtimeVersion }],
];

if (!isUsedByWebpack) {
  plugins.push([
    "babel-plugin-transform-css-modules",
    {
      generateScopedName: generateScopedName,
      keep: keepCss,
    },
  ]);
}

if (!keepCss) {
  plugins.push(["babel-plugin-transform-remove-imports", { test: "\\.css$" }]);
}

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: useESModules ? false : "commonjs",
        exclude: [
          "@babel/plugin-proposal-unicode-property-regex",
          "@babel/plugin-transform-unicode-regex",
        ],
      },
    ],
    ["@babel/preset-react", { runtime: "classic" }],
    "@babel/preset-typescript",
  ],
  plugins: plugins,
  ignore: ["./src/vkui.js", ...(isProduction ? testFiles : [])],
};
