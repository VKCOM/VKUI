import { Pagination } from './Pagination';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';

describe('Pagination', () => {
  describeScreenshotFuzz(Pagination, [
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
  ]);
});
