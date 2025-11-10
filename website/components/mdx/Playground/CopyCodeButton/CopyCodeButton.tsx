'use client';

import * as React from 'react';
import { CopyToClipboard } from '@vkontakte/vkui-docs-theme';
import { LiveContext } from 'react-live';
import styles from './CopyCodeButton.module.css';

export function CopyCodeButton() {
  const { newCode } = React.useContext(LiveContext);

  return <CopyToClipboard getValue={() => newCode || ''} className={styles.host} />;
}
