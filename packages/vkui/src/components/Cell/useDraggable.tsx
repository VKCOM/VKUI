import * as React from 'react';
import { TouchEvent } from '../Touch/Touch';
import { CellProps } from './Cell';

export interface DraggableProps {
  onDragStart(event: TouchEvent): void;
  onDragEnd(event: TouchEvent): void;
  onDragMove(event: TouchEvent): void;
}

interface UseDraggableProps extends DraggableProps {
  dragging: boolean;
}

export const useDraggable = <T extends HTMLElement>({
  rootElRef,
  onDragFinish,
}: Pick<CellProps, 'onDragFinish'> & {
  rootElRef: React.MutableRefObject<T | null>;
}) => {
  const [dragging, setDragging] = React.useState<boolean>(false);

  const [siblings, setSiblings] = React.useState<HTMLElement[]>([]);
  const [dragStartIndex, setDragStartIndex] = React.useState<number>(0);
  const [dragEndIndex, setDragEndIndex] = React.useState<number>(0);
  const [dragShift, setDragShift] = React.useState<number>(0);
  const [dragDirection, setDragDirection] = React.useState<'down' | 'up' | undefined>(undefined);

  const onDragStart = (event: TouchEvent) => {
    const rootEl = rootElRef.current;
    if (!rootEl) {
      return;
    }
    event.originalEvent.stopPropagation();
    event.originalEvent.preventDefault();

    setDragging(true);

    let _siblings: HTMLElement[] = [];
    if (rootEl.parentElement?.childNodes) {
      _siblings = Array.from(rootEl.parentElement.children) as HTMLElement[];
    }
    const idx = _siblings.indexOf(rootEl);

    setDragStartIndex(idx);
    setDragEndIndex(idx);
    setSiblings(_siblings);
    setDragShift(0);
  };

  const onDragMove = (event: TouchEvent) => {
    event.originalEvent.stopPropagation();
    event.originalEvent.preventDefault();

    const rootEl = rootElRef.current;

    if (rootEl) {
      rootEl.style.transform = `translateY(${event.shiftY}px)`;
      const rootGesture = rootEl.getBoundingClientRect();

      setDragDirection(dragShift - event.shiftY < 0 ? 'down' : 'up');
      setDragShift(event.shiftY);
      setDragEndIndex(dragStartIndex);

      siblings.forEach((sibling: HTMLElement, siblingIndex: number) => {
        const siblingGesture = sibling.getBoundingClientRect();
        const siblingHalfHeight = siblingGesture.height / 2;

        const rootOverSibling = rootGesture.bottom > siblingGesture.top + siblingHalfHeight;
        const rootUnderSibling = rootGesture.top < siblingGesture.bottom - siblingHalfHeight;

        if (dragStartIndex < siblingIndex) {
          if (rootOverSibling) {
            if (dragDirection === 'down') {
              sibling.style.transform = 'translateY(-100%)';
            }

            setDragEndIndex((dragEndIndex) => dragEndIndex + 1);
          }
          if (rootUnderSibling && dragDirection === 'up') {
            sibling.style.transform = 'translateY(0)';
          }
        } else if (dragStartIndex > siblingIndex) {
          if (rootUnderSibling) {
            if (dragDirection === 'up') {
              sibling.style.transform = 'translateY(100%)';
            }

            setDragEndIndex((dragEndIndex) => dragEndIndex - 1);
          }
          if (rootOverSibling && dragDirection === 'down') {
            sibling.style.transform = 'translateY(0)';
          }
        }
      });
    }
  };

  const onDragEnd = (event: TouchEvent) => {
    event.originalEvent.stopPropagation();
    event.originalEvent.preventDefault();

    const [from, to] = [dragStartIndex, dragEndIndex];

    siblings.forEach((sibling: HTMLElement) => {
      sibling.style.transform = '';
    });

    setSiblings([]);
    setDragEndIndex(0);
    setDragStartIndex(0);
    setDragDirection(undefined);
    setDragShift(0);

    setDragging(false);

    onDragFinish && onDragFinish({ from, to });
  };

  const useDraggableProps: UseDraggableProps = {
    onDragStart,
    onDragMove,
    onDragEnd,
    dragging,
  };

  return useDraggableProps;
};
