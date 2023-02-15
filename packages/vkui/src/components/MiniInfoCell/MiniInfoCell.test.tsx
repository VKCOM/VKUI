/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { MiniInfoCell } from './MiniInfoCell';

describe('MiniInfoCell', () => {
  baselineComponent(MiniInfoCell);
});
