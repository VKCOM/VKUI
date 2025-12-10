import * as React from 'react';
import { hasReactNode } from '@vkontakte/vkjs';
import { defineComponentDisplayNames } from '../../lib/react/defineComponentDisplayNames';
import { GroupContainer, type GroupContainerProps } from './GroupContainer';
import { GroupDescription } from './GroupDescription';
import { GroupExpandedContent } from './GroupExpandedContent';
import { GroupHeader } from './GroupHeader';

export interface GroupProps extends GroupContainerProps {
  /**
   * Элемент заголовка группы.
   */
  header?: React.ReactNode;
  /**
   * Подпись под содержимым.
   */
  description?: React.ReactNode;
}

/**
 * @see https://vkui.io/components/group
 */
export const Group: React.FC<GroupProps> & {
  Container: typeof GroupContainer;
  Header: typeof GroupHeader;
  Description: typeof GroupDescription;
  ExpandedContent: typeof GroupExpandedContent;
} = ({ header, description, children, ...restProps }: GroupProps): React.ReactNode => {
  return (
    <GroupContainer {...restProps}>
      {hasReactNode(header) && <GroupHeader>{header}</GroupHeader>}
      {children}
      {hasReactNode(description) && <GroupDescription>{description}</GroupDescription>}
    </GroupContainer>
  );
};

Group.Container = GroupContainer;
Group.Header = GroupHeader;
Group.Description = GroupDescription;
Group.ExpandedContent = GroupExpandedContent;

if (process.env.NODE_ENV !== 'production') {
  defineComponentDisplayNames(Group.Container, 'Group.Container');
  defineComponentDisplayNames(Group.Header, 'Group.Header');
  defineComponentDisplayNames(Group.Description, 'Group.Description');
  defineComponentDisplayNames(Group.ExpandedContent, 'Group.ExpandedContent');
}
