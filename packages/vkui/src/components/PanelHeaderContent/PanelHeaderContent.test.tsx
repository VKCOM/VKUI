/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { PanelHeaderContent } from './PanelHeaderContent';

describe('PanelHeaderContent', () => {
  baselineComponent(PanelHeaderContent);
});
