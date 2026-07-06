'use client';
/* eslint-disable jsdoc/require-jsdoc */

import type * as React from 'react';
import { usePlatform } from '../../hooks/usePlatform';
import type { HasChildren } from '../../types';
import { Caption } from '../Typography/Caption/Caption';
import { Text } from '../Typography/Text/Text';
import { Title } from '../Typography/Title/Title';
import styles from './Alert.module.css';

interface AlertTypography extends HasChildren {
  'id': string;
  'data-testid'?: string | undefined;
}
export const AlertTitle = (props: AlertTypography): React.ReactNode => {
  const platform = usePlatform();

  if (platform === 'ios') {
    return <Title className={styles.title} weight="1" level="3" {...props} />;
  }

  return <Title className={styles.title} weight="2" level="2" {...props} />;
};
export const AlertDescription = (props: AlertTypography): React.ReactNode => {
  const platform = usePlatform();

  if (platform === 'ios') {
    return <Caption className={styles.description} {...props} />;
  }

  return <Text Component="span" className={styles.description} weight="3" {...props} />;
};
