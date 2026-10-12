'use client';

import { classNames } from '@vkontakte/vkjs';
import type { HasComponent, HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Group.module.css';

export type GroupHeaderProps = HTMLAttributesWithRootRef<HTMLElement> & HasComponent;
export const GroupHeader = ({ className, ...restProps }: GroupHeaderProps) => (
  <RootComponent className={classNames(className, styles.header)} {...restProps} />
);
