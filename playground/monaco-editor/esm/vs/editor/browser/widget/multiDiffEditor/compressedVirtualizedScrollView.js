import { h, scheduleAtNextAnimationFrame, getWindow } from '../../../../base/browser/dom.js';
import { SmoothScrollableElement } from '../../../../base/browser/ui/scrollbar/scrollableElement.js';
import { compareBy, numberComparator } from '../../../../base/common/arrays.js';
import { findFirstMax } from '../../../../base/common/arraysFind.js';
import { RunOnceScheduler } from '../../../../base/common/async.js';
import { BugIndicatingError } from '../../../../base/common/errors.js';
import { Disposable } from '../../../../base/common/lifecycle.js';
import '../../../../base/common/observableInternal/index.js';
import { Scrollable } from '../../../../base/common/scrollable.js';
import { ObservableElementSizeObserver } from '../diffEditor/utils.js';
import { asLayoutRevision, computeCompressedVirtualizedScrollLayout, computeCompressedVirtualizedScrollHeight, createAnchoredSizeEditBatch, mapLogicalPosition, computeItemRanges } from './compressedVirtualizedScrollLayout.js';
import { observableValue } from '../../../../base/common/observableInternal/observables/observableValue.js';
import { observableSignal } from '../../../../base/common/observableInternal/observables/observableSignal.js';
import { observableFromEvent } from '../../../../base/common/observableInternal/observables/observableFromEvent.js';
import { autorun } from '../../../../base/common/observableInternal/reactions/autorun.js';
import { globalTransaction } from '../../../../base/common/observableInternal/transaction.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const scrollDirectionRetentionDurationMs = 100;
/**
 * Virtualizes complete-height items into viewport-capped rows whose removed height is represented by item-local scrolling.
 */
