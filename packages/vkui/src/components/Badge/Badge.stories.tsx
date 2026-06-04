import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import type { Meta, StoryFn } from '@storybook/react';
import { CanvasFullLayout } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Badge, type BadgeProps } from './Badge';

const story: Meta<BadgeProps> = {
  title: 'Data Display/Badge',
  component: Badge,
  parameters: createStoryParameters('Badge', CanvasFullLayout),
  decorators: [withCartesian],
  tags: ['Отображение данных'],
};

export default story;

type Story = StoryFn<BadgeProps>;

export const Playground: Story = (props: BadgeProps) => <Badge {...props} />;

export const NewMode: Story = (props: BadgeProps) => <Badge {...props} />;

NewMode.args = {
  mode: 'new',
  children: 'Есть обновления',
};

export const ProminentMode: Story = (props: BadgeProps) => <Badge {...props} />;

ProminentMode.args = {
  mode: 'prominent',
  children: 'Новый раздел',
};
