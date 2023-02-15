/**
 * jest-runners-groups
 * @group unit
 */

import { baselineComponent } from '../../testing/utils';
import { File } from './File';

describe('File', () => {
  baselineComponent(File);
});
