const path = require("path");
const childProcess = require("child_process");
const JSONfn = require("./JSONfn");

const nodeExecutable = process.argv[0];
const postcssExecutable = path.resolve(__dirname, "./postcss-executable.js");

/**
 * Возвращает CSS селекторы в виде объекта.
 *
 * > Не все плагины postcss обрабатываются синхронно, поэтому мы используем `execFileSync`, чтобы блокировать дальнейшее
 * выполнение задач, пока не отработает postcss.
 *
 * @param {{ from: string }} postcssOptions
 * @param {{ generateScopedName: string } | Object | undefined} cssModulesPluginOptions
 * @returns {Object}
 */
function getCSSModulesTokens(postcssOptions, cssModulesPluginOptions = {}) {
  const resultRaw = childProcess.execFileSync(
    nodeExecutable,
    [
      postcssExecutable,
      JSONfn.stringify(postcssOptions),
      JSONfn.stringify(cssModulesPluginOptions),
    ],
    {
      env: process.env,
    }
  );
  return JSON.parse(resultRaw.toString());
}

module.exports = { getCSSModulesTokens };
