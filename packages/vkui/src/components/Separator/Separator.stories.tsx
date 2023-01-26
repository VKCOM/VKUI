import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Separator, SeparatorProps } from './Separator';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Group } from '../Group/Group';
import { SimpleCell } from '../SimpleCell/SimpleCell';
import { Icon28Notifications, Icon28SlidersOutline } from '@vkontakte/icons';
import { Spacing } from '../Spacing/Spacing';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Blocks/Separator',
  component: Separator,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Separator'), ...DisableCartesianParam },
} as Meta<SeparatorProps>;

const Template: Story<SeparatorProps> = (args) => <Separator {...args} />;

export const Playground = Template.bind({});
Playground.args = {};
Playground.decorators = [
  (Component) => (
    <div>
      Before Separator
      <Component />
      After Separator
    </div>
  ),
];

export const Example = Template.bind({});
Example.args = {};
Example.decorators = [
  (Component) => (
    <Group>
      <SimpleCell before={<Icon28Notifications />}>Уведомления</SimpleCell>
      <Spacing>
        <Component />
      </Spacing>
      <SimpleCell before={<Icon28SlidersOutline />}>Основные</SimpleCell>
    </Group>
  ),
];
