import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout } from '../../../storybook/constants';
import { createStoryParameters } from '../../../testing/storybook/createStoryParameters';
import { Subhead, type SubheadProps } from './Subhead';

const story: Meta<SubheadProps> = {
  title: 'Typography/Subhead',
  component: Subhead,
  parameters: createStoryParameters('Subhead', CanvasFullLayout),
  decorators: [withCartesian],
  tags: ['Типографика'],
};

export default story;

export const Playground: StoryObj<SubheadProps> = (args: SubheadProps) => (
  <Subhead {...args}>Subhead</Subhead>
);
Playground.args = {};
