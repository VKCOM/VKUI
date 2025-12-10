'use client';
/* eslint-disable jsdoc/require-jsdoc */

import { Icon24Reorder, Icon24ReorderIos } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import {
  type DraggableProps,
  type UseDraggableProps,
  useDraggableWithDomApi,
} from '../../../hooks/useDraggableWithDomApi';
import { usePlatform } from '../../../hooks/usePlatform';
import { useIsomorphicLayoutEffect } from '../../../lib/useIsomorphicLayoutEffect';
import type { HTMLAttributesWithRootRef } from '../../../types';
import { Touch } from '../../Touch/Touch';
import { VisuallyHidden } from '../../VisuallyHidden/VisuallyHidden';
import styles from './CellDragger.module.css';

interface CellDraggerProps
  extends UseDraggableProps,
    Omit<HTMLAttributesWithRootRef<HTMLElement>, keyof DraggableProps> {
  disabled?: boolean;
  onDragStateChange?: (dragging: boolean) => void;
}

export const CellDragger = ({
  elRef,
  disabled,
  className,
  onDragStateChange,
  onDragFinish,
  children,
  ...restProps
}: CellDraggerProps): React.ReactNode => {
  const platform = usePlatform();
  const Icon = platform === 'ios' ? Icon24ReorderIos : Icon24Reorder;

  const { dragging, onDragStart, onDragMove, onDragEnd } = useDraggableWithDomApi({
    elRef,
    onDragFinish,
  });

  useIsomorphicLayoutEffect(() => {
    if (onDragStateChange) {
      onDragStateChange(dragging);
    }
  }, [dragging, onDragStateChange]);

  return (
    <Touch
      className={classNames(styles.host, className)}
      onStart={disabled ? undefined : onDragStart}
      onMoveY={disabled ? undefined : onDragMove}
      onEnd={disabled ? undefined : onDragEnd}
      {...restProps}
    >
      {children && <VisuallyHidden>{children}</VisuallyHidden>}
      <Icon className={styles.icon} />
    </Touch>
  );
};
