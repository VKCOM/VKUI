/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { Tabbar } from './Tabbar';

describe('Tabbar', () => {
  baselineComponent(Tabbar);
});
