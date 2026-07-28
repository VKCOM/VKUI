import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { fixupPluginRules } from '@eslint/compat';
import { globalIgnores } from 'eslint/config';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import vitest from '@vitest/eslint-plugin';
import compat from 'eslint-plugin-compat';
import importPlugin from 'eslint-plugin-import-x';
import jsdoc from 'eslint-plugin-jsdoc';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';

import vkuiPlugin from './tools/eslint-plugin-vkui/index.js';
import vkuiTestTsconfig from './packages/vkui/tsconfig.test.json' with { type: 'json' };

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const compatibleReactPlugin = fixupPluginRules(react);
const codeFiles = ['**/*.{js,jsx,ts,tsx}'];
const standalonePackages = [
  'packages/codemods/**',
  'packages/vkui-date-fns-tz/**',
  'packages/vkui-floating-ui/**',
  'packages/vkui-mcp/**',
];

const namingConventionOptions = [
  { selector: 'default', format: ['camelCase'] },
  {
    selector: 'variable',
    format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
    leadingUnderscore: 'allow',
    trailingUnderscore: 'forbid',
  },
  {
    selector: 'function',
    format: ['camelCase', 'PascalCase'],
    trailingUnderscore: 'forbid',
  },
  {
    selector: ['parameter', 'parameterProperty'],
    format: ['camelCase', 'PascalCase'],
    leadingUnderscore: 'allow',
    trailingUnderscore: 'forbid',
  },
  { selector: 'class', format: ['PascalCase'], trailingUnderscore: 'forbid' },
  { selector: 'typeLike', format: ['PascalCase'] },
  {
    selector: 'enum',
    format: ['UPPER_CASE', 'PascalCase'],
    leadingUnderscore: 'forbid',
    trailingUnderscore: 'forbid',
  },
  {
    selector: ['variable', 'parameter'],
    modifiers: ['destructured'],
    format: null,
  },
  {
    selector: ['classProperty', 'objectLiteralProperty', 'typeProperty'],
    format: null,
  },
  {
    selector: 'enumMember',
    format: null,
    leadingUnderscore: 'forbid',
    trailingUnderscore: 'forbid',
  },
  {
    selector: ['method'],
    format: ['camelCase'],
    leadingUnderscore: 'allow',
    trailingUnderscore: 'forbid',
  },
  {
    selector: ['objectLiteralMethod'],
    format: ['camelCase', 'PascalCase'],
    leadingUnderscore: 'allow',
    trailingUnderscore: 'forbid',
  },
  {
    selector: [
      'classProperty',
      'objectLiteralProperty',
      'typeProperty',
      'classMethod',
      'objectLiteralMethod',
      'typeMethod',
      'accessor',
      'enumMember',
    ],
    format: null,
    modifiers: ['requiresQuotes'],
  },
  { selector: 'import', format: ['camelCase', 'PascalCase'] },
];

const vkontakteBaseRules = {
  'no-irregular-whitespace': 'error',
  'no-unexpected-multiline': 'error',
  'guard-for-in': 'error',
  'no-caller': 'error',
  'no-extend-native': 'error',
  'no-extra-bind': 'error',
  'no-multi-str': 'error',
  'no-new-wrappers': 'error',
  '@typescript-eslint/only-throw-error': 'error',
  'no-with': 'error',
  'new-cap': 'error',
  'no-object-constructor': 'error',
  'constructor-super': 'error',
  'no-new-native-nonconstructor': 'error',
  'no-this-before-super': 'error',
  'no-var': 'error',
  'no-undef': 'error',
  curly: ['error', 'all'],
  'no-octal': 'error',
  'no-eval': 'error',
  'no-invalid-this': 'off',
  'prefer-rest-params': 'off',
  'prefer-spread': 'off',
  'no-global-assign': 'error',
  camelcase: ['error', { properties: 'never', ignoreDestructuring: true }],
  'no-array-constructor': 'error',
  'no-unused-vars': ['error', { ignoreRestSiblings: true, args: 'none' }],
  'import/no-duplicates': 'error',
  eqeqeq: ['error', 'always', { null: 'ignore' }],
  'no-shadow': 'error',
  'no-unreachable': 'error',
  'no-unsafe-negation': 'error',
  'no-empty': ['error', { allowEmptyCatch: true }],
};

