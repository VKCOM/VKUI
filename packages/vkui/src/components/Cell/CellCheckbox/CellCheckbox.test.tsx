/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../../testing/utils';
import { CellCheckbox } from './CellCheckbox';

describe('CellCheckbox', () => {
  baselineComponent(CellCheckbox);
});
