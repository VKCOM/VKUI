const types = require('@babel/types');

const transformable = /\b(?=[A-Z])/g;

/**
 * @param {string} str 
 * @returns {string}
 */
const transformString = (str) => {
  return str.replace(transformable, 'vkui');
};

/**
 * @param {types.ObjectExpression['properties'][0] | undefined} node 
 * @param {import('@babel/core').NodePath} path 
 */
const transformObjectProperty = (node, path) => {
  if (node) {
    switch (node.type) {
      case 'ObjectProperty':
        transformExpression(node.key, path);
        transformExpression(node.value, path);
        break;
      case 'SpreadElement':
        transformExpression(node.key, path);
        transformExpression(node.argument, path);
        break;
    }
  }
};

/**
 * @param {types.TemplateElement} template 
 * @param {import('@babel/core').NodePath} path 
 */
const transformTemplateElement = (template, path) => {
  if (template && template.value) {
    if (template.value.cooked) {
      template.value.cooked = transformString(template.value.cooked);
    }
    if (template.value.raw) {
      template.value.raw = transformString(template.value.raw);
    }
  }
};

/**
 * @param {types.Identifier} ident 
 * @param {import('@babel/core').NodePath} path 
 * @returns {import('@babel/traverse').Binding | null}
 */
const findIdentifier = (ident, path) => {
  const bind = path.find((parent) => {
    return ident.name in parent.scope.bindings;
  });
  if (bind) {
    return bind.scope.bindings[ident.name];
  }
  return null;
};

/**
 * @param {types.Identifier} ident
 * @param {import('@babel/core').NodePath} path 
 */
const transformIdentifier = (ident, path) => {
  const declaration = findIdentifier(ident, path);
  if (declaration) {
    transformExpression(declaration.path.node.init, path);
  }
};

/**
 * @param {types.Expression | types.JSXEmptyExpression | undefined} expr
 * @param {import('@babel/core').NodePath} path 
 */
const transformExpression = (expr, path) => {
  if (expr) {
    switch (expr.type) {
      case 'StringLiteral':
        expr.value = transformString(expr.value);
        break;
      case 'ArrayExpression':
        expr.elements.forEach((elem) => {
          transformExpression(elem, path);
        });
        break;
      case 'ObjectExpression':
        expr.properties.forEach((prop) => {
          transformObjectProperty(prop, path);
        });
        break;
      case 'CallExpression':
        expr.arguments.forEach((arg) => {
          transformExpression(arg, path);
        });
        break;
      case 'TemplateLiteral':
        expr.expressions.forEach((expr) => {
          transformExpression(expr, path);
        });
        expr.quasis.forEach((template) => {
          transformTemplateElement(template, path);
        });
        break;
      case 'SpreadElement':
        transformObjectProperty(expr, path);
        break;
      case 'Identifier':
        transformIdentifier(expr, path);
        break;
    }
  }
};

/**
 * @param {types.JSXAttribute | undefined} attr 
 * @param {import('@babel/core').NodePath} path 
 */
const transformAttribute = (attr, path) => {
  if (attr && attr.value) {
    if (attr.value.type === 'StringLiteral') {
      attr.value.value = transformString(attr.value.value);
    }

    if (attr.value.type === 'JSXExpressionContainer') {
      transformExpression(attr.value.expression, path);
    }
  }
};

/**
 * @param {types.JSXAttribute | undefined} attr 
 * @returns {types.Expression | undefined}
 */
const getExpression = (attr) => {
  if (attr) {
    if (attr.value) {
      switch (attr.value.type) {
        case 'JSXElement':
        case 'JSXFragment':
          return undefined;
        case 'StringLiteral':
          return attr.value;
        case 'JSXExpressionContainer':
          return attr.value.expression;
      }
    }
  }
  return undefined;
};

/**
 * @param {types.JSXAttribute | types.JSXSpreadAttribute | undefined} attr 
 * @param {string} name
 */
const renameAttribute = (attr, name) => {
  if (attr) {
    if (attr.type === 'JSXAttribute') {
      if (attr.name.type === 'JSXIdentifier') {
        attr.name.name = name;
      }

      if (attr.name.type === 'JSXNamespacedName') {
        if (attr.name.name.type === 'JSXIdentifier') {
          attr.name.name.name = name
        }
      }
    }
  }
};

/**
 * @param {types.JSXAttribute | types.JSXSpreadAttribute | undefined} attr 
 * @param {string} name 
 * @returns {boolean}
 */
const isAttribute = (attr, name) => {
  if (!attr) {
    return false;
  }

  if (attr.type === 'JSXAttribute') {
    if (
      attr.name.type === 'JSXIdentifier' &&
      attr.name.name === name
    ) {
      return true;
    }

    if (attr.name.type === 'JSXNamespacedName') {
      if (
        attr.name.name.type === 'JSXIdentifier' &&
        attr.name.name.name === name
      ) {
        return true;
      }
    }
  }

  return false;
};

/**
 * @param {Array<types.JSXAttribute | types.JSXSpreadAttribute | undefined>} attributes 
 * @param {string} name 
 * @returns {types.JSXAttribute | undefined}
 */
const findAttribute = (attributes, name) => {
  return attributes.find((attr) => {
    return isAttribute(attr, name);
  });
};

/**
 * @param {Array<types.JSXAttribute | types.JSXSpreadAttribute | undefined>} attributes 
 * @param {string} name 
 * @returns {Array<types.JSXAttribute | types.JSXSpreadAttribute | undefined>}
 */
const filterAttribute = (attributes, name) => {
  return attributes.filter((attr) => {
    return !isAttribute(attr, name);
  });
};

module.exports = {
  transformString,
  transformObjectProperty,
  transformTemplateElement,
  transformExpression,
  transformAttribute,
  getExpression,
  renameAttribute,
  isAttribute,
  findAttribute,
  filterAttribute
};
