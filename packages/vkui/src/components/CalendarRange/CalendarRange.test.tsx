/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { CalendarRange } from './CalendarRange';

describe('CalendarRange', () => {
  baselineComponent(CalendarRange);
});
