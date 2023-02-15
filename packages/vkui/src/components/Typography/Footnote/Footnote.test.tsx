/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../../testing/utils';
import { Footnote } from './Footnote';

describe('Footnote', () => {
  baselineComponent(Footnote);
});
