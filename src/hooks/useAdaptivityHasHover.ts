import * as React from 'react';
import { hasHover as hasHoverLib } from '@vkontakte/vkjs';
import { AdaptivityContext } from '../components/AdaptivityProvider/AdaptivityContext';
import { useIsClient } from './useIsClient';

/**
 * Определение происходит с помощью `window.matchMedia`. Для того, чтобы не было ошибок при гидратации, по умолчанию
 * откладываем определение на второй рендер.
 *
 * [No SSR] Если передать `false`, то определение будет сразу.
 */
export function useAdaptivityHasHover(deferDetect?: true): undefined | boolean;
export function useAdaptivityHasHover(deferDetect?: false): boolean;
export function useAdaptivityHasHover(deferDetect = true): undefined | boolean {
  const { hasHover: hasHoverContext } = React.useContext(AdaptivityContext);
  const hasHover = hasHoverContext === undefined ? hasHoverLib : hasHoverContext;

  const isClient = useIsClient(!deferDetect);
  if (!isClient) {
    return undefined;
  }

  return hasHover;
}
