import { describeScreenshotFuzz } from "../../testing/e2e/utils";
import { HorizontalScroll } from "./HorizontalScroll";
import { HorizontalCell } from "../HorizontalCell/HorizontalCell";
import { Avatar } from "../Avatar/Avatar";
import { ANDROID } from "../../lib/platform";
import { ViewWidth } from "../../hoc/withAdaptivity";
import { mount, screenshot } from "../../testing/e2e";
import { AdaptivityProvider } from "../AdaptivityProvider/AdaptivityProvider";
import { AppRoot } from "../AppRoot/AppRoot";
import { ConfigProvider } from "../ConfigProvider/ConfigProvider";
import { Scheme } from "../../helpers/scheme";

describe("HorizontalScroll", () => {
  const getItem = (i: number, withShadow?: boolean) => {
    return (
      <HorizontalCell
        key={i}
        header={`item ${i}`}
        style={
          withShadow
            ? {
                boxShadow:
                  "0px 0px 8px rgba(0, 0, 0, 0.12), 0px 16px 16px rgba(0, 0, 0, 0.16)",
              }
            : undefined
        }
      >
        <Avatar size={56} />
      </HorizontalCell>
    );
  };

  const items = new Array(20).fill(0).map((_, i) => getItem(i));

  describeScreenshotFuzz(
    HorizontalScroll,
    [
      {
        showArrows: ["always"],
        arrowSize: ["m", "l"],
        overflowVisible: [undefined, true],
        children: [
          <div key="0" style={{ display: "flex" }}>
            {items}
          </div>,
        ],
      },
    ],
    {
      platforms: [ANDROID],
      adaptivity: {
        viewWidth: ViewWidth.MOBILE,
        hasMouse: true,
      },
    }
  );

  describeScreenshotFuzz(
    HorizontalScroll,
    [
      {
        children: [
          <div key="0" style={{ display: "flex" }}>
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

  const itemsWithShadow = new Array(20).fill(0).map((_, i) => getItem(i, true));

  describeScreenshotFuzz(
    HorizontalScroll,
    [
      {
        overflowVisible: [true],
        children: [
          <div key="0" style={{ display: "flex" }}>
            {itemsWithShadow}
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

  it("has arrows on mouse hover", async () => {
    jest.setTimeout(5000);
    await mount(
      <ConfigProvider scheme={Scheme.BRIGHT_LIGHT}>
        <AdaptivityProvider viewWidth={ViewWidth.SMALL_TABLET} hasMouse>
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

  it("does not have arrows without mouse", async () => {
    jest.setTimeout(5000);
    await mount(
      <ConfigProvider scheme={Scheme.BRIGHT_LIGHT}>
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
