/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { Pagination } from './Pagination';

describe('Pagination', () => {
  baselineComponent(Pagination);
});
