import path from 'node:path';

const rootDirectory = path.join(import.meta.dirname, '..');

export default {
  plugins: [
    'postcss-import',
    [
      '@csstools/postcss-global-data',
      {
        files: ['./packages/vkui/src/styles/customMedias.generated.css'].map((pathSegment) =>
          path.join(rootDirectory, pathSegment),
        ),
      },
    ],
    'autoprefixer',
    'postcss-custom-media',
    'postcss-logical',
  ],
};
