import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Icon12Verified, Icon28MessageOutline } from '@vkontakte/icons';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';
import { Avatar } from '../Avatar/Avatar';
import { Group } from '../Group/Group';
import { IconButton } from '../IconButton/IconButton';
import { SimpleCell, SimpleCellProps } from './SimpleCell';

const story: Meta<SimpleCellProps> = {
  title: 'Blocks/SimpleCell',
  component: SimpleCell,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Cell'), ...DisableCartesianParam },
};

export default story;

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
