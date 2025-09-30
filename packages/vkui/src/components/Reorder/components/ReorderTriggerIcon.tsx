'use client';

import type * as React from 'react';
import { Icon24Reorder, Icon24ReorderIos } from '@vkontakte/icons';
import { usePlatform } from '../../../hooks/usePlatform';
import { VisuallyHidden } from '../../VisuallyHidden/VisuallyHidden';
import styles from './ReorderTriggerIcon.module.css';

type IconType = typeof Icon24Reorder;

type PropsOfComponent<T> = T extends React.ComponentType<infer P> ? P : never;

type IconsProps = PropsOfComponent<typeof Icon24Reorder>;

interface ReorderTriggerIconProps
  extends IconsProps,
    Omit<React.HTMLAttributes<HTMLElement>, keyof IconsProps> {
  /**
   *
   */
  Icon?: IconType;
}

export function ReorderTriggerIcon({
  Icon: IconProp,
  children,
  className,
  ...restProps
}: ReorderTriggerIconProps) {
  const platform = usePlatform();
  const Icon = IconProp || (platform === 'ios' ? Icon24ReorderIos : Icon24Reorder);

  return (
    <Icon className={styles.icon} {...restProps}>
      {children && <VisuallyHidden>{children}</VisuallyHidden>}
    </Icon>
  );
}
