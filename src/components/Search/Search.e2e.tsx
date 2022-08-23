import { Search } from "./Search";
import { screenshot, mount, describeScreenshotFuzz } from "../../testing/e2e";
import { IOS } from "../../lib/platform";
import { Icon16Add } from "@vkontakte/icons";
import { AppRoot } from "../AppRoot/AppRoot";
import { ConfigProvider } from "../ConfigProvider/ConfigProvider";
import { AdaptivityProvider } from "../AdaptivityProvider/AdaptivityProvider";
import { SizeType } from "../../hoc/withAdaptivity";

describe("Search", () => {
  describeScreenshotFuzz(
    (p) => <Search style={{ maxWidth: "320px" }} {...p} />,
    [
      {
        value: [undefined, "value"],
        icon: [undefined, <Icon16Add key="" />],
      },
      {
        value: ["value"],
        icon: [<Icon16Add key="" />],
        $adaptivity: "y",
      },
    ]
  );
  it("shows after when focused on iOS", async () => {
    await mount(
      <ConfigProvider platform={IOS}>
        <AppRoot embedded>
          <AdaptivityProvider sizeY={SizeType.REGULAR}>
            <Search after="after" style={{ maxWidth: "320px" }} />
          </AdaptivityProvider>
        </AppRoot>
      </ConfigProvider>
    );
    await page.focus("input");
    expect(await screenshot()).toMatchImageSnapshot();
  });
});
