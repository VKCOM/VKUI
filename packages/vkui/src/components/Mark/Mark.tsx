import * as React from 'react';
import { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Mark.module.css';

export type MarkProps = HTMLAttributesWithRootRef<HTMLDivElement>;

/**
 * Компонент Mark используется для выделения фрагментов текста,
 * например при поиске определенных слов или выделения текста в цитате.
 *
 * @see https://vkcom.github.io/VKUI/#/Mark
 */
export const Mark = (props: MarkProps) => (
  <RootComponent baseClassName={styles['Mark']} Component="mark" {...props} />
);
