import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Card, CardProps } from './Card';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Blocks/Card',
  component: Card,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Card'), ...DisableCartesianParam },
  decorators: [withSinglePanel, withVKUILayout],
} as Meta<CardProps>;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  children: <div style={{ height: 96 }} />,
};
