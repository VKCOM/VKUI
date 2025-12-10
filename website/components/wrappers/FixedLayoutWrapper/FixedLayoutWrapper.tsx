'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkui';
import styles from './FixedLayoutWrapper.module.css';

export function FixedLayoutWrapper({
  children,
  className,
  ...restProps
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={classNames(styles.root, className)} {...restProps}>
      {children}
    </div>
  );
}
