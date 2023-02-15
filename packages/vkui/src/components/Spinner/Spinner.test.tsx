/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { Spinner } from './Spinner';

describe('Spinner', () => {
  baselineComponent(Spinner);
});
