import * as React from 'react';
import { TouchEvent } from '../Touch/Touch';
import { CellProps } from './Cell';

export interface DraggableProps {
  onDragStart: () => void;
  onDragEnd: () => void;
  onDragMove: (e: TouchEvent) => void;
}

interface UseDraggableProps extends DraggableProps {
  dragging: boolean;
  rootElRef: any;
}

export const useDraggable = ({ onDragFinish }: Pick<CellProps, 'onDragFinish'>) => {
  const [dragging, setDragging] = React.useState<boolean>(false);
  const rootElRef = React.useRef(null);

  const [siblings, setSiblings] = React.useState<HTMLElement[]>(undefined);
  const [dragStartIndex, setDragStartIndex] = React.useState<number>(undefined);
  const [dragEndIndex, setDragEndIndex] = React.useState<number>(undefined);
  const [dragShift, setDragShift] = React.useState<number>(0);
  const [dragDirection, setDragDirection] = React.useState<'down' | 'up'>(undefined);

  const onDragStart = () => {
    const rootEl = rootElRef?.current;

    setDragging(true);

    const _siblings: HTMLElement[] = Array.from(rootEl.parentElement.childNodes);
    const idx = _siblings.indexOf(rootEl);

    setDragStartIndex(idx);
    setDragEndIndex(idx);
    setSiblings(_siblings);
    setDragShift(0);
  };

  const onDragMove = (e: TouchEvent) => {
    e.originalEvent.preventDefault();

    const rootEl = rootElRef?.current;

    rootEl.style.transform = `translateY(${e.shiftY}px)`;
    setDragDirection(dragShift - e.shiftY < 0 ? 'down' : 'up');
    setDragShift(e.shiftY);
    setDragEndIndex(dragStartIndex);

    siblings.forEach((sibling: HTMLElement, siblingIndex: number) => {
      const rootGesture = rootEl.getBoundingClientRect();

      const siblingGesture = sibling.getBoundingClientRect();

      if (dragStartIndex < siblingIndex) {
        if (rootGesture.bottom > siblingGesture.top + siblingGesture.height / 2) {
          if (dragDirection === 'down') {
            sibling.style.transform = 'translateY(-100%)';
          }

          setDragEndIndex((dragEndIndex) => dragEndIndex + 1);
        }
        if (rootGesture.top < siblingGesture.bottom - siblingGesture.height / 2 && dragDirection === 'up') {
          sibling.style.transform = 'translateY(0)';
        }
      } else if (dragStartIndex > siblingIndex) {
        if (rootGesture.top < siblingGesture.bottom - siblingGesture.height / 2) {
          if (dragDirection === 'up') {
            sibling.style.transform = 'translateY(100%)';
          }

          setDragEndIndex((dragEndIndex) => dragEndIndex - 1);
        }
        if (rootGesture.bottom > siblingGesture.top + siblingGesture.height / 2 && dragDirection === 'down') {
          sibling.style.transform = 'translateY(0)';
        }
      }
    });
  };

  const onDragEnd = () => {
    const [from, to] = [dragStartIndex, dragEndIndex];

    siblings.forEach((sibling: HTMLElement) => {
      sibling.style.transform = null;
    });

    setSiblings(undefined);
    setDragEndIndex(undefined);
    setDragStartIndex(undefined);
    setDragDirection(undefined);
    setDragShift(undefined);

    setDragging(false);

    onDragFinish && onDragFinish({ from, to });
  };

  const useDraggableProps: UseDraggableProps = {
    onDragStart,
    onDragMove,
    onDragEnd,
    dragging,
    rootElRef,
  };

  return useDraggableProps;
};
