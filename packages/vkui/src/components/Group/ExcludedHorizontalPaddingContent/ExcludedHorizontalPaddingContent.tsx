import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HasRootRef } from '../../../types';
import styles from '../Group.module.css';

export interface GroupExcludedHorizontalPaddingContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement> {}

/**
 * Компонент для растягивания контента на всю ширину, игнорируя боковые отступы.
 *
 * @version 5.4.0
 * @see https://vkcom.github.io/VKUI/#/Group
 */
export const ExcludedHorizontalPaddingContent = ({
  className,
  getRootRef,
  ...restProps
}: GroupExcludedHorizontalPaddingContentProps) => (
  <div
    {...restProps}
    ref={getRootRef}
    className={classNames(styles['Group__excludedHorizontalPaddingContent'], className)}
  />
);
