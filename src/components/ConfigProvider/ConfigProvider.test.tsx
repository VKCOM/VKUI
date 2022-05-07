import { render } from "@testing-library/react";
import { FC, useContext } from "react";
import { ANDROID } from "../../lib/platform";
import { baselineComponent } from "../../testing/utils";
import { Appearance } from "../../helpers/appearance";
import ConfigProvider from "./ConfigProvider";
import { ConfigProviderContext, WebviewType } from "./ConfigProviderContext";

describe("ConfigProvider", () => {
  baselineComponent<any>(ConfigProvider, { forward: false });
  it("provides config context", () => {
    const config = {
      platform: undefined,
      appearance: Appearance.LIGHT,
      webviewType: WebviewType.INTERNAL,
      hasNewTokens: undefined,
      transitionMotionEnabled: false,
    };
    const ConfigUser: FC = () => {
      expect(useContext(ConfigProviderContext)).toEqual({
        platform: ANDROID,
        isWebView: false,
        appearance: Appearance.LIGHT,
        webviewType: WebviewType.INTERNAL,
        hasNewTokens: false,
        transitionMotionEnabled: false,
      });
      return null;
    };
    render(
      <ConfigProvider {...config}>
        <ConfigUser />
      </ConfigProvider>
    );
  });
});
