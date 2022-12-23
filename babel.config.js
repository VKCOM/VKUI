const runtimeVersion = require('./node_modules/@babel/runtime/package.json').version;
const { generateScopedName } = require('./shared');

const { NODE_ENV, BABEL_KEEP_CSS, BABEL_USED_BY_WEBPACK } = process.env;

const isProduction = NODE_ENV === 'production';
const isDevelopment = NODE_ENV === 'development';

const useESModules = isProduction || isDevelopment;

const isUsedByWebpack = Boolean(BABEL_USED_BY_WEBPACK);

const keepCss = Boolean(BABEL_KEEP_CSS);

const testFiles = [
  '**/*.test.ts',
  '**/*.test.tsx',
  '**/*.spec.ts',
  '**/*.spec.tsx',
  '**/*.e2e.ts',
  '**/*.e2e.tsx',
  '**/testing/',
];

const plugins = [
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-proposal-object-rest-spread',
  ['@babel/plugin-transform-runtime', { version: runtimeVersion }],
];

if (!isUsedByWebpack) {
  plugins.push([
    '@project-tools/babel-plugin-transform-css-modules',
    {
      generateScopedName: generateScopedName,
      keep: keepCss,
    },
  ]);
}

if (!keepCss) {
  plugins.push(['babel-plugin-transform-remove-imports', { test: '\\.css$' }]);
}

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: useESModules ? false : 'commonjs',
        exclude: [
          '@babel/plugin-proposal-unicode-property-regex',
          '@babel/plugin-transform-unicode-regex',
        ],
      },
    ],
    ['@babel/preset-react', { runtime: 'classic' }],
    '@babel/preset-typescript',
  ],
  plugins: plugins,
  ignore: isProduction ? testFiles : [],
};
