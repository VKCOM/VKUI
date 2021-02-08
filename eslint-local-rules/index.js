const isCssImport = node => node.source.value.endsWith('.css');

module.exports = {
  'import-css-last': {
    meta: {
      type: "suggestion",
      docs: {
        description: "force css import to be last"
      }
    },

    create(context) {
      return {
        Program(node) {
          const imports = node.body.filter(node => node.type === 'ImportDeclaration');
          const cssImports = imports.filter(isCssImport);
          cssImports.reverse().filter((node, i) => imports.length - imports.indexOf(node) - 1 !== i).forEach(node => {
            context.report({ node, message: `Expected ${node.source.value} to be imported last` });
          });
        },
      };
    }
  }
};
