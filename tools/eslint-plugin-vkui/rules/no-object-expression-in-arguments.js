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
          onlyForFunctionsWithNames: {
            oneOf: [
              {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
              {
                type: 'string',
              },
            ],
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      unexpected: 'Do not use object expression in arguments{{ functionName }}.',
    },
    type: 'suggestion',
  },
  create(context) {
    let onlyForFunctionsWithNames = null;

    for (const option of context.options) {
      if ('onlyForFunctionsWithNames' in option) {
        onlyForFunctionsWithNames = new Set(
          typeof option.onlyForFunctionsWithNames === 'string'
            ? [option.onlyForFunctionsWithNames]
            : option.onlyForFunctionsWithNames,
        );
      }
    }

    return {
      CallExpression(node) {
        if (onlyForFunctionsWithNames && !onlyForFunctionsWithNames.has(node.callee.name)) {
          return;
        }

        if (node.arguments.some(({ type }) => type === 'ObjectExpression')) {
          context.report({
            node,
            messageId: 'unexpected',
            data: {
              functionName: onlyForFunctionsWithNames ? ` of ${node.callee.name}` : '',
            },
          });
        }
      },
    };
  },
};
