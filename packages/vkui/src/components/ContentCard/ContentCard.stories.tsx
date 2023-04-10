import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { ContentCard, ContentCardProps } from './ContentCard';

const story: Meta<ContentCardProps> = {
  title: 'Blocks/ContentCard',
  component: ContentCard,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default story;

type Story = StoryObj<ContentCardProps>;

export const Playground: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
    subtitle: 'unsplash',
    header: 'brown and gray mountains under blue sky during daytime photo',
    text: 'Mountain changji',
    caption: 'Photo by Siyuan on Unsplash',
    maxHeight: 150,
  },
};
