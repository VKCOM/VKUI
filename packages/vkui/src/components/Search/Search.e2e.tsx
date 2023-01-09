import * as React from 'react';
import { Search } from './Search';
import { Platform } from '../../lib/platform';
import {
  screenshot,
  mount,
  describeScreenshotFuzz,
  customSnapshotIdentifier,
  APPEARANCE,
} from '../../testing/e2e';
import { Icon16Add } from '@vkontakte/icons';
import { AppRoot } from '../AppRoot/AppRoot';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { BREAKPOINTS, SizeType } from '../../lib/adaptivity';

describe('Search', () => {
  describeScreenshotFuzz(
    (p) => <Search style={{ maxWidth: '320px' }} {...p} />,
    [
      {
        value: [undefined, 'value'],
        icon: [undefined, <Icon16Add key="" />],
      },
      {
        value: ['value'],
        icon: [<Icon16Add key="" />],
        $adaptivity: 'y',
      },
    ],
  );
  it('shows after when focused on iOS', async () => {
    await mount(
      <ConfigProvider platform={Platform.IOS} appearance={APPEARANCE}>
        <div
          style={{
            height: 'auto',
            position: 'absolute',
            width: BREAKPOINTS.MOBILE,
          }}
        >
          <AppRoot mode="embedded" className="vkuiTestWrapper">
            <AdaptivityProvider sizeY={SizeType.REGULAR}>
              <Search after="after" />
            </AdaptivityProvider>
          </AppRoot>
        </div>
      </ConfigProvider>,
    );
    await page.focus('input');
    expect(await screenshot()).toMatchImageSnapshot({
      customSnapshotIdentifier,
    });
  });
});
