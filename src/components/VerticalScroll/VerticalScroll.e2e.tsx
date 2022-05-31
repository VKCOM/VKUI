import { describeScreenshotFuzz } from "../../testing/e2e/utils";
import { VerticalScroll } from "./VerticalScroll";
import { ANDROID } from "../../lib/platform";
import { ViewWidth } from "../../hoc/withAdaptivity";
import { mount, screenshot } from "../../testing/e2e";
import { AdaptivityProvider } from "../AdaptivityProvider/AdaptivityProvider";
import { AppRoot } from "../AppRoot/AppRoot";
import { ConfigProvider } from "../ConfigProvider/ConfigProvider";
import { Scheme } from "../../helpers/scheme";

describe("VerticalScroll", () => {
  const items = new Array(20).fill(0).map((_, i) => (
    <div
      key={i}
      style={{
        width: 100,
        height: 100,
        marginTop: 5,
        backgroundColor: `#${(((1 << 24) * Math.random()) | 0).toString(16)}`,
      }}
    />
  ));

  describeScreenshotFuzz(
    VerticalScroll,
    [
      {
        children: [
          <div key="0" style={{ width: 76, height: 300 }}>
            {items}
          </div>,
        ],
      },
    ],
    {
      platforms: [ANDROID],
      adaptivity: {
        viewWidth: ViewWidth.MOBILE,
        hasMouse: false,
      },
    }
  );

  describeScreenshotFuzz(
    VerticalScroll,
    [
      {
        children: [
          <div key="0" style={{ width: 76, height: 300 }}>
            {items}
          </div>,
        ],
      },
    ],
    {
      platforms: [ANDROID],
      adaptivity: {
        viewWidth: ViewWidth.SMALL_TABLET,
        hasMouse: true,
      },
    }
  );

  it("has arrows on mouse hover", async () => {
    jest.setTimeout(5000);
    await mount(
      <ConfigProvider scheme={Scheme.BRIGHT_LIGHT}>
        <AdaptivityProvider viewWidth={ViewWidth.SMALL_TABLET} hasMouse>
          <AppRoot>
            <VerticalScroll>
              <div key="0" style={{ width: 76, height: 300 }}>
                {items}
              </div>
            </VerticalScroll>
          </AppRoot>
        </AdaptivityProvider>
      </ConfigProvider>
    );

    await page.hover(".VerticalScroll");

    expect(
      await screenshot(undefined, {
        selector: ".VerticalScroll",
      })
    ).toMatchImageSnapshot();
  });

  it("does not have arrows without mouse", async () => {
    jest.setTimeout(5000);
    await mount(
      <ConfigProvider scheme={Scheme.BRIGHT_LIGHT}>
        <AdaptivityProvider viewWidth={ViewWidth.SMALL_TABLET} hasMouse={false}>
          <AppRoot>
            <VerticalScroll>
              <div key="0" style={{ width: 76, height: 300 }}>
                {items}
              </div>
            </VerticalScroll>
          </AppRoot>
        </AdaptivityProvider>
      </ConfigProvider>
    );

    await page.hover(".VerticalScroll");

    expect(
      await screenshot(undefined, {
        selector: ".VerticalScroll",
      })
    ).toMatchImageSnapshot();
  });
});
