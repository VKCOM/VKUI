/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { SplitLayout } from './SplitLayout';

describe('SplitLayout', () => {
  baselineComponent(SplitLayout);
});
