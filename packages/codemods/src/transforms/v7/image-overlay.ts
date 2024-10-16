import chalk from 'chalk';
import { API, FileInfo, JSXAttribute, JSXSpreadAttribute } from 'jscodeshift';
import { getImportInfo, removeAttribute } from '../../codemod-helpers';
import { report } from '../../report';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName: ImageLocalName } = getImportInfo(j, file, 'Image', alias);
  const { localName: ImageBaseLocalName } = getImportInfo(j, file, 'ImageBase', alias);

  if (!ImageLocalName && !ImageBaseLocalName) {
    return source.toSource();
  }

  const findAttribute = (
    attributes: Array<JSXAttribute | JSXSpreadAttribute> | undefined,
    attributeName: string,
  ): JSXAttribute | undefined => {
    return (
      (attributes?.find((attr) => {
        return attr.type === 'JSXAttribute' && attr.name.name === attributeName;
      }) as JSXAttribute) || null
    );
  };

  const showReport = (localName: string, additionalMessage: string) => {
    report(
      api,
      `: ${chalk.white.bgBlue(`${localName}.Overlay`)} has been changed. Manual changes required: ${additionalMessage}`,
    );
  };

  const showDisableInteractivePropReport = (localName: string) => {
    showReport(
      localName,
      `"disableInteractive" has been removed, please use "onClick" if you want to make ${localName}.Overlay interactive`,
    );
  };

  const calcDisableInteractiveValue = (
    disableInteractiveAttribute: JSXAttribute,
  ): boolean | null => {
    if (disableInteractiveAttribute.value?.type === 'BooleanLiteral') {
      return disableInteractiveAttribute.value.value;
    } else if (disableInteractiveAttribute.value === null) {
      return true;
    } else if (disableInteractiveAttribute.value?.type === 'JSXExpressionContainer') {
      const expression = disableInteractiveAttribute.value.expression;
      if (expression.type === 'BooleanLiteral') {
        return expression.value;
      }
      if (expression.type === 'Identifier' && expression.name === 'undefined') {
        return false;
      }
    }
    return null;
  };

  const handleImageComponent = (localName: string) => {
    source
      .find(j.JSXElement, {
        openingElement: {
          name: {
            type: 'JSXMemberExpression',
            object: { name: localName },
            property: { name: 'Overlay' },
          },
        },
      })
      .forEach((path) => {
        const overlay = path.node;
        const overlayItemAttributes = overlay.openingElement.attributes;

        const onClickAttribute: JSXAttribute | undefined = findAttribute(
          overlayItemAttributes,
          'onClick',
        );
        const disableInteractiveAttribute: JSXAttribute | undefined = findAttribute(
          overlayItemAttributes,
          'disableInteractive',
        );

        // Кейс, когда disableInteractive не был задан, значит overlay interactive.
        // Сейчас у него обязательно должен быть onClick, чтобы не лоймать обратную совместимость

        if (!disableInteractiveAttribute) {
          // Проверяем наличие onClick, и если его нет, то пользователь должен добавить onClick
          if (!onClickAttribute) {
            showReport(
              localName,
              `If you want to make ${localName}.Overlay interactive please add "onClick" prop`,
            );
          }
          return;
        }
        // Рассчитываем значение disableInteractive в boolean
        const disableInteractiveValue = calcDisableInteractiveValue(disableInteractiveAttribute);
        if (disableInteractiveValue === null) {
          // Если у disableInteractive используется сложное выражение,
          // то пользователь сам должен удалить этот проп, как ему нужно
          showDisableInteractivePropReport(localName);
        }

        // Удаляем аттрибут disableInteractive
        removeAttribute(overlayItemAttributes, disableInteractiveAttribute);

        if (disableInteractiveValue) {
          // Если disableInteractive = true, то все, что нам нужно, это удалить атрибут onClick
          // Важно: мы можем его спокойно удалить, так как в этом кейсе он может быть только undefined
          if (onClickAttribute) {
            removeAttribute(overlayItemAttributes, onClickAttribute);
          }
          return;
        }
        if (!onClickAttribute) {
          // Если disableInteractive = false и onClick пропа нет, то пользователь должен его добавить
          showDisableInteractivePropReport(localName);
          return;
        }
        // Если disableInteractive = false и onClick не пустой, надо обработать следующие кейсы:
        // onClick=undefined: надо добавить колбэк
        // onClick=identifier: все хорошо, оставляем как есть
        // В остальных случаях надо, чтобы пользователь убедился, что onClick устанавливается корректно
        if (onClickAttribute.value?.type === 'JSXExpressionContainer') {
          const expression = onClickAttribute.value.expression;
          if (expression.type === 'Identifier') {
            if (expression.name === 'undefined') {
              showDisableInteractivePropReport(localName);
            }
            return;
          }
          if (expression.type === 'ArrowFunctionExpression') {
            return;
          }
        }
        showReport(
          localName,
          `"disableInteractive" has been removed, please validate that "onClick" prop value not falsy`,
        );
      });
  };

  if (ImageLocalName) {
    handleImageComponent(ImageLocalName);
  }
  if (ImageBaseLocalName) {
    handleImageComponent(ImageBaseLocalName);
  }

  return source.toSource();
}
