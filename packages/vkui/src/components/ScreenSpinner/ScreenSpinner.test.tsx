/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { ScreenSpinner } from './ScreenSpinner';

describe('ScreenSpinner', () => {
  baselineComponent(ScreenSpinner);
});
