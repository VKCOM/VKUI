'use client';

import { useContext, useRef } from 'react';
import { useRootRef } from '../../../hooks/useExternRef';
import { setRef } from '../../../lib/utils';
import type { ModalOverlayProps } from '../../ModalOverlay/ModalOverlay';
import { ModalRootOverlayContext } from '../ModalRootContext';
import styles from './VisuallyHiddenModalOverlay.module.css';

export type VisuallyHiddenModalOverlayProps = ModalOverlayProps;

/**
 * `ModalRoot` выставляет общий `ModalOverlay` для всех потомков, и чтобы не нарушить логику
 * в `ModalPage` и `ModalCard`, в них прокидывается данный компонент, который визуально не виден,
 * но при этом на нём сохраняется возможность взаимодействия.
 *
 * В `getRooRef` отдаёт ссылку на DOM общего `ModalOverlay`.
 *
 * @private
 */
export const VisuallyHiddenModalOverlay = ({
  visible: visibleExcluded,
  position: positionExcluded,
  getRootRef: getRootRefProp,
  ref: refProp,
  disableOpenAnimation,
  disableCloseAnimation,
  ...restProps
}: VisuallyHiddenModalOverlayProps) => {
  const getRootRef = useRootRef(getRootRefProp, refProp);
  const ref = useContext(ModalRootOverlayContext);
  const cleanupRef = useRef<(() => void) | undefined>(undefined);
  return (
    <div
      {...restProps}
      aria-hidden="true"
      className={styles.host}
      ref={function handleCurrentRefForForwardContextRef(node) {
        if (!node && cleanupRef.current) {
          const cleanup = cleanupRef.current;
          cleanupRef.current = undefined;
          cleanup();
          return;
        }
        const element = node ? ref.current : null;
        if (typeof getRootRef === 'function') {
          const result = getRootRef(element);
          cleanupRef.current = typeof result === 'function' ? result : undefined;
        } else {
          setRef(element, getRootRef);
        }
      }}
    />
  );
};
