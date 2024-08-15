import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HasComponent, HTMLAttributesWithRootRef } from '../../types';
import styles from './Group.module.css';

export type GroupHeaderProps = HTMLAttributesWithRootRef<HTMLElement> & HasComponent;
export const GroupHeader: React.FC<GroupHeaderProps> = ({
  className,
  ...restProps
}: GroupHeaderProps): React.ReactNode => (
  <div className={classNames(className, styles['Group_header'])} {...restProps} />
);
GroupHeader.displayName = 'GroupHeader';
