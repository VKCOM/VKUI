const fs = require("fs");
const postcss = require("postcss");
const cssModules = require("postcss-modules");
const JSONfn = require("./JSONfn");

/**
 * @param {string|undefined} optionsRaw
 * @returns {{ from: string } | Object}
 */
function parsePostcssOptions(optionsRaw = "{}") {
  try {
    return JSONfn.parse(optionsRaw);
  } catch (error) {
    return {};
  }
}

/**
 * @param {string|undefined} optionsRaw
 * @returns {{ generateScopedName: string } | Object}
 */
function parseCSSModulesPluginOptions(optionsRaw = "{}") {
  try {
    return JSONfn.parse(optionsRaw);
  } catch (error) {
    return {};
  }
}

void (async function main() {
  try {
    const options = parsePostcssOptions(process.argv[2]);
    const { generateScopedName } = parseCSSModulesPluginOptions(
      process.argv[3]
    );
    const plugins = [
      cssModules({
        generateScopedName,
        getJSON: () => void 0,
      }),
    ];
    const lazyPostcssResult = await postcss(plugins).process(
      fs.readFileSync(options.from, "utf-8"),
      options
    );
    const tokens = lazyPostcssResult.messages[0].exportTokens;
    const result = JSON.stringify(tokens);
    console.log(result);
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
