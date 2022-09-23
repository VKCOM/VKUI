const { NODE_ENV, BABEL_KEEP_CSS } = process.env;
const isProduction = NODE_ENV === "production";
const isDevelopment = NODE_ENV === "development";
const useESModules = isProduction || isDevelopment;
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
    [
      "@babel/preset-react",
      {
        runtime: "classic",
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
    [
      "@babel/plugin-transform-runtime",
      { useESModules, version: runtimeVersion },
    ],
    [
      require.resolve("babel-plugin-css-modules-transform"),
      {
        mode: "pure",
        camelCase: false,
        extensions: [".module.css"],
        generateScopedName: generateScopedName,
        keepImport: keepCss,
      },
    ],
  ].concat(
    keepCss
      ? []
      : [
          [
            "babel-plugin-transform-remove-imports",
            {
              /**
               * ⚠️ WARNING ⚠️
               *
               * Исключаем `.module.css`, т.к. этот плагин аффектит `babel-plugin-css-modules-transform`.
               * Предполагаю он обрабатывает код раньше и удаляет импортирование стилей.
               *
               * У плагина `babel-plugin-css-modules-transform` есть своя опция `keepImport`, поэтому в неё передаём `keepCss`.
               */
              test: /^(?!.*module\.css$).*\.css$/,
            },
          ],
        ]
  ),
  ignore: ["./src/vkui.js"].concat(isProduction ? testFiles : []),
};
