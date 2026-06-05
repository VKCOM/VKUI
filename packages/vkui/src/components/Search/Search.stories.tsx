import type { Meta, StoryFn } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam, StringArg } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Group } from '../Group/Group';
import { Search, type SearchProps } from './Search';

const story: Meta<SearchProps> = {
  title: 'Utils/Search',
  component: Search,
  parameters: createStoryParameters('Search', CanvasFullLayout, DisableCartesianParam),
  tags: ['Утилиты'],
  argTypes: {
    after: StringArg,
  },
};

export default story;

export const Playground: StoryFn<SearchProps> = (args: SearchProps) => (
  <Group>
    <Search {...args} />
  </Group>
);

Playground.decorators = [withSinglePanel, withVKUILayout];
