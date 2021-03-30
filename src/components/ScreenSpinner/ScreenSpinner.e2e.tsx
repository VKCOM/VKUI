import { screenshot } from '../../testing/e2e';
import { Platform } from '../../lib/platform';
import ConfigProvider from '../ConfigProvider/ConfigProvider';
import ScreenSpinner from './ScreenSpinner';

describe('ScreenSpinner matches screenshots', () => {
  Object.values(Platform).forEach((platform) => {
    it(platform, async () => {
      expect(await screenshot((
        <ConfigProvider platform={platform}>
          <ScreenSpinner />
        </ConfigProvider>
      ), { selector: '.ScreenSpinner' })).toMatchImageSnapshot();
    });
  });
});
