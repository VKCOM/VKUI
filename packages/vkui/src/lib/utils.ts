import * as React from 'react';

export type ImgOnlyAttributes = {
  [index in Exclude<
    keyof React.ImgHTMLAttributes<HTMLImageElement>,
    keyof React.HTMLAttributes<HTMLImageElement>
  >]: React.ImgHTMLAttributes<HTMLImageElement>[index];
};

export function debounce<A extends any[]>(fn: (...args: A) => void, delay: number) {
  let timeout: any;

  return (...args: A) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

export function setRef<T>(element: T, ref?: React.Ref<T>): void {
  if (ref) {
    if (typeof ref === 'function') {
      ref(element);
    } else {
      (ref as React.MutableRefObject<T>).current = element;
    }
  }
}

export function multiRef<T>(...refs: Array<React.Ref<T> | undefined>): React.RefObject<T> {
  let current: T | null = null;
  return {
    get current() {
      return current;
    },
    set current(element) {
      current = element;
      refs.forEach((ref) => ref && setRef(element, ref));
    },
  };
}

export const stopPropagation = <T extends React.SyntheticEvent>(event: T) =>
  event.stopPropagation();

export function addClassNameToElement(element: HTMLElement, className: string) {
  const elementClassName = element.getAttribute('class') || '';
  const updatedClassName = `${elementClassName}${elementClassName ? ' ' : ''}${className}`;

  element.setAttribute('class', updatedClassName);
}

export function removeClassNameFromElement(element: HTMLElement, classNameToRemove: string) {
  const classNamesArray = (element.getAttribute('class') || '').split(/\s+/);
  const elementIndexToRemove = classNamesArray.findIndex(
    (className) => className === classNameToRemove,
  );
  if (elementIndexToRemove === -1) {
    return;
  }
  classNamesArray.splice(elementIndexToRemove, 1);

  element.setAttribute('class', classNamesArray.join(' '));
}

type ExcludeKeysWithUndefined<T> = {
  [P in keyof T]?: Exclude<T[P], undefined>;
};

export const excludeKeysWithUndefined = <T extends Record<string | number | symbol, any>>(
  obj: T,
): ExcludeKeysWithUndefined<T> => {
  const filteredObj: ExcludeKeysWithUndefined<T> = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] !== undefined) {
      filteredObj[key] = obj[key];
    }
  }
  return filteredObj;
};

export const isDOMTypeElement = <
  P extends React.HTMLAttributes<T> | React.SVGAttributes<T>,
  T extends Element,
>(
  element: React.ReactElement,
): element is Omit<React.DOMElement<P, T>, 'ref'> & { ref?: React.Ref<T> | undefined } =>
  typeof element.type === 'string';

export function isValidNotReactFragmentElement(
  children: Parameters<typeof React.isValidElement>[0],
): children is React.ReactElement<Record<PropertyKey, any>> {
  return (
    React.isValidElement(children) &&
    // @ts-expect-error: TS2339 $$typeof всегда symbol, в отличии от type, благодаря этому пропускаем лишние проверки на тип.
    children.$$typeof !== Symbol.for('react.fragment')
  );
}

export function isForwardRefElement<
  P extends React.HTMLAttributes<T> | React.SVGAttributes<T>,
  T extends Element,
>(
  children: Parameters<typeof React.isValidElement>[0],
): children is Omit<React.DOMElement<P, T>, 'ref'> & { ref?: React.Ref<T> | undefined } {
  if (!React.isValidElement(children)) {
    return false;
  }

  // @ts-expect-error: TS2339 $$typeof всегда symbol, в отличии от type, благодаря этому пропускаем лишние проверки на тип.
  // черпаем вдохновение из react-is https://github.com/facebook/react/blob/d48dbb824985166ecb7b2959db03090a8593dce0/packages/react-is/src/ReactIs.js#L119-L121
  const typeOfOfType = children.type && children.type.$$typeof;
  return typeOfOfType === Symbol.for('react.forward_ref');
}
