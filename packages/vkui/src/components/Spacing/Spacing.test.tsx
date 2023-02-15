/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { Spacing } from './Spacing';

describe('Spacing', () => {
  baselineComponent(Spacing);
});
