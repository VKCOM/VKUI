/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { Banner } from './Banner';

describe('Banner', () => {
  baselineComponent(Banner);
});
