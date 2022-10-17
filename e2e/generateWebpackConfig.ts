import * as path from "path";
import { promisify } from "util";
import cbGlob from "glob";
import webpack from "webpack";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackConfig = require("../webpack.config.js");
const glob = promisify(cbGlob);

const {
  externals,
  plugins = [],
  devServer,
  resolve = {},
  output = {},
  ...baseWebpackConfig
} = webpackConfig;

export async function generateWebpackConfig() {
  process.env.BABEL_KEEP_CSS = "1";
  const testFiles = await glob(
    path.join(__dirname, "../src/**/*.e2e.{ts,tsx}")
  );
  return {
    ...baseWebpackConfig,
    entry: {
      main: [
        path.resolve(__dirname, "browser/runtime.ts"),
        path.resolve(__dirname, "styles.test.css"),
        ...testFiles,
      ],
    },
    output: {
      ...output,
      path: path.resolve(__dirname, "dist"),
    },
    resolve: {
      ...resolve,
      alias: {
        ...resolve.alias,
        "@react-playwright": path.resolve(__dirname, "browser/mount.ts"),
      },
    },
    devServer: {
      ...devServer,
      static: {
        directory: path.join(__dirname, "dist"),
      },
    },
    module: {
      ...webpackConfig.module,
      rules: [
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              plugins: [
                [
                  require.resolve("babel-plugin-istanbul"),
                  {
                    exclude: [
                      "**/*.d.ts",
                      "**/*.e2e.tsx",
                      "e2e/",
                      "src/types",
                      "src/testing",
                    ],
                  },
                ],
              ],
            },
          },
        },
        {
          test: /\.css$/i,
          use: [
            { loader: MiniCssExtractPlugin.loader },
            { loader: "css-loader", options: { url: false, modules: false } },
            "postcss-loader",
          ],
        },
      ],
    },
    plugins: [
      ...plugins,
      new MiniCssExtractPlugin(),
      new webpack.DefinePlugin({
        "process.env.APPEARANCE": JSON.stringify(process.env.APPEARANCE),
        "process.env.BROWSER": JSON.stringify(process.env.BROWSER),
        "process.env.PLATFORM": JSON.stringify(process.env.PLATFORM),
      }),
    ],
  };
}
