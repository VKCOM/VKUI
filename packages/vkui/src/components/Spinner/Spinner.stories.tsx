import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout } from '../../storybook/constants';
import { Spinner, SpinnerProps } from './Spinner';

const story: Meta<SpinnerProps> = {
  title: 'Blocks/Spinner',
  component: Spinner,
  parameters: CanvasFullLayout,
  decorators: [withCartesian],
};

export default story;

type Story = StoryObj<SpinnerProps>;

export const Playground: Story = {};