const vkontakteReactRules = {
  ...react.configs.flat.recommended.rules,
  'react-hooks/rules-of-hooks': 'error',
  'react/jsx-uses-react': 'error',
  'react/jsx-uses-vars': 'error',
  'react/react-in-jsx-scope': 'error',
  'react/prop-types': 'off',
  'react/jsx-curly-brace-presence': 'error',
  'vkui/no-object-expression-in-arguments': [
    'error',
    { onlyForFunctionsWithNames: ['classNames'] },
  ],
  'vkui/no-computed-hit-css-modules': ['error', { cssModulesSuffix: '.module.css' }],
};

const vkontakteTypescriptRules = {
  '@typescript-eslint/adjacent-overload-signatures': 'error',
  '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
  '@typescript-eslint/await-thenable': 'error',
  '@typescript-eslint/no-restricted-types': [
    'error',
    {
      types: {
        Function: 'Use exact typing of callables instead of generic Function',
        Object: 'Use {} instead or exact typing',
        String: { message: 'Use string instead', fixWith: 'string' },
        Number: { message: 'Use number instead', fixWith: 'number' },
      },
    },
  ],
  '@typescript-eslint/consistent-type-assertions': [
    'error',
    { assertionStyle: 'as', objectLiteralTypeAssertions: 'never' },
  ],
  '@typescript-eslint/explicit-member-accessibility': 'error',
  'no-array-constructor': 'off',
  '@typescript-eslint/no-array-constructor': 'error',
  'no-empty-function': 'off',
  '@typescript-eslint/no-empty-function': 'error',
  '@typescript-eslint/no-empty-object-type': 'off',
  '@typescript-eslint/no-empty-interface': 'error',
  '@typescript-eslint/no-extraneous-class': 'error',
  '@typescript-eslint/no-floating-promises': 'error',
  '@typescript-eslint/no-for-in-array': 'error',
  '@typescript-eslint/no-inferrable-types': 'error',
  'no-magic-numbers': 'off',
  '@typescript-eslint/no-magic-numbers': [
    'error',
    { ignoreNumericLiteralTypes: true, ignoreEnums: true },
  ],
  '@typescript-eslint/no-misused-new': 'error',
  '@typescript-eslint/no-misused-promises': 'error',
  '@typescript-eslint/no-non-null-assertion': 'error',
  '@typescript-eslint/no-this-alias': 'error',
  '@typescript-eslint/no-unnecessary-condition': 'error',
  '@typescript-eslint/no-unnecessary-qualifier': 'error',
  '@typescript-eslint/no-unnecessary-type-arguments': 'error',
  '@typescript-eslint/no-unnecessary-type-assertion': 'error',
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': [
    'error',
    { ignoreRestSiblings: true, caughtErrors: 'none' },
  ],
  'no-use-before-define': 'off',
  '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
  'no-useless-constructor': 'off',
  '@typescript-eslint/no-useless-constructor': 'error',
  '@typescript-eslint/prefer-function-type': 'error',
  '@typescript-eslint/prefer-includes': 'error',
  '@typescript-eslint/prefer-namespace-keyword': 'error',
  '@typescript-eslint/prefer-readonly': 'error',
  '@typescript-eslint/prefer-string-starts-ends-with': 'error',
  '@typescript-eslint/require-array-sort-compare': 'error',
  '@typescript-eslint/restrict-plus-operands': 'error',
  '@typescript-eslint/unbound-method': 'error',
  '@typescript-eslint/unified-signatures': 'error',
  '@typescript-eslint/prefer-reduce-type-parameter': 'error',
  '@typescript-eslint/prefer-ts-expect-error': 'error',
  '@typescript-eslint/naming-convention': ['error', ...namingConventionOptions],
  '@typescript-eslint/ban-ts-comment': [
    'error',
    {
      'ts-ignore': true,
      'ts-nocheck': false,
      'ts-expect-error': { descriptionFormat: '^ TS\\d+: .+$' },
    },
  ],
  'no-undef': 'off',
  camelcase: 'off',
};

