'use client';

import { useMemo } from 'react';
import { ModalContext } from '../../context/ModalContext';
import { inRange } from '../../helpers/range';
import { SNAP_POINT_DETENTS, SNAP_POINT_SAFE_RANGE, type SnapPoint } from '../../lib/sheet';
import { useModalManager } from '../ModalRoot/useModalManager';
import { ModalPageInternal } from './ModalPageInternal';
import type { ModalPageProps } from './types';

const snapPointCache = new Map<string, Exclude<SnapPoint, 'auto'>>();

/**
 * @see https://vkui.io/components/modal-page
 */
export const ModalPage = ({
  id: idProp,
  nav,
  open = false,
  modalOverlayTestId,
  noFocusToDialog,
  onOpen,
  onOpened,
  onClose,
  onClosed,
  size = 's',
  settlingHeight = 50,
  dynamicContentHeight,
  disableModalOverlay,
  keepMounted = false,
  ...restProps
}: ModalPageProps) => {
  const { mounted, shouldPreserveSnapPoint, id, ...resolvedProps } = useModalManager({
    id: nav || idProp,
    open,
    keepMounted,
    modalOverlayTestId,
    disableModalOverlay,
    noFocusToDialog,
    onOpen,
    onOpened,
    onClose,
    onClosed,
  });

  const snapPoint = useMemo((): SnapPoint => {
    if (dynamicContentHeight) {
      return 'auto';
    }

    if (shouldPreserveSnapPoint) {
      const snapPointCached = snapPointCache.get(id);

      if (snapPointCached) {
        return snapPointCached;
      }

      const nextSnapPoint = transformSettlingHeightToSnapPoint(settlingHeight);
      snapPointCache.set(id, nextSnapPoint);

      return nextSnapPoint;
    } else {
      snapPointCache.delete(id);
    }

    return transformSettlingHeightToSnapPoint(settlingHeight);
  }, [id, shouldPreserveSnapPoint, dynamicContentHeight, settlingHeight]);

  if (!mounted) {
    return null;
  }

  return (
    <ModalContext.Provider value={id}>
      <ModalPageInternal
        id={id}
        size={size}
        aria-labelledby={`${id}-label`}
        snapPoint={snapPoint}
        onSnapPointChange={
          snapPoint !== 'auto' && shouldPreserveSnapPoint
            ? (snapPoint) => {
                const snapPointCached = snapPointCache.get(id);

                if (snapPointCached) {
                  snapPointCached.initial = snapPoint;
                  snapPointCache.set(id, snapPointCached);
                }
              }
            : undefined
        }
        {...resolvedProps}
        {...restProps}
      />
    </ModalContext.Provider>
  );
};

function transformSettlingHeightToSnapPoint(settlingHeight: number): Exclude<SnapPoint, 'auto'> {
  const currentSnapPoint = Math.min(
    Math.max(settlingHeight, SNAP_POINT_SAFE_RANGE.LOWER),
    SNAP_POINT_DETENTS.LARGE,
  );

  return {
    initial: currentSnapPoint,
    detents: inRange(currentSnapPoint, SNAP_POINT_SAFE_RANGE.LOWER, SNAP_POINT_SAFE_RANGE.HIGHEST)
      ? [SNAP_POINT_DETENTS.MIN, currentSnapPoint, SNAP_POINT_DETENTS.LARGE]
      : [SNAP_POINT_DETENTS.MIN, currentSnapPoint],
  };
}
