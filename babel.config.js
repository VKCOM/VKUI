const { NODE_ENV } = process.env;
const isProduction = NODE_ENV === 'production';
const isDevelopment = NODE_ENV === 'development';
const useModules = isProduction || isDevelopment;

module.exports = {
  presets: [
    ['@babel/preset-env', { modules: useModules ? false : 'commonjs' }],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-object-rest-spread', '@babel/plugin-transform-runtime'],
  ignore: ['./src/vkui.js'].concat(
    isProduction ? ['./src/**/*.test.ts', './src/**/*.test.tsx', './src/**/*.spec.ts', './src/**/*.spec.tsx', './e2e', './src/testing'] : []),
};
