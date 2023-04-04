import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Pagination, type PaginationProps } from './Pagination';

export const PaginationPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground<PaginationProps>
      {...props}
      propSets={[
        {
          $adaptivity: 'y',
        },
        {
          currentPage: [1],
          totalPages: [3],
          disabled: [undefined, true],
          $adaptivity: 'y',
        },
        {
          currentPage: [4],
          totalPages: [123],
          siblingCount: [0],
          $adaptivity: 'y',
        },
      ]}
    >
      {(props) => <Pagination {...props} />}
    </ComponentPlayground>
  );
};
