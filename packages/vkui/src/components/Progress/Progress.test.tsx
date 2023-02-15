/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { Progress } from './Progress';

describe('Progress', () => {
  baselineComponent(Progress);
});
