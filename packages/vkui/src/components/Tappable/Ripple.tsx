'use client';

import * as React from 'react';
import { classNames, noop } from '@vkontakte/vkjs';
import { getOffsetRect } from '../../lib/offset';
import { type CSSCustomProperties } from '../../types';
import styles from './Tappable.module.css';

/* eslint-disable jsdoc/require-jsdoc */

type WaveState = 'inactive' | 'fadeIn' | 'fadeOut';

interface Wave {
  x: number;
  y: number;
  rippleSize: number;
  rippleScale: number;
  state: WaveState;
}

const TOUCH_DELAY = 150;

const INITIAL_ORIGIN_SCALE = 0.2;
const SOFT_EDGE_MINIMUM_SIZE = 75;
const SOFT_EDGE_CONTAINER_RATIO = 0.35;
const PADDING = 10;

function calcRippleSize(width: number, height: number): number {
  return Math.floor(Math.max(width, height) * INITIAL_ORIGIN_SCALE);
}

function calcRippleScale(initialRippleSize: number, width: number, height: number) {
  const maxDim = Math.max(width, height);
  const softEdgeSize = Math.max(SOFT_EDGE_CONTAINER_RATIO * maxDim, SOFT_EDGE_MINIMUM_SIZE);

  const diagonal = Math.sqrt(width ** 2 + height ** 2);
  const maxRadius = diagonal * 2 + PADDING;

  return (maxRadius + softEdgeSize) / initialRippleSize;
}

/**
 * Хук для создания Ripple эффектов.
 */
export const useRipple = (
  needRipple: boolean,
): {
  wave: Wave;
  onPointerDown: React.PointerEventHandler<HTMLSpanElement>;
  onPointerUp: React.PointerEventHandler<HTMLSpanElement>;
  onPointerCancel: React.PointerEventHandler<HTMLSpanElement>;
  onWaveAnimationEnd: React.AnimationEventHandler<HTMLSpanElement>;
} => {
  const pointerDelayTimerRef = React.useRef<ReturnType<typeof setTimeout>>(undefined);

  const pointerDownRef = React.useRef(false);
  const fadeInAnimationInProgressRef = React.useRef(false);

  const [state, setState] = React.useState<WaveState>('inactive');

  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);
  const [rippleSize, setRippleSize] = React.useState(0);
  const [rippleScale, setRippleScale] = React.useState(0);

  const checkEndFadeIn = () => {
    if (state !== 'fadeIn' || pointerDownRef.current || fadeInAnimationInProgressRef.current) {
      return;
    }

    setState('fadeOut');
  };

  const onAnimationEnd = () => {
    switch (state) {
      case 'fadeIn':
        fadeInAnimationInProgressRef.current = false;
        checkEndFadeIn();
        break;
      case 'fadeOut':
        setState('inactive');
        break;
    }
  };

  function addClick(x: number, y: number, rippleSize: number, rippleScale: number) {
    setState('fadeIn');
    fadeInAnimationInProgressRef.current = true;
    setX(x);
    setY(y);
    setRippleSize(rippleSize);
    setRippleScale(rippleScale);
  }

  const onPointerDown: React.PointerEventHandler<HTMLSpanElement> = (e) => {
    setState('inactive');
    const { top, left, width, height } = getOffsetRect(e.currentTarget);

    const rippleSize = calcRippleSize(width, height);
    const rippleScale = calcRippleScale(rippleSize, width, height);

    const x = e.clientX - (left ?? 0);
    const y = e.clientY - (top ?? 0);

    const delay = e.pointerType === 'touch' ? TOUCH_DELAY : 0;

    pointerDelayTimerRef.current = setTimeout(() => addClick(x, y, rippleSize, rippleScale), delay);
    pointerDownRef.current = true;
  };

  const onPointerCancel: React.PointerEventHandler<HTMLSpanElement> = () => {
    clearTimeout(pointerDelayTimerRef.current);
    pointerDownRef.current = false;
    checkEndFadeIn();
  };

  const onPointerUp: React.PointerEventHandler<HTMLSpanElement> = () => {
    pointerDownRef.current = false;
    checkEndFadeIn();
  };

  return {
    wave: {
      x,
      y,
      rippleSize,
      rippleScale,
      state,
    },
    onWaveAnimationEnd: onAnimationEnd,
    onPointerDown: needRipple ? onPointerDown : noop,
    onPointerUp: needRipple ? onPointerUp : noop,
    onPointerCancel: needRipple ? onPointerCancel : noop,
  };
};

export interface RippleProps {
  needRipple: boolean;
  wave: Wave;
  onWaveAnimationEnd: React.AnimationEventHandler<HTMLSpanElement>;
}

const stylesState: Record<WaveState, string | undefined> = {
  inactive: undefined,
  fadeIn: styles.waveFadeIn,
  fadeOut: styles.waveFadeOut,
};

export const Ripple = ({
  needRipple = true,
  wave,
  onWaveAnimationEnd,
}: RippleProps): React.ReactNode => {
  const style: React.CSSProperties & CSSCustomProperties = {
    'top': wave.y - wave.rippleSize / 2,
    'left': wave.x - wave.rippleSize / 2,
    'width': wave.rippleSize,
    'height': wave.rippleSize,
    '--vkui_internal--Tappable-scale': wave.rippleScale.toString(),
  };

  return (
    <span aria-hidden className={classNames(styles.stateLayer, needRipple && styles.ripple)}>
      <span
        className={classNames(styles.wave, stylesState[wave.state])}
        style={style}
        onAnimationEnd={onWaveAnimationEnd}
      />
    </span>
  );
};
