import * as React from 'react';
import { useEventListener } from '../../hooks/useEventListener';
import { useDOM } from '../../lib/dom';

export const useDragAndDrop = (
  onDragStart: (e: React.MouseEvent) => void,
  onDragMove: (e: React.MouseEvent) => void,
  onDragEnd: (e: React.MouseEvent) => void,
) => {
  const { document } = useDOM();
  const [isPressed, setIsPressed] = React.useState(false);

  const onDragEndImpl = (e: React.MouseEvent) => {
    if (!isPressed) {
      return;
    }
    e.preventDefault();
    onDragEnd(e);
    unsubscribe();
  };

  const onDragMoveImpl = (e: React.MouseEvent) => {
    if (!isPressed) {
      return;
    }
    e.preventDefault();
    onDragMove(e);
  };

  const listeners = [
    // @ts-expect-error: TS2769 ругается на тип event
    useEventListener('mousemove', onDragMoveImpl),
    // @ts-expect-error: TS2769 ругается на тип event
    useEventListener('mouseup', onDragEndImpl),
  ];

  function subscribe(el: Document | undefined) {
    if (el) {
      listeners.forEach((l) => l.add(el));
    }
  }

  function unsubscribe() {
    listeners.forEach((l) => l.remove());
  }

  return {
    onDragStart: (e: React.MouseEvent) => {
      e.preventDefault();
      setIsPressed(true);
      onDragStart(e);
      subscribe(document);
    },
  };
};
