module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
  plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-object-rest-spread', '@babel/plugin-transform-runtime'],
  ignore: ['./src/vkui.js'],
};
