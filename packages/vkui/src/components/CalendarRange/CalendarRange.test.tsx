import { baselineComponent } from '../../testing/utils';
import { CalendarRange } from './CalendarRange';

describe('CalendarRange', () => {
  baselineComponent(CalendarRange, {
    // TODO [a11y]: "Exceeded timeout of 5000 ms for a test.
    //              Add a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."
    a11y: false,
  });
});
