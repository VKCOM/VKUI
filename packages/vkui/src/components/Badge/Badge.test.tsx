/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { Badge } from './Badge';

describe('Badge', () => {
  baselineComponent(Badge);
});
