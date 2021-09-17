import * as React from 'react';
import { prefixClass } from './prefixClass';

function processProps(props: any) {
  const newProps: any = {};
  for (let key in props) {
    if (Object.prototype.hasOwnProperty.call(props, key) && key !== 'vkuiClass') {
      newProps[key] = props[key];
    }
  }
  if (props.vkuiClass) {
    const className: string = props.className;
    const resolved = prefixClass(props.vkuiClass);
    newProps.className = className ? className + ' ' + resolved : resolved;
  }
  return newProps;
}

function _createScopedElement(_type: any, props: any) {
  let args = arguments;

  if (!props || !('vkuiClass' in props)) {
    return React.createElement.apply(undefined, args);
  }

  let argsLength = args.length;
  let createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = args[0];
  createElementArgArray[1] = processProps(props);

  for (let i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  }

  return React.createElement.apply(null, createElementArgArray);
}

_createScopedElement.Fragment = React.Fragment;

export const createScopedElement: typeof React.createElement & { Fragment: typeof React.Fragment } = _createScopedElement;
