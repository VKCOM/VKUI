/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../../testing/utils';
import { CellDragger } from './CellDragger';

describe('CellDragger', () => {
  baselineComponent(CellDragger);
});
