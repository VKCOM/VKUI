/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { PopoutRoot } from './PopoutRoot';

describe('PopoutRoot', () => {
  baselineComponent(PopoutRoot);
});
