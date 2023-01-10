import * as React from 'react';
import { hasMouse as hasPointerLib } from '@vkontakte/vkjs';
import { AdaptivityContext } from '../components/AdaptivityProvider/AdaptivityContext';
import { useIsClient } from './useIsClient';

/**
 * Определение происходит с помощью `window.matchMedia`. Для того, чтобы не было ошибок при гидратации, по умолчанию
 * откладываем определение на второй рендер.
 *
 * [No SSR] Если передать `false`, то определение будет сразу.
 */
export function useAdaptivityHasPointer(deferDetect?: true): undefined | boolean; // prettier-ignore
export function useAdaptivityHasPointer(deferDetect?: false): boolean;
export function useAdaptivityHasPointer(deferDetect = true): undefined | boolean {
  const { hasPointer: hasPointerContext } = React.useContext(AdaptivityContext);
  const hasPointer = hasPointerContext === undefined ? hasPointerLib : hasPointerContext;

  const isClient = useIsClient(!deferDetect);
  if (!isClient) {
    return undefined;
  }

  return hasPointer;
}
