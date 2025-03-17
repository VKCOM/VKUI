import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Skeleton, type SkeletonProps } from './Skeleton';

const story: Meta<SkeletonProps> = {
  title: 'Blocks/Skeleton',
  component: Skeleton,
  parameters: createStoryParameters('Skeleton', CanvasFullLayout, DisableCartesianParam),
};

export default story;

type Story = StoryObj<SkeletonProps>;

export const Playground: Story = {};
