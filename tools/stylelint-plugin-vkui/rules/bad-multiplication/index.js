import valueParser from 'postcss-value-parser';
import stylelint from 'stylelint';

const MATCH_CALC = /((?:-(moz|webkit)-)?calc)/i;

export const ruleName = 'vkui-internal/bad-multiplication';
const messages = stylelint.utils.ruleMessages(ruleName, {});
const meta = {
  url: 'https://github.com/VKCOM/VKUI/pull/2741',
};

const searchBadMultiplication = (node) => {
  let lastWord = '';

  return node.nodes.some((nodeValue) => {
    if (nodeValue.type === 'function') {
      if (searchBadMultiplication(nodeValue)) {
        return true;
      }
    }

    if (nodeValue.type === 'word') {
      if (lastWord.endsWith('*') && nodeValue.value.startsWith('-')) {
        return true;
      }
    }

    if (nodeValue.type !== 'space') {
      lastWord = nodeValue.value;
    }
  });
};

const ruleFunction = function () {
  /**
   * @param {import('postcss').Root} root
   */
  function stylelintRule(root, result) {
    root.walkRules((node) => {
      node.each((childNode) => {
        if (childNode.type === 'decl') {
          valueParser(childNode.value).walk((valueNode) => {
            if (valueNode.type !== 'function' || !MATCH_CALC.test(valueNode.value)) {
              return;
            }

            if (searchBadMultiplication(valueNode)) {
              stylelint.utils.report({
                ruleName,
                node: childNode,
                result,
                message: `Bad multiplication, swap operands`,
              });
            }
          });
        }
      });
    });
  }

  return stylelintRule;
};

ruleFunction.ruleName = ruleName;
ruleFunction.messages = messages;
ruleFunction.meta = meta;

export default ruleFunction;
