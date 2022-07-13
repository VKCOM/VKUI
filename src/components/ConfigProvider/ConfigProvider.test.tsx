import { render } from "@testing-library/react";
import { AppearanceType } from "@vkontakte/vk-bridge";
import { useContext } from "react";
import { ANDROID, VKCOM } from "../../lib/platform";
import { baselineComponent } from "../../testing/utils";
import { Scheme, Appearance } from "../../helpers/scheme";
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
  describe("manages body[scheme]", () => {
    it("default scheme", () => {
      render(<ConfigProvider />);
      expect(document.body).toHaveAttribute("scheme", "bright_light");
    });
    it("sets body[scheme] on first render", () => {
      render(<ConfigProvider scheme="space_gray" />);
      expect(document.body).toHaveAttribute("scheme", "space_gray");
    });
    it("removes body[scheme] on unmount", () => {
      render(<ConfigProvider scheme="space_gray" />).unmount();
      expect(document.body).not.toHaveAttribute("scheme");
    });
    it("updates body[scheme] on change", () => {
      render(<ConfigProvider scheme="space_gray" />).rerender(
        <ConfigProvider scheme="bright_light" />
      );
      expect(document.body).toHaveAttribute("scheme", "bright_light");
    });
    describe("scheme=inherit", () => {
      it("does not set body[scheme] to inherit", () => {
        render(<ConfigProvider scheme="inherit" />);
        expect(document.body).not.toHaveAttribute("scheme");
      });
      it("does not set body[scheme] to inherit when platform=VKCOM", () => {
        render(<ConfigProvider scheme="inherit" platform={VKCOM} />);
        expect(document.body).not.toHaveAttribute("scheme");
      });
      it('does not remove body[scheme] on unmount when scheme="inherit"', () => {
        document.body.setAttribute("scheme", "extern");
        render(<ConfigProvider scheme="inherit" />).unmount();
        expect(document.body).toHaveAttribute("scheme", "extern");
        document.body.removeAttribute("scheme");
      });
    });
  });
  describe("maps schemes", () => {
    it("maps legacy mobile schemes", () => {
      const { rerender } = render(<ConfigProvider scheme="client_dark" />);
      expect(document.body).toHaveAttribute("scheme", "space_gray");
      rerender(<ConfigProvider scheme="client_light" />);
      expect(document.body).toHaveAttribute("scheme", "bright_light");
    });
    it("maps legacy vkcom scheme", () => {
      render(<ConfigProvider scheme={Scheme.VKCOM} />);
      expect(document.body).toHaveAttribute("scheme", "vkcom_light");
    });
    it("enforces vkcom_light scheme on vkcom platform", () => {
      render(<ConfigProvider scheme="bright_light" platform={VKCOM} />);
      expect(document.body).toHaveAttribute("scheme", "vkcom_light");
    });
  });
  describe("resolves appearance from external scheme", () => {
    afterEach(() => () => document.body.removeAttribute("scheme"));
    let appearance: AppearanceType | undefined;
    const ReadAppearance = () => {
      appearance = useContext(ConfigProviderContext).appearance;
      return null;
    };
    it.each([
      [Scheme.SPACE_GRAY, "dark"],
      [Scheme.BRIGHT_LIGHT, "light"],
      [Scheme.VKCOM, "light"],
      [Scheme.VKCOM_DARK, "dark"],
      [Scheme.VKCOM_LIGHT, "light"],
    ] as const)("%s => %s", (scheme, expectAppearance) => {
      document.body.setAttribute("scheme", scheme);
      render(
        <ConfigProvider scheme="inherit">
          <ReadAppearance />
        </ConfigProvider>
      );
      expect(appearance).toBe(expectAppearance);
    });
  });
  describe("inherits properties from parent ConfigProvider context", () => {
    let config: ConfigProviderContextInterface | undefined;
    const ReadConfig = () => {
      config = useContext(ConfigProviderContext);
      return null;
    };

    const defaultConfig: ConfigProviderContextInterface = {
      platform: VKCOM,
      appearance: Appearance.DARK,
      webviewType: WebviewType.INTERNAL,
      hasNewTokens: true,
      transitionMotionEnabled: false,
      isWebView: true,
    };
    it.each([
      ["platform", ANDROID],
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
