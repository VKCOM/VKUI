const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');

const ROOT_DIRECTORY = path.join(__dirname, '../..');

function createMockRequire(mocks) {
  return (id) => {
    if (id in mocks) {
      return mocks[id];
    }
    return require(id);
  };
}

function getSourceJS(filePath) {
  try {
    const sourceTS = fs.readFileSync(filePath, 'utf-8');
    const { outputText: sourceJS } = ts.transpileModule(sourceTS, {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
      },
    });
    return sourceJS;
  } catch (error) {
    throw new Error(`Failed to transpile typeScript file '${filePath}': ${error.message}`);
  }
}

function loadSource(relativePath) {
  return getSourceJS(path.join(ROOT_DIRECTORY, relativePath));
}

function runInContext(code, context) {
  const params = Object.keys(context).join(', ');
  const values = Object.values(context);
  try {
    return new Function(params, code)(...values);
  } catch (error) {
    throw new Error(`Failed to execute code in context: ${error.message}`);
  }
}

module.exports = { runInContext, loadSource, createMockRequire };
