import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Icon28Notifications, Icon28SlidersOutline } from '@vkontakte/icons';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Group } from '../Group/Group';
import { SimpleCell } from '../SimpleCell/SimpleCell';
import { Spacing } from '../Spacing/Spacing';
import { Separator, SeparatorProps } from './Separator';

const story: Meta<SeparatorProps> = {
  title: 'Blocks/Separator',
  component: Separator,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

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
