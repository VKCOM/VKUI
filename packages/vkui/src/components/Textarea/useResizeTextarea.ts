import * as React from 'react';

/**
 * Присваивает `scrollTop` элементу. Вынесено в отдельную функцию, чтобы линтер
 * `react-hooks/immutability` не считал мутацией иммутабельного аргумента хука
 * (контейнер прокрутки приходит из `scrollContainerRef`).
 */
function applyScrollTop(el: HTMLElement, value: number) {
  el.scrollTop = value;
}

export function useResizeTextarea(
  onResize: ((el: HTMLTextAreaElement) => void) | undefined,
  grow: boolean,
  scrollContainerRef?: React.RefObject<HTMLDivElement | null>,
): readonly [React.RefObject<HTMLTextAreaElement | null>, () => void, () => void] {
  const elementRef = React.useRef<HTMLTextAreaElement | null>(null);
  const currentScrollHeight = React.useRef<number>(undefined);
  const resizeElement = React.useCallback(
    (el: HTMLTextAreaElement, keepCaretVisible: boolean) => {
      if (grow && el.offsetParent) {
        // На Android/Chrome сброс высоты может сбросить прокрутку FormField.
        // Внешний resize сохраняет позицию, ввод в конце показывает каретку.
        // См. https://github.com/VKCOM/VKUI/issues/8273
        const scrollContainer = scrollContainerRef?.current ?? null;
        const savedScrollTop = scrollContainer?.scrollTop ?? 0;
        const shouldScrollToEnd = keepCaretVisible && el.selectionEnd >= el.value.length;

        el.style.height = '';
        el.style.height = `${el.scrollHeight}px`;

        if (scrollContainer) {
          const nextScrollTop = shouldScrollToEnd
            ? Math.max(0, scrollContainer.scrollHeight - scrollContainer.clientHeight)
            : savedScrollTop;
          if (nextScrollTop !== scrollContainer.scrollTop) {
            applyScrollTop(scrollContainer, nextScrollTop);
          }
        }

        if (el.scrollHeight !== currentScrollHeight.current && onResize) {
          onResize(el);
          currentScrollHeight.current = el.scrollHeight;
        }
      }
    },
    [grow, onResize, scrollContainerRef],
  );

  const resize = React.useCallback(() => {
    const el = elementRef.current;
    if (!el) {
      /* istanbul ignore next: нет возможности воспроизвести */
      return;
    }

    resizeElement(el, false);
  }, [elementRef, resizeElement]);

  const resizeAfterInput = React.useCallback(() => {
    const el = elementRef.current;
    if (el) {
      resizeElement(el, true);
    }
  }, [elementRef, resizeElement]);

  return [elementRef, resize, resizeAfterInput];
}
