import * as React from "react";
import { CustomScrollBarController } from "./CustomScrollBarController";
import { useTrackerVisibility } from "./useTrackerVisibility";
import { useTransformProp } from "./useTransformProp";


export const useVerticalScrollController = (
    boxRef: React.RefObject<HTMLDivElement | null>,
    autoHideScrollbar: boolean,
    autoHideScrollbarDelay?: number,
): CustomScrollBarController => {
    const verticalRatio = React.useRef(NaN);
    const lastTrackerTop = React.useRef(0);
    const clientHeight = React.useRef(0);
    const trackerHeight = React.useRef(0);
    const scrollHeight = React.useRef(0);
    const startY = React.useRef(0);
    const trackerTop = React.useRef(0);

    const barY = React.useRef<HTMLDivElement>(null);
    const trackerY = React.useRef<HTMLDivElement>(null);

    const transformProp = useTransformProp(trackerY);

    const {
        trackerVisible,
        onTargetScroll,
        onTrackerDragStart,
        onTrackerDragStop,
        onTrackerMouseEnter,
        onTrackerMouseLeave,
    } = useTrackerVisibility(autoHideScrollbar, autoHideScrollbarDelay);

    const setVerticalTrackerPosition = (scrollTop: number) => {
        lastTrackerTop.current = scrollTop;
        if (trackerY.current !== null) {
            (trackerY.current.style as any)[transformProp.current] = `translate(0, ${scrollTop}px)`;
        }
    };

    const setTrackerPositionFromScroll = (scrollTop: number) => {
        const progress = scrollTop / (scrollHeight.current - clientHeight.current);
        setVerticalTrackerPosition((clientHeight.current - trackerHeight.current) * progress);
    };

    const onResize = () => {
        if (!boxRef.current || !barY.current || !trackerY.current) {
            return;
        }
        const localClientHeight = boxRef.current.clientHeight;
        const localScrollHeight = boxRef.current.scrollHeight;
        const localVerticalRatio = localClientHeight / localScrollHeight;
        const localTrackerHeight = Math.max(localClientHeight * localVerticalRatio, 40);

        verticalRatio.current = localVerticalRatio;
        clientHeight.current = localClientHeight;
        scrollHeight.current = localScrollHeight;
        trackerHeight.current = localTrackerHeight;

        if (localVerticalRatio >= 1) {
            barY.current.style.display = 'none';
        } else {
            barY.current.style.display = '';
            trackerY.current.style.height = `${localTrackerHeight}px`;
            setTrackerPositionFromScroll(boxRef.current.scrollTop);
        }
    }

    const setScrollPositionFromTracker = (trackerTop: number) => {
        const progress = trackerTop / (clientHeight.current - trackerHeight.current);
        if (boxRef.current !== null) {
            boxRef.current.scrollTop = (scrollHeight.current - clientHeight.current) * progress;
        }
    };

    const onMove = (e: MouseEvent) => {
        const diff = e.clientY - startY.current;
        const position = Math.min(
          Math.max(trackerTop.current + diff, 0),
          clientHeight.current - trackerHeight.current,
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

        setTrackerPositionFromScroll(boxRef.current.scrollTop);
    }

    const onDragStart = (e: React.MouseEvent) => {
        startY.current = e.clientY;
        trackerTop.current = lastTrackerTop.current;
    
        if (autoHideScrollbar) {
          onTrackerDragStart();
        }
    };

    return {
        trackerVisible,
        barRef: barY,
        trackerRef: trackerY,
        onResize,
        onMove,
        onUp,
        onScroll,
        onDragStart,
        onTrackerMouseEnter,
        onTrackerMouseLeave,
    }
}