const rootRules = {
  '@typescript-eslint/method-signature-style': 'error',
  '@typescript-eslint/explicit-member-accessibility': 'off',
  '@typescript-eslint/no-unnecessary-condition': 'off',
  '@typescript-eslint/no-magic-numbers': 'off',
  '@typescript-eslint/no-non-null-assertion': 'off',
  '@typescript-eslint/ban-ts-comment': [
    'error',
    {
      'ts-expect-error': {
        descriptionFormat: '^: TS\\d+ .+$',
      },
    },
  ],
  '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
  'no-shadow': 'off',
  'no-restricted-globals': ['error', 'window', 'document'],
  'import/order': [
    'error',
    {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'newlines-between': 'never',
      alphabetize: { order: 'asc' },
      pathGroupsExcludedImportTypes: ['**/*.css', 'react', 'react-dom', 'react-dom/**'],
      pathGroups: [
        {
          pattern: '{react,react-dom,react-dom/**}',
          group: 'external',
          position: 'before',
        },
        {
          group: 'external',
          pattern: '@/**',
          position: 'after',
        },
        {
          pattern: '*.css',
          group: 'index',
          patternOptions: { matchBase: true },
          position: 'after',
        },
      ],
    },
  ],
  'sort-imports': [
    'error',
    {
      ignoreCase: true,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
      allowSeparatedGroups: true,
      memberSyntaxSortOrder: ['none', 'single', 'all', 'multiple'],
    },
  ],
  curly: 'error',
  eqeqeq: ['error', 'always', { null: 'ignore' }],
  'unicorn/expiring-todo-comments': 'error',
  'no-console': 'error',
  'no-useless-computed-key': 'error',
  'spaced-comment': ['error', 'always', { exceptions: ['#__PURE__'] }],
};

const simplePackageRules = {
  'import/order': [
    'error',
    {
      groups: ['builtin', 'external', 'internal'],
      'newlines-between': 'never',
      alphabetize: { order: 'asc' },
    },
  ],
  'sort-imports': [
    'error',
    {
      ignoreCase: true,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
      allowSeparatedGroups: true,
      memberSyntaxSortOrder: ['none', 'single', 'all', 'multiple'],
    },
  ],
  curly: 'error',
  eqeqeq: 'error',
};

const vkuiAliases = Object.entries(vkuiTestTsconfig.compilerOptions.paths).map(([name, paths]) => [
  name,
  paths[0],
]);
const e2eTest = vkuiAliases.find(([alias]) => alias === '@vkui-e2e/test')?.[0];
const e2ePlaygroundHelpers = vkuiAliases.find(
  ([alias]) => alias === '@vkui-e2e/playground-helpers',
)?.[0];

if (!e2eTest || !e2ePlaygroundHelpers) {
  throw new Error('ESLint Config: no expected aliases found');
}

