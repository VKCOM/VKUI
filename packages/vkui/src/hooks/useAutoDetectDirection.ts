import * as React from 'react';
import { type Direction } from '../lib/direction';
import { useDOM } from '../lib/dom';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect';

export const useAutoDetectDirection = (directionProp: Direction): Direction => {
  const [direction, setDirection] = React.useState<Direction>(directionProp || 'ltr');
  const { window, document } = useDOM();

  const update = () => {
    if (directionProp) {
      setDirection(directionProp);
      return;
    }
    if (!window || !document) {
      return;
    }
    const styleDeclaration = window.getComputedStyle(document.body);
    setDirection(styleDeclaration.direction as Direction);
  };
  useIsomorphicLayoutEffect(update, [window, document, directionProp]);

  return direction;
};