class CompressedVirtualizedScrollView extends Disposable {
    constructor(elementToObserve, dimension, itemGap, createItems) {
        super();
        this._lastGeometryEdit = observableValue(this, undefined);
        this._itemAnchorEditSignal = observableSignal(this);
        this._revision = asLayoutRevision(0);
        this._leadingScrollSlack = 0;
        this._trailingScrollSlack = 0;
        this._previousItemGap = 0;
        this._lastScrollTop = 0;
        this._clearScrollDirection = this._register(new RunOnceScheduler(() => this._lastScrollDirection = undefined, scrollDirectionRetentionDurationMs));
        this._isUpdating = false;
        this.lastGeometryEdit = this._lastGeometryEdit;
        this._scrollableElements = h('div.scrollContent', [
            h('div@content', {
                style: {
                    overflow: 'hidden',
                    position: 'relative',
                }
            }),
            h('div.monaco-editor@overflowWidgetsDomNode'),
        ]);
        this._scrollable = this._register(new Scrollable({
            forceIntegerValues: false,
            scheduleAtNextAnimationFrame: callback => scheduleAtNextAnimationFrame(getWindow(elementToObserve), callback),
            smoothScrollDuration: 100,
        }));
        this._scrollableElement = this._register(new SmoothScrollableElement(this._scrollableElements.root, {
            vertical: 1 /* ScrollbarVisibility.Auto */,
            horizontal: 1 /* ScrollbarVisibility.Auto */,
            useShadows: false,
        }, this._scrollable));
        this.domNode = h('div', {}, [this._scrollableElement.getDomNode()]).root;
        this._sizeObserver = this._register(new ObservableElementSizeObserver(elementToObserve, undefined));
        this.scrollTop = observableFromEvent(this, this._scrollableElement.onScroll, () => /** @description scrollTop */ this._scrollableElement.getScrollPosition().scrollTop);
        this.scrollLeft = observableFromEvent(this, this._scrollableElement.onScroll, () => /** @description scrollLeft */ this._scrollableElement.getScrollPosition().scrollLeft);
        this._items = createItems({
            contentDomNode: this._scrollableElements.content,
            overflowWidgetsDomNode: this._scrollableElements.overflowWidgetsDomNode,
            scrollLeft: this.scrollLeft,
        });
        this._layout = observableValue(this, computeCompressedVirtualizedScrollLayout({
            revision: this._revision,
            scrollTop: 0,
            viewportHeight: 0,
            itemGap: 0,
            itemHeights: [],
        }));
        this.layout = this._layout;
        this._scrollDimensions = observableValue(this, { width: 0, height: 0, scrollWidth: 0, scrollHeight: 0 });
        this.scrollDimensions = this._scrollDimensions;
        this._register(autorun(reader => {
            this._sizeObserver.observe(dimension.read(reader));
        }));
        this._register(autorun(reader => {
            this._itemAnchorEditSignal.read(reader);
            const width = this._sizeObserver.width.read(reader);
            const height = this._sizeObserver.height.read(reader);
            const items = this._items.read(reader);
            const itemHeights = items.map(item => item.size.read(reader));
            const max = findFirstMax(items, compareBy(item => item.maxScroll.read(reader).maxScroll, numberComparator));
            const maxScroll = max?.maxScroll.read(reader).maxScroll ?? 0;
            const gap = itemGap.read(reader);
            const requestedScrollTop = this.scrollTop.read(reader);
            globalTransaction(tx => this._update(items, itemHeights, gap, width, height, width + maxScroll, requestedScrollTop, tx));
        }));
    }
    setScrollPosition(position, smooth = false) {
        this._scrollableElement.setScrollPosition({
            ...position,
            reuseAnimation: smooth,
        });
    }
    setLogicalScrollPosition(scrollTop, smooth = false) {
        this.setScrollPosition({ scrollTop: this._leadingScrollSlack + scrollTop }, smooth);
    }
    getScrollPosition() {
        return this._scrollableElement.getScrollPosition();
    }
    _runWithItemScrollAnchor(item, getItemOffset, update) {
        const items = this._items.get();
        const itemIndex = items.findIndex(candidate => candidate === item);
        if (itemIndex === -1) {
            throw new BugIndicatingError('Cannot anchor an item that is not in the compacted virtualized scroll view');
        }
        const itemRange = this._layout.get().items[itemIndex].contentRange;
        const itemOffset = getItemOffset();
        if (!Number.isFinite(itemOffset) || itemOffset < 0 || itemOffset > itemRange.length) {
            throw new BugIndicatingError(`Item anchor ${itemOffset} is outside item range ${itemRange}`);
        }
        const position = {
            revision: this._revision,
            offset: itemRange.start + itemOffset,
        };
        const logicalViewportTop = this.getScrollPosition().scrollTop - this._leadingScrollSlack;
        this._runWithPendingAnchor({
            position,
            viewportOffset: position.offset - logicalViewportTop,
            item,
            getItemOffset,
        }, tx => {
            update(tx);
            if (getItemOffset() !== itemOffset) {
                this._itemAnchorEditSignal.trigger(tx);
            }
        });
    }
    _runWithPendingAnchor(pendingAnchor, update) {
        if (this._pendingAnchor) {
            throw new BugIndicatingError('Cannot nest compacted virtualized scroll anchors');
        }
        this._pendingAnchor = pendingAnchor;
        try {
            globalTransaction(update);
        }
        finally {
            if (this._pendingAnchor === pendingAnchor) {
                this._pendingAnchor = undefined;
            }
        }
    }
    _update(items, itemHeights, itemGap, width, height, scrollWidth, requestedScrollTop, tx) {
        if (this._isUpdating) {
            return;
        }
        this._isUpdating = true;
        try {
            let targetScrollTop = requestedScrollTop;
            const scrollDelta = requestedScrollTop - this._lastScrollTop;
            if (scrollDelta !== 0) {
                this._lastScrollDirection = scrollDelta < 0 ? 'up' : 'down';
                this._clearScrollDirection.schedule();
            }
            const previousItemHeights = this._previousItemHeights;
            const geometryChanged = previousItemHeights !== undefined
                && (itemGap !== this._previousItemGap || !arrayEquals(previousItemHeights, itemHeights));
            const hasStableItems = this._previousItems !== undefined
                && this._previousItems.length === items.length
                && this._previousItems.every((item, index) => item === items[index]);
            const itemsChanged = this._previousItems !== undefined && !hasStableItems;
            let didApplyAnchor = false;
            const appliesPendingAnchor = !!this._pendingAnchor && hasStableItems;
            if (previousItemHeights && (geometryChanged || appliesPendingAnchor) && hasStableItems) {
                const oldLogicalScrollHeight = computeCompressedVirtualizedScrollHeight(previousItemHeights, this._previousItemGap);
                const oldLogicalViewportTop = requestedScrollTop - this._leadingScrollSlack;
                const pendingAnchor = this._pendingAnchor;
                const isScrollingUp = this._lastScrollDirection === 'up';
                const defaultAnchorViewportOffset = isScrollingUp ? height : 0;
                const anchorKind = pendingAnchor?.item ? 'item' : pendingAnchor ? 'logical' : isScrollingUp ? 'viewportBottom' : 'viewportTop';
                const anchorOffset = pendingAnchor?.position.offset ?? Math.max(0, Math.min(oldLogicalViewportTop + defaultAnchorViewportOffset, oldLogicalScrollHeight));
                const anchorViewportOffset = pendingAnchor?.viewportOffset ?? anchorOffset - oldLogicalViewportTop;
                const fromRevision = this._revision;
                const toRevision = geometryChanged ? asLayoutRevision(fromRevision + 1) : fromRevision;
                const edit = createAnchoredSizeEditBatch(fromRevision, toRevision, previousItemHeights, itemHeights, this._previousItemGap, itemGap, anchorOffset);
                let mappedAnchor = mapLogicalPosition(edit.anchor, edit);
                if (pendingAnchor?.item && pendingAnchor.getItemOffset) {
                    const itemIndex = items.findIndex(item => item === pendingAnchor.item);
                    if (itemIndex === -1) {
                        throw new BugIndicatingError('Compacted virtualized scroll anchor item was removed during its edit');
                    }
                    const itemRange = computeItemRanges(itemHeights, itemGap)[itemIndex];
                    const itemOffset = pendingAnchor.getItemOffset();
                    if (!Number.isFinite(itemOffset) || itemOffset < 0 || itemOffset > itemRange.length) {
                        throw new BugIndicatingError(`Mapped item anchor ${itemOffset} is outside item range ${itemRange}`);
                    }
                    mappedAnchor = {
                        revision: toRevision,
                        offset: itemRange.start + itemOffset,
                    };
                }
                const newLogicalScrollHeight = computeCompressedVirtualizedScrollHeight(itemHeights, itemGap);
                const desiredLogicalScrollTop = mappedAnchor.offset - anchorViewportOffset;
                const naturalMaxScrollTop = Math.max(0, newLogicalScrollHeight - height);
                this._leadingScrollSlack = Math.max(0, -desiredLogicalScrollTop);
                this._trailingScrollSlack = Math.max(0, desiredLogicalScrollTop - naturalMaxScrollTop);
                targetScrollTop = this._leadingScrollSlack + desiredLogicalScrollTop;
                this._revision = toRevision;
                this._pendingAnchor = undefined;
                didApplyAnchor = true;
                this._lastGeometryEdit.set({
                    fromRevision,
                    toRevision,
                    edits: edit.edits,
                    anchorKind,
                    anchorOffset,
                    mappedAnchorOffset: mappedAnchor.offset,
                    anchorViewportOffset,
                    desiredScrollTop: targetScrollTop,
                    appliedScrollTop: targetScrollTop,
                    leadingScrollSlack: this._leadingScrollSlack,
                    trailingScrollSlack: this._trailingScrollSlack,
                }, tx);
            }
            else if (geometryChanged || itemsChanged) {
                if (geometryChanged) {
                    this._revision = asLayoutRevision(this._revision + 1);
                }
                this._leadingScrollSlack = 0;
                this._trailingScrollSlack = 0;
                this._lastGeometryEdit.set(undefined, tx);
            }
            else {
                if (scrollDelta > 0 && this._leadingScrollSlack > 0) {
                    const consumedSlack = Math.min(scrollDelta, this._leadingScrollSlack);
                    this._leadingScrollSlack -= consumedSlack;
                    targetScrollTop -= consumedSlack;
                }
                else if (scrollDelta < 0 && this._trailingScrollSlack > 0) {
                    const logicalScrollHeight = computeCompressedVirtualizedScrollHeight(itemHeights, itemGap);
                    const naturalMaxScrollTop = this._leadingScrollSlack + Math.max(0, logicalScrollHeight - height);
                    this._trailingScrollSlack = Math.max(0, targetScrollTop - naturalMaxScrollTop);
                }
            }
            let layout = computeCompressedVirtualizedScrollLayout({
                revision: this._revision,
                scrollTop: targetScrollTop,
                viewportHeight: height,
                itemGap,
                itemHeights,
                leadingScrollSlack: this._leadingScrollSlack,
                trailingScrollSlack: this._trailingScrollSlack,
            });
            const dimensions = { width, height, scrollWidth, scrollHeight: layout.scrollHeight };
            this._scrollableElements.root.style.height = `${height}px`;
            this._scrollableElements.content.style.height = `${layout.scrollHeight}px`;
            this._scrollable.setScrollDimensions(dimensions, true);
            const needsImmediateScrollCorrection = geometryChanged || targetScrollTop !== requestedScrollTop;
            if (needsImmediateScrollCorrection) {
                this._scrollable.setScrollPositionNow({ scrollTop: layout.scrollTop });
            }
            const appliedScrollTop = this._scrollableElement.getScrollPosition().scrollTop;
            if (appliedScrollTop !== layout.scrollTop) {
                layout = computeCompressedVirtualizedScrollLayout({
                    revision: this._revision,
                    scrollTop: appliedScrollTop,
                    viewportHeight: height,
                    itemGap,
                    itemHeights,
                    leadingScrollSlack: this._leadingScrollSlack,
                    trailingScrollSlack: this._trailingScrollSlack,
                });
            }
            const geometryEdit = this._lastGeometryEdit.get();
            if (didApplyAnchor && geometryEdit) {
                this._lastGeometryEdit.set({ ...geometryEdit, appliedScrollTop }, tx);
            }
            this._layout.set(layout, tx);
            this._scrollDimensions.set(dimensions, tx);
            this._render(items, layout, width);
            this._previousItems = items;
            this._previousItemHeights = itemHeights;
            this._previousItemGap = itemGap;
            this._lastScrollTop = layout.scrollTop;
        }
        finally {
            this._isUpdating = false;
        }
    }
    _render(items, layout, width) {
        for (let index = 0; index < items.length; index++) {
            const item = items[index];
            const itemLayout = layout.items[index];
            if (itemLayout.visibility !== 'visible') {
                item.hide();
            }
            else {
                item.render(itemLayout.renderedRange, itemLayout.scrollOffset, width, layout.renderedViewport, {
                    runWithScrollAnchor: (getItemOffset, update) => this._runWithItemScrollAnchor(item, getItemOffset, update),
                });
            }
        }
        this._scrollableElements.content.style.transform = `translateY(${-layout.renderedViewport.start}px)`;
    }
}
function arrayEquals(a, b) {
    return a.length === b.length && a.every((value, index) => value === b[index]);
}

export { CompressedVirtualizedScrollView };
