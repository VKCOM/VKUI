import * as React from 'react';

export type ImgOnlyAttributes = {
  [index in Exclude<
    keyof React.ImgHTMLAttributes<HTMLImageElement>,
    keyof React.HTMLAttributes<HTMLImageElement>
  >]: React.ImgHTMLAttributes<HTMLImageElement>[index];
};

// Является ли переданное значение числовым
export function isNumeric(value: any): boolean {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

// Является ли переданное значение функцией
export function isFunction(value: any): value is (...args: any[]) => any {
  return typeof value === 'function';
}

export function debounce<A extends any[]>(fn: (...args: A) => void, delay: number) {
  let timeout: any;

  return (...args: A) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

export function leadingZero(val: number) {
  let strVal = val.toFixed();

  if (strVal.length === 1) {
    return '0' + strVal;
  }

  return strVal;
}

export function hasReactNode(value: React.ReactNode): boolean {
  return value !== undefined && value !== false && value !== null && value !== '';
}

export function isPrimitiveReactNode(node: React.ReactNode): boolean {
  return typeof node === 'string' || typeof node === 'number';
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

// eslint-disable-next-line
export const noop = () => {};

export function getTitleFromChildren(children: React.ReactNode): string {
  let label = '';

  React.Children.map(children, (child) => {
    if (typeof child === 'string') {
      label += child;
    }
  });

  return label;
}

export const generateRandomId = () => {
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '');
};

export const stopPropagation = <T extends React.SyntheticEvent>(event: T) =>
  event.stopPropagation();
