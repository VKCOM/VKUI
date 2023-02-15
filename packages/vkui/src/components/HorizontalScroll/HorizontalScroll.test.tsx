/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { HorizontalScroll } from './HorizontalScroll';

describe('HorizontalScroll', () => {
  baselineComponent(HorizontalScroll);
});
