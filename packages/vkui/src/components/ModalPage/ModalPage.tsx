'use client';

import { useId, useMemo } from 'react';
import { ModalContext } from '../../context/ModalContext';
import { inRange } from '../../helpers/range';
import { getNavId } from '../../lib/getNavId';
import { SNAP_POINT_DETENTS, SNAP_POINT_SAFE_RANGE, type SnapPoint } from '../../lib/sheet';
import { warnOnce } from '../../lib/warnOnce';
import { useModalManager } from '../ModalRoot/useModalManager';
import { ModalPageInternal } from './ModalPageInternal';
import type { ModalPageProps } from './types';

const warn = warnOnce('ModalPage');

/**
 * @see https://vkcom.github.io/VKUI/#/ModalPage
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
  keepMounted = false,
  ...restProps
}: ModalPageProps) => {
  const generatingId = useId();
  const id = getNavId({ nav, id: idProp }, warn) || generatingId;

  const snapPoint = useMemo((): SnapPoint => {
    if (dynamicContentHeight) {
      return 'auto';
    }

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
  }, [settlingHeight, dynamicContentHeight]);

  const { mounted, ...resolvedProps } = useModalManager({
    id,
    open,
    keepMounted,
    modalOverlayTestId,
    noFocusToDialog,
    onOpen,
    onOpened,
    onClose,
    onClosed,
  });

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
        {...resolvedProps}
        {...restProps}
      />
    </ModalContext.Provider>
  );
};
