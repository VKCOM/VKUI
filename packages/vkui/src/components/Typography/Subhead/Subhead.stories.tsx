import * as React from 'react';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout } from '../../../storybook/constants';
import { Subhead, SubheadProps } from './Subhead';

const story: Meta<SubheadProps> = {
  title: 'Typography/Subhead',
  component: Subhead,
  parameters: CanvasFullLayout,
  decorators: [withCartesian],
};

export default story;

type Story = StoryObj<SubheadProps>;

export const Playground: Story = {
  render: (args) => <Subhead {...args}>Subhead</Subhead>,
};
