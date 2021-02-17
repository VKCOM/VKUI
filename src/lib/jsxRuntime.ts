import { createElement, Fragment } from 'react';

const hasTransformable = /\b(?=[A-Z])/g;
function prefixClass(scopedStyle: string, globalStyle?: string) {
  const prefixed = scopedStyle.replace(hasTransformable, 'vkui');
  const resolved = scopedStyle === prefixed ? prefixed : prefixed + ' ' + scopedStyle;
  return globalStyle ? resolved + ' ' + globalStyle : resolved;
}

function processProps(props: any) {
  const newProps: any = {};
  for (let key in props) {
    if (Object.prototype.hasOwnProperty.call(props, key) && key !== 'vkuiClass') {
      newProps[key] = props[key];
    }
  }
  newProps.className = prefixClass(props.vkuiClass, props.className);
  return newProps;
}

function createScopedElement(_type: any, props: any) {
  let args = arguments;

  if (!props || !('vkuiClass' in props)) {
    return createElement.apply(undefined, args);
  }

  let argsLength = args.length;
  let createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = args[0];
  createElementArgArray[1] = processProps(props);

  for (let i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  }

  return createElement.apply(null, createElementArgArray);
};
createScopedElement.Fragment = Fragment;

export { createScopedElement };
