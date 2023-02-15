/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../../testing/utils';
import { Paragraph } from './Paragraph';

describe('Paragraph', () => {
  baselineComponent(Paragraph);
});
