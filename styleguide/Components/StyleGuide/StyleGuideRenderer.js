import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { AppRoot, ConfigProvider } from '@vkui';
import { BREAKPOINTS } from '@vkui/lib/adaptivity';
import { useViewPortSize } from '../../utils';
import { SMALL_HEIGHT } from '../Settings/ViewHeightSelect';
import { StyleGuideDesktop } from './StyleGuideDesktop';
import { StyleGuideMobile } from './StyleGuideMobile';
import './StyleGuideRenderer.css';

let initialState = {
  platform: 'android',
  width: BREAKPOINTS.MOBILE,
  height: SMALL_HEIGHT,
  hasPointer: true,
  appearance: 'light',
  styleguideAppearance: 'light',
  hasCustomPanelHeaderAfter: true,
  transitionMotionEnabled: true,
  layout: undefined,
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

export const StyleGuideContext = React.createContext(initialState);

let StyleGuideRenderer = ({ children, toc }) => {
  const [state, setState] = useState(initialState);
  const [popout, setPopout] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  const { width, height, platform, appearance, hasPointer, styleguideAppearance } = state;

  const { viewWidth } = useViewPortSize();

  const setContext = useCallback(
    (data) => {
      const newState = { ...state, ...data };
      localStorage.setItem('vkui:state', JSON.stringify(newState));
      setState(newState);
    },
    [state],
  );

  useEffect(() => {
    if (platform === 'vkcom') {
      setContext({ hasPointer: true, width: BREAKPOINTS.TABLET });
    }
  }, [platform]);

  const switchStyleGuideAppearance = useCallback(() => {
    const value = styleguideAppearance === 'dark' ? 'light' : 'dark';
    setContext({
      styleguideAppearance: value,
      appearance: value,
    });
  }, [platform, styleguideAppearance, setContext]);

  const providerValue = useMemo(
    () => ({ ...state, setContext, setPopout, setActiveModal }),
    [width, height, platform, appearance, hasPointer, setContext],
  );

  const Component = viewWidth >= BREAKPOINTS.SMALL_TABLET ? StyleGuideDesktop : StyleGuideMobile;

  return (
    <StyleGuideContext.Provider value={providerValue}>
      <ConfigProvider
        platform="android"
        appearance={styleguideAppearance}
        transitionMotionEnabled={false}
        hasCustomPanelHeaderAfter={false}
      >
        <AppRoot>
          <Component
            toc={toc}
            popout={popout}
            activeModal={activeModal}
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
