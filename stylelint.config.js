const path = require('path');
const { VKUI_PACKAGE } = require('./shared');

module.exports = {
  extends: ['stylelint-config-standard', '@vkontakte/stylelint-config'],
  plugins: [
    'stylelint-value-no-unknown-custom-properties',
    'stylelint-media-use-custom-media',
    '@project-tools/stylelint-atomic',
    '@project-tools/stylelint-bad-multiplication',
  ],
  rules: {
    'indentation': null,
    'block-no-empty': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'comment-empty-line-before': null,
    'comment-whitespace-inside': null,
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
    'keyframes-name-pattern': 'vkui-.+',
    'csstools/value-no-unknown-custom-properties': [
      true,
      {
        importFrom: [
          path.join(__dirname, VKUI_PACKAGE.PATHS.CSS_CONSTANTS),
          path.join(
            __dirname,
            'node_modules/@vkontakte/vkui-tokens/themes/vkBase/cssVars/declarations/index.css',
          ),
        ],
      },
    ],
    'csstools/media-use-custom-media': [
      'known',
      {
        importFrom: path.join(__dirname, VKUI_PACKAGE.PATHS.CSS_CUSTOM_MEDIAS),
      },
    ],
    // Skip reporting in pprecommit run, highlight in editor
    '@project-tools/stylelint-atomic': [
      process.env.LINT_PRECOMMIT_RUN ? null : true,
      {
        severity: 'warning',
      },
    ],
    '@project-tools/stylelint-bad-multiplication': true,
    'import-notation': null,
    'plugin/vkui': null,
    'plugin/selector-bem-pattern': null,
    'property-disallowed-list': null,
  },
};
