'use client';

import { Flex } from '@vkontakte/vkui';
import styles from './Footer.module.css';

export function Footer({ children }: React.PropsWithChildren) {
  return (
    <Flex Component="footer" align="center" gap="m" className={styles.root}>
      {children}
    </Flex>
  );
}
