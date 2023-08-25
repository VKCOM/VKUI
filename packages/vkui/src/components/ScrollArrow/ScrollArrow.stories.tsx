import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { ScrollArrow, ScrollArrowProps } from './ScrollArrow';

const story: Meta<ScrollArrowProps> = {
  title: 'Blocks/ScrollArrow',
  component: ScrollArrow,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<ScrollArrowProps>;

export const Playground: Story = {};
