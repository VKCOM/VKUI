import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import type { HasComponent, HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { Headline } from '../Typography/Headline/Headline';
import { Title } from '../Typography/Title/Title';
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

const PlaceholderContainer = ({
  stretched,
  noPadding = false,
  ...restProps
}: PlaceholderContainerProps): React.ReactNode => (
  <RootComponent
    baseClassName={classNames(
      styles.host,
      stretched && styles.stretched,
      !noPadding && styles.withPadding,
    )}
    {...restProps}
  />
);

export type PlaceholderIconProps = HTMLAttributesWithRootRef<HTMLDivElement>;

const PlaceholderIcon = (props: PlaceholderIconProps): React.ReactNode => (
  <RootComponent baseClassName={styles.icon} {...props} />
);

export type PlaceholderTitleProps = HTMLAttributesWithRootRef<HTMLElement> & HasComponent;

const PlaceholderTitle = ({ className, ...restProps }: PlaceholderTitleProps): React.ReactNode => (
  <Title level="2" weight="2" className={classNames(className, styles.title)} {...restProps} />
);

export type PlaceholderDescriptionProps = HTMLAttributesWithRootRef<HTMLElement> & HasComponent;

const PlaceholderDescription = ({
  className,
  ...restProps
}: PlaceholderDescriptionProps): React.ReactNode => (
  <Headline weight="3" className={classNames(className, styles.description)} {...restProps} />
);

export type PlaceholderActionsProps = HTMLAttributesWithRootRef<HTMLDivElement>;

const PlaceholderActions = (props: PlaceholderActionsProps): React.ReactNode => (
  <RootComponent baseClassName={styles.action} {...props} />
);

export interface PlaceholderProps extends PlaceholderContainerProps {
  /**
   * Иконка
   */
  icon?: React.ReactNode;
  /**
   * Заголовок плейсхолдера
   */
  title?: React.ReactNode;
  /**
   * Кнопка действия
   */
  action?: React.ReactNode;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Placeholder
 */
export const Placeholder: React.FC<PlaceholderProps> & {
  Container: typeof PlaceholderContainer;
  Icon: typeof PlaceholderIcon;
  Title: typeof PlaceholderTitle;
  Description: typeof PlaceholderDescription;
  Actions: typeof PlaceholderActions;
} = ({ icon, title, children, action, noPadding = false, ...restProps }: PlaceholderProps) => (
  <PlaceholderContainer noPadding={noPadding} {...restProps}>
    {hasReactNode(icon) && <PlaceholderIcon>{icon}</PlaceholderIcon>}
    {hasReactNode(title) && <PlaceholderTitle>{title}</PlaceholderTitle>}
    {hasReactNode(children) && <PlaceholderDescription>{children}</PlaceholderDescription>}
    {hasReactNode(action) && <PlaceholderActions>{action}</PlaceholderActions>}
  </PlaceholderContainer>
);

Placeholder.Container = PlaceholderContainer;
Placeholder.Icon = PlaceholderIcon;
Placeholder.Title = PlaceholderTitle;
Placeholder.Description = PlaceholderDescription;
Placeholder.Actions = PlaceholderActions;
