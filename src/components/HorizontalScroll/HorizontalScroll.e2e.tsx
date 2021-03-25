import { describeScreenshotFuzz } from '../../testing/e2e/utils';
import HorizontalScroll from './HorizontalScroll';
import { HorizontalCell } from '../HorizontalCell/HorizontalCell';
import Avatar from '../Avatar/Avatar';
import { ANDROID } from '../../lib/platform';
import { ViewWidth } from '../../hoc/withAdaptivity';
import { mount, screenshot } from '../../testing/e2e';
import AdaptivityProvider from '../AdaptivityProvider/AdaptivityProvider';
import AppRoot from '../AppRoot/AppRoot';
import ConfigProvider from '../ConfigProvider/ConfigProvider';
import { Scheme } from '../ConfigProvider/ConfigProviderContext';

describe('HorizontalScroll', () => {
  const items = new Array(20).fill(0).map((_, i) => (
    <HorizontalCell key={i} header={`item ${i}`}>
      <Avatar size={56} />
    </HorizontalCell>
  ));

  describeScreenshotFuzz(HorizontalScroll, [{
    children: [
      <div key="0" style={{ display: 'flex' }}>
        {items}
      </div>,
    ],
  }], {
    platforms: [ANDROID],
    adaptivity: {
      viewWidth: ViewWidth.MOBILE,
      hasMouse: false,
    },
  });

  describeScreenshotFuzz(HorizontalScroll, [{
    children: [
      <div key="0" style={{ display: 'flex' }}>
        {items}
      </div>,
    ],
  }], {
    platforms: [ANDROID],
    adaptivity: {
      viewWidth: ViewWidth.SMALL_TABLET,
      hasMouse: true,
    },
  });

  it('has arrows on mouse hover', async () => {
    jest.setTimeout(5000);
    await mount((
      <ConfigProvider scheme={Scheme.BRIGHT_LIGHT}>
        <AdaptivityProvider viewWidth={ViewWidth.SMALL_TABLET} hasMouse>
          <AppRoot>
            <HorizontalScroll>
              <div key="0" style={{ display: 'flex' }}>
                {items}
              </div>
            </HorizontalScroll>
          </AppRoot>
        </AdaptivityProvider>
      </ConfigProvider>
    ));

    await page.hover('.HorizontalScroll');

    expect(await screenshot(null, {
      selector: '.HorizontalScroll',
    })).toMatchImageSnapshot();
  });

  it('does not have arrows without mouse', async () => {
    jest.setTimeout(5000);
    await mount((
      <ConfigProvider scheme={Scheme.BRIGHT_LIGHT}>
        <AdaptivityProvider viewWidth={ViewWidth.SMALL_TABLET} hasMouse={false}>
          <AppRoot>
            <HorizontalScroll>
              <div key="0" style={{ display: 'flex' }}>
                {items}
              </div>
            </HorizontalScroll>
          </AppRoot>
        </AdaptivityProvider>
      </ConfigProvider>
    ));

    await page.hover('.HorizontalScroll');

    expect(await screenshot(null, {
      selector: '.HorizontalScroll',
    })).toMatchImageSnapshot();
  });
});
