/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { Slider } from './Slider';

describe('Slider', () => {
  baselineComponent(Slider);
});
