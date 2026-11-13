const postcss = require('postcss');

const TRIM_PROPERTIES = {
  block: ['margin-block-start', 'margin-block-end'],
  'block-start': ['margin-block-start'],
  'block-end': ['margin-block-end'],
  'block-start block-end': ['margin-block-start', 'margin-block-end'],
  'block-end block-start': ['margin-block-start', 'margin-block-end'],
  inline: ['margin-inline-start', 'margin-inline-end'],
  'inline-start': ['margin-inline-start'],
  'inline-end': ['margin-inline-end'],
  'inline-start inline-end': ['margin-inline-start', 'margin-inline-end'],
  'inline-end inline-start': ['margin-inline-start', 'margin-inline-end'],
  none: [],
  initial: [],
  unset: [],
};

/**
 * Статически обнуляет отступы первого/последнего прямого потомка.
 * Это приближение margin-trim для block/inline-осей: оно не учитывает порядок flex/grid,
 * скрытых потомков и переопределение margin-trim между разными правилами.
 *
 * @type {import('postcss').PluginCreator<void>}
 */
const marginTrim = () => ({
  postcssPlugin: 'postcss-margin-trim',
  Rule(rule) {
    const declarations = rule.nodes?.filter(
      (node) => node.type === 'decl' && node.prop.toLowerCase() === 'margin-trim',
    );
    if (!declarations?.length) {
      return;
    }

    let winner;
    let properties;

    declarations.forEach((declaration) => {
      const value = postcss.list.space(declaration.value.toLowerCase()).join(' ');
      if (!Object.hasOwn(TRIM_PROPERTIES, value)) {
        return;
      }

      if (!winner || declaration.important || !winner.important) {
        winner = declaration;
        properties = TRIM_PROPERTIES[value];
      }
      declaration.remove();
    });

    if (!winner || !properties.length) {
      return;
    }

    const selectors = postcss.list.comma(rule.selector);
    const generatedRules = properties.map((property) => {
      const edge = property.endsWith('-start') ? ':first-child' : ':last-child';
      return postcss.rule({
        selector: selectors.map((selector) => `${selector} > ${edge}`).join(', '),
        source: winner.source,
        nodes: [
          postcss.decl({
            prop: property,
            value: '0',
            important: winner.important,
            source: winner.source,
          }),
        ],
      });
    });

    rule.after(generatedRules);
  },
});

marginTrim.postcss = true;

module.exports = marginTrim;
