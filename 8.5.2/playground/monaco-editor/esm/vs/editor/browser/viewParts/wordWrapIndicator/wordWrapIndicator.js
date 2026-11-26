import './wordWrapIndicator.css';
import { DynamicViewOverlay } from '../../view/dynamicViewOverlay.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * U+21A9 - LEFTWARDS ARROW WITH HOOK.
 */
const WORD_WRAP_INDICATOR_CHAR_CODE = 0x21A9;
/**
 * The word wrap indicator overlay renders a small glyph at the wrapping column of every view
 * line which is soft wrapped, so that a wrapped line can be told apart from a real line break.
 */
class WordWrapIndicatorOverlay extends DynamicViewOverlay {
    constructor(context) {
        super();
        this._context = context;
        this._options = new WordWrapIndicatorOptions(this._context.configuration);
        this._renderResult = null;
        this._context.addEventHandler(this);
    }
    dispose() {
        this._context.removeEventHandler(this);
        this._renderResult = null;
        super.dispose();
    }
    /**
     * Whether the overlay paints anything at all. While it does not, every view event can be
     * answered with `false`, so the view is never asked to repaint on this overlay's behalf.
     */
    get _isEnabled() {
        return this._options.wordWrapIndicator && this._options.isWrapping;
    }
    // --- begin event handlers
    onConfigurationChanged(e) {
        const wasEnabled = this._isEnabled;
        const newOptions = new WordWrapIndicatorOptions(this._context.configuration);
        const optionsChanged = !this._options.equals(newOptions);
        this._options = newOptions;
        return (wasEnabled || this._isEnabled) && optionsChanged;
    }
    onDecorationsChanged(e) {
        return this._isEnabled;
    }
    onFlushed(e) {
        return this._isEnabled;
    }
    onLineMappingChanged(e) {
        // Which lines continue with a wrapped line is decided by the line mapping.
        return this._isEnabled;
    }
    onLinesChanged(e) {
        return this._isEnabled;
    }
    onLinesDeleted(e) {
        return this._isEnabled;
    }
    onLinesInserted(e) {
        return this._isEnabled;
    }
    onScrollChanged(e) {
        return this._isEnabled && e.scrollTopChanged;
    }
    onTokensChanged(e) {
        return false;
    }
    onZonesChanged(e) {
        return this._isEnabled;
    }
    // --- end event handlers
    prepareRender(ctx) {
        if (!this._isEnabled) {
            this._renderResult = null;
            return;
        }
        this._renderResult = [];
        for (let lineNumber = ctx.viewportData.startLineNumber; lineNumber <= ctx.viewportData.endLineNumber; lineNumber++) {
            const lineIndex = lineNumber - ctx.viewportData.startLineNumber;
            this._renderResult[lineIndex] = this._renderLine(ctx, lineNumber);
        }
    }
    _renderLine(ctx, lineNumber) {
        if (!ctx.viewportData.getViewLineContinuesWithWrappedLine(lineNumber)) {
            // The line ends with a real line break, or is the last line of the model.
            return '';
        }
        const lineHeight = ctx.getLineHeightForLineNumber(lineNumber);
        return `<div class="wwi" style="left:${this._options.indicatorLeft}px;height:${lineHeight}px;">${String.fromCharCode(WORD_WRAP_INDICATOR_CHAR_CODE)}</div>`;
    }
    render(startLineNumber, lineNumber) {
        if (!this._renderResult) {
            return '';
        }
        const lineIndex = lineNumber - startLineNumber;
        if (lineIndex < 0 || lineIndex >= this._renderResult.length) {
            return '';
        }
        return this._renderResult[lineIndex];
    }
}
/**
 * The subset of the editor configuration the overlay reads, snapshotted so that a configuration
 * change can be told apart from one that leaves the rendered result untouched.
 */
class WordWrapIndicatorOptions {
    constructor(config) {
        const options = config.options;
        const fontInfo = options.get(59 /* EditorOption.fontInfo */);
        const wrappingColumn = options.get(167 /* EditorOption.wrappingInfo */).wrappingColumn;
        this.wordWrapIndicator = options.get(161 /* EditorOption.wordWrapIndicator */);
        this.isWrapping = wrappingColumn !== -1;
        this.indicatorLeft = wrappingColumn * fontInfo.typicalHalfwidthCharacterWidth;
    }
    equals(other) {
        return (this.wordWrapIndicator === other.wordWrapIndicator
            && this.isWrapping === other.isWrapping
            && this.indicatorLeft === other.indicatorLeft);
    }
}

export { WordWrapIndicatorOverlay };
