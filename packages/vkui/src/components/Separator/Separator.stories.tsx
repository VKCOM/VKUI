import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
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

type Story = StoryObj<SeparatorProps>;

export const Playground: Story = {
  decorators: [
    (Component) => (
      <div>
        Before Separator
        <Component />
        After Separator
      </div>
    ),
  ],
};

export const Example: Story = {
  ...Playground,
  decorators: [
    (Component) => (
      <Group>
        <SimpleCell before={<Icon28Notifications />}>Уведомления</SimpleCell>
        <Spacing>
          <Component />
        </Spacing>
        <SimpleCell before={<Icon28SlidersOutline />}>Основные</SimpleCell>
      </Group>
    ),
  ],
};
