/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { Input } from './Input';

describe('Input', () => {
  baselineComponent(Input);
});
