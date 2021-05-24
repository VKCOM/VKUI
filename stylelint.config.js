const { cssPropSources } = require('./postcss.config');

module.exports = {
  "extends": "stylelint-config-standard",
  "plugins": [
    "stylelint-value-no-unknown-custom-properties"
  ],
  "rules": {
    "indentation": null,
    "number-leading-zero": "never",
    "block-no-empty": null,
    "declaration-block-no-redundant-longhand-properties": null,
    "comment-empty-line-before": null,
    "comment-whitespace-inside": null,
    "no-descending-specificity": null,
    "no-duplicate-selectors": null,
    "length-zero-no-unit": [true, {
      "ignore": ["custom-properties"]
    }],
    "keyframes-name-pattern": "vkui-.+",
    "csstools/value-no-unknown-custom-properties": [true, {
      "importFrom": cssPropSources
    }]
  }
};
