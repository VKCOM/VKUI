const path = require('path');

const rootDirectory = path.join(__dirname, '..');

module.exports = {
  plugins: [
    'postcss-import',
    [
      '@csstools/postcss-global-data',
      {
        files: [
          './packages/vkui-docs-theme/styles/customMedias.generated.css',
          './packages/vkui/src/styles/customMedias.generated.css',
        ].map((pathSegment) => path.join(rootDirectory, pathSegment)),
      },
    ],
    'autoprefixer',
    'postcss-custom-media',
    'postcss-logical',
  ],
};
