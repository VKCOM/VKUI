import * as React from "react";
import { TouchEvent } from "../Touch/Touch";
import { CellProps } from "./Cell";

export interface DraggableProps {
  onDragStart: () => void;
  onDragEnd: () => void;
  onDragMove: (e: TouchEvent) => void;
}

interface UseDraggableProps extends DraggableProps {
  dragging: boolean;
  rootElRef: any;
}

export const useDraggable = ({
  onDragFinish,
}: Pick<CellProps, "onDragFinish">) => {
  const [dragging, setDragging] = React.useState<boolean>(false);
  const rootElRef = React.useRef<HTMLElement>(null);

  const [siblings, setSiblings] = React.useState<HTMLElement[] | undefined>(
    undefined
  );
  const [dragStartIndex, setDragStartIndex] = React.useState<
    number | undefined
  >(undefined);
  const [dragEndIndex, setDragEndIndex] = React.useState<number | undefined>(
    undefined
  );
  const [dragShift, setDragShift] = React.useState<number | undefined>(0);
  const [dragDirection, setDragDirection] = React.useState<
    "down" | "up" | undefined
  >(undefined);

  const onDragStart = () => {
    const rootEl = rootElRef.current;

    setDragging(true);

    let _siblings: HTMLElement[] = [];
    if (rootEl?.parentElement?.childNodes) {
      _siblings = Array.from(rootEl.parentElement.children) as HTMLElement[];
    }
    const idx = rootEl ? _siblings.indexOf(rootEl) : -1;

    setDragStartIndex(idx);
    setDragEndIndex(idx);
    setSiblings(_siblings);
    setDragShift(0);
  };

  const onDragMove = (e: TouchEvent) => {
    e.originalEvent.preventDefault();

    const rootEl = rootElRef.current;

    if (rootEl) {
      rootEl.style.transform = `translateY(${e.shiftY}px)`;
      const rootGesture = rootEl.getBoundingClientRect();

      setDragDirection((dragShift ?? 0) - e.shiftY < 0 ? "down" : "up");
      setDragShift(e.shiftY);
      setDragEndIndex(dragStartIndex);

      siblings?.forEach((sibling: HTMLElement, siblingIndex: number) => {
        const siblingGesture = sibling.getBoundingClientRect();
        const siblingHalfHeight = siblingGesture.height / 2;

        const rootOverSibling =
          rootGesture.bottom > siblingGesture.top + siblingHalfHeight;
        const rootUnderSibling =
          rootGesture.top < siblingGesture.bottom - siblingHalfHeight;

        if ((dragStartIndex ?? 0) < siblingIndex) {
          if (rootOverSibling) {
            if (dragDirection === "down") {
              sibling.style.transform = "translateY(-100%)";
            }

            setDragEndIndex((dragEndIndex) => (dragEndIndex ?? 0) + 1);
          }
          if (rootUnderSibling && dragDirection === "up") {
            sibling.style.transform = "translateY(0)";
          }
        } else if ((dragStartIndex ?? 0) > siblingIndex) {
          if (rootUnderSibling) {
            if (dragDirection === "up") {
              sibling.style.transform = "translateY(100%)";
            }

            setDragEndIndex((dragEndIndex) => (dragEndIndex ?? 0) - 1);
          }
          if (rootOverSibling && dragDirection === "down") {
            sibling.style.transform = "translateY(0)";
          }
        }
      });
    }
  };

  const onDragEnd = () => {
    const [from = 0, to = 0] = [dragStartIndex, dragEndIndex];

    siblings?.forEach((sibling: HTMLElement) => {
      sibling.style.transform = "";
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
