import * as React from 'react';
import type { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Mark.module.css';

export type MarkProps = HTMLAttributesWithRootRef<HTMLDivElement>;

/**
 * Компонент используется для выделения фрагментов текста,
 * например при поиске определенных слов или выделения текста в цитате.
 *
 * @since 6.1.0
 * @see https://vkcom.github.io/VKUI/#/Mark
 */
export const Mark = (props: MarkProps): React.ReactNode => (
  <RootComponent baseClassName={styles['Mark']} Component="mark" {...props} />
);
