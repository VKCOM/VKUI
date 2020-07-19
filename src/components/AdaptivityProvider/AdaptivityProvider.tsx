import React, { useRef, useState, useEffect } from 'react';
import { HasChildren } from '../../types';
import { AdaptivityContext, AdaptivityContextInterface, SizeType, ViewWidth } from './AdaptivityContext';

export interface AdaptivityProviderProps extends AdaptivityContextInterface, HasChildren {};

const DESKTOP_SIZE = 1280;
const TABLET_SIZE = 1024;
const SMALL_TABLET_SIZE = 768;
const MOBILE_SIZE = 320;

export default function AdaptivityProvider(props: AdaptivityProviderProps) {
  const adaptivityRef = useRef<AdaptivityContextInterface>(null);
  const [, updateAdaptivity] = useState({});

  if (!adaptivityRef.current) {
    adaptivityRef.current = calculateAdaptivity(innerWidth, props);
  }

  useEffect(() => {
    function onResize() {
      const calculated = calculateAdaptivity(innerWidth, props);
      const { viewWidth, sizeX, sizeY } = adaptivityRef.current;

      if (
        viewWidth !== calculated.viewWidth ||
        sizeX !== calculated.sizeX ||
        sizeY !== calculated.sizeY
      ) {
        adaptivityRef.current = calculated;
        updateAdaptivity({});
      }
    }

    window.addEventListener('resize', onResize, false);

    return () => {
      window.removeEventListener('resize', onResize, false);
    };
  }, [props.viewWidth, props.sizeX, props.sizeY]);

  return <AdaptivityContext.Provider value={adaptivityRef.current}>
    {props.children}
  </AdaptivityContext.Provider>;
}

function calculateAdaptivity(windowWidth: number, props: AdaptivityProviderProps) {
  let viewWidth = ViewWidth.SMALL_MOBILE;
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

  props.viewWidth && (viewWidth = props.viewWidth);
  props.sizeX && (sizeX = props.sizeX);
  props.sizeY && (sizeY = props.sizeY);

  return { viewWidth, sizeX, sizeY };
}
