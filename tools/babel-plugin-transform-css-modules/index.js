const { resolveResourceRelativePathBySourcePath } = require('./lib/route');
const {
  createVariable,
  createObjectExpression,
  resolveMemberExpressionPropertyName,
} = require('./lib/babel-helpers');
const { getCSSModulesTokens } = require('./lib/css-modules-tokens');

// function generate

module.exports = function babelPluginTransformCssModules(babelAPI) {
  /**
   * @type {import('@babel/core').types}
   */
  const t = babelAPI.types;
  const cssModulesMap = {};

  return {
    /**
     * @template T
     * @typedef {import('@babel/core').NodePath<T>} NodePath
     *
     * @typedef {import('@babel/types').Program} Program
     * @typedef {import('@babel/types').ImportDeclaration} ImportDeclaration
     * @typedef {import('@babel/types').MemberExpression} MemberExpression
     */
    visitor: {
      Program: {
        /**
         * Initialize `cssModulesMap` for current file.
         *
         * @param {NodePath<Program>} path
         * @param {import('@babel/core').PluginPass} state
         */
        enter(path, state) {
          const sourcePath = state.file.opts.filename;
          cssModulesMap[sourcePath] = {};
        },
        /**
         * Add computed tokens to end of current file and clear `cssModulesMap` of file.
         *
         * @param {NodePath<Program>} path
         * @param {import('@babel/core').PluginPass} state
         */
        exit(path, state) {
          const sourcePath = state.file.opts.filename;
          const foundCssModulesBySourcePath = cssModulesMap[sourcePath];

          if (foundCssModulesBySourcePath) {
            for (const styleImportName in foundCssModulesBySourcePath) {
              if (!foundCssModulesBySourcePath.hasOwnProperty(styleImportName)) {
                continue;
              }

              const { computedTokens } = foundCssModulesBySourcePath[styleImportName];

              if (computedTokens === null || Object.keys(computedTokens).length === 0) {
                continue;
              }

              path.pushContainer(
                'body',
                createVariable(
                  t,
                  'const',
                  styleImportName,
                  createObjectExpression(t, computedTokens),
                ),
              );
            }
          }

          delete cssModulesMap[sourcePath];
        },
      },
      /**
       * Try to define tokens of imported CSS Modules and add to `cssModulesMap`.
       *
       * @param {NodePath<ImportDeclaration>} path
       * @param {import('@babel/core').PluginPass} state
       */
      ImportDeclaration(path, state) {
        const resourceRelativePath = path.node.source.value;

        if (
          // TODO move extension to plugin options
          /\.module\.css/g.test(resourceRelativePath) === false ||
          path.node.specifiers.length === 0
        ) {
          return;
        }
        const sourcePath = state.file.opts.filename;
        const styleImportName = path.node.specifiers[0].local.name;

        cssModulesMap[sourcePath][styleImportName] = {
          tokens: getCSSModulesTokens(
            {
              from: resolveResourceRelativePathBySourcePath(resourceRelativePath, sourcePath),
            },
            {
              generateScopedName: state.opts.generateScopedName,
            },
          ),
          computedTokens: null,
        };

        if (state.opts.keep) {
          path.replaceWith(t.importDeclaration([], t.stringLiteral(resourceRelativePath)));
        } else {
          path.remove();
        }
      },
      /**
       * Replace member expression of CSS Modules with string literal if possible.
       *
       * @param {NodePath<MemberExpression>} path
       * @param {import('@babel/core').PluginPass} state
       */
      MemberExpression(path, state) {
        if (!t.isIdentifier(path.node.object)) {
          return;
        }

        const sourcePath = state.file.opts.filename;
        const foundCssModulesBySourcePath = cssModulesMap[sourcePath];

        if (!foundCssModulesBySourcePath) {
          return;
        }

        const styleVariableName = path.node.object.name;
        const foundCssModules = foundCssModulesBySourcePath[styleVariableName];

        if (!foundCssModules) {
          return;
        }

        const resolvedTokenKey = resolveMemberExpressionPropertyName(t, path.node.property);

        switch (resolvedTokenKey) {
          case 'NOT_FOUND':
            break;
          case 'COMPLEX_LITERAL_TEMPLATE': {
            // NOTE:
            //  ❌ `${somePrefix}-Component--${mode}`
            //  ✅ `Component--${mode}`
            const firstPartOfClassName = path.node.property.quasis[0].value.cooked;

            for (const tokenKey in foundCssModules.tokens) {
              if (
                !tokenKey.startsWith(firstPartOfClassName) ||
                (foundCssModules.computedTokens && tokenKey in foundCssModules.computedTokens)
              ) {
                continue;
              }
              if (foundCssModules.computedTokens === null) {
                foundCssModules.computedTokens = {};
              }
              foundCssModules.computedTokens[tokenKey] = foundCssModules.tokens[tokenKey];
            }
            break;
          }
          default: {
            const className = foundCssModules.tokens[resolvedTokenKey];

            if (className) {
              path.replaceWith(t.stringLiteral(className));
            } else {
              console.warn(
                `[babel-plugin-transform-css-modules]: token key not found. See '${resolvedTokenKey}' of ${sourcePath}.`,
              );
            }
          }
        }
      },
    },
  };
};
