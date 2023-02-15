/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { PanelHeaderEdit } from './PanelHeaderEdit';

describe('PanelHeaderEdit', () => {
  baselineComponent(PanelHeaderEdit);
});
