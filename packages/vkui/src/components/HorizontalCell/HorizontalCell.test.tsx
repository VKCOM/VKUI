/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { HorizontalCell } from './HorizontalCell';

describe('HorizontalCell', () => {
  baselineComponent(HorizontalCell);
});
