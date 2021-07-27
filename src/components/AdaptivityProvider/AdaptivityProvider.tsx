import { ReactNode, useEffect, useState } from 'react';
import { hasMouse as _hasMouse } from '@vkontakte/vkjs';
import { AdaptivityContext, AdaptivityContextInterface, SizeType, ViewHeight, ViewWidth } from './AdaptivityContext';
import { useDOM } from '../../lib/dom';
import { useGlobalEventListener } from '../../hooks/useGlobalEventListener';
import { useObjectMemo } from '../../hooks/useObjectMemo';

export interface AdaptivityProviderProps extends AdaptivityContextInterface {
  children?: ReactNode;
}

export const DESKTOP_SIZE = 1280;
export const TABLET_SIZE = 1024;
export const SMALL_TABLET_SIZE = 768;
export const MOBILE_SIZE = 320;

export const MOBILE_LANDSCAPE_HEIGHT = 414;
export const MEDIUM_HEIGHT = 720;

export default function AdaptivityProvider({ children, ...overrideProps }: AdaptivityProviderProps) {
  const { window } = useDOM();
  const overrides = useObjectMemo(overrideProps);

  const [adaptivityState, setAdaptivity] = useState(calculateAdaptivity(window, overrides));
  const onResize = () => setAdaptivity(calculateAdaptivity(window, overrides));
  const adaptivity = useObjectMemo(adaptivityState);

  useEffect(onResize, [overrides]);
  useGlobalEventListener(window, 'resize', () => onResize());

  return (
    <AdaptivityContext.Provider value={adaptivity}>
      {children}
    </AdaptivityContext.Provider>
  );
}

function calculateAdaptivity(window: Window | null, overrides: AdaptivityProviderProps = {}) {
  const windowWidth = window ? window.innerWidth : 0;
  const windowHeight = window ? window.innerHeight : 0;

  let viewWidth = ViewWidth.SMALL_MOBILE;
  let viewHeight = ViewHeight.SMALL;
  let sizeY = SizeType.REGULAR;
  let sizeX = SizeType.REGULAR;

  if (windowWidth >= DESKTOP_SIZE) {
    viewWidth = ViewWidth.DESKTOP;
  } else if (windowWidth >= TABLET_SIZE) {
    viewWidth = ViewWidth.TABLET;
  } else if (windowWidth >= SMALL_TABLET_SIZE) {
    viewWidth = ViewWidth.SMALL_TABLET;
  } else if (windowWidth >= MOBILE_SIZE) {
    viewWidth = ViewWidth.MOBILE;
  } else {
    viewWidth = ViewWidth.SMALL_MOBILE;
  }

  if (windowHeight >= MEDIUM_HEIGHT) {
    viewHeight = ViewHeight.MEDIUM;
  } else if (windowHeight > MOBILE_LANDSCAPE_HEIGHT) {
    viewHeight = ViewHeight.SMALL;
  } else {
    viewHeight = ViewHeight.EXTRA_SMALL;
  }

  overrides.viewWidth && (viewWidth = overrides.viewWidth);
  overrides.viewHeight && (viewHeight = overrides.viewHeight);

  if (viewWidth <= ViewWidth.MOBILE) {
    sizeX = SizeType.COMPACT;
  }

  let hasMouse = typeof overrides.hasMouse === 'boolean' ? overrides.hasMouse : _hasMouse;
  if (viewWidth >= ViewWidth.SMALL_TABLET && hasMouse || viewHeight <= ViewHeight.EXTRA_SMALL) {
    sizeY = SizeType.COMPACT;
  }

  overrides.sizeX && (sizeX = overrides.sizeX);
  overrides.sizeY && (sizeY = overrides.sizeY);

  return { viewWidth, viewHeight, sizeX, sizeY, hasMouse };
}
