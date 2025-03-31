import * as React from 'react';
import { hasReactNode } from '@vkontakte/vkjs';
import { PlaceholderActions } from './PlaceholderActions';
import { PlaceholderContainer, type PlaceholderContainerProps } from './PlaceholderContainer';
import { PlaceholderDescription } from './PlaceholderDescription';
import { PlaceholderIcon } from './PlaceholderIcon';
import { PlaceholderTitle } from './PlaceholderTitle';

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

Placeholder.displayName = 'Placeholder';

Placeholder.Container = PlaceholderContainer;
Placeholder.Container.displayName = 'Placeholder.Container';

Placeholder.Icon = PlaceholderIcon;
Placeholder.Icon.displayName = 'Placeholder.Icon';

Placeholder.Title = PlaceholderTitle;
Placeholder.Title.displayName = 'Placeholder.Title';

Placeholder.Description = PlaceholderDescription;
Placeholder.Description.displayName = 'Placeholder.Description';

Placeholder.Actions = PlaceholderActions;
Placeholder.Actions.displayName = 'Placeholder.Actions';
