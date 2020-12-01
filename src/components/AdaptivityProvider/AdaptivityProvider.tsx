import React, { useEffect, useRef, useState } from 'react';
import { DOMProps, HasChildren } from '../../types';
import { hasMouse as _hasMouse } from '@vkontakte/vkjs/lib/InputUtils';
import { AdaptivityContext, AdaptivityContextInterface, SizeType, ViewHeight, ViewWidth } from './AdaptivityContext';

export interface AdaptivityProviderProps extends AdaptivityContextInterface, HasChildren, DOMProps {}

export const DESKTOP_SIZE = 1280;
export const TABLET_SIZE = 1024;
export const SMALL_TABLET_SIZE = 768;
export const MOBILE_SIZE = 320;

export const MOBILE_LANDSCAPE_HEIGHT = 414;
export const MEDIUM_HEIGHT = 720;

export default function AdaptivityProvider(props: AdaptivityProviderProps) {
  const adaptivityRef = useRef<AdaptivityContextInterface>(null);
  const [, updateAdaptivity] = useState({});

  if (!adaptivityRef.current) {
    adaptivityRef.current = calculateAdaptivity(props.window.innerWidth, props.window.innerHeight, props);
  }

  function paintBody(sizeX: SizeType) {
    if (sizeX === SizeType.REGULAR) {
      props.window.document.body.classList.add('vkui-sizeX-regular');
    } else {
      props.window.document.body.classList.remove('vkui-sizeX-regular');
    }
  }

  useEffect(() => {
    function onResize() {
      const calculated = calculateAdaptivity(props.window.innerWidth, props.window.innerHeight, props);
      const { viewWidth, viewHeight, sizeX, sizeY, hasMouse } = adaptivityRef.current;

      if (
        viewWidth !== calculated.viewWidth ||
        viewHeight !== calculated.viewHeight ||
        sizeX !== calculated.sizeX ||
        sizeY !== calculated.sizeY ||
        hasMouse !== calculated.hasMouse
      ) {
        paintBody(calculated.sizeX);
        adaptivityRef.current = calculated;
        updateAdaptivity({});
      }
    }

    paintBody(adaptivityRef.current.sizeX);
    onResize();
    props.window.addEventListener('resize', onResize, false);

    return () => {
      props.window.removeEventListener('resize', onResize, false);
    };
  }, [props.viewWidth, props.viewHeight, props.sizeX, props.sizeY, props.hasMouse]);

  return <AdaptivityContext.Provider value={adaptivityRef.current}>
    {props.children}
  </AdaptivityContext.Provider>;
}

AdaptivityProvider.defaultProps = {
  window: window,
};

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
    sizeX = SizeType.COMPACT;
  } else {
    viewWidth = ViewWidth.SMALL_MOBILE;
    sizeX = SizeType.COMPACT;
  }

  if (windowHeight >= MEDIUM_HEIGHT) {
    viewHeight = ViewHeight.MEDIUM;
  } else if (windowHeight > MOBILE_LANDSCAPE_HEIGHT) {
    viewHeight = ViewHeight.SMALL;
  } else {
    viewHeight = ViewHeight.EXTRA_SMALL;
    sizeY = SizeType.COMPACT;
  }

  if (windowWidth >= SMALL_TABLET_SIZE && hasMouse) {
    sizeY = SizeType.COMPACT;
  }

  props.viewWidth && (viewWidth = props.viewWidth);
  props.viewHeight && (viewHeight = props.viewHeight);
  props.sizeX && (sizeX = props.sizeX);
  props.sizeY && (sizeY = props.sizeY);

  return { viewWidth, viewHeight, sizeX, sizeY, hasMouse };
}
