import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout } from '../../../storybook/constants';
import { createStoryParameters } from '../../../testing/storybook/createStoryParameters';
import { Caption, type CaptionProps } from './Caption';

const story: Meta<CaptionProps> = {
  title: 'Typography/Typography/Caption',
  component: Caption,
  parameters: createStoryParameters('Caption', CanvasFullLayout),
  decorators: [withCartesian],
  tags: ['Типографика'],
};

export default story;

type Story = StoryObj<CaptionProps>;

export const Playground: Story = {
  render: (args) => (
    <div>
      <Caption level="1" {...args}>
        Caption 1
      </Caption>
      <Caption level="2" {...args}>
        Caption 2
      </Caption>
      <Caption level="3" {...args}>
        Caption 3
      </Caption>
    </div>
  ),
};

export const WithCaps = {
  ...Playground,
  args: {
    ...Playground.args,
    caps: true,
  },
};
