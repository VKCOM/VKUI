import * as React from 'react';
import { warnOnce } from '../../lib/warnOnce';
import type { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Div.module.css';

export type DivProps = HTMLAttributesWithRootRef<HTMLDivElement>;

const warn = warnOnce('Div');

/**
 * @see https://vkui.io/components/div
 *
 * @deprecated Since 7.9.0. Будет удалено в **VKUI v9**.
 * Используйте компонент `Box`.
 */
export const Div = (props: DivProps): React.ReactNode => {
  if (process.env.NODE_ENV === 'development') {
    warn('Компонент Div устарел, используйте компонент Box в качестве альтернативы.');
  }

  return <RootComponent baseClassName={styles.host} {...props} />;
};
