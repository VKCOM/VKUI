import { API, FileInfo, JSXAttribute, JSXSpreadAttribute } from 'jscodeshift';
import { getImportInfo } from '../../codemod-helpers';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

function isJSXAttribute(
  attribute: JSXAttribute | JSXSpreadAttribute | undefined,
): attribute is JSXAttribute {
  return attribute?.type === 'JSXAttribute';
}

function removeAttribute(
  attributes: Array<JSXAttribute | JSXSpreadAttribute> | undefined,
  attribute: JSXAttribute,
) {
  attributes?.splice(attributes?.indexOf(attribute), 1);
}

const componentsToTransform = [
  'Typography',
  'Caption',
  'DisplayTitle',
  'Footnote',
  'Headline',
  'Paragraph',
  'Subhead',
  'Text',
  'Title',
] as const;

export default function transformUseAccentWeightAttribute(
  file: FileInfo,
  api: API,
  options: JSCodeShiftOptions,
) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);

  componentsToTransform.forEach((componentName) => {
    const { localName } = getImportInfo(j, file, componentName, alias);

    if (!localName) {
      return;
    }

    source
      .find(j.JSXOpeningElement)
      .filter(
        (path) => path.value.name.type === 'JSXIdentifier' && path.value.name.name === localName,
      )
      // useAccentWeight по умолчанию теперь false, поэтому, чтобы
      // пользователи продолжили использовать accent шрифты мы включим accent режим,
      // добавив useAccentWeight, если его нету.
      .forEach(function handleUseAccentWeightAttribute(path) {
        const attributes = path.node.attributes;
        if (!attributes) {
          return;
        }

        const accentAttribute = attributes?.find(
          (attr) => isJSXAttribute(attr) && attr.name.name === 'useAccentWeight',
        );

        const weightAttribute = attributes?.find(
          (attr) => isJSXAttribute(attr) && attr.name.name === 'weight',
        );
        // weight задан и не равен `undefined`
        const hasDefinedWeightAttribute = Boolean(
          weightAttribute &&
            weightAttribute.type === 'JSXAttribute' &&
            !(
              weightAttribute.value?.type === 'JSXExpressionContainer' &&
              weightAttribute.value.expression.type === 'Identifier' &&
              weightAttribute.value.expression.name === 'undefined'
            ),
        );

        // есть weight и нету useAccentWeight: нужно добавить
        if (!accentAttribute && hasDefinedWeightAttribute) {
          attributes.push(j.jsxAttribute(j.jsxIdentifier('useAccentWeight')));
        }

        if (!isJSXAttribute(accentAttribute)) {
          return;
        }

        // weight нету, убираем useAccentWeight
        if (!hasDefinedWeightAttribute) {
          removeAttribute(attributes, accentAttribute);
          return;
        }

        if (
          accentAttribute.value?.type === 'JSXExpressionContainer' &&
          accentAttribute.value.expression.type === 'BooleanLiteral'
        ) {
          // useAccentWeight={true} => useAccentWeight
          if (accentAttribute.value.expression.value === true) {
            accentAttribute.value = null;
            // useAccentWeight={false} => совсем убираем
          } else if (accentAttribute.value.expression.value === false) {
            removeAttribute(attributes, accentAttribute);
          }
        }
      });
  });

  return source.toSource();
}
