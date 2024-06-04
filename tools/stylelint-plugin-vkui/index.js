import stylelint from 'stylelint';
import rules from './rules/index.js';

const rulesPlugins = rules.map((rule) => stylelint.createPlugin(rule.ruleName, rule));

export default rulesPlugins;
