/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { UsersStack } from './UsersStack';

describe('UsersStack', () => {
  baselineComponent(UsersStack);
});
