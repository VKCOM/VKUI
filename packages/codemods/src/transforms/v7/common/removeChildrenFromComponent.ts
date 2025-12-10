import { API, ASTPath, Collection, JSXElement } from 'jscodeshift';

export const removeChildrenFromComponent = (api: API, source: Collection, localName: string) => {
  const j = api.jscodeshift;
  source
    .find(j.JSXElement)
    .filter((path: ASTPath<JSXElement>) => {
      const elementName = path.node.openingElement.name;
      return elementName.type === 'JSXIdentifier' && elementName.name === localName;
    })
    .forEach((path: ASTPath<JSXElement>) => {
      const element = path.node;
      element.children = [];
    });
};
