/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { FormItem } from './FormItem';

describe('FormItem', () => {
  baselineComponent(FormItem);
});
