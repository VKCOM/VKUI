'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkui';
import styles from './BlockWrapper.module.css';

export function BlockWrapper({
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
