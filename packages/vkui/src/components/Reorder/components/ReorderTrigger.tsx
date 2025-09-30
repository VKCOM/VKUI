'use client';

import * as React from 'react';
import { Icon24Reorder, Icon24ReorderIos } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { useDraggableWithDomApi } from '../../../hooks/useDraggableWithDomApi';
import { usePlatform } from '../../../hooks/usePlatform';
import { useIsomorphicLayoutEffect } from '../../../lib/useIsomorphicLayoutEffect';
import { Touch, type TouchProps } from '../../Touch/Touch';
import { VisuallyHidden } from '../../VisuallyHidden/VisuallyHidden';
import { ItemContext, ReorderContext } from '../context';
import styles from './Reorder.module.css';

type VendorIconType = typeof Icon24ReorderIos;

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>> | VendorIconType;

export interface ReorderTriggerProps extends TouchProps {
  /**
   *
   */
  Icon?: IconType;
  /**
   *
   */
  onDragStateChange?: (dragging: boolean) => void;
}

export function ReorderTrigger({
  children,
  className,
  disabled: disabledProp,
  Icon: IconProp,
  onDragStateChange,
  ...restProps
}: ReorderTriggerProps) {
  const { itemRef } = React.useContext(ItemContext);
  const { onReorder, disabled: disabledFromContext } = React.useContext(ReorderContext);
  const platform = usePlatform();
  const Icon = IconProp || (platform === 'ios' ? Icon24ReorderIos : Icon24Reorder);
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
      {children && <VisuallyHidden>{children}</VisuallyHidden>}
      <Icon className={styles.icon} />
    </Touch>
  );
}
