import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout } from '../../../storybook/constants';
import { DisplayTitle, type DisplayTitleProps } from './DisplayTitle';

const story: Meta<DisplayTitleProps> = {
  title: 'Typography/DisplayTitle',
  component: DisplayTitle,
  parameters: CanvasFullLayout,
  decorators: [withCartesian],
};

export default story;

type Story = StoryObj<DisplayTitleProps>;

export const Playground: Story = {
  render: (args) => (
    <div>
      <DisplayTitle level="1" {...args}>
        DisplayTitle 1
      </DisplayTitle>
      <DisplayTitle level="2" {...args}>
        DisplayTitle 2
      </DisplayTitle>
      <DisplayTitle level="3" {...args}>
        DisplayTitle 3
      </DisplayTitle>
      <DisplayTitle level="4" {...args}>
        DisplayTitle 4
      </DisplayTitle>
    </div>
  ),
};
