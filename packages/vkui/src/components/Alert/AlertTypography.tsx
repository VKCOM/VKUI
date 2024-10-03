'use client';

import * as React from 'react';
import { usePlatform } from '../../hooks/usePlatform';
import type { HasChildren } from '../../types';
import { Caption } from '../Typography/Caption/Caption';
import { Footnote } from '../Typography/Footnote/Footnote';
import { Text } from '../Typography/Text/Text';
import { Title } from '../Typography/Title/Title';
import styles from './Alert.module.css';

interface AlertTypography extends HasChildren {
  id: string;
}
export const AlertHeader = (props: AlertTypography): React.ReactNode => {
  const platform = usePlatform();

  switch (platform) {
    case 'ios':
      return <Title className={styles.header} weight="1" level="3" {...props} />;
    default:
      return <Title className={styles.header} weight="2" level="2" {...props} />;
  }
};
export const AlertText = (props: AlertTypography): React.ReactNode => {
  const platform = usePlatform();

  switch (platform) {
    case 'vkcom':
      return <Footnote className={styles.text} {...props} />;
    case 'ios':
      return <Caption className={styles.text} {...props} />;
    default:
      return <Text Component="span" className={styles.text} weight="3" {...props} />;
  }
};
