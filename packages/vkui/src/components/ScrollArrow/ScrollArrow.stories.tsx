import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { ScrollArrow, type ScrollArrowProps } from './ScrollArrow';

const story: Meta<ScrollArrowProps> = {
  title: 'Utils/ScrollArrow',
  component: ScrollArrow,
  parameters: createStoryParameters('ScrollArrow', CanvasFullLayout, DisableCartesianParam),
};

export default story;

type Story = StoryObj<ScrollArrowProps>;

export const Playground: Story = {};
