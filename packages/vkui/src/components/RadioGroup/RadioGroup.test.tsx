/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { RadioGroup } from './RadioGroup';

describe('RadioGroup', () => {
  baselineComponent(RadioGroup);
});
