/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { Card } from './Card';

describe('Card', () => {
  baselineComponent(Card);
});
