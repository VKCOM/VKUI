import * as React from 'react';

export function useResizeTextarea(
  onResize: ((el: HTMLTextAreaElement) => void) | undefined,
  grow: boolean,
): readonly [React.RefObject<HTMLTextAreaElement | null>, () => void] {
  const elementRef = React.useRef<HTMLTextAreaElement | null>(null);
  const currentScrollHeight = React.useRef<number>(undefined);

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
      /* istanbul ignore next: нет возможности воспроизвести */
      return;
    }

    resizeElement(el);
  }, [elementRef, resizeElement]);

  return [elementRef, resize];
}
