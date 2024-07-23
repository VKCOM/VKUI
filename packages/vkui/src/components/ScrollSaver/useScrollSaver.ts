import * as React from 'react';
import { useNavId } from '../../components/NavIdContext/useNavId';
import { useNavDirection } from '../../components/NavTransitionDirectionContext/NavTransitionDirectionContext';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { useScrollSaverCache } from './ScrollSaverContext';
import { ScrollSaveModeType } from './types';

export function useScrollSaver<T extends HTMLElement>(
  elementRef: React.RefObject<T>,
  id: string,
  saveMode: ScrollSaveModeType = 'forward',
) {
  const uniqueId = useUniqueId(id);
  const direction = useNavDirection();
  const scrollSaverCache = useScrollSaverCache();

  useIsomorphicLayoutEffect(
    function handleScrollPosition() {
      const scrollId = uniqueId;
      const refNode = elementRef.current;

      function restoreScrollPosition() {
        if (!refNode) {
          return;
        }

        const scrollPosition = scrollSaverCache[scrollId];
        if (!scrollPosition) {
          return;
        }

        const shouldRestoreMovingBackwards = direction === 'backwards' && saveMode === 'forward';
        const shouldRestoreMovingForwards = saveMode === 'always';
        const shouldRestore = shouldRestoreMovingBackwards || shouldRestoreMovingForwards;
        if (!shouldRestore) {
          return;
        }

        const { inlineStart, blockStart } = scrollSaverCache[scrollId];
        refNode.scrollLeft = inlineStart;
        refNode.scrollTop = blockStart;
      }

      restoreScrollPosition();

      return function saveScrollPositionOnUnmount() {
        if (!refNode) {
          return;
        }
        scrollSaverCache[scrollId] = {
          inlineStart: refNode.scrollLeft,
          blockStart: refNode.scrollTop,
        };
      };
    },
    [direction, uniqueId, saveMode, elementRef],
  );

  return elementRef;
}

function useUniqueId(id: string) {
  const { view: viewId, panel: panelId } = useNavId();
  const uniqueId = `${viewId}-${panelId}-${id}`;
  return uniqueId;
}
