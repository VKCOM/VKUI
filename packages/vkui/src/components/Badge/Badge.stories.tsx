import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout } from '../../storybook/constants';
import { Badge, BadgeProps } from './Badge';

const story: Meta<BadgeProps> = {
  title: 'Blocks/Badge',
  component: Badge,
  parameters: CanvasFullLayout,
  decorators: [withCartesian],
};

export default story;

type Story = StoryObj<BadgeProps>;

export const Playground: Story = {};

export const NewMode: Story = {
  args: {
    mode: 'new',
  },
};

export const ProminentMode: Story = {
  args: {
    mode: 'prominent',
  },
};
