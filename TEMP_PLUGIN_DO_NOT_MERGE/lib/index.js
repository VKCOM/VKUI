const types = require('@babel/types');
const syntax = require("@babel/plugin-syntax-jsx");
const plugin = require('@babel/helper-plugin-utils');
const imports = require('@babel/helper-module-imports');
const utils = require('./utils');

function findPathsToKey(root, value) {
  const results = [];
  
  const find = (where, path, deep) => {
    if (deep > 10) {
      return;
    }

    if (where === value) {
      results.push(path);
      return;
    }

    if (typeof where === 'object') {
      if (Array.isArray(where)) {
        where.forEach((value, index) => {
          const current = `${path}[${index}]`;
          find(value, current, deep + 1);
        });
      } else {
        for (const key in where) {
          const current = `${path}.${key}`;
          find(where[key], current, deep + 1);
        }
      }
    }
  };

  find(root, '', 0);

  return results;
}

module.exports = plugin.declare((api) => {
  api.assertVersion(7);

  /**
   * @type {import('@babel/core').PluginObj}
   */
  const plugin = {
    name: 'vkui-transform',
    inherits: syntax.default,
    visitor: {
      JSXOpeningElement(path) {
        const vkuiClassAttr = utils.findAttribute(path.node.attributes, 'vkuiClass');
        if (!vkuiClassAttr) {
          return;
        }

        utils.transformAttribute(vkuiClassAttr, path);

        const classNameAttr = utils.findAttribute(path.node.attributes, 'className');
        if (classNameAttr) {
          const vkuiClassExpression = utils.getExpression(vkuiClassAttr);
          if (!vkuiClassExpression) {
            return;
          }

          const classNameExpression = utils.getExpression(classNameAttr);

          const importIdentifier = imports.addNamed(path, 'classNames', '@mntm/classnames');
          classNameAttr.value = types.jsxExpressionContainer(
            types.callExpression(
              importIdentifier,
              [
                vkuiClassExpression,
                classNameExpression
              ]
            )
          );

          path.node.attributes = utils.filterAttribute(path.node.attributes, 'vkuiClass');
        } else {
          utils.renameAttribute(vkuiClassAttr, 'className');
        }
      }
    }
  }

  return plugin;
});
