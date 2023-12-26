import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { AppRoot, ConfigProvider } from '@vkui';
import { BREAKPOINTS } from '@vkui/lib/adaptivity';
import {
  DEFAULT_THEME_FOR_PLATFORM,
  DEFAULT_THEME_NAMES,
  getDefaultByThemesPresets,
} from '../../lib/theme';
import { useViewPortSize } from '../../utils';
import { SMALL_HEIGHT } from '../Settings/ViewHeightSelect';
import { StyleGuideDesktop } from './StyleGuideDesktop';
import { StyleGuideMobile } from './StyleGuideMobile';
import './StyleGuideRenderer.css';

const { themeName, appearance, appearanceOptions } = getDefaultByThemesPresets();

let initialState = {
  platform: 'android',
  width: BREAKPOINTS.MOBILE,
  height: SMALL_HEIGHT,
  hasPointer: true,
  themeName,
  appearance,
  appearanceOptions,
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

const resolveThemeProps = (
  {
    themeName: prevThemeName,
    appearance: prevAppearance,
    appearanceOptions: prevAppearanceOptions,
    platform: prevPlatform,
  },
  {
    themeName: nextThemeName,
    appearance: nextAppearance,
    appearanceOptions: nextAppearanceOptions,
    platform: nextPlatform,
  },
) => {
  const props = {
    themeName: prevThemeName,
    appearance: prevAppearance,
    appearanceOptions: prevAppearanceOptions,
    platform: prevPlatform,
  };

  let themeNameOverride = false;

  if (nextPlatform) {
    props.platform = nextPlatform;

    if (DEFAULT_THEME_NAMES.includes(prevThemeName)) {
      themeNameOverride = true;
      props.themeName = DEFAULT_THEME_FOR_PLATFORM.get(nextPlatform);
    }
  }

  if (nextThemeName && !themeNameOverride) {
    props.themeName = nextThemeName;
  }

  if (nextAppearance) {
    props.appearance = nextAppearance;
  }

  if (nextAppearanceOptions) {
    props.appearanceOptions = nextAppearanceOptions;
  }

  const currentAppearanceDisabled = props.appearanceOptions.find(
    ({ value, disabled }) => value === prevAppearance && disabled,
  );

  if (currentAppearanceDisabled) {
    const foundEnabledAppearance = props.appearanceOptions.find(({ disabled }) => !disabled);

    if (foundEnabledAppearance) {
      props.appearance = foundEnabledAppearance.value;
    }
  }

  return props;
};

let StyleGuideRenderer = ({ children, toc }) => {
  const [state, setState] = useState(initialState);
  const [popout, setPopout] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  const {
    width,
    height,
    platform,
    appearance,
    themeName,
    hasPointer,
    appearanceOptions,
    styleguideAppearance,
  } = state;

  const { viewWidth } = useViewPortSize();

  const setContext = useCallback(
    (data) => {
      const newState = {
        ...state,
        ...data,
        ...resolveThemeProps(state, data),
      };
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
    const foundAppearance = appearanceOptions.find((appearance) => appearance.value === value);
    setContext({
      styleguideAppearance: value,
      appearance: foundAppearance?.disabled ? appearance : value,
    });
  }, [platform, appearance, appearanceOptions, styleguideAppearance, setContext]);

  const providerValue = useMemo(
    () => ({
      ...state,
      setContext,
      setPopout,
      setActiveModal,
    }),
    [width, height, platform, appearance, themeName, hasPointer, setContext],
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
