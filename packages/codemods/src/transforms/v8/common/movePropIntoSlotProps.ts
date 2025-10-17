import {
  ASTPath,
  Collection,
  JSCodeshift,
  JSXAttribute,
  JSXElement,
  JSXExpressionContainer,
  ObjectExpression,
} from 'jscodeshift';

type AssignObjectOptions = {
  target: JSXAttribute;
  expression: ObjectExpression;
  key: string;
};

function assignObject(j: JSCodeshift, options: AssignObjectOptions) {
  const { target, expression, key } = options;
  if (target && target.type === 'JSXAttribute') {
    const expContainer = target.value as JSXExpressionContainer;

    if (expContainer.expression.type === 'ObjectExpression') {
      // case `<prop>={{ ... }}`
      expContainer.expression.properties.push(j.objectProperty(j.identifier(key), expression));
    } else if (expContainer.expression.type === 'Identifier') {
      // case `<prop>={outerVariable}
      expContainer.expression = j.objectExpression([
        j.spreadElement(j.identifier(expContainer.expression.name)),
        j.objectProperty(j.identifier(key), expression),
      ]);
    }
  }
}

type AppendAttributeOptions = {
  target: JSXElement;
  expression: ObjectExpression;
  attributeName: string;
};

function appendAttribute(j: JSCodeshift, options: AppendAttributeOptions) {
  const { target, attributeName, expression } = options;

  target.openingElement.attributes?.push(
    j.jsxAttribute(j.jsxIdentifier(attributeName), j.jsxExpressionContainer(expression)),
  );
}

function findComponentJSX(
  j: JSCodeshift,
  root: Collection,
  componentName: string,
  callback: (path: ASTPath<JSXElement>) => void,
): void {
  const [component, subcomponent] = componentName.split('.');

  if (subcomponent) {
    root
      .find(j.JSXElement, {
        openingElement: {
          name: {
            type: 'JSXMemberExpression',
            object: { name: component },
            property: { name: subcomponent },
          },
        },
      })
      .forEach(callback);
  } else {
    root.find(j.JSXElement, { openingElement: { name: { name: component } } }).forEach(callback);
  }
}

function moveJsxPropIntoSlotProps(
  j: JSCodeshift,
  element: JSXElement,
  propName: string,
  slotName: string,
  slotPropName: string | undefined,
) {
  const attributes = element.openingElement.attributes;

  const propIndex = attributes?.findIndex(
    (attr) => attr.type === 'JSXAttribute' && attr.name.name === propName,
  );

  if (!attributes || propIndex === -1 || propIndex === undefined) {
    return;
  }

  const removedAttr = attributes?.splice(propIndex, 1)[0];

  if (removedAttr?.type !== 'JSXAttribute') {
    return;
  }

  const removedValue: any =
    removedAttr.value?.type === 'StringLiteral'
      ? j.literal(removedAttr.value.value)
      : removedAttr.value?.type === 'JSXExpressionContainer'
        ? removedAttr.value?.expression
        : undefined;

  if (removedValue === undefined) {
    return;
  }

  const getSlotPropNameLiteral = (name: string) =>
    name.includes('-') ? j.stringLiteral(name) : j.identifier(name);

  let hasSlotProps = false;
  attributes.forEach((attr) => {
    if (
      attr.type === 'JSXAttribute' &&
      attr.name?.name === 'slotProps' &&
      attr.value?.type === 'JSXExpressionContainer' &&
      attr.value?.expression.type === 'ObjectExpression'
    ) {
      hasSlotProps = true;
      const slots = attr.value?.expression;
      const slotIndex = slots.properties.findIndex(
        (prop) =>
          prop.type === 'ObjectProperty' &&
          prop?.key?.type === 'Identifier' &&
          prop?.key?.name === slotName,
      );

      if (slotIndex === -1) {
        // Создаем новый слот
        const slotValue = slotPropName
          ? j.objectExpression([
              j.objectProperty(getSlotPropNameLiteral(slotPropName), removedValue),
            ])
          : removedValue;

        assignObject(j, {
          target: attr,
          key: slotName,
          expression: slotValue,
        });
      } else if (slots.properties[slotIndex].type === 'ObjectProperty') {
        const property = slots.properties[slotIndex];
        // Добавляем свойство в существующий слот
        const existingSlot = property.value;
        if (slotPropName) {
          if (existingSlot.type === 'ObjectExpression') {
            existingSlot.properties.push(
              j.objectProperty(getSlotPropNameLiteral(slotPropName), removedValue),
            );
          } else {
            property.value = j.objectExpression([
              j.objectProperty(getSlotPropNameLiteral(slotPropName)!, removedValue),
            ]);
          }
        } else {
          property.value = j.objectExpression([
            j.spreadElement(removedValue),
            j.spreadElement(existingSlot as any),
          ]);
        }
      }
    }
  });

  if (!hasSlotProps) {
    // Создаем slotsProps
    const slotValue = slotPropName
      ? j.objectExpression([j.objectProperty(getSlotPropNameLiteral(slotPropName), removedValue)])
      : removedValue;

    appendAttribute(j, {
      target: element,
      attributeName: 'slotProps',
      expression: j.objectExpression([j.objectProperty(j.identifier(slotName), slotValue)]),
    });
  }
}

function moveJsxPropsIntoSlotPropsByRegExp(
  j: JSCodeshift,
  element: JSXElement,
  propName: RegExp,
  slotName: string,
  excludedProps?: string[],
) {
  const attributes = element.openingElement.attributes;
  if (!attributes) {
    return;
  }
  [...attributes]
    .reverse()
    .forEach(
      (attr) =>
        attr.type === 'JSXAttribute' &&
        typeof attr.name.name === 'string' &&
        propName.test(attr.name.name) &&
        !excludedProps?.includes(attr.name.name) &&
        moveJsxPropIntoSlotProps(j, element, attr.name.name, slotName, attr.name.name),
    );
}

function moveJsxPropIntoSlotPropsByName(
  j: JSCodeshift,
  element: JSXElement,
  propName: string,
  slotName: string,
  slotPropName: string | undefined,
) {
  moveJsxPropIntoSlotProps(j, element, propName, slotName, slotPropName);
}

type MovePropsOptions = {
  root: Collection;
  componentName: string;
  propName: string | RegExp;
  slotName: string;
  excludedProps?: string[];
  slotPropName?: string;
};

export function movePropIntoSlotProps(j: JSCodeshift, options: MovePropsOptions) {
  const { propName, slotName, slotPropName, root, componentName, excludedProps } = options;

  findComponentJSX(j, root, componentName, (elementPath) => {
    if (typeof propName === 'string') {
      moveJsxPropIntoSlotPropsByName(j, elementPath.node, propName, slotName, slotPropName);
    } else {
      moveJsxPropsIntoSlotPropsByRegExp(j, elementPath.node, propName, slotName, excludedProps);
    }
  });
}
