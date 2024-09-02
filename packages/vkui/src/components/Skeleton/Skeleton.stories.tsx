import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Skeleton, type SkeletonProps } from './Skeleton';

const story: Meta<SkeletonProps> = {
  title: 'Blocks/Skeleton',
  component: Skeleton,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<SkeletonProps>;

export const Playground: Story = {};
