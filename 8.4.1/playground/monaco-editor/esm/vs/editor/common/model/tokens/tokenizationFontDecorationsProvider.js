import { Disposable } from '../../../../base/common/lifecycle.js';
import { Range } from '../../core/range.js';
import { LineHeightChangingDecoration, LineFontChangingDecoration } from '../decorationProvider.js';
import { Emitter } from '../../../../base/common/event.js';
import { classNameForFontTokenDecorations } from '../../languages/supports/tokenization.js';
import { Position } from '../../core/position.js';
import { AnnotatedString, AnnotationsUpdate } from './annotations.js';
import { OffsetRange } from '../../core/ranges/offsetRange.js';
import { offsetEditFromContentChanges } from '../textModelStringEdit.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class TokenizationFontDecorationProvider extends Disposable {
    static { this.DECORATION_COUNT = 0; }
    constructor(textModel, tokenizationTextModelPart) {
        super();
        this.textModel = textModel;
        this.tokenizationTextModelPart = tokenizationTextModelPart;
        this._onDidChangeLineHeight = this._register(new Emitter());
        this.onDidChangeLineHeight = this._onDidChangeLineHeight.event;
        this._onDidChangeFont = this._register(new Emitter());
        this.onDidChangeFont = this._onDidChangeFont.event;
        this._fontAnnotatedString = new AnnotatedString();
        this._register(this.tokenizationTextModelPart.onDidChangeFontTokens(fontChanges => {
            const linesChanged = new Set();
            const fontTokenAnnotations = [];
            const affectedLineHeights = new Set();
            const affectedLineFonts = new Set();
            for (const annotation of fontChanges.changes.annotations) {
                const startPosition = this.textModel.getPositionAt(annotation.range.start);
                const lineNumber = startPosition.lineNumber;
                let fontTokenAnnotation;
                if (annotation.annotation === undefined) {
                    fontTokenAnnotation = {
                        range: annotation.range,
                        annotation: undefined
                    };
                }
                else {
                    const decorationId = `tokenization-font-decoration-${TokenizationFontDecorationProvider.DECORATION_COUNT}`;
                    const fontTokenDecoration = {
                        fontToken: annotation.annotation,
                        decorationId
                    };
                    fontTokenAnnotation = {
                        range: annotation.range,
                        annotation: fontTokenDecoration
                    };
                    TokenizationFontDecorationProvider.DECORATION_COUNT++;
                    if (annotation.annotation.lineHeightMultiplier) {
                        affectedLineHeights.add(new LineHeightChangingDecoration(0, decorationId, lineNumber, annotation.annotation.lineHeightMultiplier));
                    }
                    affectedLineFonts.add(new LineFontChangingDecoration(0, decorationId, lineNumber));
                }
                fontTokenAnnotations.push(fontTokenAnnotation);
                if (!linesChanged.has(lineNumber)) {
                    // Signal the removal of the font tokenization decorations on the line number
                    const lineNumberStartOffset = this.textModel.getOffsetAt(new Position(lineNumber, 1));
                    const lineNumberEndOffset = this.textModel.getOffsetAt(new Position(lineNumber, this.textModel.getLineMaxColumn(lineNumber)));
                    const lineOffsetRange = new OffsetRange(lineNumberStartOffset, lineNumberEndOffset);
                    const lineAnnotations = this._fontAnnotatedString.getAnnotationsIntersecting(lineOffsetRange);
                    for (const annotation of lineAnnotations) {
                        const decorationId = annotation.annotation.decorationId;
                        affectedLineHeights.add(new LineHeightChangingDecoration(0, decorationId, lineNumber, null));
                        affectedLineFonts.add(new LineFontChangingDecoration(0, decorationId, lineNumber));
                    }
                    linesChanged.add(lineNumber);
                }
            }
            this._fontAnnotatedString.setAnnotations(AnnotationsUpdate.create(fontTokenAnnotations));
            this._onDidChangeLineHeight.fire(affectedLineHeights);
            this._onDidChangeFont.fire(affectedLineFonts);
        }));
    }
    handleDidChangeContent(change) {
        const edits = offsetEditFromContentChanges(change.changes);
        const deletedAnnotations = this._fontAnnotatedString.applyEdit(edits);
        if (deletedAnnotations.length === 0) {
            return;
        }
        /* We should fire line and font change events if decorations have been added or removed
         * No decorations are added on edit, but they can be removed */
        const affectedLineHeights = new Set();
        const affectedLineFonts = new Set();
        for (const deletedAnnotation of deletedAnnotations) {
            const startPosition = this.textModel.getPositionAt(deletedAnnotation.range.start);
            const lineNumber = startPosition.lineNumber;
            const decorationId = deletedAnnotation.annotation.decorationId;
            affectedLineHeights.add(new LineHeightChangingDecoration(0, decorationId, lineNumber, null));
            affectedLineFonts.add(new LineFontChangingDecoration(0, decorationId, lineNumber));
        }
        this._onDidChangeLineHeight.fire(affectedLineHeights);
        this._onDidChangeFont.fire(affectedLineFonts);
    }
    getDecorationsInRange(range, ownerId, filterOutValidation, filterFontDecorations, onlyMinimapDecorations) {
        const startOffsetOfRange = this.textModel.getOffsetAt(range.getStartPosition());
        const endOffsetOfRange = this.textModel.getOffsetAt(range.getEndPosition());
        const annotations = this._fontAnnotatedString.getAnnotationsIntersecting(new OffsetRange(startOffsetOfRange, endOffsetOfRange));
        const decorations = [];
        for (const annotation of annotations) {
            const anno = annotation.annotation;
            const affectsFont = !!(anno.fontToken.fontFamily || anno.fontToken.fontSizeMultiplier);
            if (!(affectsFont && filterFontDecorations)) {
                const annotationStartPosition = this.textModel.getPositionAt(annotation.range.start);
                const annotationEndPosition = this.textModel.getPositionAt(annotation.range.endExclusive);
                const range = Range.fromPositions(annotationStartPosition, annotationEndPosition);
                const anno = annotation.annotation;
                const className = classNameForFontTokenDecorations(anno.fontToken.fontFamily ?? '', anno.fontToken.fontSizeMultiplier ?? 0);
                const id = anno.decorationId;
                decorations.push({
                    id: id,
                    options: {
                        description: 'FontOptionDecoration',
                        inlineClassName: className,
                        lineHeight: anno.fontToken.lineHeightMultiplier,
                        affectsFont
                    },
                    ownerId: 0,
                    range
                });
            }
        }
        return decorations;
    }
    getAllDecorations(ownerId, filterOutValidation) {
        return this.getDecorationsInRange(new Range(1, 1, this.textModel.getLineCount(), this.textModel.getLineMaxColumn(this.textModel.getLineCount())), ownerId, filterOutValidation);
    }
}

export { TokenizationFontDecorationProvider };
