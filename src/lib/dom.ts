export const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export const canUseEventListeners: boolean = canUseDOM && !!window.addEventListener;
