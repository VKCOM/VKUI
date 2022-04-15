const path = require("path");
const { cssPropSources } = require("./postcss.config");

module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  plugins: [
    "stylelint-value-no-unknown-custom-properties",
    "./tasks/styleint-atomic",
  ],
  rules: {
    indentation: null,
    "block-no-empty": null,
    "declaration-block-no-redundant-longhand-properties": null,
    "comment-empty-line-before": null,
    "comment-whitespace-inside": null,
    "no-descending-specificity": null,
    "no-duplicate-selectors": null,
    "value-keyword-case": null,
    "length-zero-no-unit": [
      true,
      {
        ignore: ["custom-properties"],
      },
    ],
    "keyframes-name-pattern": "vkui-.+",
    "csstools/value-no-unknown-custom-properties": [
      true,
      {
        importFrom: [
          ...cssPropSources,
          path.join(
            __dirname,
            "node_modules/@vkontakte/vkui-tokens/themes/vkBase/cssVars/declarations/index.css"
          ),
        ],
      },
    ],
    // Skip reporting in pprecommit run, highlight in editor
    "vkui/atomic": [
      process.env.LINT_PRECOMMIT_RUN ? null : true,
      {
        severity: "warning",
      },
    ],
  },
};
