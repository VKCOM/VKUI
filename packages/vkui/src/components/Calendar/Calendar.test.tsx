/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { Calendar } from './Calendar';

describe('Calendar', () => {
  baselineComponent(Calendar);
});
