/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { PanelHeaderClose } from './PanelHeaderClose';

describe('PanelHeaderClose', () => {
  baselineComponent(PanelHeaderClose);
});
