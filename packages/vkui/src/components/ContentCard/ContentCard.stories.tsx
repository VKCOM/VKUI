import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { ContentCard, type ContentCardProps } from './ContentCard';

const story: Meta<ContentCardProps> = {
  title: 'Data Display/ContentCard',
  component: ContentCard,
  parameters: createStoryParameters('ContentCard', CanvasFullLayout, DisableCartesianParam),
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
  tags: ['Отображение данных'],
};

export default story;

type Story = StoryObj<ContentCardProps>;

export const Playground: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
    overTitle: 'unsplash',
    title: 'brown and gray mountains under blue sky during daytime photo',
    description: 'Mountain changji',
    caption: 'Photo by Siyuan on Unsplash',
    maxHeight: 150,
  },
};
