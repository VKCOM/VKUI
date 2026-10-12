'use client';

import { useContext } from 'react';
import { useExternRef } from '../../../hooks/useExternRef';
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
  const getRootRef = useExternRef(getRootRefProp, refProp);
  const ref = useContext(ModalRootOverlayContext);
  return (
    <div
      {...restProps}
      aria-hidden="true"
      className={styles.host}
      ref={function handleCurrentRefForForwardContextRef() {
        setRef(ref.current, getRootRef);
      }}
    />
  );
};
