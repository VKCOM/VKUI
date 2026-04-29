'use client';

import * as React from 'react';

export interface UseFitScaleOptions {
  /** Минимальное значение масштаба (на случай очень крупного контента). */
  minScale?: number;
  /** Максимальное значение масштаба (по умолчанию 1 — не увеличиваем мелкий контент). */
  maxScale?: number;
  /** Включает расчёт масштаба только когда узлы уже смонтированы. */
  enabled?: boolean;
  /**  */
  padding?: number;
}

/**
 * Вычисляет масштаб, при котором содержимое сцены полностью помещается в её
 * контейнер. Меряем `offsetWidth/offsetHeight` (они не учитывают CSS `transform`,
 * в отличие от `getBoundingClientRect`), чтобы избежать рекурсивной зависимости
 * «scale → размер → scale».
 *
 * Реагирует не только на изменение размеров контейнера и контента
 * (`ResizeObserver`), но и на любые мутации в дочернем DOM (`MutationObserver`),
 * чтобы поймать асинхронный mount компонентов в `react-live` и подгрузку
 * шрифтов/иконок/стилей.
 */
export function useFitScale(
  containerRef: React.RefObject<HTMLElement | null>,
  contentRef: React.RefObject<HTMLElement | null>,
  options: UseFitScaleOptions = {},
) {
  const { minScale = 0.05, maxScale = 1, enabled = true, padding = 10 } = options;
  const [scale, setScale] = React.useState(maxScale);

  React.useLayoutEffect(() => {
    if (!enabled) {
      return undefined;
    }

    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) {
      return undefined;
    }

    const update = () => {
      const containerWidth = container.clientWidth - padding * 2;
      const containerHeight = container.clientHeight - padding * 2;

      // offsetWidth/offsetHeight дают «нативные» размеры элемента в layout,
      // без учёта CSS transform. scrollWidth/Height — fallback, если контент
      // overflow'ит свой родительский бокс (например, modal-portal во вне).
      const contentWidth = Math.max(content.offsetWidth, content.scrollWidth);
      const contentHeight = Math.max(content.offsetHeight, content.scrollHeight);

      if (containerWidth <= 0 || containerHeight <= 0) {
        return;
      }
      if (contentWidth <= 0 || contentHeight <= 0) {
        return;
      }

      const fit = Math.min(containerWidth / contentWidth, containerHeight / contentHeight);
      const next = Math.min(maxScale, Math.max(minScale, fit));

      setScale((prev) => (Math.abs(prev - next) < 0.001 ? prev : next));
    };

    update();

    const ro = new ResizeObserver(update);
    ro.observe(container);
    ro.observe(content);

    // Многие VKUI-компоненты подгружаются асинхронно (`dynamic`-импорты,
    // `useMounted`-гейты, ленивые иконки). ResizeObserver не ловит изменения
    // scrollWidth/scrollHeight без изменения content-box, поэтому добавляем
    // MutationObserver, чтобы реагировать на любые DOM-мутации внутри сцены.
    const mo = new MutationObserver(() => {
      requestAnimationFrame(update);
    });
    mo.observe(content, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
    });

    // Несколько отложенных пересчётов на случай гонки рендера/загрузки шрифтов.
    const raf1 = requestAnimationFrame(update);
    const raf2 = requestAnimationFrame(() => requestAnimationFrame(update));
    const timeout1 = window.setTimeout(update, 100);
    const timeout2 = window.setTimeout(update, 500);

    return () => {
      ro.disconnect();
      mo.disconnect();
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      window.clearTimeout(timeout1);
      window.clearTimeout(timeout2);
    };
  }, [containerRef, contentRef, minScale, maxScale, enabled]);

  return scale;
}
