/** @type {import('eslint').Rule.RuleModule} */
const noObjectExpressionInArguments = {
  meta: {
    schema: [
      {
        type: "object",
        properties: {
          onlyForFunctionsWithNames: {
            oneOf: [
              {
                type: "array",
                items: {
                  type: "string",
                },
              },
              {
                type: "string",
              },
            ],
          },
        },
      },
    ],
  },
  create(context) {
    const options = context.options;
    let onlyForFunctionsWithNames = null;

    options.forEach((option) => {
      if ("onlyForFunctionsWithNames" in option) {
        onlyForFunctionsWithNames = option.onlyForFunctionsWithNames;
      }
    });

    return {
      /** @param node {import('estree').CallExpression} */
      CallExpression(node) {
        if (
          onlyForFunctionsWithNames &&
          !onlyForFunctionsWithNames.includes(node.callee.name)
        ) {
          return;
        }
        const args = node.arguments;
        for (let i = 0; i < args.length; i += 1) {
          const arg = args[i];
          if (arg.type === "ObjectExpression") {
            context.report({
              node,
              message: "Do not use object expression in arguments.",
            });
            break;
          }
        }
      },
    };
  },
};

module.exports = {
  rules: {
    "no-object-expression-in-arguments": noObjectExpressionInArguments,
  },
};
