import type { Meta, StoryFn } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Skeleton, type SkeletonProps } from './Skeleton';

const story: Meta<SkeletonProps> = {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  parameters: createStoryParameters('Skeleton', CanvasFullLayout, DisableCartesianParam),
  tags: ['Обратная связь'],
};

export default story;

export const Playground: StoryFn<SkeletonProps> = (props: SkeletonProps) => <Skeleton {...props} />;
