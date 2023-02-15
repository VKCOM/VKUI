/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { PanelSpinner } from './PanelSpinner';

describe('PanelSpinner', () => {
  baselineComponent(PanelSpinner);
});
