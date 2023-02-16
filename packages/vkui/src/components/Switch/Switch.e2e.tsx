import { describeScreenshotFuzz } from '../../testing/e2e';
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
