import type {
  API,
  Collection,
  FileInfo,
  JSCodeshift,
  JSXAttribute,
  JSXIdentifier,
} from 'jscodeshift';

export function getImportInfo(
  j: JSCodeshift,
  file: FileInfo,
  componentName: string,
  alias: string,
) {
  const source = j(file.source);

  let localImportName = componentName;

  const componentImport = source
    .find(j.ImportDeclaration)
    .filter((path) => path.node.source.value === alias)
    .find(j.ImportSpecifier, { imported: { name: componentName } });

  componentImport.forEach((path) => {
    if (path.node.local && path.node.local.name !== path.node.imported.name) {
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

interface AttributeManipulatorAPICommon {
  reportText?: string | (() => string);
}

type AttributeManipulatorAPICondition =
  | {
      keyTo: string | ((k?: string) => string);
      valueTo?(v: JSXAttribute['value'], api: API): JSXAttribute['value'];
      action?: 'rename';
    }
  | {
      action: 'remove';
    };

type AttributeManipulatorAPI = AttributeManipulatorAPICommon & AttributeManipulatorAPICondition;

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
        try {
          api.report(text);
        } catch {
          console.warn(text);
        }
      }

      if (found?.action === 'remove') {
        return { action: found.action };
      } else {
        return {
          action: found && found.action,
          keyTo() {
            if (!found) {
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
      }
    },
  };
};
