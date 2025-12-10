import * as React from 'react';
import { type Direction } from '../lib/direction';
import { useDOM } from '../lib/dom';

export const useAutoDetectDirection = (directionProp: Direction | undefined): Direction => {
  const { window, document } = useDOM();

  return React.useMemo(() => {
    if (directionProp) {
      return directionProp;
    }
    if (!window || !document) {
      return 'ltr';
    }
    const styleDeclaration = window.getComputedStyle(document.body);
    return (styleDeclaration.direction as Direction) || 'ltr';
  }, [directionProp, document, window]);
};
