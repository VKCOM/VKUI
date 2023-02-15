/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { List } from './List';

describe('List', () => {
  baselineComponent(List);
});
