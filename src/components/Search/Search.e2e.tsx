import Search from './Search';
import { screenshot, mount, describeScreenshotFuzz } from '../../testing/e2e';
import { IOS } from '../../lib/platform';
import { Icon16Add } from '@vkontakte/icons';
import AppRoot from '../AppRoot/AppRoot';
import ConfigProvider from '../ConfigProvider/ConfigProvider';

describe('Search', () => {
  describeScreenshotFuzz((p) => <Search style={{ maxWidth: '320px' }} {...p} />, [{
    value: [undefined, 'value'],
    icon: [undefined, <Icon16Add key="" />],
  }]);
  it('shows after when focused on iOS', async () => {
    await mount(
      <ConfigProvider platform={IOS}>
        <AppRoot embedded>
          <Search after="after" style={{ maxWidth: '320px' }} />
        </AppRoot>
      </ConfigProvider>);
    await page.focus('input');
    expect(await screenshot()).toMatchImageSnapshot();
  });
});
