import { Children, ReactNode } from 'react';
import { Ref, RefWithCurrent } from '../types';

// Является ли переданное значение числовым
export function isNumeric(value: any): boolean {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

// Является ли переданное значение функцией
export function isFunction(value: any): value is ((...args: any[]) => any) {
  return typeof value === 'function';
}

export function throttle(fn: any, threshhold = 50, scope = window) {
  let last: number;
  let deferTimer: any;

  return function(...args: any[]) {
    // @ts-ignore
    const context = scope || this;
    const now = Date.now();

    if (last && now < last + threshhold) {
      clearTimeout(deferTimer);
      deferTimer = setTimeout(() => {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}

export function debounce(fn: any, delay: number, context = window) {
  let timeout: any;
  let args: any[] = null;

  const later = () => fn.apply(context, args);

  return (...a: any[]) => {
    args = a;
    clearTimeout(timeout);
    timeout = setTimeout(later, delay);
  };
}

export function leadingZero(val: number) {
  let strVal = val.toFixed();

  if (strVal.length === 1) {
    return '0' + strVal;
  }

  return strVal;
}

export function hasReactNode(value: ReactNode): boolean {
  return value !== undefined && value !== false && value !== null && value !== '';
}

export function isPrimitiveReactNode(node: ReactNode): boolean {
  return typeof node === 'string' || typeof node === 'number';
}

export function setRef<T>(element: T, ref: Ref<T>): void {
  if (ref) {
    if (typeof ref === 'function') {
      ref(element);
    } else {
      ref.current = element;
    }
  }
}

export function multiRef<T>(...refs: Array<Ref<T>>): RefWithCurrent<T> {
  let current: T | null = null;
  return {
    get current() {
      return current;
    },
    set current(element) {
      current = element;
      refs.forEach((ref) => setRef(element, ref));
    },
  };
}

// eslint-disable-next-line
export const noop = () => {};

export function createCustomEvent(window: any, type: string, eventInitDict?: any) {
  if (typeof window.CustomEvent !== 'function') {
    const options = eventInitDict || { bubbles: false, cancelable: false, detail: null };

    const evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(
      type,
      options.bubbles,
      options.cancelable,
      options.detail,
    );
    return evt;
  }

  return new window.CustomEvent(type, eventInitDict);
}

export function getTitleFromChildren(children: ReactNode): string {
  let label = '';

  Children.map(children, (child) => {
    if (typeof child === 'string') {
      label += child;
    }
  });

  return label;
}
