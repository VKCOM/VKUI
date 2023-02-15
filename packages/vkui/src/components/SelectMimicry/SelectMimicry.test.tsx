/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { SelectMimicry } from './SelectMimicry';

describe('SelectMimicry', () => {
  baselineComponent(SelectMimicry);
});
