const componentName = 'Playground';

export function transformer() {
  return async (tree) => {
    const visit = await import('unist-util-visit').then((module) => module.visit);
    const promises = [];

    visit(tree, 'mdxJsxFlowElement', (jsxNode) => {
      if (jsxNode.name && !componentName.includes(jsxNode.name)) {
        return;
      }

      promises.push(async () => transformCode(jsxNode));
    });

    await Promise.all(promises.map((p) => p()));
  };
}

async function transformCode(jsxNode) {
  let code;

  const visit = await import('unist-util-visit').then((module) => module.visit);

  visit(jsxNode, 'code', (codeNode) => {
    code = codeNode.value;
  });

  await appendProp(jsxNode, 'code', code);
}

async function appendProp(node, propName, propValue) {
  const valueToEstree = await import('estree-util-value-to-estree').then(
    (module) => module.valueToEstree,
  );

  node.children = [];

  node.attributes.push({
    type: 'mdxJsxAttribute',
    name: propName,
    value: {
      type: 'mdxJsxAttributeValueExpression',
      value: JSON.stringify(propValue),
      data: {
        estree: {
          type: 'Program',
          body: [
            {
              type: 'ExpressionStatement',
              expression: valueToEstree(propValue),
            },
          ],
          sourceType: 'module',
        },
      },
    },
  });
}
