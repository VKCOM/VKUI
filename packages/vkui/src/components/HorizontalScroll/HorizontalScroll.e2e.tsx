import * as React from 'react';
import { ViewWidth } from '../../lib/adaptivity';
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
import { Avatar } from '../Avatar/Avatar';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { HorizontalCell } from '../HorizontalCell/HorizontalCell';
import { HorizontalScroll } from './HorizontalScroll';

describe('HorizontalScroll', () => {
  const items = new Array(20).fill(0).map((_, i) => (
    <HorizontalCell key={i} header={`item ${i}`}>
      <Avatar size={56} />
    </HorizontalCell>
  ));

  describeScreenshotFuzz(
    HorizontalScroll,
    [
      {
        showArrows: ['always'],
        arrowSize: ['m', 'l'],
        children: [
          <div key="0" style={{ display: 'flex' }}>
            {items}
          </div>,
        ],
      },
    ],
    {
      platforms: [Platform.ANDROID],
      adaptivity: {
        viewWidth: ViewWidth.MOBILE,
        hasPointer: false,
      },
    },
  );

  describeScreenshotFuzz(
    HorizontalScroll,
    [
      {
        arrowSize: ['m', 'l'],
        children: [
          <div key="0" style={{ display: 'flex' }}>
            {items}
          </div>,
        ],
      },
    ],
    {
      platforms: [Platform.ANDROID],
      adaptivity: {
        viewWidth: ViewWidth.SMALL_TABLET,
        hasPointer: true,
      },
    },
  );

  it('has arrows on mouse hover', async () => {
    jest.setTimeout(5000);
    await mount(
      <ConfigProvider appearance={APPEARANCE}>
        <AdaptivityProvider viewWidth={ViewWidth.SMALL_TABLET} hasPointer>
          <AppRoot className="vkuiTestWrapper">
            <HorizontalScroll
              getRef={(element) => {
                if (!element) {
                  return;
                }
                element.scrollLeft = 32;
              }}
            >
              <div key="0" style={{ display: 'flex' }}>
                {items}
              </div>
            </HorizontalScroll>
          </AppRoot>
        </AdaptivityProvider>
      </ConfigProvider>,
    );

    await page.hover('.vkuiHorizontalScroll');

    expect(
      await screenshot(undefined, {
        selector: '.vkuiHorizontalScroll',
      }),
    ).toMatchImageSnapshot({
      customSnapshotIdentifier,
    });
  });

  it('does not have arrows without mouse', async () => {
    jest.setTimeout(5000);
    await mount(
      <ConfigProvider appearance={APPEARANCE}>
        <AdaptivityProvider viewWidth={ViewWidth.SMALL_TABLET} hasPointer={false}>
          <AppRoot className="vkuiTestWrapper">
            <HorizontalScroll>
              <div key="0" style={{ display: 'flex' }}>
                {items}
              </div>
            </HorizontalScroll>
          </AppRoot>
        </AdaptivityProvider>
      </ConfigProvider>,
    );

    await page.hover('.vkuiHorizontalScroll');

    expect(
      await screenshot(undefined, {
        selector: '.vkuiHorizontalScroll',
      }),
    ).toMatchImageSnapshot({
      customSnapshotIdentifier,
    });
  });
});
