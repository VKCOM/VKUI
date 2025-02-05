import path from 'node:path';

const config = {
  extends: [
    'stylelint-config-standard',
    '@vkontakte/stylelint-config',
    'stylelint-config-recess-order',
  ],
  plugins: [
    '@project-tools/stylelint-plugin-vkui',
    'stylelint-media-use-custom-media',
    'stylelint-value-no-unknown-custom-properties',
    'stylelint-use-logical',
    'stylelint-prettier',
  ],
  rules: {
    'prettier/prettier': true,
    'block-no-empty': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'comment-empty-line-before': null,
    'comment-whitespace-inside': null,
    'declaration-property-value-keyword-no-deprecated': [
      true,
      {
        /**
         * Сейчас ругается на `word-break: break-word;`.
         *
         * Можно поменять на `overflow-wrap: break-word;`, но нужно проверить, что работает одинаково.
         *
         * Заигноренно в рамках PR https://github.com/VKCOM/VKUI/pull/8152
         */
        ignoreKeywords: 'break-word',
      },
    ],
    'no-descending-specificity': null,
    'no-duplicate-selectors': null,
    'value-keyword-case': null,
    'selector-class-pattern': null,
    'custom-property-pattern': null,
    'value-no-vendor-prefix': null,
    'property-no-vendor-prefix': null,
    'media-feature-range-notation': null, // need 104 chrome
    'alpha-value-notation': 'number',
    /**
     * https://caniuse.com/mdn-css_types_color_hsl_space_separated_parameters
     */
    'color-function-notation': 'legacy',
    /**
     * // In Selectors Level 3, only a single simple selector was allowed as the argument to :not(), whereas Selectors Level 4 allows a selector list.
     */
    'selector-not-notation': 'simple',
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['constant'],
      },
    ],
    'length-zero-no-unit': [
      true,
      {
        ignore: ['custom-properties'],
      },
    ],
    'csstools/value-no-unknown-custom-properties': [
      true,
      {
        importFrom: [
          path.join(import.meta.dirname, 'packages/vkui/src/styles/constants.css'),
          path.join(import.meta.dirname, 'packages/vkui/src/styles/dynamicTokens.css'),
          path.join(import.meta.dirname, 'packages/vkui/src/styles/missedThemeTokens.css'),
          path.join(
            import.meta.dirname,
            'node_modules/@vkontakte/vkui-tokens/themes/vkBase/cssVars/declarations/index.css',
          ),
          path.join(import.meta.dirname, 'packages/vkui-docs-theme/styles/constants.css'),
          path.join(import.meta.dirname, 'packages/vkui-docs-theme/styles/colors.css'),
        ],
      },
    ],
    'csstools/media-use-custom-media': [
      'known',
      {
        importFrom: path.join(
          import.meta.dirname,
          'packages/vkui/src/styles/customMedias.generated.css',
        ),
      },
    ],
    'selector-pseudo-class-disallowed-list': ['global'],
    'vkui-internal/bad-multiplication': true,
    'import-notation': null,
    'plugin/vkui': null,
    'plugin/selector-bem-pattern': null,
    'plugin/logical-shorthands': 'always',
    'property-disallowed-list': null,
    'csstools/use-logical': 'always',
  },
  overrides: [
    {
      files: [
        `${path.join(import.meta.dirname, 'website')}/**/*.css`,
        `${path.join(import.meta.dirname, 'packages/vkui-docs-theme')}/**/*.css`,
      ],
      rules: {
        'csstools/media-use-custom-media': [
          'known',
          {
            importFrom: path.join(
              import.meta.dirname,
              'packages/vkui/src/styles/customMedias.generated.css',
            ),
          },
        ],
      },
    },
  ],
};

export default config;
