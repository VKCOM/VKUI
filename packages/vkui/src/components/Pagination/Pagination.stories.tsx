import React from 'react';
import { useArgs } from '@storybook/addons';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Pagination, PaginationProps } from './Pagination';

const story: Meta<PaginationProps> = {
  title: 'Blocks/Pagination',
  component: Pagination,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

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
