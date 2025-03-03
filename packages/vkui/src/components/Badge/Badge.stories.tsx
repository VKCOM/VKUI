import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Badge, type BadgeProps } from './Badge';

const story: Meta<BadgeProps> = {
  title: 'Blocks/Badge',
  component: Badge,
  parameters: createStoryParameters('Badge', CanvasFullLayout),
  decorators: [withCartesian],
};

export default story;

type Story = StoryObj<BadgeProps>;

export const Playground: Story = {};

export const NewMode: Story = {
  args: {
    mode: 'new',
    children: 'Есть обновления',
  },
};

export const ProminentMode: Story = {
  args: {
    mode: 'prominent',
    children: 'Новый раздел',
  },
};
