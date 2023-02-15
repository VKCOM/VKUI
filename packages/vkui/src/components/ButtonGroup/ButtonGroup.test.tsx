/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { ButtonGroup } from './ButtonGroup';

describe('ButtonGroup', () => {
  baselineComponent(ButtonGroup);
});
