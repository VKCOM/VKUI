import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { ScrollArrow, type ScrollArrowProps } from './ScrollArrow';

const story: Meta<ScrollArrowProps> = {
  title: 'Utils/ScrollArrow',
  component: ScrollArrow,
  parameters: createStoryParameters('ScrollArrow', CanvasFullLayout, DisableCartesianParam),
  tags: ['Утилиты'],
};

export default story;

export const Playground: StoryObj<ScrollArrowProps> = (props: ScrollArrowProps) => (
  <ScrollArrow {...props} />
);
Playground.args = {};
