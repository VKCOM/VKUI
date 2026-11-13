import { equalsIfDefinedC, arrayEqualsC } from '../../base/common/equals.js';
import { Disposable, DisposableStore, toDisposable } from '../../base/common/lifecycle.js';
import '../../base/common/observableInternal/index.js';
import { LineRange } from '../common/core/ranges/lineRange.js';
import { OffsetRange } from '../common/core/ranges/offsetRange.js';
import { Position } from '../common/core/position.js';
import { Selection } from '../common/core/selection.js';
import { Point } from '../common/core/2d/point.js';
import { TransactionImpl } from '../../base/common/observableInternal/transaction.js';
import { observableFromEventOpts, observableFromEvent } from '../../base/common/observableInternal/observables/observableFromEvent.js';
import { derivedOpts, derivedWithSetter, derived } from '../../base/common/observableInternal/observables/derived.js';
import { DebugLocation } from '../../base/common/observableInternal/debugLocation.js';
import { autorunOpts, autorun } from '../../base/common/observableInternal/reactions/autorun.js';
import { observableValue } from '../../base/common/observableInternal/observables/observableValue.js';
import { observableValueOpts } from '../../base/common/observableInternal/observables/observableValueOpts.js';
import { observableSignal } from '../../base/common/observableInternal/observables/observableSignal.js';
import { observableSignalFromEvent } from '../../base/common/observableInternal/observables/observableSignalFromEvent.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Returns a facade for the code editor that provides observables for various states/events.
*/
function observableCodeEditor(editor) {
    return ObservableCodeEditor.get(editor);
}
class ObservableCodeEditor extends Disposable {
    static { this._map = new Map(); }
    /**
     * Make sure that editor is not disposed yet!
    */
    static get(editor) {
        let result = ObservableCodeEditor._map.get(editor);
        if (!result) {
            result = new ObservableCodeEditor(editor);
            ObservableCodeEditor._map.set(editor, result);
            const d = editor.onDidDispose(() => {
                const item = ObservableCodeEditor._map.get(editor);
                if (item) {
                    ObservableCodeEditor._map.delete(editor);
                    item.dispose();
                    d.dispose();
                }
            });
        }
        return result;
    }
    _beginUpdate() {
        this._updateCounter++;
        if (this._updateCounter === 1) {
            this._currentTransaction = new TransactionImpl(() => {
                /** @description Update editor state */
            });
        }
    }
    _endUpdate() {
        this._updateCounter--;
        if (this._updateCounter === 0) {
            const t = this._currentTransaction;
            this._currentTransaction = undefined;
            t.finish();
        }
    }
    constructor(editor) {
        super();
        this.editor = editor;
        /**
         * Tracks whether getWidthOfLine returned 0, indicating the editor may be hidden.
         * When resize happens and this flag is set, we reset cached line widths.
         */
        this._sawZeroLineWidth = false;
        /**
         * Fires when the editor container resizes.
         * This is lazily created only when someone subscribes to it.
         * Useful for detecting when a parent element's display changes from 'none' to 'block'.
         */
        this._onDidContainerResize = observableFromEventOpts({ owner: this, getTransaction: () => this._currentTransaction }, e => {
            const container = this.editor.getContainerDomNode();
            const resizeObserver = new ResizeObserver(() => {
                // If we previously saw a 0 width, the editor was likely hidden.
                // Now that it resized (became visible), flush the cached widths.
                if (this._sawZeroLineWidth) {
                    this._sawZeroLineWidth = false;
                    this.editor.resetLineWidthCaches();
                }
                e(undefined);
            });
            resizeObserver.observe(container);
            return { dispose: () => resizeObserver.disconnect() };
        }, () => ({}) // Return new object each time to ensure change detection
        );
        this._updateCounter = 0;
        this._currentTransaction = undefined;
        this._model = observableValue(this, this.editor.getModel());
        this.model = this._model;
        this.isReadonly = observableFromEventOpts({ owner: this, getTransaction: () => this._currentTransaction }, this.editor.onDidChangeConfiguration, () => this.editor.getOption(104 /* EditorOption.readOnly */));
        this._versionId = observableValueOpts({ owner: this, lazy: true }, this.editor.getModel()?.getVersionId() ?? null);
        this.versionId = this._versionId;
        this._selections = observableValueOpts({ owner: this, equalsFn: equalsIfDefinedC(arrayEqualsC(Selection.selectionsEqual)), lazy: true }, this.editor.getSelections() ?? null);
        this.selections = this._selections;
        this.positions = derivedOpts({ owner: this, equalsFn: equalsIfDefinedC(arrayEqualsC(Position.equals)) }, reader => this.selections.read(reader)?.map(s => s.getStartPosition()) ?? null);
        this.isFocused = observableFromEventOpts({ owner: this, getTransaction: () => this._currentTransaction }, e => {
            const d1 = this.editor.onDidFocusEditorWidget(e);
            const d2 = this.editor.onDidBlurEditorWidget(e);
            return {
                dispose() {
                    d1.dispose();
                    d2.dispose();
                }
            };
        }, () => this.editor.hasWidgetFocus());
        this.isTextFocused = observableFromEventOpts({ owner: this, getTransaction: () => this._currentTransaction }, e => {
            const d1 = this.editor.onDidFocusEditorText(e);
            const d2 = this.editor.onDidBlurEditorText(e);
            return {
                dispose() {
                    d1.dispose();
                    d2.dispose();
                }
            };
        }, () => this.editor.hasTextFocus());
        this.inComposition = observableFromEventOpts({ owner: this, getTransaction: () => this._currentTransaction }, e => {
            const d1 = this.editor.onDidCompositionStart(() => {
                e(undefined);
            });
            const d2 = this.editor.onDidCompositionEnd(() => {
                e(undefined);
            });
            return {
                dispose() {
                    d1.dispose();
                    d2.dispose();
                }
            };
        }, () => this.editor.inComposition);
        this.value = derivedWithSetter(this, reader => { this.versionId.read(reader); return this.model.read(reader)?.getValue() ?? ''; }, (value, tx) => {
            const model = this.model.get();
            if (model !== null) {
                if (value !== model.getValue()) {
                    model.setValue(value);
                }
            }
        });
        this.valueIsEmpty = derived(this, reader => { this.versionId.read(reader); return this.editor.getModel()?.getValueLength() === 0; });
        this.cursorSelection = derivedOpts({ owner: this, equalsFn: equalsIfDefinedC(Selection.selectionsEqual) }, reader => this.selections.read(reader)?.[0] ?? null);
        this.cursorPosition = derivedOpts({ owner: this, equalsFn: Position.equals }, reader => this.selections.read(reader)?.[0]?.getPosition() ?? null);
        this.cursorLineNumber = derived(this, reader => this.cursorPosition.read(reader)?.lineNumber ?? null);
        this.onDidType = observableSignal(this);
        this.onDidPaste = observableSignal(this);
        this.scrollTop = observableFromEventOpts({ owner: this, getTransaction: () => this._currentTransaction }, this.editor.onDidScrollChange, () => this.editor.getScrollTop());
        this.scrollLeft = observableFromEventOpts({ owner: this, getTransaction: () => this._currentTransaction }, this.editor.onDidScrollChange, () => this.editor.getScrollLeft());
        this.layoutInfo = observableFromEventOpts({ owner: this, getTransaction: () => this._currentTransaction }, this.editor.onDidLayoutChange, () => this.editor.getLayoutInfo());
        this.layoutInfoContentLeft = this.layoutInfo.map(l => l.contentLeft);
        this.layoutInfoDecorationsLeft = this.layoutInfo.map(l => l.decorationsLeft);
        this.layoutInfoWidth = this.layoutInfo.map(l => l.width);
        this.layoutInfoHeight = this.layoutInfo.map(l => l.height);
        this.layoutInfoMinimap = this.layoutInfo.map(l => l.minimap);
        this.layoutInfoVerticalScrollbarWidth = this.layoutInfo.map(l => l.verticalScrollbarWidth);
        this.contentWidth = observableFromEventOpts({ owner: this, getTransaction: () => this._currentTransaction }, this.editor.onDidContentSizeChange, () => this.editor.getContentWidth());
        this.contentHeight = observableFromEventOpts({ owner: this, getTransaction: () => this._currentTransaction }, this.editor.onDidContentSizeChange, () => this.editor.getContentHeight());
        this._onDidChangeViewZones = observableSignalFromEvent(this, this.editor.onDidChangeViewZones);
        this._onDidHiddenAreasChanged = observableSignalFromEvent(this, this.editor.onDidChangeHiddenAreas);
        this._onDidLineHeightChanged = observableSignalFromEvent(this, this.editor.onDidChangeLineHeight);
        this._widgetCounter = 0;
        this.openedPeekWidgets = observableValue(this, 0);
        this._register(this.editor.onBeginUpdate(() => this._beginUpdate()));
        this._register(this.editor.onEndUpdate(() => this._endUpdate()));
        this._register(this.editor.onDidChangeModel(() => {
            this._beginUpdate();
            try {
                this._model.set(this.editor.getModel(), this._currentTransaction);
                this._forceUpdate();
            }
            finally {
                this._endUpdate();
            }
        }));
        this._register(this.editor.onDidType((e) => {
            this._beginUpdate();
            try {
                this._forceUpdate();
                this.onDidType.trigger(this._currentTransaction, e);
            }
            finally {
                this._endUpdate();
            }
        }));
        this._register(this.editor.onDidPaste((e) => {
            this._beginUpdate();
            try {
                this._forceUpdate();
                this.onDidPaste.trigger(this._currentTransaction, e);
            }
            finally {
                this._endUpdate();
            }
        }));
        this._register(this.editor.onDidChangeModelContent(e => {
            this._beginUpdate();
            try {
                this._versionId.set(this.editor.getModel()?.getVersionId() ?? null, this._currentTransaction, e);
                this._forceUpdate();
            }
            finally {
                this._endUpdate();
            }
        }));
        this._register(this.editor.onDidChangeCursorSelection(e => {
            this._beginUpdate();
            try {
                this._selections.set(this.editor.getSelections(), this._currentTransaction, e);
                this._forceUpdate();
            }
            finally {
                this._endUpdate();
            }
        }));
        this.domNode = derived(reader => {
            this.model.read(reader);
            return this.editor.getDomNode();
        });
    }
    /**
     * Batches the transactions started by observableFromEvent.
     *
     * If the callback causes the editor to fire an event that updates
     * an observable value backed by observableFromEvent (such as scrollTop etc.),
     * then all such updates will be part of the same transaction.
    */
    transaction(cb) {
        this._beginUpdate();
        try {
            return cb(this._currentTransaction);
        }
        finally {
            this._endUpdate();
        }
    }
    forceUpdate(cb) {
        this._beginUpdate();
        try {
            this._forceUpdate();
            if (!cb) {
                return undefined;
            }
            return cb(this._currentTransaction);
        }
        finally {
            this._endUpdate();
        }
    }
    _forceUpdate() {
        this._beginUpdate();
        try {
            this._model.set(this.editor.getModel(), this._currentTransaction);
            this._versionId.set(this.editor.getModel()?.getVersionId() ?? null, this._currentTransaction, undefined);
            this._selections.set(this.editor.getSelections(), this._currentTransaction, undefined);
        }
        finally {
            this._endUpdate();
        }
    }
    getOption(id, debugLocation = DebugLocation.ofCaller()) {
        return observableFromEvent(this, cb => this.editor.onDidChangeConfiguration(e => {
            if (e.hasChanged(id)) {
                cb(undefined);
            }
        }), () => this.editor.getOption(id), debugLocation);
    }
    setDecorations(decorations) {
        const d = new DisposableStore();
        const decorationsCollection = this.editor.createDecorationsCollection();
        d.add(autorunOpts({ owner: this, debugName: () => `Apply decorations from ${decorations.debugName}` }, reader => {
            const d = decorations.read(reader);
            decorationsCollection.set(d);
        }));
        d.add({
            dispose: () => {
                decorationsCollection.clear();
            }
        });
        return d;
    }
    createOverlayWidget(widget) {
        const overlayWidgetId = 'observableOverlayWidget' + (this._widgetCounter++);
        const w = {
            getDomNode: () => widget.domNode,
            getPosition: () => widget.position.get(),
            getId: () => overlayWidgetId,
            allowEditorOverflow: widget.allowEditorOverflow,
            getMinContentWidthInPx: () => widget.minContentWidthInPx.get(),
        };
        this.editor.addOverlayWidget(w);
        const d = autorun(reader => {
            widget.position.read(reader);
            widget.minContentWidthInPx.read(reader);
            this.editor.layoutOverlayWidget(w);
        });
        return toDisposable(() => {
            d.dispose();
            this.editor.removeOverlayWidget(w);
        });
    }
    createContentWidget(widget) {
        const contentWidgetId = 'observableContentWidget' + (this._widgetCounter++);
        const w = {
            getDomNode: () => widget.domNode,
            getPosition: () => widget.position.get(),
            getId: () => contentWidgetId,
            allowEditorOverflow: widget.allowEditorOverflow,
        };
        this.editor.addContentWidget(w);
        const d = autorun(reader => {
            widget.position.read(reader);
            this.editor.layoutContentWidget(w);
        });
        return toDisposable(() => {
            d.dispose();
            this.editor.removeContentWidget(w);
        });
    }
    observeLineOffsetRange(lineRange, store) {
        const start = this.observePosition(lineRange.map(r => new Position(r.startLineNumber, 1)), store);
        const end = this.observePosition(lineRange.map(r => new Position(r.endLineNumberExclusive + 1, 1)), store);
        return derived(reader => {
            start.read(reader);
            end.read(reader);
            const range = lineRange.read(reader);
            const lineCount = this.model.read(reader)?.getLineCount();
            const s = ((typeof lineCount !== 'undefined' && range.startLineNumber > lineCount
                ? this.editor.getBottomForLineNumber(lineCount)
                : this.editor.getTopForLineNumber(range.startLineNumber))
                - this.scrollTop.read(reader));
            const e = range.isEmpty ? s : (this.editor.getBottomForLineNumber(range.endLineNumberExclusive - 1) - this.scrollTop.read(reader));
            return new OffsetRange(s, e);
        });
    }
    /**
     * Uses an approximation if the exact position cannot be determined.
     */
    getLeftOfPosition(position, reader) {
        this.layoutInfo.read(reader);
        this.value.read(reader);
        let offset = this.editor.getOffsetForColumn(position.lineNumber, position.column);
        if (offset === -1) {
            // approximation
            const typicalHalfwidthCharacterWidth = this.editor.getOption(59 /* EditorOption.fontInfo */).typicalHalfwidthCharacterWidth;
            const approximation = position.column * typicalHalfwidthCharacterWidth;
            offset = approximation;
        }
        return offset;
    }
    observePosition(position, store) {
        let pos = position.get();
        const result = observableValueOpts({ owner: this, debugName: () => `topLeftOfPosition${pos?.toString()}`, equalsFn: equalsIfDefinedC(Point.equals) }, new Point(0, 0));
        const contentWidgetId = `observablePositionWidget` + (this._widgetCounter++);
        const domNode = document.createElement('div');
        const w = {
            getDomNode: () => domNode,
            getPosition: () => {
                return pos ? { preference: [0 /* ContentWidgetPositionPreference.EXACT */], position: position.get() } : null;
            },
            getId: () => contentWidgetId,
            allowEditorOverflow: false,
            useDisplayNone: true,
            afterRender: (position, coordinate) => {
                const model = this._model.get();
                if (model && pos && pos.lineNumber > model.getLineCount()) {
                    // the position is after the last line
                    result.set(new Point(0, this.editor.getBottomForLineNumber(model.getLineCount()) - this.scrollTop.get()), undefined);
                }
                else {
                    result.set(coordinate ? new Point(coordinate.left, coordinate.top) : null, undefined);
                }
            },
        };
        this.editor.addContentWidget(w);
        store.add(autorun(reader => {
            pos = position.read(reader);
            this.editor.layoutContentWidget(w);
        }));
        store.add(toDisposable(() => {
            this.editor.removeContentWidget(w);
        }));
        return result;
    }
    isTargetHovered(predicate, store) {
        const isHovered = observableValue('isInjectedTextHovered', false);
        store.add(this.editor.onMouseMove(e => {
            const val = predicate(e);
            isHovered.set(val, undefined);
        }));
        store.add(this.editor.onMouseLeave(E => {
            isHovered.set(false, undefined);
        }));
        return isHovered;
    }
    observeLineHeightForPosition(position) {
        return derived(reader => {
            const pos = position instanceof Position ? position : position.read(reader);
            if (pos === null) {
                return null;
            }
            this.getOption(75 /* EditorOption.lineHeight */).read(reader);
            return this.editor.getLineHeightForPosition(pos);
        });
    }
    observeLineHeightForLine(lineNumber) {
        if (typeof lineNumber === 'number') {
            return this.observeLineHeightForPosition(new Position(lineNumber, 1));
        }
        return derived(reader => {
            const line = lineNumber.read(reader);
            if (line === null) {
                return null;
            }
            return this.observeLineHeightForPosition(new Position(line, 1)).read(reader);
        });
    }
    observeLineHeightsForLineRange(lineNumber) {
        return derived(reader => {
            const range = lineNumber instanceof LineRange ? lineNumber : lineNumber.read(reader);
            const heights = [];
            for (let i = range.startLineNumber; i < range.endLineNumberExclusive; i++) {
                heights.push(this.observeLineHeightForLine(i).read(reader));
            }
            return heights;
        });
    }
    /**
     * Get the width of a line in pixels.
     * Reading the returned value depends on layoutInfo, value, scrollTop, and container resize events.
     * The container resize dependency ensures correct values when the editor becomes visible after being hidden.
     */
    getWidthOfLine(lineNumber, reader) {
        this.layoutInfo.read(reader);
        this.value.read(reader);
        this.scrollTop.read(reader);
        const width = this.editor.getWidthOfLine(lineNumber);
        this._onDidContainerResize.read(reader);
        if (width === 0) {
            this._sawZeroLineWidth = true;
        }
        return width;
    }
    /**
     * Get the vertical position (top offset) for the line's bottom w.r.t. to the first line.
     */
    observeTopForLineNumber(lineNumber) {
        return derived(reader => {
            this.layoutInfo.read(reader);
            this._onDidChangeViewZones.read(reader);
            this._onDidHiddenAreasChanged.read(reader);
            this._onDidLineHeightChanged.read(reader);
            this._versionId.read(reader);
            return this.editor.getTopForLineNumber(lineNumber);
        });
    }
}

export { ObservableCodeEditor, observableCodeEditor };
