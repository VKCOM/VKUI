/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { TabsItem } from './TabsItem';

describe('TabsItem', () => {
  baselineComponent(TabsItem);
});
