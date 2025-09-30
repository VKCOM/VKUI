'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useDraggableWithDomApi } from '../../../hooks/useDraggableWithDomApi';
import { useIsomorphicLayoutEffect } from '../../../lib/useIsomorphicLayoutEffect';
import { Touch, type TouchProps } from '../../Touch/Touch';
import { ItemContext, ReorderContext } from '../context';
import styles from './Reorder.module.css';

export interface ReorderTriggerProps extends TouchProps {
  /**
   *
   */
  onDragStateChange?: (dragging: boolean) => void;
}

export function ReorderTrigger({
  children,
  className,
  disabled: disabledProp,
  onDragStateChange,
  ...restProps
}: ReorderTriggerProps) {
  const { itemRef } = React.useContext(ItemContext);
  const { onReorder, disabled: disabledFromContext } = React.useContext(ReorderContext);
  const { dragging, onDragStart, onDragMove, onDragEnd } = useDraggableWithDomApi({
    elRef: itemRef,
    onDragFinish: onReorder,
  });

  const disabled = disabledFromContext === undefined ? disabledProp : disabledFromContext;

  useIsomorphicLayoutEffect(() => {
    if (onDragStateChange) {
      onDragStateChange(dragging);
    }
  }, [dragging, onDragStateChange]);

  return (
    <Touch
      className={classNames(styles.host, className)}
      disabled={disabled}
      onStart={disabled ? undefined : onDragStart}
      onMoveY={disabled ? undefined : onDragMove}
      onEnd={disabled ? undefined : onDragEnd}
      {...restProps}
    >
      {children}
    </Touch>
  );
}
