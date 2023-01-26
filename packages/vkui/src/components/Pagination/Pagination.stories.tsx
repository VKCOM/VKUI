import React from 'react';
import { Story, Meta } from '@storybook/react';
import { useArgs } from '@storybook/addons';
import { Pagination, PaginationProps } from './Pagination';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Blocks/Pagination',
  component: Pagination,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Pagination'), ...DisableCartesianParam },
} as Meta<PaginationProps>;

const Template: Story<PaginationProps> = (args) => {
  const [, updateArg] = useArgs();
  const onPageChange = (page: number) => {
    updateArg({ currentPage: page });
  };

  return <Pagination {...args} onChange={onPageChange} />;
};

export const Playground = Template.bind({});
Playground.args = {
  currentPage: 1,
  boundaryCount: 2,
  totalPages: 25,
};
