/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { WriteBar } from './WriteBar';

describe('WriteBar', () => {
  baselineComponent(WriteBar);
});
