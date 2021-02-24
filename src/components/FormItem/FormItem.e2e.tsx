import { FormItem } from './FormItem';
import Input from '../Input/Input';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';

describe('FormItem', () => {
  describeScreenshotFuzz(FormItem, [{
    top: [undefined, 'Сверху'],
    bottom: [undefined, 'Снизу'],
    removable: [undefined, true],
    children: [<Input key="0" />],
  }]);
});
