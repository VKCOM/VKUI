import { createElement, Fragment } from 'react';
import { prefixSingle } from './prefixClass';

// eslint-disable-next-line @typescript-eslint/unbound-method
const clone = [].slice;
function createScopedElementUnbound() {
  const patched = clone.call(arguments);
  const props = patched[1];

  if (props != null && props.vkuiClass != null && props.vkuiClass !== '') {
    const className = props.className;
    const resolved = prefixSingle(props.vkuiClass);
    props.className = className ? `${className} ${resolved}` : resolved;

    // очищаем если есть
    delete props.vkuiClass;
  }

  return createElement.apply(createElement, patched);
}
createScopedElementUnbound.Fragment = Fragment;

export type jsxFactory = typeof createElement & { Fragment: typeof Fragment };

export const createScopedElement: jsxFactory = createScopedElementUnbound;
