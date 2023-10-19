import * as React from 'react';
import { useNavDirection } from '../../components/NavTransitionDirectionContext/NavTransitionDirectionContext';
export { useNavId } from '../../components/NavIdContext/useNavId';
import { usePatchChildrenRef } from '../../hooks/usePatchChildrenRef';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { HasRootRef } from '../../types';
import { useScrollSaverCache } from './ScrollSaverContext';

export interface ScrollSaverProps {
  /*
   * Уникальный идентификатор элемента скролл которого надо запомнить.
   * Важно задавать id, так как на одной панели может понадобится запомнить позиции нескольких скролл-боксов.
   **/
  id: string;
  /*
   * Если передан реакт-компонент, то он должен поддерживать getRootRef.
   **/
  children: React.ReactElement<HasRootRef<any>> | React.ReactElement;
  /*
   * Режим для получения рефа на элемент для скролла через getRef проп, вместо getRootRef (актуально для компонента HorizontalScroll)
   **/
  useGetRef?: boolean;
  /*
   * Режим сохранения скролла: по умолчанию `forward`.
   * `forward` - позиция скролла сохраняется только при переходе вперёд и восстанавливается при переходе назад.
   * `always` - позиция скролла сохраняется и при переходе вперёд и при переходе назад.
   **/
  saveMode?: 'forward' | 'always';
}

/**
 * Компонент-обертка для сохранения позиции скролла элемента при переходах между View и Panel.
 * По умолчанию позволяет восстановить значение скролла при возвращении назад.
 */
export function ScrollSaver({
  id,
  children: childrenProp,
  saveMode = 'forward',
  useGetRef,
}: ScrollSaverProps) {
  const uniqueId = useUniqueId(id);
  const [childrenRef, children] = usePatchChildrenRef(childrenProp, useGetRef);
  const direction = useNavDirection();
  const scrollSaverCache = useScrollSaverCache();

  useIsomorphicLayoutEffect(
    function handleScrollPosition() {
      const scrollId = uniqueId;
      const childrenNode = childrenRef.current;

      function restoreScrollPosition() {
        const scrollPosition = scrollSaverCache[scrollId];

        const shouldRestoreMovingBackwards = direction === 'backwards' && saveMode === 'forward';
        const shouldRestoreMovingForwards = saveMode === 'always';
        const shouldRestore = shouldRestoreMovingBackwards || shouldRestoreMovingForwards;
        if (!shouldRestore) {
          return;
        }

        if (!scrollPosition) {
          return;
        }

        const { inlineStart, blockStart } = scrollSaverCache[scrollId];
        if (inlineStart) {
          childrenNode.scrollLeft = inlineStart;
        }
        if (blockStart) {
          childrenNode.scrollTop = blockStart;
        }
      }

      restoreScrollPosition();

      return function saveScrollPositionOnUnmount() {
        scrollSaverCache[scrollId] = {
          inlineStart: childrenNode.scrollLeft,
          blockStart: childrenNode.scrollTop,
        };
      };
    },
    [direction, uniqueId, saveMode, childrenRef],
  );

  return children;
}

function useUniqueId(id: string) {
  const { view: viewId, panel: panelId } = useNavId();
  const uniqueId = `${viewId}-${panelId}-${id}`;
  return uniqueId;
}
