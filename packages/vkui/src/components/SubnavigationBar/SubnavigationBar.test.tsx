/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { SubnavigationBar } from './SubnavigationBar';

describe('SubnavigationBar', () => {
  baselineComponent(SubnavigationBar);
});
