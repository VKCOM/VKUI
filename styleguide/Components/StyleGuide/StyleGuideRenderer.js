import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  MOBILE_SIZE,
  TABLET_SIZE,
} from "@vkui/components/AdaptivityProvider/AdaptivityProvider";
import { SMALL_HEIGHT } from "../Settings/ViewHeightSelect";
import {
  VKCOM,
  AppRoot,
  AdaptivityProvider,
  withAdaptivity,
  ConfigProvider,
  ViewWidth,
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

let StyleGuideRenderer = ({ children, toc, viewWidth }) => {
  const [state, setState] = useState(initialState);
  const [popout, setPopout] = useState(null);
  const { width, height, platform, scheme, hasMouse, styleguideAppearance } =
    state;

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
    [width, height, platform, scheme, hasMouse, setContext, setPopout]
  );

  const Component =
    viewWidth > ViewWidth.MOBILE ? StyleGuideDesktop : StyleGuideMobile;

  return (
    <StyleGuideContext.Provider value={providerValue}>
      <ConfigProvider
        platform={Platform.ANDROID}
        appearance={styleguideAppearance}
        transitionMotionEnabled={false}
        webviewType="internal"
      >
        <AppRoot noLegacyClasses>
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

StyleGuideRenderer = withAdaptivity(StyleGuideRenderer, {
  sizeX: true,
  viewWidth: true,
});

const StyleGuideWrapper = (props) => {
  return (
    <AdaptivityProvider>
      <StyleGuideRenderer {...props} />
    </AdaptivityProvider>
  );
};

export default StyleGuideWrapper;
