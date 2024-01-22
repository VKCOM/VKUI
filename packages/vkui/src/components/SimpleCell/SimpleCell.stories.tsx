import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Group } from '../Group/Group';
import { SimpleCell, SimpleCellProps } from './SimpleCell';

const story: Meta<SimpleCellProps> = {
  title: 'Blocks/SimpleCell',
  component: SimpleCell,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<SimpleCellProps>;

export const Current: Story = {
  args: {
    onClick: () => void 0,
    children: 'Указать источник',
    subtitle: 'Уведомление получат друзья, которым может быть интересна ваша запись',
  },
  decorators: [
    (Component, context) => (
      <Group>
        <Component {...context.args} />
      </Group>
    ),
    withSinglePanel,
    withVKUILayout,
  ],
};

export const WithParagraph: Story = {
  args: {
    onClick: () => void 0,
    Component: 'p',
    children: 'Указать источник',
    subtitle: 'Уведомление получат друзья, которым может быть интересна ваша запись',
  },
  decorators: [
    (Component, context) => (
      <Group>
        <Component {...context.args} />
      </Group>
    ),
    withSinglePanel,
    withVKUILayout,
  ],
};
