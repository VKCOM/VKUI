/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { PanelHeaderSubmit } from './PanelHeaderSubmit';

describe('PanelHeaderSubmit', () => {
  baselineComponent(PanelHeaderSubmit);
});
