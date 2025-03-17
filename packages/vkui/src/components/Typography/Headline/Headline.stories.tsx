import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout } from '../../../storybook/constants';
import { createStoryParameters } from '../../../testing/storybook/createStoryParameters';
import { Headline, type HeadlineProps } from './Headline';

const story: Meta<HeadlineProps> = {
  title: 'Typography/Headline',
  component: Headline,
  parameters: createStoryParameters('Headline', CanvasFullLayout),
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
