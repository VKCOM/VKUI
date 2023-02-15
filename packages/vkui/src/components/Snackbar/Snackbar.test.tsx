/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { Snackbar } from './Snackbar';

describe('Snackbar', () => {
  baselineComponent(Snackbar);
});
