import { Range } from './range.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var LayoutAnchorMode;
(function (LayoutAnchorMode) {
    LayoutAnchorMode[LayoutAnchorMode["AVOID"] = 0] = "AVOID";
    LayoutAnchorMode[LayoutAnchorMode["ALIGN"] = 1] = "ALIGN";
})(LayoutAnchorMode || (LayoutAnchorMode = {}));
/**
 * Lays out a one dimensional view next to an anchor in a viewport.
 *
 * @returns The view offset within the viewport.
 */
function layout(viewportSize, viewSize, anchor) {
    const layoutAfterAnchorBoundary = anchor.mode === LayoutAnchorMode.ALIGN ? anchor.offset : anchor.offset + anchor.size;
    const layoutBeforeAnchorBoundary = anchor.mode === LayoutAnchorMode.ALIGN ? anchor.offset + anchor.size : anchor.offset;
    if (anchor.position === 0 /* LayoutAnchorPosition.Before */) {
        if (viewSize <= viewportSize - layoutAfterAnchorBoundary) {
            return { position: layoutAfterAnchorBoundary, result: 'ok' }; // happy case, lay it out after the anchor
        }
        if (viewSize <= layoutBeforeAnchorBoundary) {
            return { position: layoutBeforeAnchorBoundary - viewSize, result: 'flipped' }; // ok case, lay it out before the anchor
        }
        return { position: Math.max(viewportSize - viewSize, 0), result: 'overlap' }; // sad case, lay it over the anchor
    }
    else {
        if (viewSize <= layoutBeforeAnchorBoundary) {
            return { position: layoutBeforeAnchorBoundary - viewSize, result: 'ok' }; // happy case, lay it out before the anchor
        }
        if (viewSize <= viewportSize - layoutAfterAnchorBoundary && layoutBeforeAnchorBoundary < viewSize / 2) {
            return { position: layoutAfterAnchorBoundary, result: 'flipped' }; // ok case, lay it out after the anchor
        }
        return { position: 0, result: 'overlap' }; // sad case, lay it over the anchor
    }
}
function layout2d(viewport, view, anchor, options) {
    let anchorAlignment = options?.anchorAlignment ?? 0 /* AnchorAlignment.LEFT */;
    let anchorPosition = options?.anchorPosition ?? 0 /* AnchorPosition.BELOW */;
    const anchorAxisAlignment = options?.anchorAxisAlignment ?? 0 /* AnchorAxisAlignment.VERTICAL */;
    let top;
    let left;
    if (anchorAxisAlignment === 0 /* AnchorAxisAlignment.VERTICAL */) {
        const verticalAnchor = { offset: anchor.top - viewport.top, size: anchor.height, position: anchorPosition === 0 /* AnchorPosition.BELOW */ ? 0 /* LayoutAnchorPosition.Before */ : 1 /* LayoutAnchorPosition.After */ };
        const horizontalAnchor = { offset: anchor.left, size: anchor.width, position: anchorAlignment === 0 /* AnchorAlignment.LEFT */ ? 0 /* LayoutAnchorPosition.Before */ : 1 /* LayoutAnchorPosition.After */, mode: LayoutAnchorMode.ALIGN };
        const verticalLayoutResult = layout(viewport.height, view.height, verticalAnchor);
        top = verticalLayoutResult.position + viewport.top;
        if (verticalLayoutResult.result === 'flipped') {
            anchorPosition = anchorPosition === 0 /* AnchorPosition.BELOW */ ? 1 /* AnchorPosition.ABOVE */ : 0 /* AnchorPosition.BELOW */;
        }
        // if view intersects vertically with anchor, we must avoid the anchor
        if (Range.intersects({ start: top, end: top + view.height }, { start: verticalAnchor.offset, end: verticalAnchor.offset + verticalAnchor.size })) {
            horizontalAnchor.mode = LayoutAnchorMode.AVOID;
        }
        const horizontalLayoutResult = layout(viewport.width, view.width, horizontalAnchor);
        left = horizontalLayoutResult.position;
        if (horizontalLayoutResult.result === 'flipped') {
            anchorAlignment = anchorAlignment === 0 /* AnchorAlignment.LEFT */ ? 1 /* AnchorAlignment.RIGHT */ : 0 /* AnchorAlignment.LEFT */;
        }
    }
    else {
        const horizontalAnchor = { offset: anchor.left, size: anchor.width, position: anchorAlignment === 0 /* AnchorAlignment.LEFT */ ? 0 /* LayoutAnchorPosition.Before */ : 1 /* LayoutAnchorPosition.After */ };
        const verticalAnchor = { offset: anchor.top, size: anchor.height, position: anchorPosition === 0 /* AnchorPosition.BELOW */ ? 0 /* LayoutAnchorPosition.Before */ : 1 /* LayoutAnchorPosition.After */, mode: LayoutAnchorMode.ALIGN };
        const horizontalLayoutResult = layout(viewport.width, view.width, horizontalAnchor);
        left = horizontalLayoutResult.position;
        if (horizontalLayoutResult.result === 'flipped') {
            anchorAlignment = anchorAlignment === 0 /* AnchorAlignment.LEFT */ ? 1 /* AnchorAlignment.RIGHT */ : 0 /* AnchorAlignment.LEFT */;
        }
        // if view intersects horizontally with anchor, we must avoid the anchor
        if (Range.intersects({ start: left, end: left + view.width }, { start: horizontalAnchor.offset, end: horizontalAnchor.offset + horizontalAnchor.size })) {
            verticalAnchor.mode = LayoutAnchorMode.AVOID;
        }
        const verticalLayoutResult = layout(viewport.height, view.height, verticalAnchor);
        top = verticalLayoutResult.position + viewport.top;
        if (verticalLayoutResult.result === 'flipped') {
            anchorPosition = anchorPosition === 0 /* AnchorPosition.BELOW */ ? 1 /* AnchorPosition.ABOVE */ : 0 /* AnchorPosition.BELOW */;
        }
    }
    const right = viewport.width - (left + view.width);
    const bottom = viewport.height - (top + view.height);
    return { top, left, bottom, right, anchorAlignment, anchorPosition };
}

export { LayoutAnchorMode, layout, layout2d };
