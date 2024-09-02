import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { HasComponent, HTMLAttributesWithRootRef } from '../../types';
import styles from './Group.module.css';

export type GroupHeaderProps = HTMLAttributesWithRootRef<HTMLElement> & HasComponent;
export const GroupHeader: React.FC<GroupHeaderProps> = ({
  className,
  ...restProps
}: GroupHeaderProps): React.ReactNode => (
  <div className={classNames(className, styles['Group__header'])} {...restProps} />
);
GroupHeader.displayName = 'GroupHeader';
