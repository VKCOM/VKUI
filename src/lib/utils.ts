import { ReactNode } from 'react';
import { Ref } from '../types';

// Является ли переданное значение числовым
export function isNumeric(value: any): boolean {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

// Является ли переданное значение функцией
export function isFunction(value: any): value is ((...args: any[]) => any) {
  return typeof value === 'function';
}

export function hasReactNode(value: ReactNode): boolean {
  return value !== undefined && value !== false && value !== null;
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
