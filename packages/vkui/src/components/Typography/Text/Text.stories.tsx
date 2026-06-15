import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import type { Meta, StoryFn } from '@storybook/react';
import { CanvasFullLayout } from '../../../storybook/constants';
import { createStoryParameters } from '../../../testing/storybook/createStoryParameters';
import { Text, type TextProps } from './Text';

const story: Meta<TextProps> = {
  title: 'Typography/Text',
  component: Text,
  parameters: createStoryParameters('Text', CanvasFullLayout),
  decorators: [withCartesian],
  tags: ['Типографика'],
};

export default story;

export const Playground: StoryFn<TextProps> = (args: TextProps) => <Text {...args}>Text</Text>;
