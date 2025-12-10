import chalk from 'chalk';
import type { API, FileInfo } from 'jscodeshift';
import {
  type AttributeManipulatorDeclaration,
  createAttributeManipulator,
  getImportInfo,
} from '../../codemod-helpers';
import type { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

const componentName = 'unstable_Popper';

const ATTRIBUTE_MANIPULATOR: AttributeManipulatorDeclaration = {
  offsetDistance: {
    keyTo: 'offsetByMainAxis',
  },
  offsetSkidding: {
    keyTo: 'offsetByCrossAxis',
  },
  renderContent: {
    keyTo: 'children',
    reportText: () =>
      `: ${chalk.white.bgBlue('children')} prop in ${chalk.white.bgBlue(
        'Popper',
      )}. You should unwraps function manually`,
  },
  arrowClassName: {
    keyTo: 'arrowProps',
    valueTo: (v, api) =>
      v
        ? api.jscodeshift.jsxExpressionContainer(
            api.jscodeshift.objectExpression([
              api.jscodeshift.property('init', api.jscodeshift.identifier('iconClassName'), v),
            ]),
          )
        : v,
  },
  onPlacementChange: {
    keyTo: 'onPlacementChange',
    reportText: () =>
      `: ${chalk.white.bgBlue('onPlacementChange')} prop in ${chalk.white.bgBlue(
        'Popper',
      )}. You should move function params from object to array arguments manually.`,
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
      j(path).replaceWith((path) => j.importSpecifier(j.identifier('Popper'), path.node.local)),
    );

  source
    .find(j.JSXOpeningElement)
    .filter(
      (path) => path.value.name.type === 'JSXIdentifier' && path.value.name.name === localName,
    )
    .find(j.JSXAttribute, (attribute) => attributeReplacer.has(attribute.name.name))
    .forEach((attribute) => {
      const foundFix = attributeReplacer.getReplacers(attribute.node.name.name);
      if (foundFix && foundFix.action !== 'remove') {
        const value = attribute.node.value;
        j(attribute).replaceWith(
          j.jsxAttribute(j.jsxIdentifier(foundFix.keyTo()), foundFix.valueTo(value)),
        );
      }
    });

  const complexAttributeReplacer = createAttributeManipulator(COMPLEX_ATTRIBUTE_MANIPULATOR, api);
  source.findJSXElements(localName).forEach((element) => {
    j(element)
      .find(j.JSXAttribute, (attribute) => complexAttributeReplacer.has(attribute.name.name))
      .forEach((attribute, _, attributes) => {
        const attributeName = attribute.node.name.name;
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
  });

  return source.toSource();
}
