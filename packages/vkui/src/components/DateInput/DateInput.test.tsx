/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { DateInput } from './DateInput';

describe('DateInput', () => {
  baselineComponent(DateInput);
});
