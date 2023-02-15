/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { Switch } from './Switch';

describe('Switch', () => {
  baselineComponent(Switch);
});
