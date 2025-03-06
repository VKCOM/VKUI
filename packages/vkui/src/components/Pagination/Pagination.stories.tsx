import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { useCustomArgs } from '../../testing/useCustomArgs';
import { Pagination, type PaginationProps } from './Pagination';

const story: Meta<PaginationProps> = {
  title: 'Blocks/Pagination',
  component: Pagination,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<PaginationProps>;

export const Playground: Story = {
  render: function Render(args) {
    const [, updateArg] = useCustomArgs();
    const onPageChange = (page: number) => {
      updateArg({ currentPage: page });
    };

    return <Pagination {...args} onChange={onPageChange} />;
  },
  args: {
    currentPage: 1,
    boundaryCount: 2,
    totalPages: 25,
  },
};
