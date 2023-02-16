/**
 * react-docgen-typescript performance workaround
 * gist: https://gist.github.com/wkillerud/36b119b98f9b9009cd50a733391941a4
 * issue: https://github.com/styleguidist/react-docgen-typescript/issues/112#issuecomment-479772520
 */
const fs = require('fs');
const path = require('path');
const { withCustomConfig } = require('react-docgen-typescript');
const ts = require('typescript');
const { VKUI_PACKAGE } = require('../shared');

let languageService = null;
// eslint-disable-next-line no-undef
const filesCache = new Map();
const vkuiTSConfigDistFile = path.resolve(__dirname, `../${VKUI_PACKAGE.PATHS.TS_CONFIG_FOR_DIST}`);

const parser = withCustomConfig(vkuiTSConfigDistFile);
const tsConfigFile = getTSConfigFile(vkuiTSConfigDistFile);

function getTSConfigFile(tsconfigPath) {
  const basePath = path.dirname(tsconfigPath);
  const configFile = ts.readConfigFile(tsconfigPath, ts.sys.readFile);
  return ts.parseJsonConfigFileContent(configFile.config, ts.sys, basePath, {}, tsconfigPath);
}

function createServiceHost(compilerOptions, files) {
  return {
    getScriptFileNames: () => {
      return [...files.keys()];
    },
    getScriptVersion: (fileName) => {
      const file = files.get(fileName);
      return (file && file.version.toString()) || '';
    },
    getScriptSnapshot: (fileName) => {
      if (!fs.existsSync(fileName)) {
        return undefined;
      }

      let file = files.get(fileName);

      if (file === undefined) {
        const text = fs.readFileSync(fileName).toString();

        file = { version: 0, text };
        files.set(fileName, file);
      }

      return ts.ScriptSnapshot.fromString(file.text);
    },
    getCurrentDirectory: () => process.cwd(),
    getCompilationSettings: () => compilerOptions,
    getDefaultLibFileName: (options) => ts.getDefaultLibFilePath(options),
    fileExists: ts.sys.fileExists,
    readFile: ts.sys.readFile,
    readDirectory: ts.sys.readDirectory,
  };
}

module.exports = {
  reactDocgenTypescript: (file, source) => {
    filesCache.set(file, {
      text: source,
      version: 0,
    });
    return parser.parseWithProgramProvider(file, function () {
      if (languageService) {
        return languageService.getProgram();
      }

      const servicesHost = createServiceHost(tsConfigFile.options, filesCache);

      languageService = ts.createLanguageService(servicesHost, ts.createDocumentRegistry());

      return languageService.getProgram();
    });
  },
};
