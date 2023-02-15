/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { InputLike } from './InputLike';

describe('InputLike', () => {
  baselineComponent(InputLike);
});
