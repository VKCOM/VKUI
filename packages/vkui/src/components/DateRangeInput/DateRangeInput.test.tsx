/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { DateRangeInput } from './DateRangeInput';

describe('DateRangeInput', () => {
  baselineComponent(DateRangeInput);
});
