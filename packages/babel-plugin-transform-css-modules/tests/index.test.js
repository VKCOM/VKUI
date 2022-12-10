const path = require('path');
const babel = require('@babel/core');
const plugin = require('../index');

const transformExampleFile = (pluginOptions) => {
  const exampleFilePath = path.resolve(__dirname, `./example/Component.js`);
  return babel.transformFileSync(exampleFilePath, {
    root: __dirname,
    configFile: false,
    presets: [
      ['@babel/preset-env', { modules: false, targets: { esmodules: true } }],
      '@babel/preset-react',
    ],
    plugins: [
      [
        plugin,
        {
          generateScopedName: (name) => `lib${name}`,
          ...pluginOptions,
        },
      ],
    ],
  });
};

describe('babel-plugin-transform-css-modules', function () {
  it('default', function () {
    const output = transformExampleFile();
    expect(output.code).toMatchSnapshot();
  });

  it('with `keep` option', function () {
    const output = transformExampleFile({
      keep: true,
    });
    expect(output.code).toMatchSnapshot();
  });
});
