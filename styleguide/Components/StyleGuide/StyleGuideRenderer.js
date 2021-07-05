import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { MOBILE_SIZE, TABLET_SIZE } from '@vkui/components/AdaptivityProvider/AdaptivityProvider';
import { defaultConfigProviderProps } from '@vkui/components/ConfigProvider/ConfigProviderContext';
import { SMALL_HEIGHT } from '../ViewHeightSelect';
import {
  VKCOM,
  AppRoot,
  Scheme,
  WebviewType,
  AdaptivityProvider,
  SplitLayout,
  withAdaptivity,
  SplitCol,
  ConfigProvider
} from '@vkui';
import './StyleGuideRenderer.css';
import { StyleGuideHeader } from './StyleGuideHeader';

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
  integration: "full",
  webviewType: WebviewType.INTERNAL,
  width: MOBILE_SIZE,
  height: SMALL_HEIGHT,
  hasMouse: true,
  styleguideScheme: Scheme.BRIGHT_LIGHT,
}

try {
  const lsState =  localStorage.getItem('vkui:state');
  if (lsState) {
    initialState = {
      ...initialState,
      ...JSON.parse(lsState)
    };
  }
} catch (e) {
  console.log(e);
}

let StyleGuideRenderer = ({ children, toc }) => {
  const [state, setState] = useState(initialState);
  const [popout, setPopout] = useState(null);
  const { width, height, platform, scheme, hasMouse, styleguideScheme } = state;

  const setContext = useCallback((data) => {
    const newState = { ...state, ...data };
    localStorage.setItem('vkui:state', JSON.stringify(newState));
    setState(newState);
  }, [state])

  useEffect(() => {
    if (platform === VKCOM) {
      setContext({ hasMouse: true, width: TABLET_SIZE, scheme: Scheme.VKCOM });
    } else if (scheme === Scheme.VKCOM) {
      setContext({ scheme: Scheme.BRIGHT_LIGHT });
    }
  }, [platform, scheme]);

  const providerValue = useMemo(() => ({ ...state, setContext, setPopout }), [width, height, platform, scheme, hasMouse, setContext, setPopout]);

  return (
    <StyleGuideContext.Provider value={providerValue}>
      <ConfigProvider scheme={styleguideScheme}>
        <StyleGuideHeader scheme={styleguideScheme} setScheme={(value) => {
          if (platform !== VKCOM) {
            setContext({ styleguideScheme: value, scheme: value });
          } else {
            setContext({ styleguideScheme: value });
          }
        }} />
        <SplitLayout className="StyleGuide" popout={popout}>
          <SplitCol minWidth="340px" width="30%" maxWidth="480px" className="StyleGuide__sidebar">
            <div className="StyleGuide__sidebarIn">
              {toc}
            </div>
          </SplitCol>
          <SplitCol width="100%" className="StyleGuide__content">
            <div className="StyleGuide__contentIn">
              {children}
            </div>
          </SplitCol>
        </SplitLayout>
      </ConfigProvider>
    </StyleGuideContext.Provider>
  )
}

StyleGuideRenderer = withAdaptivity(StyleGuideRenderer, { sizeX: true });

const StyleGuideWrapper = (props) => {
  return (
      <AdaptivityProvider>
        <AppRoot noLegacyClasses>
          <StyleGuideRenderer {...props} />
        </AppRoot>
      </AdaptivityProvider>
  )
}

export default StyleGuideWrapper;
