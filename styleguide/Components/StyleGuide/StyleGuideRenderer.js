import React, { useCallback, useEffect, useMemo, useState } from "react";
import { BREAKPOINTS } from "@vkui/lib/adaptivity";
import { SMALL_HEIGHT } from "../Settings/ViewHeightSelect";
import {
  AppRoot,
  ConfigProvider,
  WebviewType,
  Platform,
  Appearance,
} from "@vkui";
import "./StyleGuideRenderer.css";
import { StyleGuideMobile } from "./StyleGuideMobile";
import { StyleGuideDesktop } from "./StyleGuideDesktop";
import { useViewPortSize } from "../../utils";

let initialState = {
  platform: Platform.ANDROID,
  width: BREAKPOINTS.MOBILE,
  height: SMALL_HEIGHT,
  hasPointer: true,
  appearance: Appearance.LIGHT,
  styleguideAppearance: Appearance.LIGHT,
  webviewType: WebviewType.VKAPPS,
  transitionMotionEnabled: true,
};

try {
  const lsState = localStorage.getItem("vkui:state");
  if (lsState) {
    initialState = {
      ...initialState,
      ...JSON.parse(lsState),
    };
  }
} catch (e) {
  console.log(e);
}

export const StyleGuideContext = React.createContext(initialState);

let StyleGuideRenderer = ({ children, toc }) => {
  const [state, setState] = useState(initialState);
  const [popout, setPopout] = useState(null);
  const {
    width,
    height,
    platform,
    appearance,
    hasPointer,
    styleguideAppearance,
  } = state;

  const { viewWidth } = useViewPortSize();

  const setContext = useCallback(
    (data) => {
      const newState = { ...state, ...data };
      localStorage.setItem("vkui:state", JSON.stringify(newState));
      setState(newState);
    },
    [state]
  );

  useEffect(() => {
    if (platform === Platform.VKCOM) {
      setContext({ hasPointer: true, width: BREAKPOINTS.TABLET });
    }
  }, [platform]);

  const switchStyleGuideAppearance = useCallback(() => {
    const value =
      styleguideAppearance === Appearance.DARK
        ? Appearance.LIGHT
        : Appearance.DARK;
    setContext({
      styleguideAppearance: value,
      appearance: value,
    });
  }, [platform, styleguideAppearance, setContext]);

  const providerValue = useMemo(
    () => ({ ...state, setContext, setPopout }),
    [width, height, platform, appearance, hasPointer, setContext, setPopout]
  );

  const Component =
    viewWidth >= BREAKPOINTS.SMALL_TABLET
      ? StyleGuideDesktop
      : StyleGuideMobile;

  return (
    <StyleGuideContext.Provider value={providerValue}>
      <ConfigProvider
        platform={Platform.ANDROID}
        appearance={styleguideAppearance}
        transitionMotionEnabled={false}
        webviewType="internal"
      >
        <AppRoot>
          <Component
            toc={toc}
            popout={popout}
            switchStyleGuideAppearance={switchStyleGuideAppearance}
          >
            {children}
          </Component>
        </AppRoot>
      </ConfigProvider>
    </StyleGuideContext.Provider>
  );
};

export default StyleGuideRenderer;
