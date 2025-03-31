import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { type HasComponent, type HTMLAttributesWithRootRef } from '../../types';
import { Headline } from '../Typography/Headline/Headline';
import styles from './Placeholder.module.css';

export type PlaceholderDescriptionProps = HTMLAttributesWithRootRef<HTMLElement> & HasComponent;

export const PlaceholderDescription: React.FC<PlaceholderDescriptionProps> = ({
  className,
  ...restProps
}): React.ReactNode => (
  <Headline weight="3" className={classNames(className, styles.description)} {...restProps} />
);
