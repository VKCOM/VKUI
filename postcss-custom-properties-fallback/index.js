/* stylelint-disable */
const fs = require("fs");
const valueParser = require("postcss-value-parser");
const { nodeToString, parse: parseValues } = require("postcss-values-parser");
const { parse } = require("postcss");

const isTransformableDecl = (decl) =>
  /(^|[^\w-])var\([\W\w]+\)/.test(decl.value);

function parseCustomProperties(importFrom) {
  const customProperties = new Map();

  parse(fs.readFileSync(importFrom, "utf8")).walkRules((rule) => {
    if (rule.selector === ":root") {
      rule.walkDecls((decl) => {
        if (decl.prop.startsWith("--")) {
          customProperties.set(
            decl.prop,
            parseValues(String(decl.value)).nodes
          );
        }
      });
    }
  });

  return customProperties;
}

module.exports = (opts) => {
  return {
    postcssPlugin: "custom-properties-fallback",
    prepare() {
      const customProperties = parseCustomProperties(opts.importFrom);
      const shouldTransformableDecl =
        opts.shouldTransformableDecl || isTransformableDecl;

      return {
        Declaration(node) {
          if (shouldTransformableDecl(node)) {
            const parsed = valueParser(node.value);

            parsed.walk((node) => {
              if (node.type !== "function" || node.nodes.length !== 1) {
                return;
              }

              const firstValue = node.nodes[0].value;

              if (
                !customProperties.has(firstValue) ||
                customProperties.get(firstValue).length === 0
              ) {
                return;
              }

              const fallback = customProperties.get(firstValue);

              node.nodes.push(
                {
                  type: "divider",
                  value: ",",
                },
                {
                  type: "word",
                  value:
                    fallback.length > 1
                      ? fallback
                          .map((fallbackNode) => nodeToString(fallbackNode))
                          .join(" ")
                      : fallback,
                }
              );
            });

            node.value = parsed.toString();
          }
        },
      };
    },
  };
};

module.exports.postcss = true;
