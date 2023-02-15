/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { Separator } from './Separator';

describe('Separator', () => {
  baselineComponent(Separator);
});
