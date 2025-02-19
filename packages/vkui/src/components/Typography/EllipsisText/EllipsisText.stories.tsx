import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout } from '../../../storybook/constants';
import { createStoryParameters } from '../../../testing/storybook/createStoryParameters';
import { EllipsisText, type EllipsisTextProps } from './EllipsisText';

const story: Meta<EllipsisTextProps> = {
  title: 'Typography/EllipsisText',
  component: EllipsisText,
  parameters: createStoryParameters('EllipsisText', CanvasFullLayout),
  decorators: [withCartesian],
};

export default story;

type Story = StoryObj<EllipsisTextProps>;
const ellipsisText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
export const Playground: Story = {
  render: (args) => (
    <>
      <div style={{ width: 200 }}>
        <EllipsisText {...args}>{ellipsisText}</EllipsisText>
      </div>
      <div>
        <EllipsisText maxWidth={100} {...args}>
          {ellipsisText}
        </EllipsisText>
      </div>
      <div>
        <EllipsisText maxWidth={150} {...args}>
          {ellipsisText}
        </EllipsisText>
      </div>
    </>
  ),
};