export default [
  globalIgnores(
    [
      'examples/**',
      '**/node_modules/**',
      '**/.*',
      '**/dist/**',
      '**/docs/**',
      '**/coverage/**',
      '**/target/**',
      '**/fixture/**',
      '**/storybook-static/**',
      '**/playwright-report/**',
      '**/blob-report/**',
      '**/all-blob-reports/**',
      '**/tmp/**',
      '**/out/**',
      '**/.next/**',
      '**/next-env.d.ts',
      '**/*.css.d.ts',
      '**/*.mjs',
      '**/*.cjs',
      '**/vitest.d.ts',
      '**/_pagefind/**',
      '**/.docgen/**',
    ],
    'vkui/global-ignores',
  ),
  {
    name: 'vkui/linter-options',
    linterOptions: {
      reportUnusedDisableDirectives: false,
    },
  },
  {
    name: 'vkui/base',
    files: codeFiles,
    ignores: standalonePackages,
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
          restParams: true,
          spread: true,
        },
      },
      globals: {
        ...globals.es6,
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
      jsdoc,
      react: compatibleReactPlugin,
      'react-hooks': reactHooks,
      unicorn,
      vkui: vkuiPlugin,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      ...vkontakteBaseRules,
      ...vkontakteReactRules,
      ...vkontakteTypescriptRules,
      ...rootRules,
    },
  },
  {
    name: 'vkui/javascript-without-type-information',
    files: ['**/*.{js,jsx}'],
    ignores: standalonePackages,
    rules: tsPlugin.configs['flat/disable-type-checked'].rules,
  },
  {
    name: 'vkui/typescript-with-type-information',
    files: ['**/*.{ts,tsx}'],
    ignores: standalonePackages,
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: rootDir,
      },
    },
  },
  {
    name: 'vkui/website',
    files: ['website/**/*.{js,jsx,ts,tsx}'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'no-restricted-globals': 'off',
    },
  },
  {
    name: 'vkui/website-typescript',
    files: ['website/**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: path.join(rootDir, 'website'),
      },
    },
  },
  {
    name: 'vkui/docs-theme',
    files: ['packages/vkui-docs-theme/**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: path.join(rootDir, 'packages/vkui-docs-theme'),
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'no-restricted-globals': 'off',
    },
  },
  {
    name: 'vkui/storybook-addon-cartesian',
    files: ['tools/storybook-addon-cartesian/**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: path.join(rootDir, 'tools/storybook-addon-cartesian'),
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    name: 'vkui/vkui-package',
    files: ['packages/vkui/**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.eslint.json',
        tsconfigRootDir: path.join(rootDir, 'packages/vkui'),
      },
      globals: {
        Element: 'readonly',
      },
    },
    plugins: {
      compat,
    },
    settings: {
      'react-hooks': {
        additionalEffectHooks: '(useIsomorphicLayoutEffect)',
      },
    },
    rules: {
      ...reactHooks.configs.flat.recommended.rules,
      'react-hooks/immutability': 'error',
      'react-hooks/refs': 'error',
      'react-hooks/set-state-in-effect': 'off',
      'no-restricted-imports': [
        'error',
        {
          paths: ['components', 'helpers', 'hoc', 'hooks', 'lib', 'styles', 'testing', 'types'],
          patterns: [
            '@vkontakte/icons/dist/*',
            'components/*',
            'helpers/*',
            'hoc/*',
            'hooks/*',
            'lib/*',
            'styles/*',
            'testing/*',
            'types/*',
          ],
        },
      ],
      'no-restricted-properties': [
        'error',
        {
          property: 'querySelector',
          message: 'Make sure to use [data-*] selector, not class',
        },
        {
          property: 'querySelectorAll',
          message: 'Make sure to use [data-*] selector, not class',
        },
        {
          property: 'matches',
          message: 'Make sure to use [data-*] selector, not class',
        },
        {
          property: 'closest',
          message: 'Make sure to use [data-*] selector, not class',
        },
        {
          property: 'getElementsByClassName',
          message: "Use .querySelectorAll('[data-*]')",
        },
        {
          property: 'classList',
          message: "Make sure to use 'vkui' prefix",
        },
        {
          property: 'getElementById',
          message: 'Absolutely do not use id',
        },
        {
          object: 'React',
          property: 'useLayoutEffect',
          message: 'Prefer lib/useIsomorphicLayoutEffect',
        },
      ],
      'no-restricted-syntax': [
        'error',
        {
          selector: 'CallExpression[callee.name="classNames"] ObjectExpression',
          message: 'Необходимо вынести объект на уровень модуля как константу',
        },
        {
          selector: 'ImportDeclaration[source.value=/^\\W+(index(\\.ts)?)?$/i]',
          message: 'Do not import index',
        },
        {
          selector:
            'ImportDeclaration[source.value=/\\.css$/i] ~ ImportDeclaration[source.value!=/\\.css$/i]',
          message: 'CSS import must be last',
        },
        {
          selector: 'CallExpression[callee.name="classNames"][arguments.length=1]',
          message: 'Do not use classNames with one argument',
        },
        {
          selector: 'ImportDefaultSpecifier[local.name="React"][parent.source.value="react"]',
          message: 'Не используйте импорт React по умолчанию',
        },
      ],
      'import/no-default-export': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/no-unknown-property': ['error', { ignore: ['fetchPriority', 'fetchpriority'] }],
      'vkui/no-object-expression-in-arguments': [
        'error',
        { onlyForFunctionsWithNames: ['classNames'] },
      ],
      'unicorn/expiring-todo-comments': 'error',
      'jsdoc/require-jsdoc': 'off',
      'jsdoc/check-syntax': 'off',
    },
  },
  {
    name: 'vkui/component-docs',
    files: ['packages/vkui/src/components/**/*.{ts,tsx}'],
    ignores: ['packages/vkui/src/components/**/*.{test,e2e,e2e-playground,stories}.{ts,tsx}'],
    rules: {
      'jsdoc/require-description-complete-sentence': 'error',
      'jsdoc/require-jsdoc': [
        'error',
        {
          contexts: [
            'TSTypeAliasDeclaration > TSIntersectionType > TSTypeLiteral > TSPropertySignature',
            'TSTypeAliasDeclaration > TSTypeLiteral > TSPropertySignature',
            'TSInterfaceDeclaration TSPropertySignature:not(TSTypeLiteral TSPropertySignature)',
          ],
          require: {
            FunctionDeclaration: false,
            FunctionExpression: false,
            ArrowFunctionExpression: false,
            MethodDefinition: false,
          },
          checkConstructors: false,
          checkGetters: false,
          checkSetters: false,
          enableFixer: false,
        },
      ],
    },
  },
  {
    name: 'vkui/browser-compat',
    files: ['packages/vkui/src/**/*.{ts,tsx}'],
    ignores: [
      'packages/vkui/src/**/*.{test,e2e,e2e-playground}.{ts,tsx}',
      'packages/vkui/src/**/testing/**/*.{ts,tsx}',
    ],
    settings: {
      lintAllEsApis: true,
    },
    rules: {
      ...compat.configs['flat/recommended'].rules,
      'compat/compat': 'error',
    },
  },
  {
    name: 'vkui/vitest',
    files: ['packages/vkui/src/**/*.test.{ts,tsx}', 'packages/vkui/src/testing/*.{ts,tsx}'],
    plugins: {
      '@vitest': vitest,
    },
    languageOptions: {
      globals: vitest.environments.env.globals,
    },
    rules: {
      ...vitest.configs['legacy-recommended'].rules,
      'react-hooks/globals': 'error',
      '@vitest/valid-describe-callback': 'off',
      '@vitest/expect-expect': 'off',
      '@vitest/valid-title': 'off',
      '@vitest/no-conditional-expect': 'off',
      '@typescript-eslint/unbound-method': 'off',
      '@vitest/unbound-method': 'off',
      'no-restricted-properties': 'off',
      'no-restricted-globals': 'off',
      'react/display-name': 'off',
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@testing-library/user-event'],
              message: 'Use `userEvent` from src/testing/utils instead',
            },
          ],
        },
      ],
    },
  },
  {
    name: 'vkui/e2e-testing',
    files: ['packages/vkui/src/testing/e2e/*.{ts,tsx}'],
    rules: {
      'no-restricted-properties': 'off',
      'no-restricted-globals': 'off',
      'react/display-name': 'off',
    },
  },
  {
    name: 'vkui/e2e',
    files: ['packages/vkui/src/**/*.e2e.{ts,tsx}'],
    rules: {
      'no-restricted-properties': 'off',
      'no-restricted-globals': 'off',
      'react/display-name': 'off',
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@playwright/*', 'testing/e2e/*', '../testing/e2e/*', '../../testing/e2e/*'],
              message: `Use ${e2eTest} instead`,
            },
            {
              group: [e2ePlaygroundHelpers],
              message: `Use ${e2eTest} instead`,
            },
          ],
        },
      ],
      '@typescript-eslint/unbound-method': 'off',
    },
  },
  {
    name: 'vkui/e2e-playground',
    files: ['packages/vkui/src/**/*.e2e-playground.{ts,tsx}'],
    rules: {
      'no-restricted-properties': 'off',
      'no-restricted-globals': 'off',
      'react/display-name': 'off',
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@playwright/*', 'testing/e2e/*', '../testing/e2e/*', '../../testing/e2e/*'],
              message: `Use ${e2ePlaygroundHelpers} instead`,
            },
            {
              group: [e2eTest],
              message: `Use ${e2ePlaygroundHelpers} instead`,
            },
          ],
        },
      ],
    },
  },
  {
    name: 'vkui/stories',
    files: ['packages/vkui/src/components/**/*.stories.tsx'],
    rules: {
      'import/no-default-export': 'off',
      '@typescript-eslint/consistent-type-assertions': 'off',
    },
  },
  {
    name: 'vkui/storybook-addons',
    files: ['packages/storybook-addons/**/*.{js,jsx,ts,tsx}'],
    rules: {
      'no-restricted-globals': 'off',
    },
  },
  {
    name: 'vkui/standalone-packages',
    files: standalonePackages.map((directory) => directory.replace('/**', '/**/*.{js,jsx,ts,tsx}')),
    ignores: [
      'packages/vkui-date-fns-tz/**/*.d.ts',
      'packages/vkui-date-fns-tz/**/*.js',
      'packages/vkui-floating-ui/**/*.d.ts',
      'packages/vkui-floating-ui/**/*.umd.js',
      'packages/vkui-floating-ui/**/*.esm.js',
      'packages/vkui-mcp/dist/**',
    ],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2018,
      sourceType: 'module',
      globals: globals.node,
    },
    plugins: {
      import: importPlugin,
    },
    rules: simplePackageRules,
  },
  {
    name: 'vkui/mcp-import-order',
    files: ['packages/vkui-mcp/**/*.{js,jsx,ts,tsx}'],
    plugins: {
      import: importPlugin,
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'never',
          alphabetize: { order: 'asc' },
        },
      ],
    },
  },
];
