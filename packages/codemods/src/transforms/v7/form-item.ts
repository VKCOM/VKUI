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

  function processTopLabel(element: JSXElement): JSXExpressionContainer | true | undefined {
    if (
      element.openingElement.name.type === 'JSXMemberExpression' &&
      element.openingElement.name.property?.name === 'TopLabel'
    ) {
      let multilineValue: JSXExpressionContainer | true | undefined;
      element.openingElement.attributes = element.openingElement.attributes?.filter((attr) => {
        if (attr.type === 'JSXAttribute' && attr.name.name === 'multiline') {
          if (!attr.value) {
            multilineValue = true;
          } else if (attr.value?.type === 'JSXExpressionContainer') {
            multilineValue = attr.value;
          }
          return false;
        }
        return true;
      });
      return multilineValue;
    }
    return undefined;
  }

  function findTopLabelRecursive(element: JSXElement): JSXExpressionContainer | true | undefined {
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

  source.find(j.JSXElement, { openingElement: { name: { name: localName } } }).forEach((path) => {
    const formItem = path.node;
    let topMultiline: JSXAttribute | undefined;
    let topLabelMultiline: JSXExpressionContainer | true | undefined;
    const formItemAttributes = formItem.openingElement.attributes;

    const prettifyTopMultilineAttribute = () => {
      // Избавляемся от лишнего:
      // если topMultiline={false} можно убрать аттрибут
      // если topMultiline={true} можно убрать {true}
      if (topMultiline && formItemAttributes?.includes(topMultiline)) {
        if (
          topMultiline?.value?.type === 'JSXExpressionContainer' &&
          topMultiline.value.expression.type === 'BooleanLiteral'
        ) {
          if (topMultiline.value.expression.value) {
            topMultiline.value = null;
          } else {
            formItemAttributes.splice(formItemAttributes.indexOf(topMultiline), 1);
          }
        }
      }
    };

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
    if (!topLabelMultiline) {
      prettifyTopMultilineAttribute();
      return;
    }
    const newTopMultilineValue = topLabelMultiline === true ? null : topLabelMultiline;
    // Обновляем или добавляем topMultiline проп
    if (topMultiline) {
      // Если у FormItem задан topMultiline -> переопределяем
      topMultiline.value = newTopMultilineValue;
    } else if (topLabelMultiline) {
      // Если у FormItem не задан topMultiline
      // добавляем его в аргументы
      formItemAttributes?.push(
        j.jsxAttribute(j.jsxIdentifier('topMultiline'), newTopMultilineValue),
      );
    }
    prettifyTopMultilineAttribute();
  });

  return source.toSource();
}
