import { render } from "@testing-library/react";
import { useContext } from "react";
import { Platform } from "../../lib/platform";
import { baselineComponent } from "../../testing/utils";
import { Appearance } from "../../helpers/appearance";
import { ConfigProvider } from "./ConfigProvider";
import {
  ConfigProviderContext,
  WebviewType,
  ConfigProviderContextInterface,
} from "./ConfigProviderContext";

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
    const ConfigUser = () => {
      expect(useContext(ConfigProviderContext)).toEqual({
        platform: Platform.ANDROID,
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
  describe("inherits properties from parent ConfigProvider context", () => {
    let config: ConfigProviderContextInterface | undefined;
    const ReadConfig = () => {
      config = useContext(ConfigProviderContext);
      return null;
    };

    const defaultConfig: ConfigProviderContextInterface = {
      platform: Platform.VKCOM,
      appearance: Appearance.DARK,
      webviewType: WebviewType.INTERNAL,
      hasNewTokens: true,
      transitionMotionEnabled: false,
      isWebView: true,
    };
    it.each([
      ["platform", Platform.ANDROID],
      ["webviewType", WebviewType.VKAPPS],
      ["hasNewTokens", false],
      ["transitionMotionEnabled", true],
      ["isWebView", false],
      ["platform", Appearance.LIGHT],
    ])("%s => %s", (prop, value) => {
      const newConfig = { [prop]: value };
      render(
        <ConfigProvider {...defaultConfig}>
          <ConfigProvider {...newConfig}>
            <ReadConfig />
          </ConfigProvider>
        </ConfigProvider>
      );

      expect(config).toEqual(
        expect.objectContaining({ ...defaultConfig, [prop]: value })
      );
    });
  });
});
