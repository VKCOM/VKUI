import { AnyFunction } from '../types';

export const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  /* eslint-disable */
  window.document.createElement
  /* eslint-enable */
);

export const canUseEventListeners: boolean = canUseDOM && !!window.addEventListener;

export function onDOMLoaded(callback: AnyFunction) {
  if (document.readyState !== 'loading') {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      callback();
    });
  }
}
