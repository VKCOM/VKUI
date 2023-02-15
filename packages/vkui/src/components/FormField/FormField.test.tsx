/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { FormField } from './FormField';

describe('FormField', () => {
  baselineComponent(FormField);
});
