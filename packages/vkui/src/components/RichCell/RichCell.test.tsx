/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { RichCell } from './RichCell';

describe('RichCell', () => {
  baselineComponent(RichCell);
});
