/**
 * jest-runners-groups
 * @group e2e
 */

import * as React from 'react';
import { Icon16Add } from '@vkontakte/icons';
import { BREAKPOINTS, SizeType } from '../../lib/adaptivity';
import { Platform } from '../../lib/platform';
import {
  APPEARANCE,
  customSnapshotIdentifier,
  describeScreenshotFuzz,
  mount,
  screenshot,
} from '../../testing/e2e';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { AppRoot } from '../AppRoot/AppRoot';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { Search } from './Search';

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
