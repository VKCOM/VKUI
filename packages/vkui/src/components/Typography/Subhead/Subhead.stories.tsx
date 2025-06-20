import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout } from '../../../storybook/constants';
import { createStoryParameters } from '../../../testing/storybook/createStoryParameters';
import { Subhead, type SubheadProps } from './Subhead';

const story: Meta<SubheadProps> = {
  title: 'Typography/Typography/Subhead',
  component: Subhead,
  parameters: createStoryParameters('Subhead', CanvasFullLayout),
  decorators: [withCartesian],
};

export default story;

type Story = StoryObj<SubheadProps>;

export const Playground: Story = {
  render: (args) => <Subhead {...args}>Subhead</Subhead>,
};
