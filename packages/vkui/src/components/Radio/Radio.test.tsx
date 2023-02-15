/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { Radio } from './Radio';

describe('Radio', () => {
  baselineComponent(Radio);
});
