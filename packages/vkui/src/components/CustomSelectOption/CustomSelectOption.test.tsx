/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { CustomSelectOption } from './CustomSelectOption';

describe('CustomSelectOption', () => {
  baselineComponent(CustomSelectOption);
});
