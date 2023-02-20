import React from 'react';
import { Meta, Story } from '@storybook/react';
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

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  children: <div style={{ height: 96 }} />,
};
