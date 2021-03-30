import { describeScreenshotFuzz } from '../../testing/e2e';
import DatePicker from './DatePicker';

describe('DatePicker', () => {
  describeScreenshotFuzz(DatePicker, [{}]);
});
