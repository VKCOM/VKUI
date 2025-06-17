'use client';

import * as React from 'react';
import { classNames, usePlatform } from '@vkontakte/vkui';
import styles from './FixedLayoutWrapper.module.css';

export function FixedLayoutWrapper({
  children,
  className,
  ...restProps
}: React.PropsWithChildren<{ className?: string }>) {
  const platform = usePlatform();

  return (
    <div
      className={classNames(styles.root, platform === 'vkcom' && styles.noBackground, className)}
      {...restProps}
    >
      {children}
    </div>
  );
}
