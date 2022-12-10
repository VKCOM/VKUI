const postcss = require('postcss');

function setEquals(a, b) {
  return a.size === b.size && [...a].every((value) => b.has(value));
}
class Value {
  constructor(prop, value) {
    this.prop = prop;
    this.value = value;
    this.selectors = new Set();
  }
  addSelector(selector) {
    this.selectors.add(selector.toString());
  }
  removeSelector(selector) {
    return this.selectors.delete(selector.toString());
  }
  getSelectors() {
    return this.selectors;
  }
  getProp() {
    return this.prop;
  }
  toString() {
    return this.value;
  }
}

class Prop {
  constructor(name) {
    this.name = name;
    this.values = new Map();
  }
  addValue(value) {
    this.values.set(value.toString(), value);
  }
  getValue(value) {
    return this.values.get(value);
  }
  toString() {
    return this.name;
  }
}

class Selector {
  constructor(name) {
    this.name = name;
    this.props = new Map();
  }
  addProp(prop, value) {
    const oldValue = this.props.get(prop);
    if (oldValue) {
      oldValue.removeSelector(this);
    }
    this.props.set(prop, value);
  }
  compare(b) {
    if (this.name > b.name) {
      return 1;
    }
    if (this.name < b.name) {
      return -1;
    }
    return 0;
  }
  toString() {
    return this.name;
  }
}

class Graph {
  constructor() {
    this.selectors = new Map();
    this.props = new Map();
    this.values = new Set();
  }
  addEdge(selector, prop, value) {
    value.addSelector(selector);
    prop.addValue(value);
    selector.addProp(prop, value);
  }
  add(selectors, prop, value) {
    selectors.forEach((selector) => {
      let _selector = this.selectors.get(selector);
      if (!_selector) {
        _selector = new Selector(selector);
        this.selectors.set(selector, _selector);
      }
      let _prop = this.props.get(prop);
      if (!_prop) {
        _prop = new Prop(prop);
        this.props.set(prop, _prop);
      }
      let _value = _prop.getValue(value);
      if (!_value) {
        _value = new Value(prop, value);
        this.values.add(_value);
      }
      this.addEdge(_selector, _prop, _value);
    });
  }
  restructure() {
    const rules = [];
    this.values.forEach((value) => {
      const selectors = value.getSelectors();
      if (selectors.size === 0) {
        return;
      }
      const some = rules.some((rule) => {
        if (setEquals(selectors, rule.selectors)) {
          rule.decls.set(value.getProp(), value.toString());
          return true;
        }
        return false;
      });
      if (!some) {
        rules.push({
          selectors: selectors,
          decls: new Map([[value.getProp(), value.toString()]]),
        });
      }
    });
    return rules;
  }
}

/**
 * @type {import('postcss').PluginCreator}
 * @param {string[]} onlySelectors
 */
module.exports = (importFrom = []) => {
  return {
    postcssPlugin: 'postcss-restructure-variable',
    Root(root) {
      /**
       * @type {string[]}
       */
      const ignoreValue = [];

      const graph = new Graph();

      /**
       *
       * @param {import('postcss').AtRule} node
       */
      const atRuleFind = (node) => {
        node.each((atRuleNode) => {
          switch (atRuleNode.type) {
            case 'rule':
              atRuleNode.each((decl) => {
                if (decl.type === 'decl' && decl.variable) {
                  ignoreValue.push(decl.prop);
                }
              });
              break;
            case 'atrule':
              atRuleFind(atRuleNode);
              break;
          }
        });
      };

      root.each((node) => {
        if (
          !node.source ||
          (node.source !== undefined && !importFrom.includes(node.source.input.file))
        ) {
          return;
        }

        switch (node.type) {
          case 'rule':
            const beforeLength = node.nodes.length;

            node.each((decl) => {
              if (decl.type === 'decl' && decl.variable) {
                if (ignoreValue.includes(decl.prop)) {
                  return;
                }
                graph.add(node.selectors, decl.prop, decl.value);
                decl.remove();
              }
            });

            // Удаляем если селектор оказался пустой, после наших действий
            if (node.nodes.length === 0 && node.nodes.length !== beforeLength) {
              node.remove();
            }
            break;
          case 'atrule':
            atRuleFind(node);
            break;
        }
      });

      const source = root.source;
      if (source.end === undefined) {
        source.end = source.start;
      }

      const rules = graph.restructure();

      let lastRule = undefined;

      rules.forEach(({ decls, selectors }) => {
        const rule = postcss.rule({
          selectors: Array.from(selectors),
          source: source,
        });

        decls.forEach((value, prop) => {
          rule.append({ prop, value, source });
        });

        if (lastRule) {
          root.insertAfter(lastRule, rule);
        } else {
          // Вставляем первым
          if (root.first) {
            root.insertBefore(root.first, rule);
          } else {
            root.append(rule);
          }
        }

        lastRule = rule;
      });
    },
  };
};

module.exports.postcss = true;
