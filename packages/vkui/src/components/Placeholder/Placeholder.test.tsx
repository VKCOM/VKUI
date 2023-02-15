/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { Placeholder } from './Placeholder';

describe('Placeholder', () => {
  baselineComponent(Placeholder);
});
