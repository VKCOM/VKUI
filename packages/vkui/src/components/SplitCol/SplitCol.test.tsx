/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { SplitCol } from './SplitCol';

describe('SplitCol', () => {
  baselineComponent(SplitCol);
});
