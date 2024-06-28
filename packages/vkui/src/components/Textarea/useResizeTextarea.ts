import * as React from 'react';

export function useResizeTextarea(
  onResize: ((el: HTMLTextAreaElement) => void) | undefined,
  grow = true,
): readonly [React.RefObject<HTMLTextAreaElement>, () => void] {
  const elementRef = React.useRef<HTMLTextAreaElement>(null);
  const currentScrollHeight = React.useRef<number>();

  const resizeElement = React.useCallback(
    (el: HTMLTextAreaElement) => {
      if (grow && el.offsetParent) {
        el.style.height = '';
        el.style.height = `${el.scrollHeight}px`;

        if (el.scrollHeight !== currentScrollHeight.current && onResize) {
          onResize(el);
          currentScrollHeight.current = el.scrollHeight;
        }
      }
    },
    [grow, onResize],
  );

  const resize = React.useCallback(() => {
    const el = elementRef.current;
    if (!el) {
      return;
    }

    resizeElement(el);
  }, [elementRef, resizeElement]);

  return [elementRef, resize];
}
