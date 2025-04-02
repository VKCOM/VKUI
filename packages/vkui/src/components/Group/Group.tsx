import * as React from 'react';
import { hasReactNode } from '@vkontakte/vkjs';
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
 * @see https://vkcom.github.io/VKUI/#/Group
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
  Group.Container.displayName = 'Group.Container';
  Object.defineProperty(Group.Container, 'name', {
    value: 'Group.Container',
  });

  Group.Header.displayName = 'Group.Header';
  Object.defineProperty(Group.Header, 'name', {
    value: 'Group.Header',
  });

  Group.Description.displayName = 'Group.Description';
  Object.defineProperty(Group.Description, 'name', {
    value: 'Group.Description',
  });

  Group.ExpandedContent.displayName = 'Group.ExpandedContent';
  Object.defineProperty(Group.ExpandedContent, 'name', {
    value: 'Group.ExpandedContent',
  });
}
