import { API, FileInfo, JSXAttribute, JSXElement, JSXExpressionContainer } from 'jscodeshift';
import { getImportInfo } from '../../codemod-helpers';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'FormItem', alias);

  if (!localName) {
    return source.toSource();
  }

  function processTopLabel(element: JSXElement): boolean | undefined {
    if (
      element.openingElement.name.type === 'JSXMemberExpression' &&
      element.openingElement.name.property?.name === 'TopLabel'
    ) {
      let multilineValue: boolean | undefined;
      element.openingElement.attributes = element.openingElement.attributes?.filter((attr) => {
        if (attr.type === 'JSXAttribute' && attr.name.name === 'multiline') {
          if (!attr.value) {
            multilineValue = true;
          } else if (
            attr.value?.type === 'JSXExpressionContainer' &&
            attr.value.expression.type === 'BooleanLiteral'
          ) {
            multilineValue = attr.value.expression.value;
          }
          return false;
        }
        return true;
      });
      return multilineValue;
    }
    return undefined;
  }

  function findTopLabelRecursive(element: JSXElement): boolean | undefined {
    let result = processTopLabel(element);
    if (result !== undefined) {
      return result;
    }

    if (!element.children) {
      return undefined;
    }

    for (const child of element.children) {
      if (child.type === 'JSXElement') {
        result = findTopLabelRecursive(child);
        if (result !== undefined) {
          return result;
        }
      }
    }

    return undefined;
  }

  source.find(j.JSXElement, { openingElement: { name: { name: 'FormItem' } } }).forEach((path) => {
    const formItem = path.node;
    let topMultiline: JSXAttribute | undefined;
    let topLabelMultiline: boolean | undefined;
    const formItemAttributes = formItem.openingElement.attributes;

    // Проверяем существующий topMultiline проп
    formItemAttributes?.forEach((attr) => {
      if (attr.type === 'JSXAttribute' && attr.name.name === 'topMultiline') {
        topMultiline = attr;
      }
    });

    // Ищем FormItem.TopLabel в пропе top и topNode
    formItemAttributes?.forEach((attr) => {
      if (
        attr.type === 'JSXAttribute' &&
        (attr.name.name === 'top' || attr.name.name === 'topNode')
      ) {
        if (attr.value?.type === 'JSXElement') {
          topLabelMultiline = findTopLabelRecursive(attr.value);
        } else if (
          attr.value?.type === 'JSXExpressionContainer' &&
          attr.value.expression.type === 'JSXElement'
        ) {
          topLabelMultiline = findTopLabelRecursive(attr.value.expression);
        }
      }
    });

    // Ищем FormItem.TopLabel в children
    if (topLabelMultiline === undefined && formItem.children) {
      for (const child of formItem.children) {
        if (child.type === 'JSXElement') {
          topLabelMultiline = findTopLabelRecursive(child);
          if (topLabelMultiline !== undefined) {
            break;
          }
        }
      }
    }

    // Обновляем или добавляем topMultiline проп
    if (topLabelMultiline !== undefined) {
      if (topMultiline) {
        // Если у FormItem задан topMultiline
        if (
          topLabelMultiline ||
          (topMultiline.value?.type === 'JSXExpressionContainer' &&
            topMultiline.value.expression.type === 'BooleanLiteral' &&
            !topMultiline.value.expression.value)
        ) {
          // Если у FormItem задан topMultiline=false, а у TopLabel multiline=true,
          // значит свойство можно сократить до topMultiline
          topMultiline.value = null;
        } else if (!topLabelMultiline) {
          // Если у FormItem задан topMultiline, а у TopLabel задан multiline=false,
          // то можно удалить этой свойство, так как оно задано по умолчанию
          formItemAttributes?.splice(formItemAttributes.indexOf(topMultiline), 1);
        }
      } else if (topLabelMultiline) {
        // Если у FormItem не задан topMultiline
        formItemAttributes?.push(j.jsxAttribute(j.jsxIdentifier('topMultiline')));
      }
    }
  });

  return source.toSource();
}
