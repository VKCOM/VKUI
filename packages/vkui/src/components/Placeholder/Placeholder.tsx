import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { Headline } from '../Typography/Headline/Headline';
import { Title } from '../Typography/Title/Title';
import styles from './Placeholder.module.css';

export interface PlaceholderProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Иконка
   */
  icon?: React.ReactNode;
  /**
   * Заголовок плейсхолдера
   */
  header?: React.ReactNode;
  /**
   * Кнопка действия
   */
  action?: React.ReactNode;
  /**
   * Растягивает плейсхолдер на весь экран, но в таком случае на экране должен быть только плейсхолдер
   */
  stretched?: boolean;
  /**
   * Добавляет отступы к компоненту
   */
  withPadding?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Placeholder
 */
export const Placeholder = ({
  icon,
  header,
  action,
  children,
  stretched,
  withPadding = true,
  ...restProps
}: PlaceholderProps) => (
  <RootComponent
    {...restProps}
    baseClassName={classNames(
      styles['Placeholder'],
      stretched && styles['Placeholder--stretched'],
      withPadding && styles['Placeholder--withPadding'],
    )}
  >
    {hasReactNode(icon) && <div className={styles['Placeholder__icon']}>{icon}</div>}
    {hasReactNode(header) && (
      <Title level="2" weight="2" className={styles['Placeholder__header']}>
        {header}
      </Title>
    )}
    {hasReactNode(children) && (
      <Headline weight="3" className={styles['Placeholder__text']}>
        {children}
      </Headline>
    )}
    {hasReactNode(action) && <div className={styles['Placeholder__action']}>{action}</div>}
  </RootComponent>
);
