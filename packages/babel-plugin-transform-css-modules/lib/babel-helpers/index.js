/**
 * Creates an AST representation of an InputObjectType shape object.
 *
 * @param {import('@babel/core').types} t
 * @param {Object} object
 * @return {import('@babel/types').ObjectExpression}
 */
const createObjectExpression = (t, object) => {
  const properties = [];

  for (const name in object) {
    if (!object.hasOwnProperty(name)) {
      continue;
    }

    const value = object[name];

    let newValue;

    if (t.isAnyTypeAnnotation(value)) {
      void 0;
    } else if (typeof value === 'string') {
      newValue = t.stringLiteral(value);
    } else if (typeof value === 'object') {
      newValue = createObjectExpression(t, value);
    } else if (typeof value === 'boolean') {
      newValue = t.booleanLiteral(value);
    } else if (typeof value === 'undefined') {
      // eslint-disable-next-line no-continue
      continue;
    } else {
      throw new TypeError(`Unexpected type: ${typeof value}`);
    }

    properties.push(t.objectProperty(t.stringLiteral(name), newValue));
  }

  return t.objectExpression(properties);
};

/**
 * Creates an AST representation of a variable declaration.
 *
 * @param {import('@babel/core').types} t
 * @param {import('@babel/types').VariableDeclaration.kind} kind
 * @param {string} identifierName
 * @param {import('@babel/types').Expression | null} init
 * @return {import('@babel/types').VariableDeclaration}
 */
const createVariable = (t, kind, identifierName, init) => {
  return t.variableDeclaration(kind, [t.variableDeclarator(t.identifier(identifierName), init)]);
};

/**
 * @param {import('@babel/core').types} t
 * @param {import('@babel/types').Expression} property
 * @return string | "COMPLEX_LITERAL_TEMPLATE" | "NOT_FOUND"
 */
function resolveMemberExpressionPropertyName(t, property) {
  if (t.isIdentifier(property)) {
    return property.name;
  }
  if (t.isStringLiteral(property)) {
    return property.value;
  }
  if (t.isTemplateLiteral(property)) {
    if (property.expressions.length === 0) {
      return property.quasis[0].value.cooked;
    }
    return 'COMPLEX_LITERAL_TEMPLATE';
  }
  return 'NOT_FOUND';
}

module.exports = {
  createVariable,
  createObjectExpression,
  resolveMemberExpressionPropertyName,
};
