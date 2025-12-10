'use client';

import * as React from 'react';
import { classNames, Flex } from '@vkontakte/vkui';
import styles from './OverlayButtonWrapper.module.css';

export function OverlayButtonWrapper({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <Flex gap="m" justify="center" className={classNames(styles.root, className)}>
      {children}
    </Flex>
  );
}
