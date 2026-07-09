'use client';

import { Button } from '@vkontakte/vkui';
import styles from './SkipLink.module.css';

export function SkipLink() {
  return (
    <Button
      appearance="overlay"
      elevation="4"
      mode="primary"
      href="#vkui-docs-main"
      className={styles.host}
    >
      Перейти к содержимому
    </Button>
  );
}
