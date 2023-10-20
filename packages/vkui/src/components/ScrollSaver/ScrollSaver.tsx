import * as React from 'react';
import { useNavId } from '../../components/NavIdContext/useNavId';
import { useNavDirection } from '../../components/NavTransitionDirectionContext/NavTransitionDirectionContext';
import { usePatchChildrenRef } from '../../hooks/usePatchChildrenRef';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { HasRootRef } from '../../types';
import { useScrollSaverCache } from './ScrollSaverContext';

interface ScrollSaverProps {
  /*
   * Уникальный идентификатор элемента скролл которого надо запомнить.
   * Важно задавать id, так как на одной панели может понадобится запомнить позиции нескольких скролл-боксов.
   **/
  id: string;
  /*
   * Режим сохранения скролла: по умолчанию `forward`.
   * `forward` - позиция скролла сохраняется только при переходе вперёд и восстанавливается при переходе назад.
   * `always` - позиция скролла сохраняется и при переходе вперёд и при переходе назад.
   **/
  saveMode?: 'forward' | 'always';
  /*
   * Если передан реакт-компонент, то он должен поддерживать getRootRef.
   **/
  children: React.ReactElement<HasRootRef<any>> | React.ReactElement;
  /*
   * Режим для получения рефа на элемент для скролла через getRef проп, вместо getRootRef (актуально для компонента HorizontalScroll)
   **/
  useGetRef?: boolean;
}

/**
 * Компонент-обертка для сохранения позиции скролла элемента при переходах между View и Panel.
 * По умолчанию позволяет восстановить значение скролла при возвращении назад.
 */
export function ScrollSaver(props: ScrollSaverProps) {
  const [childrenRef, children] = usePatchChildrenRef(props.children, props.useGetRef);
  useScrollSaver(childrenRef, props.id, props.saveMode);

  return children;
}

export function useScrollSaver<T extends HTMLElement>(
  elementRef: React.RefObject<T>,
  id: ScrollSaverProps['id'],
  saveMode: ScrollSaverProps['saveMode'] = 'forward',
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

interface ScrollSaverWithoutChildrenProps<T = HTMLElement>
  extends Omit<ScrollSaverProps, 'useGetRef'> {
  elementRef: React.RefObject<T>;
}

/* Компонентный Вариант useScrollSaver хука для динамического рендеринга, чтобы можно было пробросить и использовать любой ref
 * children проп можно передать, но ref из него браться не будет */
export function ScrollSaverWithoutChildren(props: ScrollSaverWithoutChildrenProps) {
  useScrollSaver(props.elementRef, props.id, props.saveMode);

  return props.children;
}

function useUniqueId(id: string) {
  const { view: viewId, panel: panelId } = useNavId();
  const uniqueId = `${viewId}-${panelId}-${id}`;
  return uniqueId;
}
