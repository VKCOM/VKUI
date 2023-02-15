/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../../testing/utils';
import { SegmentedControlOption } from './SegmentedControlOption';

describe('SegmentedControlOption', () => {
  baselineComponent(SegmentedControlOption);
});
