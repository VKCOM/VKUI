import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SimpleCell, SimpleCellProps } from './SimpleCell';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Avatar } from '../Avatar/Avatar';
import { Icon12Verified, Icon28MessageOutline } from '@vkontakte/icons';
import { IconButton } from '../IconButton/IconButton';
import { Group } from '../Group/Group';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Blocks/SimpleCell',
  component: SimpleCell,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Cell'), ...DisableCartesianParam },
} as Meta<SimpleCellProps>;

const Template: Story<SimpleCellProps> = (args) => <SimpleCell {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  children: 'Игорь Фёдоров',
  before: (
    <Avatar
      size={48}
      src="https://sun9-65.userapi.com/Jm47wQlR6z_R_rbAd_7LUf0NQg7QAv35MpvNhA/Ht8eYywub4o.jpg?ava=1"
    />
  ),
  badgeAfterTitle: <Icon12Verified />,
  after: (
    <IconButton>
      <Icon28MessageOutline />
    </IconButton>
  ),
  subtitle: 'Команда ВКонтакте',
};
Playground.decorators = [
  (Component, context) => (
    <Group>
      <Component {...context.args} />
    </Group>
  ),
  withSinglePanel,
  withVKUILayout,
];
