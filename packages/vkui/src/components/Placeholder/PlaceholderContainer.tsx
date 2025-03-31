import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { type HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Placeholder.module.css';

export interface PlaceholderContainerProps
  extends Omit<HTMLAttributesWithRootRef<HTMLDivElement>, 'title'> {
  /**
   * Растягивает плейсхолдер на весь экран, но в таком случае на экране должен быть только плейсхолдер
   */
  stretched?: boolean;
  /**
   * Убирает отступы у компонента
   */
  noPadding?: boolean;
}

export const PlaceholderContainer: React.FC<PlaceholderContainerProps> = ({
  stretched,
  noPadding = false,
  ...restProps
}): React.ReactNode => (
  <RootComponent
    baseClassName={classNames(
      styles.host,
      stretched && styles.stretched,
      !noPadding && styles.withPadding,
    )}
    {...restProps}
  />
);
