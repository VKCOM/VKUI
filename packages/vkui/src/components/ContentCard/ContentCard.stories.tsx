import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';
import { ContentCard, ContentCardProps } from './ContentCard';

const story: Meta<ContentCardProps> = {
  title: 'Blocks/ContentCard',
  component: ContentCard,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('ContentCard'), ...DisableCartesianParam },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default story;

const Template: Story<ContentCardProps> = (args) => <ContentCard {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  src: 'https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
  subtitle: 'unsplash',
  header: 'brown and gray mountains under blue sky during daytime photo',
  text: 'Mountain changji',
  caption: 'Photo by Siyuan on Unsplash',
  maxHeight: 150,
};
