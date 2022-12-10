module.exports = {
  extends: './babel.config.js',
  presets: [
    [
      '@babel/preset-env',
      {
        modules: 'commonjs',
        exclude: [
          '@babel/plugin-proposal-unicode-property-regex',
          '@babel/plugin-transform-unicode-regex',
        ],
      },
    ],
  ],
};
