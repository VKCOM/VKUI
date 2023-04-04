const tsconfig = require('./tsconfig.json');

const TS_CONFIG_ALIASES_NAMES = Object.entries(tsconfig.compilerOptions.paths).reduce(
  (aliases, [name]) => {
    aliases[name] = name;
    return aliases;
  },
  {},
);

const E2E_TEST = TS_CONFIG_ALIASES_NAMES['@vkui-e2e/test'];
const E2E_PLAYGROUND_HELPERS = TS_CONFIG_ALIASES_NAMES['@vkui-e2e/playground-helpers'];

if (!E2E_TEST || !E2E_PLAYGROUND_HELPERS) {
  throw new Error('ESLint Config: no expected aliases found');
}

module.exports = {
  root: false,
  extends: ['plugin:react-hooks/recommended'],
  plugins: ['import', 'eslint-plugin-vkui'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
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
        selector: 'ImportDeclaration[source.value=/^\\W+(index(\\.ts)?)?$/i]',
        message: 'Do not import index',
      },
      {
        selector:
          'ImportDeclaration[source.value=/\\.css$/i] ~ ImportDeclaration[source.value!=/\\.css$/i]',
        message: 'CSS import must be last',
      },
    ],

    'import/no-default-export': 'error',

    'react/react-in-jsx-scope': 'off',
    'react/no-unknown-property': ['error'],

    'vkui/no-object-expression-in-arguments': [
      'error',
      {
        onlyForFunctionsWithNames: ['classNames'],
      },
    ],
  },
  overrides: [
    {
      files: ['src/**/*.{ts,tsx}'],
      excludedFiles: [
        'src/**/*.{test,e2e,e2e-playground}.{ts,tsx}',
        'src/**/testing/**/*.{ts,tsx}',
      ],
      settings: {
        lintAllEsApis: true,
        polyfills: [
          'Array.includes',
          'Array.find',
          'String.padStart',
          'Intl', // Отсутствует. Не поддерживается в iOS Safari 9, Calendar должен использоваться только на desktop
        ],
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
      },
    },

    {
      files: ['src/testing/e2e/*.{ts,tsx}'],
      rules: {
        'no-restricted-properties': 'off',
        'no-restricted-globals': 'off',
        'react/display-name': 'off',
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
      },
    },

    {
      files: 'src/components/**/*.stories.tsx',
      rules: {
        'import/no-default-export': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
      },
    },
  ],
};
