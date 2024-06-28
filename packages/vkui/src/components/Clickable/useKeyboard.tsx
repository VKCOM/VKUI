import * as React from 'react';
import { shouldTriggerClickOnEnterOrSpace } from '../../lib/accessibility';

/*
 * [a11y]
 * Обрабатывает событие onkeydown
 * для кастомных доступных элементов:
 * - role="link" (активация по Enter)
 * - role="button" (активация по Space и Enter)
 */
export function useKeyboard(): {
  onKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void;
} {
  function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (!shouldTriggerClickOnEnterOrSpace(e)) {
      return;
    }

    e.preventDefault();

    // @ts-expect-error: TS2339 У элемента должен быть клик
    e.target.click?.();
  }

  return { onKeyDown };
}
