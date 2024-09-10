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

export const renameComponent = ({
  j,
  source,
  componentName,
  localComponentName,
  newComponentName,
  alias,
}: {
  j: JSCodeshift;
  source: Collection;
  componentName: string;
  localComponentName: string;
  newComponentName: string;
  alias: string;
}) => {
  source
    .find(j.ImportDeclaration, { source: { value: alias } })
    .find(j.ImportSpecifier, { imported: { name: componentName } })
    .forEach(({ value: specifier }) => {
      if (specifier.type === 'ImportSpecifier' && specifier.imported.name === componentName) {
        specifier.imported.name = newComponentName;
      }
    });

  if (componentName === localComponentName) {
    source.findJSXElements().forEach((path) => {
      if (
        path.node.openingElement.name.type === 'JSXIdentifier' &&
        path.node.openingElement.name.name === localComponentName
      ) {
        path.node.openingElement.name.name = newComponentName;
      }
      if (
        path.node.closingElement?.name.type === 'JSXIdentifier' &&
        path.node.closingElement.name.name === localComponentName
      ) {
        path.node.closingElement.name.name = newComponentName;
      }
    });
  }
};

export const renameType = ({
  j,
  source,
  typeName,
  localTypeName,
  newTypeName,
  alias,
}: {
  j: JSCodeshift;
  source: Collection;
  typeName: string;
  localTypeName: string;
  newTypeName: string;
  alias: string;
}) => {
  source
    .find(j.ImportDeclaration, { source: { value: alias } })
    .find(j.ImportSpecifier, { imported: { name: typeName } })
    .forEach(({ value: specifier }) => {
      if (specifier.type === 'ImportSpecifier' && specifier.imported.name === typeName) {
        specifier.imported.name = newTypeName;
      }
    });

  if (localTypeName === typeName) {
    source.find(j.TSTypeReference).forEach((path) => {
      if (path.node.typeName.type === 'Identifier' && path.node.typeName.name === typeName) {
        path.node.typeName.name = newTypeName;
      }
    });
  }
};
