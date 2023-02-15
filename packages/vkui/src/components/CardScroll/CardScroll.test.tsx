/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { CardScroll } from './CardScroll';

describe('CardScroll', () => {
  baselineComponent(CardScroll);
});
