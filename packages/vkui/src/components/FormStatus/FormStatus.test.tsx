/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { FormStatus } from './FormStatus';

describe('FormStatus', () => {
  baselineComponent(FormStatus);
});
