import type { Meta, StoryObj } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Group } from '../Group/Group';
import { Search, type SearchProps } from './Search';

const story: Meta<SearchProps> = {
  title: 'Utils/Search',
  component: Search,
  parameters: createStoryParameters('Search', CanvasFullLayout, DisableCartesianParam),
  tags: ['Утилиты'],
};

export default story;

type Story = StoryObj<SearchProps>;

export const Playground: Story = {
  render: (args) => <Search {...args} after={null} />,
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
