import * as React from 'react';
import { hasReactNode } from '@vkontakte/vkjs';
import { GroupContainer, type GroupContainerProps } from './GroupContainer';
import { GroupDescription } from './GroupDescription';
import { GroupExpandedContent } from './GroupExpandedContent';
import { GroupHeader } from './GroupHeader';

export interface GroupProps extends GroupContainerProps {
  header?: React.ReactNode;
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

Group.displayName = 'Group';
Group.Container = GroupContainer;
Group.Container.displayName = 'Group.Container';
Group.Header = GroupHeader;
Group.Header.displayName = 'Group.Header';
Group.Description = GroupDescription;
Group.Description.displayName = 'Group.Description';
Group.ExpandedContent = GroupExpandedContent;
Group.ExpandedContent.displayName = 'Group.ExpandedContent';
