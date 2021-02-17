import { createElement, Fragment } from 'react';

const hasTransformable = /\b(?=[A-Z])/g;
function prefixClass(className: string) {
  const prefixed = className.replace(hasTransformable, 'vkui');
  return className === prefixed ? prefixed : prefixed + ' ' + className;
}
function createScopedElement(_type: any, props: any) {
  let args = arguments;

  if (!props || !props.className) {
    return createElement.apply(undefined, args);
  }

  let argsLength = args.length;
  let createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = args[0];
  createElementArgArray[1] = Object.assign({}, props, {
    className: prefixClass(props.className),
  });

  for (let i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  }

  return createElement.apply(null, createElementArgArray);
};
createScopedElement.Fragment = Fragment;

export { createScopedElement };
