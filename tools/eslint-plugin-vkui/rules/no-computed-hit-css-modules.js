/**
 * Adapted from @vkontakte/eslint-plugin under the MIT license.
 *
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    schema: [
      {
        type: 'object',
        properties: {
          cssModulesSuffix: {
            type: 'string',
            default: '.module.css',
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      computedHit: 'Computed hit cannot be injected',
    },
    type: 'problem',
  },
  create(context) {
    const importSpecifiers = new Set();
    const cssModulesSuffix = context.options[0]?.cssModulesSuffix ?? '.module.css';

    const checkExpression = (node) => {
      if (node?.type === 'Identifier' && importSpecifiers.has(node.name)) {
        context.report({
          node,
          messageId: 'computedHit',
        });
      }
    };

    return {
      ImportDeclaration(node) {
        if (
          node.source.value.endsWith(cssModulesSuffix) &&
          node.specifiers[0]?.type === 'ImportDefaultSpecifier'
        ) {
          importSpecifiers.add(node.specifiers[0].local.name);
        }
      },
      MemberExpression(node) {
        if (
          node.object.type !== 'Identifier' ||
          !importSpecifiers.has(node.object.name) ||
          node.property.type === 'Literal' ||
          node.property.type === 'Identifier'
        ) {
          return;
        }

        context.report({
          node,
          messageId: 'computedHit',
        });
      },
      CallExpression(node) {
        node.arguments.forEach(checkExpression);
      },
      VariableDeclarator(node) {
        checkExpression(node.init);
      },
      ArrayExpression(node) {
        node.elements.forEach(checkExpression);
      },
      Property(node) {
        checkExpression(node.value);
      },
    };
  },
};
