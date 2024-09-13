import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { HasComponent, HTMLAttributesWithRootRef } from '../../types';
import { Footnote } from '../Typography/Footnote/Footnote';
import styles from './Group.module.css';

export type GroupDescriptionProps = HTMLAttributesWithRootRef<HTMLElement> & HasComponent;
export const GroupDescription: React.FC<GroupDescriptionProps> = ({
  className,
  ...restProps
}: GroupDescriptionProps): React.ReactNode => (
  <Footnote className={classNames(className, styles['Group__description'])} {...restProps} />
);
GroupDescription.displayName = 'GroupDescription';
