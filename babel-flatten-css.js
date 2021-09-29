const fs = require('fs');
const { join, relative, dirname } = require('path');
const { addSideEffect } = require('@babel/helper-module-imports');
const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse').default;

const cache = {};
function extractCssImports(src) {
  // remove cycles
  if (cache[src]) {
    return cache[src];
  }
  if (src.endsWith('.css')) {
    return [src];
  }
  const resolved = ['ts', 'tsx'].map(ext => `${src}.${ext}`).find(f => fs.existsSync(f));
  const ast = parse('' + fs.readFileSync(resolved), {
    sourceFileName: src,
    sourceType: 'module',
    plugins: ['jsx', 'typescript'],
  });
  const css = cache[src] = [];
  traverse(ast, {
    ImportDeclaration(path) {
      if (path.node.source.value.match(/^[a-z@]/i)) {
        return;
      }
      const fullPath = join(dirname(src), path.node.source.value);
      css.push(...extractCssImports(fullPath));
    },
  });
  return css;
}

module.exports = (t, opts) => ({
  visitor: {
    Program: (path, ctx) => {
      if (!opts.test(ctx.filename)) {
        return;
      }
      const imports = path.node.body.filter(c => {
        return c.type === 'ImportDeclaration' && !c.source.value.match(/^[a-z@]/i);
      });
      const cssImports = imports.filter(i => i.source.value.endsWith('.css'));
      if (cssImports.length) {
        const orderedCssImports = new Set();
        imports.forEach(i => {
          extractCssImports(join(dirname(ctx.filename), i.source.value))
            .forEach(p => orderedCssImports.add(p));
        });

        path.node.body = path.node.body.filter(n => !cssImports.includes(n));
        orderedCssImports.forEach(p => {
          const rel = relative(dirname(ctx.filename), p);
          addSideEffect(path, rel[0] === '.' ? rel : `./${rel}`, { importPosition: 'after' });
        });
      }
    }
  }
});
