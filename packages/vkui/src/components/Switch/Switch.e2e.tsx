import { Switch } from './Switch';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';

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
