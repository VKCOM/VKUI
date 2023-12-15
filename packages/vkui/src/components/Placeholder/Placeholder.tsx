import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { HasComponent, HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { Headline } from '../Typography/Headline/Headline';
import { Title } from '../Typography/Title/Title';
import styles from './Placeholder.module.css';

export interface PlaceholderContainerProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Растягивает плейсхолдер на весь экран, но в таком случае на экране должен быть только плейсхолдер
   */
  stretched?: boolean;
  /**
   * Убирает отступы у компонента
   */
  noPadding?: boolean;
}

const PlaceholderContainer = ({
  stretched,
  noPadding = false,
  ...restProps
}: PlaceholderContainerProps) => (
  <RootComponent
    baseClassName={classNames(
      styles['Placeholder'],
      stretched && styles['Placeholder--stretched'],
      !noPadding && styles['Placeholder--withPadding'],
    )}
    {...restProps}
  />
);

export type PlaceholderIconProps = HTMLAttributesWithRootRef<HTMLDivElement>;

const PlaceholderIcon = (props: PlaceholderIconProps) => (
  <RootComponent baseClassName={styles['Placeholder__icon']} {...props} />
);

export type PlaceholderHeaderProps = HTMLAttributesWithRootRef<HTMLElement> & HasComponent;

const PlaceholderHeader = ({ className, ...restProps }: PlaceholderHeaderProps) => (
  <Title
    level="2"
    weight="2"
    className={classNames(className, styles['Placeholder__header'])}
    {...restProps}
  />
);

export type PlaceholderTextProps = HTMLAttributesWithRootRef<HTMLElement> & HasComponent;

const PlaceholderText = ({ className, ...restProps }: PlaceholderTextProps) => (
  <Headline
    weight="3"
    className={classNames(className, styles['Placeholder__text'])}
    {...restProps}
  />
);

export type PlaceholderActionsProps = HTMLAttributesWithRootRef<HTMLDivElement>;

const PlaceholderActions = (props: PlaceholderActionsProps) => (
  <RootComponent baseClassName={styles['Placeholder__action']} {...props} />
);

export interface PlaceholderProps extends PlaceholderContainerProps {
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
}

/**
 * @see https://vkcom.github.io/VKUI/#/Placeholder
 */
export const Placeholder = ({
  icon,
  header,
  children,
  action,
  noPadding = false,
  ...restProps
}: PlaceholderProps) => (
  <PlaceholderContainer noPadding={noPadding} {...restProps}>
    {hasReactNode(icon) && <PlaceholderIcon>{icon}</PlaceholderIcon>}
    {hasReactNode(header) && <PlaceholderHeader>{header}</PlaceholderHeader>}
    {hasReactNode(children) && <PlaceholderText>{children}</PlaceholderText>}
    {hasReactNode(action) && <PlaceholderActions>{action}</PlaceholderActions>}
  </PlaceholderContainer>
);

Placeholder.Container = PlaceholderContainer;
Placeholder.Icon = PlaceholderIcon;
Placeholder.Header = PlaceholderHeader;
Placeholder.Text = PlaceholderText;
Placeholder.Actions = PlaceholderActions;
