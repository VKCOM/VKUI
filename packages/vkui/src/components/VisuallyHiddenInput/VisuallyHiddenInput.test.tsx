/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { VisuallyHiddenInput } from './VisuallyHiddenInput';

describe('VisuallyHiddenInput', () => {
  baselineComponent(VisuallyHiddenInput);
});
