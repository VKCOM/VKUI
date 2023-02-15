/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { CellButton } from './CellButton';

describe('CellButton', () => {
  baselineComponent(CellButton);
});
