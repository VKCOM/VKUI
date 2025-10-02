const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');

const ROOT_DIRECTORY = path.join(__dirname, '../..');
const LAYOUT_PROPS_FILE_PATH = 'packages/vkui/src/lib/layouts/layoutProps.ts';
const HELPERS_FILE_PATH = 'packages/vkui/src/lib/layouts/helpers.ts';
const LAYOUT_CSS_SUFFIX = '/layout.css';

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

function getFullPath(relativePath) {
  return path.join(ROOT_DIRECTORY, relativePath);
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

/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = () => {
  return {
    postcssPlugin: 'postcss-layout-classes',
    Once(root) {
      if (!root.source || !root.source.input.file.endsWith(LAYOUT_CSS_SUFFIX)) {
        return;
      }

      root.removeAll();

      const layoutPropSource = getSourceJS(getFullPath(LAYOUT_PROPS_FILE_PATH));
      const helpersSource = getSourceJS(getFullPath(HELPERS_FILE_PATH));

      const context = {
        exports: {},
      };
      runInContext(layoutPropSource, context);
      runInContext(helpersSource, context);

      const {
        LAYOUT_PROPS,
        DESIGN_SYSTEM_SIZES,
        generateConstantClassName,
        generateVariableClassName,
        generateVariable,
      } = context.exports;

      if (
        !LAYOUT_PROPS ||
        !DESIGN_SYSTEM_SIZES ||
        !generateConstantClassName ||
        !generateVariable
      ) {
        throw new Error(
          'Required exports not found in context: LAYOUT_PROPS, DESIGN_SYSTEM_SIZES, generateConstantClassName, generateVariableClassName, generateVariable',
        );
      }

      Object.entries(LAYOUT_PROPS).forEach(([propName, values]) => {
        const cssProperty = propName.replace(/([A-Z])/g, '-$1').toLowerCase();

        values.forEach((value) => {
          const className = `.${generateConstantClassName(cssProperty, value)}`;

          root.append({
            selector: className,
            raws: { semicolon: true },
            nodes: [
              {
                prop: cssProperty,
                value: DESIGN_SYSTEM_SIZES.includes(value)
                  ? `var(--vkui--spacing_size_${value})`
                  : value,
              },
            ],
          });
        });

        if (cssProperty !== 'position' && !cssProperty.startsWith('overflow')) {
          root.append({
            selector: `.${generateVariableClassName(cssProperty)}`,
            raws: { semicolon: true },
            nodes: [
              {
                prop: cssProperty,
                value: `var(${generateVariable(cssProperty)})`,
              },
            ],
          });
        }
      });
    },
  };
};

module.exports.postcss = true;
