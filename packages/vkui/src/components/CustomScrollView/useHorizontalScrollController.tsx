import * as React from "react";
import { CustomScrollBarController } from "./CustomScrollBarController";
import { useTrackerVisibility } from "./useTrackerVisibility";
import { useTransformProp } from "./useTransformProp";


export const useHorizontalScrollController = (
    boxRef: React.RefObject<HTMLDivElement | null>,
    autoHideScrollbar: boolean,
    autoHideScrollbarDelay?: number,
): CustomScrollBarController => {
    const horizontalRatio = React.useRef(NaN);
    const lastTrackerLeft = React.useRef(0);
    const clientWidth = React.useRef(0);
    const trackerWidth = React.useRef(0);
    const scrollWidth = React.useRef(0);
    const startX = React.useRef(0);
    const trackerLeft = React.useRef(0);

    const barX = React.useRef<HTMLDivElement>(null);
    const trackerX = React.useRef<HTMLDivElement>(null);

    const transformProp = useTransformProp(trackerX);

    const {
        trackerVisible,
        onTargetScroll,
        onTrackerDragStart,
        onTrackerDragStop,
        onTrackerMouseEnter,
        onTrackerMouseLeave,
    } = useTrackerVisibility(autoHideScrollbar, autoHideScrollbarDelay);

    const setHorizontalTrackerPosition = (scrollLeft: number) => {
        lastTrackerLeft.current = scrollLeft;
        if (trackerX.current !== null) {
            (trackerX.current.style as any)[transformProp.current] = `translate(${scrollLeft}px, 0)`;
        }
    };

    const setTrackerPositionFromScroll = (scrollLeft: number) => {
        const progress = scrollLeft / (scrollWidth.current - clientWidth.current);
        setHorizontalTrackerPosition((clientWidth.current - trackerWidth.current) * progress);
    };

    const onResize = () => {
        if (!boxRef.current || !barX.current || !trackerX.current) {
            return;
        }
        const localClientWidth = boxRef.current.clientWidth;
        const localScrollWidth = boxRef.current.scrollWidth;
        const localVerticalRatio = localClientWidth / localScrollWidth;
        const localTrackerWidth = Math.max(localClientWidth * localVerticalRatio, 40);

        horizontalRatio.current = localVerticalRatio;
        clientWidth.current = localClientWidth;
        scrollWidth.current = localScrollWidth;
        trackerWidth.current = localTrackerWidth;

        if (localVerticalRatio >= 1) {
            barX.current.style.display = 'none';
        } else {
            barX.current.style.display = '';
            trackerX.current.style.width = `${localTrackerWidth}px`;
            setTrackerPositionFromScroll(boxRef.current.scrollLeft);
        }
    }

    const setScrollPositionFromTracker = (trackerLeft: number) => {
        const progress = trackerLeft / (clientWidth.current - trackerWidth.current);
        if (boxRef.current !== null) {
            boxRef.current.scrollLeft = (scrollWidth.current - clientWidth.current) * progress;
        }
    };

    const onMove = (e: MouseEvent) => {
        const diff = e.clientX - startX.current;
        const position = Math.min(
          Math.max(trackerLeft.current + diff, 0),
          clientWidth.current - trackerWidth.current,
        );
        setScrollPositionFromTracker(position);
    };

    const onUp = () => {
        if (autoHideScrollbar) {
          onTrackerDragStop();
        }
    };

    const onScroll = () => {
        if (!boxRef.current) {
            return
        }
        if (autoHideScrollbar) {
            onTargetScroll();
        }
        setTrackerPositionFromScroll(boxRef.current.scrollLeft);
    }

    const onDragStart = (e: React.MouseEvent) => {
        startX.current = e.clientX;
        trackerLeft.current = lastTrackerLeft.current;
    
        if (autoHideScrollbar) {
          onTrackerDragStart();
        }
    };

    return {
        trackerVisible,
        barRef: barX,
        trackerRef: trackerX,
        onResize,
        onMove,
        onUp,
        onScroll,
        onDragStart,
        onTrackerMouseEnter,
        onTrackerMouseLeave,
    }
}