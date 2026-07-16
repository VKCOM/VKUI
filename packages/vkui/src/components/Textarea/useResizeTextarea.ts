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
): readonly [React.RefObject<HTMLTextAreaElement | null>, () => void] {
  const elementRef = React.useRef<HTMLTextAreaElement | null>(null);
  const currentScrollHeight = React.useRef<number>(undefined);
  // Признак того, что `resizeElement` уже выполнялся хотя бы раз. Используется,
  // чтобы не прижимать прокрутку к низу при первичном появлении Textarea.
  const hasResized = React.useRef(false);

  const resizeElement = React.useCallback(
    (el: HTMLTextAreaElement) => {
      if (grow && el.offsetParent) {
        // Изменение `height` `<textarea>` заставляет браузер пересчитать layout,
        // из-за чего на Android (Chrome) сбрасывается `scrollTop` контейнера
        // прокрутки (FormField). Особенно заметно при вводе пробела: браузер не
        // автоскроллит к курсору, и вводимый в конце текст оказывается скрыт.
        // См. https://github.com/VKCOM/VKUI/issues/8273
        const scrollContainer = scrollContainerRef?.current ?? null;
        const selectionEnd = el.selectionEnd ?? 0;
        const isAtEnd = selectionEnd >= el.value.length;

        // Первый ресайз (первичное появление Textarea). Пользователь ещё ничего
        // не вводил, поэтому прокрутку контейнера трогать не нужно: при длинном
        // `defaultValue` она должна оставаться вверху. Кроме того, на этом этапе
        // `scrollContainer.scrollHeight` ещё не соответствует финальной высоте
        // `<textarea>`, из-за чего «восстановление положения» ниже уводило
        // прокрутку в самый низ. См. https://github.com/VKCOM/VKUI/issues/8273
        const isFirstResize = !hasResized.current;

        // Сохраняем смещение от низа контейнера для случая, когда курсор не в конце.
        const offsetFromBottom =
          scrollContainer && !isFirstResize
            ? scrollContainer.scrollHeight - scrollContainer.scrollTop
            : 0;

        el.style.height = '';
        el.style.height = `${el.scrollHeight}px`;

        if (scrollContainer && !isFirstResize) {
          if (isAtEnd) {
            // Курсор в конце — прокручиваем контейнер к низу, чтобы он был виден.
            applyScrollTop(scrollContainer, scrollContainer.scrollHeight);
          } else {
            // Иначе восстанавливаем прежнее видимое положение.
            const newScrollTop = scrollContainer.scrollHeight - offsetFromBottom;
            if (newScrollTop !== scrollContainer.scrollTop) {
              applyScrollTop(scrollContainer, newScrollTop);
            }
          }
        }

        if (el.scrollHeight !== currentScrollHeight.current && onResize) {
          onResize(el);
          currentScrollHeight.current = el.scrollHeight;
        }

        hasResized.current = true;
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

    resizeElement(el);
  }, [elementRef, resizeElement]);

  return [elementRef, resize];
}
