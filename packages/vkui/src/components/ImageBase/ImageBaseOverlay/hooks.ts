import * as React from 'react';
import { useFocusWithin } from '../../../hooks/useFocusWithin';
import { useIsomorphicLayoutEffect } from '../../../lib/useIsomorphicLayoutEffect';

export function useNonInteractiveOverlayProps(rootRef: React.MutableRefObject<HTMLElement | null>) {
  const focusWithin = useFocusWithin(rootRef);
  const [nonInteractiveFocusShown, setNonInteractiveFocusShown] = React.useState(false);

  function onClick(event: React.MouseEvent) {
    if (event.detail > 0) {
      // Если мы попали на вложенный в оверлей элемент через focus,
      // то при клике мышкой мы должны начать реагировать на hover-состояние,
      // даже если фокус всё ещё остался на вложенном элементе (был по нему клик)
      setNonInteractiveFocusShown(false);
    }
  }

  useIsomorphicLayoutEffect(() => {
    setNonInteractiveFocusShown(focusWithin);
  }, [focusWithin]);

  return {
    shown: nonInteractiveFocusShown && focusWithin,
    onClick,
  };
}

export function useHover() {
  const [hovered, setHovered] = React.useState(false);

  const onPointerEnter: React.PointerEventHandler<unknown> = (e) => {
    if (e.pointerType === 'touch') {
      return;
    }
    setHovered(true);
  };

  const onPointerLeave = () => {
    setHovered(false);
  };

  return { hovered, onPointerEnter, onPointerLeave };
}
