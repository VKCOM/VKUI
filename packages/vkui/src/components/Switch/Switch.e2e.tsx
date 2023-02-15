/**
 * jest-runners-groups
 * @group e2e
 */

import { describeScreenshotFuzz } from '../../testing/e2e/utils';
import { Switch } from './Switch';

describe('Switch', () => {
  describeScreenshotFuzz(Switch, [
    {
      checked: [true, false],
      disabled: [true, false],
    },
    {
      $adaptivity: 'y',
    },
  ]);
});
