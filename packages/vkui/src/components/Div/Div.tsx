import * as React from 'react';
import { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Div.module.css';

export type DivProps = HTMLAttributesWithRootRef<HTMLDivElement>;

/**
 * @see https://vkcom.github.io/VKUI/#/Div
 */
export const Div = (props: DivProps) => <RootComponent baseClassName={styles['Div']} {...props} />;
