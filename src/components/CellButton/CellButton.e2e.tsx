import { describeScreenshotFuzz } from '../../testing/e2e';
import CellButton from './CellButton';

describe('CellButton', () => {
  describeScreenshotFuzz(CellButton, [{
    mode: ['primary', 'danger'],
  }, {
    centered: [true, false],
  }]);
});
