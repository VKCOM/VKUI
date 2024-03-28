import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Textarea, TextareaProps } from './Textarea';

const story: Meta<TextareaProps> = {
  title: 'Forms/Textarea',
  component: Textarea,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  args: { onResize: fn() },
};

export default story;

type Story = StoryObj<TextareaProps>;

export const Playground: Story = {};
