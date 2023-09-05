import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { WriteBarIcon, WriteBarIconProps } from './WriteBarIcon';

const story: Meta<WriteBarIconProps> = {
  title: 'Blocks/WriteBarIcon',
  component: WriteBarIcon,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<WriteBarIconProps>;

export const Playground: Story = {
  args: {
    mode: 'attach',
  },
};
