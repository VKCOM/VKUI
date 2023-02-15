/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../../testing/utils';
import { Text } from './Text';

describe('Text', () => {
  baselineComponent(Text);
});
