import chalk from 'chalk';
import type { API, Collection, FileInfo, JSXAttribute } from 'jscodeshift';
import {
  type AttributeManipulatorDeclaration,
  createAttributeManipulator,
  getImportInfo,
} from '../../codemod-helpers';
import type { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

const componentName = 'unstable_TextTooltip';

const ATTRIBUTE_MANIPULATOR: AttributeManipulatorDeclaration = {
  offsetSkidding: {
    keyTo: 'offsetByCrossAxis',
  },
  offsetDistance: {
    keyTo: 'offsetByMainAxis',
  },
  autoUpdateOnTargetResize: {
    action: 'remove',
  },
  getRef: {
    keyTo: 'getRootRef',
  },
  renderContent: {
    keyTo: 'children',
    reportText: () =>
      `: ${chalk.white.bgBlue('children')} prop in ${chalk.white.bgBlue(
        'TextTooltip',
      )}. You should unwraps function manually`,
  },
  customMiddlewares: {
    keyTo: 'unknown',
    reportText: () =>
      `: ${chalk.white.bgBlue('customMiddlewares')} prop in ${chalk.white.bgBlue(
        'TextTooltip',
      )}. You should unwraps function manually`,
  },
};

const FORCE_PORTAL = 'forcePortal';
const COMPLEX_ATTRIBUTE_MANIPULATOR: AttributeManipulatorDeclaration = {
  [FORCE_PORTAL]: {
    keyTo: 'usePortal',
  },
  portalRoot: {
    keyTo: 'usePortal',
  },
};

const LEGACY_SHOWN_DELAY_PROP = 'shownDelay';
const LEGACY_HIDE_DELAY_PROP = 'hideDelay';
const NEW_HOVER_DELAY_PROP = 'hoverDelay';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, componentName, alias);
  const attributeReplacer = createAttributeManipulator(ATTRIBUTE_MANIPULATOR, api);

  if (!localName) {
    return source.toSource();
  }

  source
    .find(j.ImportDeclaration)
    .filter((path) => path.node.source.value === alias)
    .find(j.ImportSpecifier, { imported: { name: componentName } })
    .forEach((path) =>
      j(path).replaceWith((path) => j.importSpecifier(j.identifier('Tooltip'), path.node.local)),
    );

  source
    .find(j.JSXOpeningElement)
    .filter(
      (path) => path.value.name.type === 'JSXIdentifier' && path.value.name.name === localName,
    )
    .find(j.JSXAttribute, (attribute) =>
      typeof attribute.name.name === 'string' ? attributeReplacer.has(attribute.name.name) : false,
    )
    .forEach((attribute) => {
      const attributeName = attribute.node.name.name as string;
      const foundFix = attributeReplacer.getReplacers(attributeName);
      if (foundFix) {
        if (foundFix.action === 'remove') {
          j(attribute).remove();
        } else {
          const value = attribute.node.value;

          j(attribute).replaceWith(
            j.jsxAttribute(j.jsxIdentifier(foundFix.keyTo()), foundFix.valueTo(value)),
          );
        }
      }
    });

  const complexAttributeReplacer = createAttributeManipulator(COMPLEX_ATTRIBUTE_MANIPULATOR, api);
  source.findJSXElements(localName).forEach((element) => {
    j(element)
      .find(j.JSXAttribute, (attribute) =>
        typeof attribute.name.name === 'string'
          ? complexAttributeReplacer.has(attribute.name.name)
          : false,
      )
      .forEach((attribute, _, attributes) => {
        const attributeName = attribute.node.name.name as string;
        if (attributes.length === 2 && attributeName === FORCE_PORTAL) {
          j(attribute).remove();
        } else {
          const foundFix = complexAttributeReplacer.getReplacers(attributeName);
          if (foundFix && foundFix.action !== 'remove') {
            const value = attribute.node.value;
            j(attribute).replaceWith(
              j.jsxAttribute(j.jsxIdentifier(foundFix.keyTo()), foundFix.valueTo(value)),
            );
          }
        }
      });

    // разрешаем hoverDelay
    const [shownDelayAttr, hideDelayAttr] = [
      j(element).find(
        j.JSXAttribute,
        (attribute) => attribute.name.name === LEGACY_SHOWN_DELAY_PROP,
      ),
      j(element).find(
        j.JSXAttribute,
        (attribute) => attribute.name.name === LEGACY_HIDE_DELAY_PROP,
      ),
    ];

    const getNumericLiteral = (attributeCollection: Collection<JSXAttribute>) => {
      let val;
      attributeCollection.find(j.NumericLiteral).forEach((attribute) => {
        val = attribute.node;
      });
      return val ? val : j.numericLiteral(0);
    };

    if (shownDelayAttr.length === 1 && hideDelayAttr.length === 0) {
      shownDelayAttr.forEach((attribute) => {
        j(attribute).replaceWith(
          j.jsxAttribute(
            j.jsxIdentifier(NEW_HOVER_DELAY_PROP),
            j.jsxExpressionContainer(getNumericLiteral(shownDelayAttr)),
          ),
        );
      });
    } else if (shownDelayAttr.length === 0 && hideDelayAttr.length === 1) {
      hideDelayAttr.forEach((attribute) => {
        j(attribute).replaceWith(
          j.jsxAttribute(
            j.jsxIdentifier(NEW_HOVER_DELAY_PROP),
            j.jsxExpressionContainer(
              j.arrayExpression([j.numericLiteral(0), getNumericLiteral(hideDelayAttr)]),
            ),
          ),
        );
      });
    } else if (shownDelayAttr.length === 1 && hideDelayAttr.length === 1) {
      shownDelayAttr.forEach((attribute) => {
        j(attribute).replaceWith(
          j.jsxAttribute(
            j.jsxIdentifier(NEW_HOVER_DELAY_PROP),
            j.jsxExpressionContainer(
              j.arrayExpression([
                getNumericLiteral(shownDelayAttr),
                getNumericLiteral(hideDelayAttr),
              ]),
            ),
          ),
        );
      });
      hideDelayAttr.forEach((attribute) => {
        j(attribute).remove();
      });
    }
  });

  return source.toSource();
}
