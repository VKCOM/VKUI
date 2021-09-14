import * as React from 'react';
import { hasMouse as _hasMouse } from '@vkontakte/vkjs';
import { AdaptivityContext, AdaptivityContextInterface, SizeType, ViewHeight, ViewWidth } from './AdaptivityContext';
import { useDOM } from '../../lib/dom';

export interface AdaptivityProviderProps extends AdaptivityContextInterface {
  children?: React.ReactNode;
}

export const DESKTOP_SIZE = 1280;
export const TABLET_SIZE = 1024;
export const SMALL_TABLET_SIZE = 768;
export const MOBILE_SIZE = 320;

export const MOBILE_LANDSCAPE_HEIGHT = 414;
export const MEDIUM_HEIGHT = 720;

export default function AdaptivityProvider(props: AdaptivityProviderProps) {
  const adaptivityRef = React.useRef<AdaptivityContextInterface>(null);
  const [, updateAdaptivity] = React.useState({});

  const { window } = useDOM();

  if (!adaptivityRef.current) {
    adaptivityRef.current = calculateAdaptivity(
      window ? window.innerWidth : 0,
      window ? window.innerHeight : 0,
      props,
    );
  }

  React.useEffect(() => {
    function onResize() {
      const calculated = calculateAdaptivity(window.innerWidth, window.innerHeight, props);
      const { viewWidth, viewHeight, sizeX, sizeY, hasMouse } = adaptivityRef.current;

      if (
        viewWidth !== calculated.viewWidth ||
        viewHeight !== calculated.viewHeight ||
        sizeX !== calculated.sizeX ||
        sizeY !== calculated.sizeY ||
        hasMouse !== calculated.hasMouse
      ) {
        adaptivityRef.current = calculated;
        updateAdaptivity({});
      }
    }

    onResize();
    window.addEventListener('resize', onResize, false);

    return () => {
      window.removeEventListener('resize', onResize, false);
    };
  }, [props.viewWidth, props.viewHeight, props.sizeX, props.sizeY, props.hasMouse]);

  return (
    <AdaptivityContext.Provider value={adaptivityRef.current}>
      {props.children}
    </AdaptivityContext.Provider>
  );
}

function calculateAdaptivity(windowWidth: number, windowHeight: number, props: AdaptivityProviderProps) {
  let viewWidth = ViewWidth.SMALL_MOBILE;
  let viewHeight = ViewHeight.SMALL;
  let sizeY = SizeType.REGULAR;
  let sizeX = SizeType.REGULAR;
  let hasMouse = typeof props.hasMouse === 'boolean' ? props.hasMouse : _hasMouse;

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

  props.viewWidth && (viewWidth = props.viewWidth);
  props.viewHeight && (viewHeight = props.viewHeight);

  if (viewWidth <= ViewWidth.MOBILE) {
    sizeX = SizeType.COMPACT;
  }

  if (viewWidth >= ViewWidth.SMALL_TABLET && hasMouse || viewHeight <= ViewHeight.EXTRA_SMALL) {
    sizeY = SizeType.COMPACT;
  }

  props.sizeX && (sizeX = props.sizeX);
  props.sizeY && (sizeY = props.sizeY);

  return { viewWidth, viewHeight, sizeX, sizeY, hasMouse };
}
