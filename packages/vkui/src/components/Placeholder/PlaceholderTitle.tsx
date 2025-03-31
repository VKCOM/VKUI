import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { type HasComponent, type HTMLAttributesWithRootRef } from '../../types';
import { Title } from '../Typography/Title/Title';
import styles from './Placeholder.module.css';

export type PlaceholderTitleProps = HTMLAttributesWithRootRef<HTMLElement> & HasComponent;

export const PlaceholderTitle: React.FC<PlaceholderTitleProps> = ({
  className,
  ...restProps
}): React.ReactNode => (
  <Title level="2" weight="2" className={classNames(className, styles.title)} {...restProps} />
);
