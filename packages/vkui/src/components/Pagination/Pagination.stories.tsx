import type { Meta, StoryFn } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Pagination, type PaginationProps } from './Pagination';

const story: Meta<PaginationProps> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  parameters: createStoryParameters('Pagination', CanvasFullLayout, DisableCartesianParam),
  tags: ['Навигация'],
};

export default story;

export const Playground: StoryFn<PaginationProps> = (props: PaginationProps) => (
  <Pagination {...props} />
);

Playground.args = {
  currentPage: 1,
  boundaryCount: 2,
  totalPages: 25,
};
