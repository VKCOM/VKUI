'use client';
/* eslint-disable jsdoc/require-jsdoc */

import type { DataHTMLAttributes } from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useExternRef } from '../../hooks/useExternRef';
import { useCSSTransition, type UseCSSTransitionState } from '../../lib/animation/useCSSTransition';
import type { HasRootRef } from '../../types';
import styles from './ModalOverlay.module.css';

const positionClassNames = {
  absolute: styles.hostPositionAbsolute,
  fixed: styles.hostPositionFixed,
};

const transitionStateClassNames: Partial<Record<UseCSSTransitionState, string>> = {
  appear: styles['hostStateEnter'],
  appearing: styles['hostStateEntering'],
  appeared: styles['hostStateEntered'],
  enter: styles['hostStateEnter'],
  entering: styles['hostStateEntering'],
  entered: styles['hostStateEntered'],
  exit: styles['hostStateExit'],
  exiting: styles['hostStateExiting'],
  exited: styles['hostStateExited'],
};

export interface ModalOverlayProps
  extends DataHTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement> {
  visible?: boolean;
  position?: 'absolute' | 'fixed';
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  disableOpenAnimation?: boolean;
  disableCloseAnimation?: boolean;
}

/**
 * @private
 */
export const ModalOverlay = ({
  visible = false,
  position = 'absolute',
  getRootRef,
  onClick,
  disableOpenAnimation,
  disableCloseAnimation,
  ...restProps
}: ModalOverlayProps) => {
  const [transitionState, { ref, onTransitionEnd }] = useCSSTransition<HTMLDivElement>(visible, {
    enableAppear: !disableOpenAnimation,
    enableEnter: !disableOpenAnimation,
    enableExit: !disableCloseAnimation,
  });
  const handleRef = useExternRef(getRootRef, ref);

  return (
    <div
      {...restProps}
      ref={handleRef}
      aria-hidden="true"
      hidden={transitionState === 'exited'}
      className={classNames(
        styles.host,
        onClick === undefined && styles.nonInteractive,
        positionClassNames[position],
        transitionStateClassNames[transitionState],
      )}
      onClick={onClick}
      onTransitionEnd={onTransitionEnd}
    />
  );
};
