import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Pagination, type PaginationProps } from './Pagination';

export const PaginationPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          navigationButtonsStyle: ['icon', 'caption', 'both'],
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
          navigationButtonsStyle: ['icon', 'caption', 'both'],
          $adaptivity: 'y',
        },
      ]}
    >
      {(props: PaginationProps) => <Pagination {...props} />}
    </ComponentPlayground>
  );
};
