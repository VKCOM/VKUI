/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { Gradient } from './Gradient';

describe('Gradient', () => {
  baselineComponent(Gradient);
});
