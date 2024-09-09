import type { API, ASTPath, FileInfo, JSXAttribute, StringLiteral } from 'jscodeshift';
import {
  type AttributeManipulator,
  createAttributeManipulator,
  getImportInfo,
  swapBooleanValue,
} from '../../codemod-helpers';
import type { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

const componentName = 'Tooltip';
const componentNameTo = 'OnboardingTooltip';

const ATTRIBUTE_REPLACER: AttributeManipulator = {
  isShown: {
    keyTo: 'shown',
  },
  offsetY: {
    keyTo: 'offsetByMainAxis',
  },
  offsetX: {
    keyTo: 'offsetByCrossAxis',
  },
};

const CORNER_OFFSET = { from: 'cornerOffset', to: 'arrowOffset' };
const CORNER_ABSOLUTE_OFFSET = { from: 'cornerAbsoluteOffset', to: 'isStaticArrowOffset' };

const PLACEMENT = 'placement';
const ALIGN_X = { from: 'alignX', to: PLACEMENT };
const ALIGN_Y = { from: 'alignY', to: PLACEMENT };

const isStringLiteral = (v?: JSXAttribute['value']): v is StringLiteral =>
  v ? v.type === 'StringLiteral' : false;

function mapAlignX(x: string) {
  switch (x) {
    case 'left':
      return 'start';
    case 'right':
      return 'end';
    default:
      return '';
  }
}

const replaceAttribute = (
  j: API['jscodeshift'],
  attributeReplacer: ReturnType<typeof createAttributeManipulator>,
  attribute: ASTPath<JSXAttribute>,
) => {
  const foundFix = attributeReplacer.getReplacers(attribute.node.name.name);
  if (foundFix) {
    const value = attribute.node.value;
    j(attribute).replaceWith(
      j.jsxAttribute(j.jsxIdentifier(foundFix.keyTo()), foundFix.valueTo(value)),
    );
  }
};

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, componentName, alias);
  const attributeReplacer = createAttributeManipulator(ATTRIBUTE_REPLACER, api);
  let needRename = true;

  if (!localName) {
    return source.toSource();
  }

  swapBooleanValue(api, source, localName, 'arrow', 'disableArrow');

  // подменяем импорт
  source
    .find(j.ImportDeclaration)
    .filter((path) => path.node.source.value === alias)
    .find(j.ImportSpecifier, { imported: { name: componentName } })
    .forEach((path) => {
      j(path).replaceWith((path) => {
        if (path.node.local && path.node.local.name !== path.node.imported.name) {
          needRename = false;
        }
        return j.importSpecifier(
          j.jsxIdentifier(componentNameTo),
          needRename ? null : path.node.local,
        );
      });
    });

  // переименовываем без проблемные св-ва
  source
    .find(j.JSXOpeningElement)
    .filter(
      (path) => path.value.name.type === 'JSXIdentifier' && path.value.name.name === localName,
    )
    .find(j.JSXAttribute, (attribute) => attributeReplacer.has(attribute.name.name))
    .forEach((attribute) => {
      replaceAttribute(j, attributeReplacer, attribute);
    });

  source.findJSXElements(localName).forEach((element) => {
    // меняем название компонента в JSX на переименованный в импорте (если нужно)
    j(element).replaceWith((path) => {
      const renamedLocalName = needRename ? componentNameTo : localName;
      return j.jsxElement(
        j.jsxOpeningElement(
          j.jsxIdentifier(renamedLocalName),
          path.node.openingElement.attributes,
          path.node.closingElement ? false : true,
        ),
        path.node.closingElement ? j.jsxClosingElement(j.jsxIdentifier(renamedLocalName)) : null,
        path.node.children,
      );
    });

    // разрешаем arrowOffsets
    const [cornerOffsetAttr, cornerAbsoluteOffsetAttr] = [
      j(element)
        .find(j.JSXAttribute, (attribute) => attribute.name.name === CORNER_OFFSET.from)
        .at(0),
      j(element)
        .find(j.JSXAttribute, (attribute) => attribute.name.name === CORNER_ABSOLUTE_OFFSET.from)
        .at(0),
    ];

    if (cornerOffsetAttr.length === 1 && cornerAbsoluteOffsetAttr.length === 0) {
      cornerOffsetAttr.forEach((attribute) => {
        j(attribute).replaceWith(
          j.jsxAttribute(j.jsxIdentifier(CORNER_OFFSET.to), attribute.node.value),
        );
      });
    } else if (cornerOffsetAttr.length === 0 && cornerAbsoluteOffsetAttr.length === 1) {
      let valueByCornerAbsolute: JSXAttribute['value'];
      cornerAbsoluteOffsetAttr.forEach((attribute) => {
        valueByCornerAbsolute = attribute.node.value;
        j(attribute).replaceWith(j.jsxAttribute(j.jsxIdentifier(CORNER_ABSOLUTE_OFFSET.to)));
      });
      // добавляем новое св-во
      const prevAttributes = element.node.openingElement.attributes || [];
      element.node.openingElement.attributes = [
        ...prevAttributes,
        j.jsxAttribute(j.jsxIdentifier(CORNER_OFFSET.to), valueByCornerAbsolute),
      ];
    } else if (cornerOffsetAttr.length === 1 && cornerAbsoluteOffsetAttr.length === 1) {
      let valueByCornerAbsolute: JSXAttribute['value'];
      cornerAbsoluteOffsetAttr.forEach((attribute) => {
        valueByCornerAbsolute = attribute.node.value;
        j(attribute).replaceWith(j.jsxAttribute(j.jsxIdentifier(CORNER_ABSOLUTE_OFFSET.to)));
      });
      cornerOffsetAttr.forEach((attribute) => {
        j(attribute).replaceWith(
          j.jsxAttribute(j.jsxIdentifier(CORNER_OFFSET.to), valueByCornerAbsolute),
        );
      });
    }

    // разрешаем alignX/alignY/placement
    const placementAttr = j(element).find(
      j.JSXAttribute,
      (attribute) => attribute.name.name === PLACEMENT,
    );

    let alignX: JSXAttribute['value'];
    let alignY: JSXAttribute['value'];
    j(element)
      .find(j.JSXAttribute, (attribute) => attribute.name.name === ALIGN_X.from)
      .forEach((attribute) => {
        alignX = attribute.node.value;
        j(attribute).remove();
      });
    j(element)
      .find(j.JSXAttribute, (attribute) => attribute.name.name === ALIGN_Y.from)
      .forEach((attribute) => {
        alignY = attribute.node.value;
        j(attribute).remove();
      });

    if (placementAttr.length === 0) {
      let placement: string | undefined;
      if (isStringLiteral(alignX) && !isStringLiteral(alignY)) {
        const convertedAlignX = mapAlignX(alignX.value);
        placement = `bottom-${convertedAlignX}`;
      } else if (!isStringLiteral(alignX) && isStringLiteral(alignY)) {
        placement = `${alignY.value}-start`;
      } else if (isStringLiteral(alignX) && isStringLiteral(alignY)) {
        const convertedAlignX = mapAlignX(alignX.value);
        placement = `${alignY.value}-${convertedAlignX}`;
      }

      if (placement) {
        const prevAttributes = element.node.openingElement.attributes || [];
        element.node.openingElement.attributes = [
          ...prevAttributes,
          j.jsxAttribute(j.jsxIdentifier(PLACEMENT), j.stringLiteral(placement)),
        ];
      }
    }
  });

  return source.toSource();
}
