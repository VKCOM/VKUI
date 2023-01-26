import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Textarea, TextareaProps } from './Textarea';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Forms/Textarea',
  component: Textarea,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Forms'), ...DisableCartesianParam },
} as Meta<TextareaProps>;

const Template: Story<TextareaProps> = (args) => <Textarea {...args} />;

export const Playground = Template.bind({});
Playground.args = {};
