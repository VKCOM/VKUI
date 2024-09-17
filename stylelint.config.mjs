import path from 'node:path';
import url from 'node:url';
import shared from './shared.js';

const filename = url.fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const { VKUI_PACKAGE } = shared;

const config = {
  extends: ['stylelint-config-standard', '@vkontakte/stylelint-config'],
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
          path.join(dirname, VKUI_PACKAGE.PATHS.CSS_CONSTANTS),
          path.join(dirname, VKUI_PACKAGE.PATHS.CSS_DYNAMIC_TOKENS),
          path.join(dirname, VKUI_PACKAGE.PATHS.CSS_MISSED_THEME_TOKENS),
          path.join(
            dirname,
            'node_modules/@vkontakte/vkui-tokens/themes/vkBase/cssVars/declarations/index.css',
          ),
        ],
      },
    ],
    'csstools/media-use-custom-media': [
      'known',
      {
        importFrom: path.join(dirname, VKUI_PACKAGE.PATHS.CSS_CUSTOM_MEDIAS),
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
};

export default config;
