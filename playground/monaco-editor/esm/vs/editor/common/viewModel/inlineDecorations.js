import { Range } from '../core/range.js';
import { Position } from '../core/position.js';
import { isModelDecorationVisible, ViewModelDecoration } from './viewModelDecoration.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class InlineDecoration {
    constructor(range, inlineClassName, type) {
        this.range = range;
        this.inlineClassName = inlineClassName;
        this.type = type;
    }
}
class InlineModelDecorationsComputer {
    constructor(context, model, coordinatesConverter) {
        this.context = context;
        this.model = model;
        this.coordinatesConverter = coordinatesConverter;
        this._decorationsCache = Object.create(null);
    }
    getInlineDecorations(modelLineNumber) {
        const modelRange = new Range(modelLineNumber, 1, modelLineNumber, this.model.getLineMaxColumn(modelLineNumber));
        const viewRange = this.coordinatesConverter.convertModelRangeToViewRange(modelRange);
        const decorationsViewportData = this.getDecorations(viewRange, false, false);
        return decorationsViewportData.inlineDecorations;
    }
    getDecorations(viewRange, onlyMinimapDecorations, onlyMarginDecorations) {
        const modelDecorations = this.context.getModelDecorations(viewRange, onlyMinimapDecorations, onlyMarginDecorations);
        const startLineNumber = viewRange.startLineNumber;
        const endLineNumber = viewRange.endLineNumber;
        const decorationsInViewport = [];
        let decorationsInViewportLen = 0;
        const inlineDecorations = [];
        const hasVariableFonts = [];
        for (let j = startLineNumber; j <= endLineNumber; j++) {
            inlineDecorations[j - startLineNumber] = [];
            hasVariableFonts[j - startLineNumber] = false;
        }
        for (let i = 0, len = modelDecorations.length; i < len; i++) {
            const modelDecoration = modelDecorations[i];
            const decorationOptions = modelDecoration.options;
            if (!isModelDecorationVisible(this.model, modelDecoration)) {
                continue;
            }
            const viewModelDecoration = this._getOrCreateViewModelDecoration(modelDecoration);
            const viewRange = viewModelDecoration.range;
            decorationsInViewport[decorationsInViewportLen++] = viewModelDecoration;
            if (decorationOptions.inlineClassName) {
                const inlineDecoration = new InlineDecoration(viewRange, decorationOptions.inlineClassName, decorationOptions.inlineClassNameAffectsLetterSpacing ? 3 /* InlineDecorationType.RegularAffectingLetterSpacing */ : 0 /* InlineDecorationType.Regular */);
                const intersectedStartLineNumber = Math.max(startLineNumber, viewRange.startLineNumber);
                const intersectedEndLineNumber = Math.min(endLineNumber, viewRange.endLineNumber);
                for (let j = intersectedStartLineNumber; j <= intersectedEndLineNumber; j++) {
                    inlineDecorations[j - startLineNumber].push(inlineDecoration);
                    if (decorationOptions.affectsFont) {
                        hasVariableFonts[j - startLineNumber] = true;
                    }
                }
            }
            if (decorationOptions.beforeContentClassName) {
                if (startLineNumber <= viewRange.startLineNumber && viewRange.startLineNumber <= endLineNumber) {
                    const inlineDecoration = new InlineDecoration(new Range(viewRange.startLineNumber, viewRange.startColumn, viewRange.startLineNumber, viewRange.startColumn), decorationOptions.beforeContentClassName, 1 /* InlineDecorationType.Before */);
                    inlineDecorations[viewRange.startLineNumber - startLineNumber].push(inlineDecoration);
                    if (decorationOptions.affectsFont) {
                        hasVariableFonts[viewRange.startLineNumber - startLineNumber] = true;
                    }
                }
            }
            if (decorationOptions.afterContentClassName) {
                if (startLineNumber <= viewRange.endLineNumber && viewRange.endLineNumber <= endLineNumber) {
                    const inlineDecoration = new InlineDecoration(new Range(viewRange.endLineNumber, viewRange.endColumn, viewRange.endLineNumber, viewRange.endColumn), decorationOptions.afterContentClassName, 2 /* InlineDecorationType.After */);
                    inlineDecorations[viewRange.endLineNumber - startLineNumber].push(inlineDecoration);
                    if (decorationOptions.affectsFont) {
                        hasVariableFonts[viewRange.endLineNumber - startLineNumber] = true;
                    }
                }
            }
        }
        return {
            decorations: decorationsInViewport,
            inlineDecorations: inlineDecorations,
            hasVariableFonts
        };
    }
    reset() {
        this._decorationsCache = Object.create(null);
    }
    onModelDecorationsChanged() {
        this.reset();
    }
    onLineMappingChanged() {
        this.reset();
    }
    _getOrCreateViewModelDecoration(modelDecoration) {
        const id = modelDecoration.id;
        let r = this._decorationsCache[id];
        if (!r) {
            const modelRange = modelDecoration.range;
            const options = modelDecoration.options;
            let viewRange;
            if (options.isWholeLine) {
                const start = this.coordinatesConverter.convertModelPositionToViewPosition(new Position(modelRange.startLineNumber, 1), 0 /* PositionAffinity.Left */, false, true);
                const end = this.coordinatesConverter.convertModelPositionToViewPosition(new Position(modelRange.endLineNumber, this.model.getLineMaxColumn(modelRange.endLineNumber)), 1 /* PositionAffinity.Right */);
                viewRange = new Range(start.lineNumber, start.column, end.lineNumber, end.column);
            }
            else {
                // For backwards compatibility reasons, we want injected text before any decoration.
                // Thus, move decorations to the right.
                viewRange = this.coordinatesConverter.convertModelRangeToViewRange(modelRange, 1 /* PositionAffinity.Right */);
            }
            r = new ViewModelDecoration(viewRange, options);
            this._decorationsCache[id] = r;
        }
        return r;
    }
}
class InjectedTextInlineDecorationsComputer {
    constructor(context) {
        this.context = context;
    }
    getInlineDecorations(modelLineNumber) {
        const injectionOffsets = this.context.getInjectionOffsets(modelLineNumber);
        if (!injectionOffsets) {
            return [];
        }
        const lineInlineDecorations = [];
        let totalInjectedTextLengthBefore = 0;
        let currentInjectedOffset = 0;
        const injectionOptions = this.context.getInjectionOptions(modelLineNumber);
        const breakOffsets = this.context.getBreakOffsets(modelLineNumber);
        for (let outputLineIndex = 0; outputLineIndex < breakOffsets.length; outputLineIndex++) {
            const inlineDecorations = new Array();
            lineInlineDecorations[outputLineIndex] = inlineDecorations;
            const lineStartOffsetInInputWithInjections = outputLineIndex > 0 ? breakOffsets[outputLineIndex - 1] : 0;
            const lineEndOffsetInInputWithInjections = breakOffsets[outputLineIndex];
            while (currentInjectedOffset < injectionOffsets.length) {
                const options = injectionOptions[currentInjectedOffset];
                const length = options.content.length;
                const injectedTextStartOffsetInInputWithInjections = injectionOffsets[currentInjectedOffset] + totalInjectedTextLengthBefore;
                const injectedTextEndOffsetInInputWithInjections = injectedTextStartOffsetInInputWithInjections + length;
                const isWidthOnly = (length === 0 && options.widthInEm !== undefined);
                const isLastOutputLine = outputLineIndex === breakOffsets.length - 1;
                const isAtInternalWrapBoundary = injectedTextStartOffsetInInputWithInjections === lineEndOffsetInInputWithInjections && !isLastOutputLine;
                if (injectedTextStartOffsetInInputWithInjections > lineEndOffsetInInputWithInjections || (isWidthOnly && isAtInternalWrapBoundary)) {
                    // Injected text only starts in later wrapped lines.
                    break;
                }
                const isInLine = isWidthOnly
                    ? lineStartOffsetInInputWithInjections <= injectedTextStartOffsetInInputWithInjections
                        && (injectedTextStartOffsetInInputWithInjections < lineEndOffsetInInputWithInjections || isLastOutputLine)
                    : lineStartOffsetInInputWithInjections < injectedTextEndOffsetInInputWithInjections;
                if (isInLine) {
                    // Injected text ends after or in this line (but also starts in or before this line).
                    if (options.inlineClassName) {
                        const wrappedTextIndentLength = this.context.getWrappedTextIndentLength(modelLineNumber);
                        const offset = (outputLineIndex > 0 ? wrappedTextIndentLength : 0);
                        const start = offset + Math.max(injectedTextStartOffsetInInputWithInjections - lineStartOffsetInInputWithInjections, 0);
                        const end = offset + Math.min(injectedTextEndOffsetInInputWithInjections - lineStartOffsetInInputWithInjections, lineEndOffsetInInputWithInjections - lineStartOffsetInInputWithInjections);
                        if (start !== end || isWidthOnly) {
                            const viewLineNumber = this.context.getBaseViewLineNumber(modelLineNumber) + outputLineIndex;
                            const range = new Range(viewLineNumber, start + 1, viewLineNumber, end + 1);
                            const type = (isWidthOnly
                                ? 4 /* InlineDecorationType.WidthOnly */
                                : options.inlineClassNameAffectsLetterSpacing
                                    ? 3 /* InlineDecorationType.RegularAffectingLetterSpacing */
                                    : 0 /* InlineDecorationType.Regular */);
                            inlineDecorations.push(new InlineDecoration(range, options.inlineClassName, type));
                        }
                    }
                }
                if (injectedTextEndOffsetInInputWithInjections <= lineEndOffsetInInputWithInjections) {
                    totalInjectedTextLengthBefore += length;
                    currentInjectedOffset++;
                }
                else {
                    // injected text breaks into next line, process it again
                    break;
                }
            }
        }
        return lineInlineDecorations;
    }
}

export { InjectedTextInlineDecorationsComputer, InlineDecoration, InlineModelDecorationsComputer };
