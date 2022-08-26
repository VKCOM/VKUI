import { describeScreenshotFuzz } from "../../testing/e2e/utils";
import { HorizontalScroll } from "./HorizontalScroll";
import { HorizontalCell } from "../HorizontalCell/HorizontalCell";
import { Avatar } from "../Avatar/Avatar";
import { Platform } from "../../lib/platform";
import { ViewWidth } from "../../lib/adaptivity";
import { mount, screenshot } from "../../testing/e2e";
import { AdaptivityProvider } from "../AdaptivityProvider/AdaptivityProvider";
import { AppRoot } from "../AppRoot/AppRoot";
import { ConfigProvider } from "../ConfigProvider/ConfigProvider";

describe("HorizontalScroll", () => {
  const items = new Array(20).fill(0).map((_, i) => (
    <HorizontalCell key={i} header={`item ${i}`}>
      <Avatar size={56} />
    </HorizontalCell>
  ));

  describeScreenshotFuzz(
    HorizontalScroll,
    [
      {
        showArrows: ["always"],
        arrowSize: ["m", "l"],
        children: [
          <div key="0" style={{ display: "flex" }}>
            {items}
          </div>,
        ],
      },
    ],
    {
      platforms: [Platform.ANDROID],
      adaptivity: {
        viewWidth: ViewWidth.MOBILE,
        hasMouse: false,
      },
    }
  );

  describeScreenshotFuzz(
    HorizontalScroll,
    [
      {
        arrowSize: ["m", "l"],
        children: [
          <div key="0" style={{ display: "flex" }}>
            {items}
          </div>,
        ],
      },
    ],
    {
      platforms: [Platform.ANDROID],
      adaptivity: {
        viewWidth: ViewWidth.SMALL_TABLET,
        hasMouse: true,
      },
    }
  );

  it("has arrows on mouse hover", async () => {
    jest.setTimeout(5000);
    await mount(
      <ConfigProvider appearance="light">
        <AdaptivityProvider viewWidth={ViewWidth.SMALL_TABLET} hasMouse>
          <AppRoot>
            <HorizontalScroll
              getRef={(element) => {
                if (!element) {
                  return;
                }
                element.scrollLeft = 32;
              }}
            >
              <div key="0" style={{ display: "flex" }}>
                {items}
              </div>
            </HorizontalScroll>
          </AppRoot>
        </AdaptivityProvider>
      </ConfigProvider>
    );

    await page.hover(".HorizontalScroll");

    expect(
      await screenshot(undefined, {
        selector: ".HorizontalScroll",
      })
    ).toMatchImageSnapshot();
  });

  it("does not have arrows without mouse", async () => {
    jest.setTimeout(5000);
    await mount(
      <ConfigProvider appearance="light">
        <AdaptivityProvider viewWidth={ViewWidth.SMALL_TABLET} hasMouse={false}>
          <AppRoot>
            <HorizontalScroll>
              <div key="0" style={{ display: "flex" }}>
                {items}
              </div>
            </HorizontalScroll>
          </AppRoot>
        </AdaptivityProvider>
      </ConfigProvider>
    );

    await page.hover(".HorizontalScroll");

    expect(
      await screenshot(undefined, {
        selector: ".HorizontalScroll",
      })
    ).toMatchImageSnapshot();
  });
});
