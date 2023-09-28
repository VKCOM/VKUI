import * as React from 'react';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout } from '../../../storybook/constants';
import { Headline, HeadlineProps } from './Headline';

const story: Meta<HeadlineProps> = {
  title: 'Typography/Headline',
  component: Headline,
  parameters: CanvasFullLayout,
  decorators: [withCartesian],
};

export default story;
type Story = StoryObj<HeadlineProps>;

export const Playground: Story = {
  render: (args) => (
    <div>
      <Headline level="1" {...args}>
        Headline 1
      </Headline>
      <Headline level="2" {...args}>
        Headline 2
      </Headline>
    </div>
  ),
};
