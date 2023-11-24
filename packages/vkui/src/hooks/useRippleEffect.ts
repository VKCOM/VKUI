import * as React from 'react';
import { type TouchEvent } from '../components/Touch/Touch';
import { coordX, coordY } from '../lib/touch';

export const useRippleEffect = () => {
  const [x, updateX] = React.useState<number>(0);
  const [y, updateY] = React.useState<number>(0);
  const onTappableStart = ({ originalEvent }: TouchEvent) => {
    updateX(coordX(originalEvent));
    updateY(coordY(originalEvent));
  };

  return { x, y, onTappableStart };
};
