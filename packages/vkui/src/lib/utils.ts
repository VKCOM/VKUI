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

export function getTitleFromChildren(children: React.ReactNode): string {
  let label = '';

  React.Children.map(children, (child) => {
    if (typeof child === 'string') {
      label += ' ' + child;
    }
  });

  return label.trim();
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
