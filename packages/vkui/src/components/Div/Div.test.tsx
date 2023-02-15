/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { Div } from './Div';

describe('Div', () => {
  baselineComponent(Div);
});
