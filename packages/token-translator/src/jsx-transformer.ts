import ts from 'typescript';
import { getCustomVariables, getVKUIToken } from './styleProperty';

const transformer: ts.TransformerFactory<ts.SourceFile> = (context) => {
  let tagName = '';

  /**
   * Перебираем свойства style
   */
  const searchPropertyAssignment = (node: ts.Node): ts.Node => {
    if (
      ts.isPropertyAssignment(node) &&
      ts.isIdentifier(node.name) &&
      ts.isStringLiteral(node.initializer)
    ) {
      const customVariables = getCustomVariables(node.initializer.text);
      customVariables.forEach((customVariable) => {
        if (!ts.isIdentifier(node.name)) {
          return;
        }

        const vkuiToken = getVKUIToken(tagName, node.name.escapedText as string, customVariable);
        if (!vkuiToken || !ts.isStringLiteral(node.initializer)) {
          return;
        }

        node.initializer.text = node.initializer.text.replace(customVariable, vkuiToken);
      });

      return node;
    }

    return ts.visitEachChild(node, searchPropertyAssignment, context);
  };

  /**
   * Поиск JSX атрибута "style"
   */
  const searchJsxAttributeStyle = (node: ts.Node): ts.Node => {
    if (
      ts.isJsxAttribute(node) &&
      ts.isIdentifier(node.name) &&
      node.name.escapedText === 'style'
    ) {
      return ts.visitEachChild(node, searchPropertyAssignment, context);
    }

    // Ищем тэг
    if (
      (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) &&
      ts.isIdentifier(node.tagName)
    ) {
      tagName = node.tagName.escapedText as string;
    }

    return ts.visitEachChild(node, searchJsxAttributeStyle, context);
  };

  return (sourceFile) => ts.visitNode(sourceFile, searchJsxAttributeStyle);
};

export default transformer;
