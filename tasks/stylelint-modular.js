const path = require('path');
const stylelint = require('stylelint');

const ruleName = 'vkui/modular';
const getComponentName = (cssPath) => path.basename(cssPath).split('.')[0];

module.exports = stylelint.createPlugin(
  ruleName,
  (_, { modularFiles = [] }) => {
    const modularComponents = modularFiles.map(getComponentName);
    const noModularRefs = `^(?!(${modularComponents.join('|')})($|__|--))`;
    return function (root, result) {
      const { file } = root.source.input;
      const component = getComponentName(file);
      const isModular = file.endsWith('.m.css');

      stylelint.utils.checkAgainstRule({
        ruleName: "selector-class-pattern",
        ruleSettings: [isModular ? `^${component}($|__|--)` : noModularRefs],
        root,
      }, ({ text, node, line, column }) => {
        const [violatingSelector] = text.match(/"\.[^"]+"/);
        const message = isModular
          ? `Unexpected external selector ${violatingSelector} in modular CSS`
          : `Unexpected modular selector ${violatingSelector} in global CSS`;
        stylelint.utils.report({ message, ruleName, result, node, line, column });
      });
      root.walkAtRules('import', (node) => {
        if (node.params.endsWith('.m.css\'')) {
          stylelint.utils.report({ message: 'Modular CSS must be imported from component\'s TSX', ruleName, result, node });
        }
      });
    };
  }
);

module.exports.ruleName = ruleName;