import * as React from "react";

export interface CustomScrollBarController {
    barRef: React.RefObject<HTMLDivElement>,
    trackerRef: React.RefObject<HTMLDivElement>,
    trackerVisible: boolean,
    onResize: () => void,
    onMove: (e: MouseEvent) => void,
    onUp: () => void,
    onScroll: () => void,
    onDragStart: (e: React.MouseEvent) => void,
    onTrackerMouseEnter: () => void,
    onTrackerMouseLeave: () => void,
}