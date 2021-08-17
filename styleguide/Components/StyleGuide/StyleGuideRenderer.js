import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { MOBILE_SIZE, TABLET_SIZE } from '@vkui/components/AdaptivityProvider/AdaptivityProvider';
import { Appearance, defaultConfigProviderProps } from '@vkui/components/ConfigProvider/ConfigProviderContext';
import { SMALL_HEIGHT } from '../Settings/ViewHeightSelect';
import {
  VKCOM,
  AppRoot,
  Scheme,
  WebviewType,
  AdaptivityProvider,
  withAdaptivity,
  ConfigProvider,
  ViewWidth,
} from '@vkui';
import './StyleGuideRenderer.css';
import { StyleGuideMobile } from './StyleGuideMobile';
import { StyleGuideDesktop } from './StyleGuideDesktop';

export const StyleGuideContext = React.createContext({
  ...defaultConfigProviderProps,
  webviewType: WebviewType.INTERNAL,
  width: MOBILE_SIZE,
  height: SMALL_HEIGHT,
  hasMouse: true,
  styleguideScheme: Scheme.BRIGHT_LIGHT,
});

let initialState = {
  ...defaultConfigProviderProps,
  integration: 'full',
  webviewType: WebviewType.INTERNAL,
  width: MOBILE_SIZE,
  height: SMALL_HEIGHT,
  hasMouse: true,
  styleguideScheme: Scheme.BRIGHT_LIGHT,
};

try {
  const lsState = localStorage.getItem('vkui:state');
  if (lsState) {
    initialState = {
      ...initialState,
      ...JSON.parse(lsState),
    };
  }
} catch (e) {
  console.log(e);
}

let StyleGuideRenderer = ({ children, toc, viewWidth }) => {
  const [state, setState] = useState(initialState);
  const [popout, setPopout] = useState(null);
  const { width, height, platform, scheme, hasMouse, styleguideScheme } = state;

  const setContext = useCallback((data) => {
    const newState = { ...state, ...data };
    localStorage.setItem('vkui:state', JSON.stringify(newState));
    setState(newState);
  }, [state]);

  useEffect(() => {
    if (platform === VKCOM) {
      setContext({ hasMouse: true, width: TABLET_SIZE, scheme: Scheme.VKCOM });
    } else if (scheme === Scheme.VKCOM) {
      setContext({ scheme: Scheme.BRIGHT_LIGHT });
    }
  }, [platform, scheme]);

  useEffect(() => {
    const styleGuideAppearance = styleguideScheme === Scheme.SPACE_GRAY ? Appearance.DARK : Appearance.LIGHT;
    document.documentElement.style.setProperty('color-scheme', styleGuideAppearance);
  }, [styleguideScheme]);

  const switchStyleGuideScheme = useCallback(() => {
    const newValue = styleguideScheme === Scheme.SPACE_GRAY ? Scheme.BRIGHT_LIGHT : Scheme.SPACE_GRAY;
    if (platform !== VKCOM) {
      setContext({ styleguideScheme: newValue, scheme: newValue });
    } else {
      setContext({ styleguideScheme: newValue });
    }
  }, [platform, styleguideScheme]);

  const providerValue = useMemo(() => ({ ...state, setContext, setPopout }), [width, height, platform, scheme, hasMouse, setContext, setPopout]);

  const Component = viewWidth > ViewWidth.MOBILE ? StyleGuideDesktop : StyleGuideMobile;

  return (
    <StyleGuideContext.Provider value={providerValue}>
      <ConfigProvider scheme={styleguideScheme} transitionMotionEnabled={false} webviewType="internal">
        <Component toc={toc} popout={popout} switchStyleGuideScheme={switchStyleGuideScheme}>{children}</Component>
      </ConfigProvider>
    </StyleGuideContext.Provider>
  );
};

StyleGuideRenderer = withAdaptivity(StyleGuideRenderer, { sizeX: true, viewWidth: true });

const StyleGuideWrapper = (props) => {
  return (
    <AdaptivityProvider>
      <AppRoot noLegacyClasses>
        <StyleGuideRenderer {...props} />
      </AppRoot>
    </AdaptivityProvider>
  );
};

export default StyleGuideWrapper;
