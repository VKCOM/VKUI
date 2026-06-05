import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import type { Meta, StoryFn } from '@storybook/react';
import { CanvasFullLayout } from '../../../storybook/constants';
import { createStoryParameters } from '../../../testing/storybook/createStoryParameters';
import { Caption, type CaptionProps } from './Caption';

const story: Meta<CaptionProps> = {
  title: 'Typography/Caption',
  component: Caption,
  parameters: createStoryParameters('Caption', CanvasFullLayout),
  decorators: [withCartesian],
  tags: ['Типографика'],
};

export default story;

type Story = StoryFn<CaptionProps>;

export const Playground: Story = (args: CaptionProps) => (
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
);

export const WithCaps: Story = (args: CaptionProps) => (
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
);

WithCaps.args = {
  ...Playground.args,
  caps: true,
};
