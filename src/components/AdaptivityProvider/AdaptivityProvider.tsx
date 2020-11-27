import React, { useEffect, useRef, useState } from 'react';
import classNames from '../../lib/classNames';
import { DOMProps, HasChildren } from '../../types';
import { AdaptivityContext, AdaptivityContextInterface, SizeType, ViewWidth } from './AdaptivityContext';

export interface AdaptivityProviderProps extends AdaptivityContextInterface, HasChildren, DOMProps {
  embedded?: boolean;
}

export const DESKTOP_SIZE = 1280;
export const TABLET_SIZE = 1024;
export const SMALL_TABLET_SIZE = 768;
export const MOBILE_SIZE = 320;

export default function AdaptivityProvider(props: AdaptivityProviderProps) {
  const adaptivityRef = useRef<AdaptivityContextInterface>(null);
  const [, updateAdaptivity] = useState({});

  if (!adaptivityRef.current) {
    adaptivityRef.current = calculateAdaptivity(props.window.innerWidth, props);
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
      const calculated = calculateAdaptivity(props.window.innerWidth, props);
      const { viewWidth, sizeX, sizeY } = adaptivityRef.current;

      if (
        viewWidth !== calculated.viewWidth ||
        sizeX !== calculated.sizeX ||
        sizeY !== calculated.sizeY
      ) {
        if (!props.embedded) {
          paintBody(calculated.sizeX);
        }
        adaptivityRef.current = calculated;
        updateAdaptivity({});
      }
    }

    if (!props.embedded) {
      paintBody(adaptivityRef.current.sizeX);
    }
    onResize();
    props.window.addEventListener('resize', onResize, false);

    return () => {
      props.window.removeEventListener('resize', onResize, false);
    };
  }, [props.viewWidth, props.sizeX, props.sizeY, props.embedded]);

  return <AdaptivityContext.Provider value={adaptivityRef.current}>
    {props.embedded ? (
      <div className={classNames('AppRoot', {
        'AppRoot-sizeX-regular': adaptivityRef.current.sizeX === SizeType.REGULAR })
      }>
        {props.children}
      </div>
    ) : props.children}
  </AdaptivityContext.Provider>;
}

AdaptivityProvider.defaultProps = {
  window: window,
};

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
