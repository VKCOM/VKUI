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

const { themeName, colorScheme, colorSchemeOptions } = getDefaultByThemesPresets();

let initialState = {
  platform: 'android',
  width: BREAKPOINTS.MOBILE,
  height: SMALL_HEIGHT,
  hasPointer: true,
  themeName,
  colorScheme,
  colorSchemeOptions,
  styleguideColorScheme: 'light',
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
    colorScheme: prevColorScheme,
    colorSchemeOptions: prevcolorSchemeOptions,
    platform: prevPlatform,
  },
  {
    themeName: nextThemeName,
    colorScheme: nextColorScheme,
    colorSchemeOptions: nextcolorSchemeOptions,
    platform: nextPlatform,
  },
) => {
  const props = {
    themeName: prevThemeName,
    colorScheme: prevColorScheme,
    colorSchemeOptions: prevcolorSchemeOptions,
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

  if (nextColorScheme) {
    props.colorScheme = nextColorScheme;
  }

  if (nextcolorSchemeOptions) {
    props.colorSchemeOptions = nextcolorSchemeOptions;
  }

  const currentColorSchemeDisabled = props.colorSchemeOptions.find(
    ({ value, disabled }) => value === prevColorScheme && disabled,
  );

  if (currentColorSchemeDisabled) {
    const foundEnabledAppearance = props.colorSchemeOptions.find(({ disabled }) => !disabled);

    if (foundEnabledAppearance) {
      props.colorScheme = foundEnabledAppearance.value;
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
    colorScheme,
    themeName,
    hasPointer,
    colorSchemeOptions,
    styleguideColorScheme,
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

  const switchStyleGuideColorScheme = useCallback(() => {
    const value = styleguideColorScheme === 'dark' ? 'light' : 'dark';
    const foundColorScheme = colorSchemeOptions.find((colorScheme) => colorScheme.value === value);
    setContext({
      styleguideColorScheme: value,
      colorScheme: foundColorScheme?.disabled ? colorScheme : value,
    });
  }, [platform, colorScheme, colorSchemeOptions, styleguideColorScheme, setContext]);

  const providerValue = useMemo(
    () => ({
      ...state,
      setContext,
      setPopout,
      setActiveModal,
    }),
    [width, height, platform, colorScheme, themeName, hasPointer, setContext],
  );

  const Component = viewWidth >= BREAKPOINTS.SMALL_TABLET ? StyleGuideDesktop : StyleGuideMobile;

  return (
    <StyleGuideContext.Provider value={providerValue}>
      <ConfigProvider
        platform="android"
        colorScheme={styleguideColorScheme}
        transitionMotionEnabled={false}
        hasCustomPanelHeaderAfter={false}
      >
        <AppRoot disablePortal>
          <Component
            toc={toc}
            popout={popout}
            activeModal={activeModal}
            switchStyleGuideColorScheme={switchStyleGuideColorScheme}
          >
            {children}
          </Component>
        </AppRoot>
      </ConfigProvider>
    </StyleGuideContext.Provider>
  );
};

export default StyleGuideRenderer;
