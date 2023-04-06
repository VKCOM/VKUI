import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Input, InputProps } from './Input';

const story: Meta<InputProps> = {
  title: 'Forms/Input',
  component: Input,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<InputProps>;

export const Playground: Story = {};
