import React, { useRef, useState, useEffect } from 'react';
import { DOMProps, HasChildren } from '../../types';
import { AdaptivityContext, AdaptivityContextInterface, SizeType, ViewHeight, ViewWidth } from './AdaptivityContext';

export interface AdaptivityProviderProps extends AdaptivityContextInterface, HasChildren, DOMProps {}

export const DESKTOP_SIZE = 1280;
export const TABLET_SIZE = 1024;
export const SMALL_TABLET_SIZE = 768;
export const MOBILE_SIZE = 320;

// TODO: Rename the breakpoint
export const HEIGHT_720 = 720;

export default function AdaptivityProvider(props: AdaptivityProviderProps) {
  const adaptivityRef = useRef<AdaptivityContextInterface>(null);
  const [, updateAdaptivity] = useState({});

  if (!adaptivityRef.current) {
    adaptivityRef.current = calculateAdaptivity(props.window.innerWidth, props.window.innerHeight, props);
  }

  useEffect(() => {
    function onResize() {
      const calculated = calculateAdaptivity(props.window.innerWidth, props.window.innerHeight, props);
      const { viewWidth, viewHeight, sizeX, sizeY } = adaptivityRef.current;

      if (
        viewWidth !== calculated.viewWidth ||
        viewHeight !== calculated.viewHeight ||
        sizeX !== calculated.sizeX ||
        sizeY !== calculated.sizeY
      ) {
        adaptivityRef.current = calculated;
        updateAdaptivity({});
      }
    }

    onResize();
    props.window.addEventListener('resize', onResize, false);

    return () => {
      props.window.removeEventListener('resize', onResize, false);
    };
  }, [props.viewWidth, props.viewHeight, props.sizeX, props.sizeY]);

  return <AdaptivityContext.Provider value={adaptivityRef.current}>
    {props.children}
  </AdaptivityContext.Provider>;
}

AdaptivityProvider.defaultProps = {
  window: window,
};

function calculateAdaptivity(windowWidth: number, windowHeight: number, props: AdaptivityProviderProps) {
  let viewWidth = ViewWidth.SMALL_MOBILE;
  let viewHeight = ViewHeight.DEFAULT;

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
    sizeX = SizeType.COMPACT;
  } else {
    viewWidth = ViewWidth.SMALL_MOBILE;
    sizeX = SizeType.COMPACT;
    sizeY = SizeType.COMPACT;
  }

  if (windowHeight >= HEIGHT_720) {
    viewHeight = ViewHeight.HEIGHT_720;
  }

  props.viewWidth && (viewWidth = props.viewWidth);
  props.sizeX && (sizeX = props.sizeX);
  props.sizeY && (sizeY = props.sizeY);

  return { viewWidth, viewHeight, sizeX, sizeY };
}
