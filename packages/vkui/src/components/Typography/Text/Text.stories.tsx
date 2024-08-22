import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout } from '../../../storybook/constants';
import { Text, type TextProps } from './Text';

const story: Meta<TextProps> = {
  title: 'Typography/Text',
  component: Text,
  parameters: CanvasFullLayout,
  decorators: [withCartesian],
};

export default story;

type Story = StoryObj<TextProps>;

export const Playground: Story = {
  render: (args) => <Text {...args}>Text</Text>,
};
