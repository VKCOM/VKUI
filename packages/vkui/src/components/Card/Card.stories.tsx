import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Card, CardProps } from './Card';

const story: Meta<CardProps> = {
  title: 'Blocks/Card',
  component: Card,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  decorators: [withSinglePanel, withVKUILayout],
};

export default story;

type Story = StoryObj<CardProps>;

export const Playground: Story = {
  args: {
    children: <div style={{ height: 96 }} />,
  },
};
