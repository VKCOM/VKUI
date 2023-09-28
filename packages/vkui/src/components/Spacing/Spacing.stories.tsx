import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Icon28BlockOutline, Icon28UserOutline } from '@vkontakte/icons';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Group } from '../Group/Group';
import { SimpleCell } from '../SimpleCell/SimpleCell';
import { Spacing, SpacingProps } from './Spacing';

const story: Meta<SpacingProps> = {
  title: 'Blocks/Spacing',
  component: Spacing,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<SpacingProps>;

export const Playground: Story = {
  decorators: [
    (Component) => (
      <div>
        Before Space
        <Component />
        After Space
      </div>
    ),
  ],
};

export const Example: Story = {
  ...Playground,
  decorators: [
    (Component) => (
      <Group>
        <SimpleCell before={<Icon28BlockOutline />}>Не беспокоить</SimpleCell>
        <Component />
        <SimpleCell before={<Icon28UserOutline />}>Учётная запись</SimpleCell>
      </Group>
    ),
  ],
};
