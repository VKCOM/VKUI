/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../../testing/utils';
import { Caption } from './Caption';

describe('Caption', () => {
  baselineComponent(Caption);
});
