/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { CardGrid } from './CardGrid';

describe('CardGrid', () => {
  baselineComponent(CardGrid);
});
