import * as React from 'react';
import { Icon24Reorder, Icon24ReorderIos } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import {
  type DraggableProps,
  UseDraggableProps,
  useDraggableWithDomApi,
} from '../../../hooks/useDraggableWithDomApi';
import { usePlatform } from '../../../hooks/usePlatform';
import { Platform } from '../../../lib/platform';
import { useIsomorphicLayoutEffect } from '../../../lib/useIsomorphicLayoutEffect';
import { HTMLAttributesWithRootRef } from '../../../types';
import { Touch } from '../../Touch/Touch';
import styles from './CellDragger.module.css';

interface CellDraggerProps
  extends UseDraggableProps,
    Omit<HTMLAttributesWithRootRef<HTMLElement>, keyof DraggableProps> {
  disabled?: boolean;
  onDragStateChange?(dragging: boolean): void;
}

export const CellDragger = ({
  elRef,
  disabled,
  className,
  onDragStateChange,
  onDragFinish,
  ...restProps
}: CellDraggerProps) => {
  const platform = usePlatform();
  const Icon = platform === Platform.IOS ? Icon24ReorderIos : Icon24Reorder;

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
      className={classNames(styles['CellDragger'], className)}
      onStart={disabled ? undefined : onDragStart}
      onMoveY={disabled ? undefined : onDragMove}
      onEnd={disabled ? undefined : onDragEnd}
      {...restProps}
    >
      <Icon className={styles['CellDragger__icon']} />
    </Touch>
  );
};
