import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';
import { Textarea, TextareaProps } from './Textarea';

const story: Meta<TextareaProps> = {
  title: 'Forms/Textarea',
  component: Textarea,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Forms'), ...DisableCartesianParam },
};

export default story;

const Template: Story<TextareaProps> = (args) => <Textarea {...args} />;

export const Playground = Template.bind({});
Playground.args = {};
