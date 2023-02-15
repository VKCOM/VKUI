/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { SubnavigationButton } from './SubnavigationButton';

describe('SubnavigationButton', () => {
  baselineComponent(SubnavigationButton);
});
