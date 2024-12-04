'use client';

import { useReducedMotion } from '../../lib/animation';
import { type SpinnerProps } from './Spinner';

interface SpinnerAnimationProps {
  size: SpinnerProps['size'];
}

export function SpinnerAnimation({ size = 'm' }: SpinnerAnimationProps) {
  const isReducedMotion = useReducedMotion();

  if (isReducedMotion === undefined) {
    return null;
  }

  if (isReducedMotion) {
    return (
      <animate
        attributeName="opacity"
        keyTimes="0; 0.5; 1"
        values="1; 0.1; 1"
        begin="0s"
        dur="2s"
        repeatCount="indefinite"
      />
    );
  }

  const center = { s: 8, m: 12, l: 16, xl: 22 }[size];
  return (
    <animateTransform
      attributeType="XML"
      attributeName="transform"
      type="rotate"
      from={`0 ${center} ${center}`}
      to={`360 ${center} ${center}`}
      dur="0.7s"
      repeatCount="indefinite"
    />
  );
}
