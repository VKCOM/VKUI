const { NODE_ENV } = process.env;
const isProduction = NODE_ENV === 'production';
const isDevelopment = NODE_ENV === 'development';
const useModules = isProduction || isDevelopment;

const testFiles = [
  './src/**/*.test.ts', './src/**/*.test.tsx',
  './src/**/*.spec.ts', './src/**/*.spec.tsx',
  './src/**/*.e2e.ts', './src/**/*.e2e.tsx',
  './e2e/', './src/testing/',
];

module.exports = {
  presets: [
    ['@babel/preset-env', { modules: useModules ? false : 'commonjs' }],
    ['@babel/preset-react', {
      pragma: "createScopedElement",
      pragmaFrag: "createScopedElement.Fragment",
    }],
    ['@babel/preset-typescript', {
      jsxPragma: "createScopedElement",
      jsxPragmaFrag: 'createScopedElement.Fragment',
    }]
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-runtime',
    [require.resolve('babel-plugin-auto-import'), {
      'declarations': [
        { members: ['createScopedElement'], path: '#jsxRuntime' }
      ],
    }],
    [require.resolve('babel-plugin-module-resolver'), {
      alias: {
        "#jsxRuntime": "./src/lib/jsxRuntime"
      }
    }],
  ],
  ignore: ['./src/vkui.js'].concat(isProduction ? testFiles : []),
};
