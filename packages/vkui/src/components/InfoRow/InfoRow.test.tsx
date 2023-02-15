/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { InfoRow } from './InfoRow';

describe('InfoRow', () => {
  baselineComponent(InfoRow);
});
