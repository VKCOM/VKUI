import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  MOBILE_SIZE,
  TABLET_SIZE,
} from "@vkui/components/AdaptivityProvider/AdaptivityProvider";
import { SMALL_HEIGHT } from "../Settings/ViewHeightSelect";
import {
  VKCOM,
  AppRoot,
  ConfigProvider,
  WebviewType,
  Platform,
  Appearance,
} from "@vkui";
import "./StyleGuideRenderer.css";
import { StyleGuideMobile } from "./StyleGuideMobile";
import { StyleGuideDesktop } from "./StyleGuideDesktop";

let initialState = {
  platform: Platform.ANDROID,
  width: MOBILE_SIZE,
  height: SMALL_HEIGHT,
  hasMouse: true,
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
    hasMouse,
    styleguideAppearance,
  } = state;

  const setContext = useCallback(
    (data) => {
      const newState = { ...state, ...data };
      localStorage.setItem("vkui:state", JSON.stringify(newState));
      setState(newState);
    },
    [state]
  );

  useEffect(() => {
    if (platform === VKCOM) {
      setContext({ hasMouse: true, width: TABLET_SIZE });
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
    [width, height, platform, appearance, hasMouse, setContext, setPopout]
  );

  return (
    <StyleGuideContext.Provider value={providerValue}>
      <ConfigProvider
        platform={Platform.ANDROID}
        appearance={styleguideAppearance}
        transitionMotionEnabled={false}
        webviewType="internal"
      >
        <AppRoot noLegacyClasses>
          <StyleGuideMobile
            toc={toc}
            popout={popout}
            switchStyleGuideAppearance={switchStyleGuideAppearance}
          >
            {children}
          </StyleGuideMobile>
          <StyleGuideDesktop
            toc={toc}
            popout={popout}
            switchStyleGuideAppearance={switchStyleGuideAppearance}
          >
            {children}
          </StyleGuideDesktop>
        </AppRoot>
      </ConfigProvider>
    </StyleGuideContext.Provider>
  );
};

export default StyleGuideRenderer;
