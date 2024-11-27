import { JSXSpreadAttribute } from 'jscodeshift';
import type {
  API,
  Collection,
  FileInfo,
  JSCodeshift,
  JSXAttribute,
  JSXIdentifier,
} from 'jscodeshift';
import { report } from './report';

export function getImportInfo(
  j: JSCodeshift,
  file: FileInfo,
  componentName: string,
  alias: string,
): { localName: string | null } {
  const source = j(file.source);

  let localImportName = null;

  source
    .find(j.ImportDeclaration, { source: { value: alias } })
    .find(j.ImportSpecifier, { imported: { name: componentName } })
    .forEach((path) => {
      if (path.node.local) {
        localImportName = path.node.local.name;
      }
    });

  return { localName: localImportName };
}

export function renameImportName(
  j: JSCodeshift,
  source: Collection,
  componentName: string,
  newName: string,
  alias: string,
  renameOnlyImportedName: boolean,
) {
  source
    .find(j.ImportDeclaration, { source: { value: alias } })
    .find(j.ImportSpecifier, { local: { name: componentName } })
    .forEach((path) => {
      const newSpecifier = j.importSpecifier(
        j.identifier(newName),
        renameOnlyImportedName ? j.identifier(componentName) : j.identifier(newName),
      );
      (newSpecifier as any).importKind = (path.value as any).importKind;
      j(path).replaceWith(newSpecifier);
    });
}

export function renameIdentifier(
  j: JSCodeshift,
  source: Collection,
  oldName: string,
  newName: string,
) {
  source.find(j.Identifier, { name: oldName }).forEach((path) => {
    j(path).replaceWith(j.identifier(newName));
  });
}

export function renameTypeIdentifier(
  j: JSCodeshift,
  source: Collection,
  oldName: string,
  newName: string,
) {
  source
    .find(j.TSTypeReference, { typeName: { type: 'Identifier', name: oldName } })
    .forEach((path) => {
      if (path.node.typeName.type === 'Identifier') {
        path.node.typeName.name = newName;
      }
    });
}

export function renameProp(
  j: JSCodeshift,
  source: Collection,
  componentName: string,
  renameMap: { [x: string]: string },
) {
  const from = Object.keys(renameMap);
  return source
    .find(j.JSXOpeningElement)
    .filter(
      (path) => path.value.name.type === 'JSXIdentifier' && path.value.name.name === componentName,
    )
    .find(j.JSXAttribute)
    .filter((attribute) => {
      const attributeName = attribute.node.name.name;
      return typeof attributeName === 'string' ? from.includes(attributeName) : false;
    })
    .forEach((attribute) => {
      j(attribute).replaceWith(
        j.jsxAttribute(
          j.jsxIdentifier(renameMap[attribute.node.name.name as string]),
          attribute.node.value,
        ),
      );
    });
}

export function renameSubComponent(
  j: JSCodeshift,
  source: Collection,
  componentName: string,
  prevSubcomponentName: string,
  newSubcomponentName: string,
) {
  source
    .find(j.MemberExpression, {
      object: { name: componentName },
      property: { name: prevSubcomponentName },
    })
    .replaceWith(
      j.memberExpression(j.identifier(componentName), j.identifier(newSubcomponentName)),
    );
}

export function swapBooleanValue(
  api: API,
  source: Collection,
  componentName: string,
  previousPropName: string,
  currentPropName: string,
) {
  const j = api.jscodeshift;
  source
    .find(
      j.JSXOpeningElement,
      (element) => element.name.type === 'JSXIdentifier' && element.name.name === componentName,
    )
    .find(j.JSXAttribute, (attribute) => attribute.name.name === previousPropName)
    .forEach((attribute) => {
      const node = attribute.node;

      if (!node.value) {
        j(attribute).remove();
      } else if (
        node.value.type === 'JSXExpressionContainer' &&
        node.value.expression.type === 'BooleanLiteral'
      ) {
        if (node.value.expression.value) {
          j(attribute).remove();
        } else {
          j(attribute).replaceWith(j.jsxAttribute(j.jsxIdentifier(currentPropName)));
        }
      } else {
        report(api, `Manual changes required for ${componentName}'s ${previousPropName} prop.`);
      }
    });
}

export const removeProps = (
  j: JSCodeshift,
  api: API,
  source: Collection,
  componentName: string,
  propsNames: string[],
  createReportMessage: () => string = () => '',
) => {
  let needToShowReport = false;
  source
    .find(j.JSXElement, {
      openingElement: {
        name: {
          name: componentName,
        },
      },
    })
    .forEach((path) => {
      const attributes = path.node.openingElement.attributes;
      const newAttributes = attributes?.filter((attr) => {
        if (attr.type === 'JSXAttribute') {
          const attrName = attr.name ? attr.name.name : null;
          if (typeof attrName === 'string') {
            return !propsNames.includes(attrName);
          }
        }
        if (attr.type === 'JSXSpreadAttribute') {
          needToShowReport = true;
        }
        return false;
      });
      path.node.openingElement.attributes = newAttributes;
    });

  if (needToShowReport) {
    report(
      api,
      `: ${componentName} has been changed. Manual changes required: ${createReportMessage()}`,
    );
  }
};

export const removeAttribute = (
  attributes: Array<JSXAttribute | JSXSpreadAttribute> | undefined,
  attribute: JSXAttribute,
) => {
  attributes?.splice(attributes?.indexOf(attribute), 1);
};

/**
 * @description Функция достает из атрибута строковое значение. Если вернулся null, значит значение не строковое
 */
export const getStringValueFromAttribute = (attribute: JSXAttribute): string | null => {
  if (attribute.value?.type === 'StringLiteral') {
    return attribute.value.value;
  }
  if (attribute.value?.type === 'JSXExpressionContainer') {
    const expression = attribute.value.expression;
    if (expression.type === 'StringLiteral') {
      return expression.value;
    }
  }
  return null;
};

interface AttributeManipulatorAPI {
  keyTo?: string | ((k?: string) => string);
  reportText?: string | (() => string);
  valueTo?(v: JSXAttribute['value'], api: API): JSXAttribute['value'];
  action?: 'rename' | 'remove';
}

export type AttributeManipulator = Record<string, AttributeManipulatorAPI>;

export const createAttributeManipulator = (
  props: Record<string, AttributeManipulatorAPI>,
  api: API,
) => {
  const map = new Map<string, AttributeManipulatorAPI>(Object.entries(props));

  return {
    has(attributeKey: string | JSXIdentifier) {
      return typeof attributeKey === 'string' ? map.has(attributeKey) : false;
    },
    getReplacers(attributeKeyProp: string | JSXIdentifier) {
      const attributeKey = typeof attributeKeyProp === 'string' ? attributeKeyProp : '';
      const found = map.get(attributeKey);

      if (found && found.reportText) {
        const text = typeof found.reportText === 'function' ? found.reportText() : found.reportText;

        report(api, text);
      }

      return {
        action: found && found.action,
        keyTo() {
          if (!found || !found.keyTo) {
            return attributeKey;
          }
          if (typeof found.keyTo === 'string') {
            return found.keyTo;
          }
          return found.keyTo(attributeKey);
        },
        valueTo(attributeKeyValue: JSXAttribute['value']) {
          if (!found || !found.valueTo) {
            return attributeKeyValue;
          }
          if (typeof found.valueTo === 'string') {
            return found.valueTo;
          }
          return found.valueTo(attributeKeyValue, api);
        },
      };
    },
  };
};
