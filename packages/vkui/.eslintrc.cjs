const tsconfig = require('./tsconfig.json');

const TS_CONFIG_ALIASES = Object.entries(tsconfig.compilerOptions.paths).map(([name, paths]) => [
  name,
  paths[0],
]);

const E2E_TEST = TS_CONFIG_ALIASES.find(([alias]) => alias === '@vkui-e2e/test')[0];
const E2E_PLAYGROUND_HELPERS = TS_CONFIG_ALIASES.find(
  ([alias]) => alias === '@vkui-e2e/playground-helpers',
)[0];

if (!E2E_TEST || !E2E_PLAYGROUND_HELPERS) {
  throw new Error('ESLint Config: no expected aliases found');
}

module.exports = {
  root: false,
  extends: ['plugin:react-hooks/recommended', 'plugin:react-server-components/recommended'],
  plugins: ['import', '@project-tools/vkui', 'unicorn', 'eslint-plugin-jsdoc'],
  parserOptions: {
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: TS_CONFIG_ALIASES,
      },
    },
  },
  globals: {
    Element: true,
  },
  rules: {
    'no-restricted-imports': [
      'error',
      {
        paths: [
          // prevent absolute imports from src subfolders like `import { ... } from "lib"`
          'components',
          'helpers',
          'hoc',
          'hooks',
          'lib',
          'styles',
          'testing',
          'types',
          'storybook',
        ],
        patterns: [
          '@vkontakte/icons/dist/*',
          // prevent absolute imports from src subfolders like `import { ... } from "lib/platform"`
          'components/*',
          'helpers/*',
          'hoc/*',
          'hooks/*',
          'lib/*',
          'styles/*',
          'testing/*',
          'types/*',
          'storybook/*',
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
    'react/no-unknown-property': ['error', { ignore: ['fetchPriority', 'fetchpriority'] }], // https://github.com/jsx-eslint/eslint-plugin-react/pull/3697

    '@vkontakte/no-object-expression-in-arguments': [
      'error',
      {
        onlyForFunctionsWithNames: ['classNames'],
      },
    ],
    'unicorn/expiring-todo-comments': ['error'],
    'jsdoc/require-jsdoc': 'off',
    'jsdoc/check-syntax': 'off',
  },
  overrides: [
    {
      files: ['src/components/**/*.{ts,tsx}'],
      excludedFiles: ['src/components/**/*.{test,e2e,e2e-playground,stories}.{ts,tsx}'],
      rules: {
        'jsdoc/require-description-complete-sentence': ['error', {
          abbreviations: ['т.к.', 'см.', 'См.']
        }],
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
      files: ['src/**/*.{ts,tsx}'],
      excludedFiles: [
        'src/**/*.{test,e2e,e2e-playground}.{ts,tsx}',
        'src/**/testing/**/*.{ts,tsx}',
      ],
      settings: {
        lintAllEsApis: true,
      },
      extends: ['plugin:compat/recommended'],
      rules: {
        'compat/compat': 'error',
      },
    },

    {
      files: ['src/**/*.test.{ts,tsx}', 'src/testing/*.{ts,tsx}'],
      env: {
        jest: true,
      },
      rules: {
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
        'react-server-components/use-client': 'off',
      },
    },

    {
      files: ['src/testing/e2e/*.{ts,tsx}'],
      rules: {
        'no-restricted-properties': 'off',
        'no-restricted-globals': 'off',
        'react/display-name': 'off',
        'react-server-components/use-client': 'off',
      },
    },

    {
      files: ['src/**/*.e2e.{ts,tsx}'],
      rules: {
        'no-restricted-properties': 'off',
        'no-restricted-globals': 'off',
        'react/display-name': 'off',
        'no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: [
                  '@playwright/*',
                  'testing/e2e/*',
                  '../testing/e2e/*',
                  '../../testing/e2e/*',
                ],
                message: `Use ${E2E_TEST} instead`,
              },
              {
                group: [E2E_PLAYGROUND_HELPERS],
                message: `Use ${E2E_TEST} instead`,
              },
            ],
          },
        ],
        'react-server-components/use-client': 'off',
        '@typescript-eslint/unbound-method': 'off',
      },
    },

    {
      files: ['src/**/*.e2e-playground.{ts,tsx}'],
      rules: {
        'no-restricted-properties': 'off',
        'no-restricted-globals': 'off',
        'react/display-name': 'off',
        'no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: [
                  '@playwright/*',
                  'testing/e2e/*',
                  '../testing/e2e/*',
                  '../../testing/e2e/*',
                ],
                message: `Use ${E2E_PLAYGROUND_HELPERS} instead`,
              },
              {
                group: [E2E_TEST],
                message: `Use ${E2E_PLAYGROUND_HELPERS} instead`,
              },
            ],
          },
        ],
        'react-server-components/use-client': 'off',
      },
    },

    {
      files: 'src/components/**/*.stories.tsx',
      rules: {
        'import/no-default-export': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
        'react-server-components/use-client': 'off',
      },
    },
  ],
};
