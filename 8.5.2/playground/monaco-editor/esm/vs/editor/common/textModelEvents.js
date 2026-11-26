/**
 * An event describing that a model has been reset to a new value.
 * @internal
 */
class ModelRawFlush {
    constructor() {
        this.changeType = 1 /* RawContentChangedType.Flush */;
    }
}
/**
 * Whether injected text takes up space on a line, either through its content or, when it is
 * width-only (e.g. `{ content: '', widthInEm: 1 }`), through the horizontal space it reserves.
 */
function occupiesHorizontalSpace(options) {
    return options.content.length > 0 || (options.widthInEm !== undefined && options.widthInEm > 0);
}
/**
 * Represents text injected on a line
 * @internal
 */
class LineInjectedText {
    static applyInjectedText(lineText, injectedTexts) {
        if (!injectedTexts || injectedTexts.length === 0) {
            return lineText;
        }
        let result = '';
        let lastOriginalOffset = 0;
        for (const injectedText of injectedTexts) {
            result += lineText.substring(lastOriginalOffset, injectedText.column - 1);
            lastOriginalOffset = injectedText.column - 1;
            result += injectedText.options.content;
        }
        result += lineText.substring(lastOriginalOffset);
        return result;
    }
    static fromDecorations(decorations) {
        const result = [];
        for (const decoration of decorations) {
            if (decoration.options.before && occupiesHorizontalSpace(decoration.options.before)) {
                result.push(new LineInjectedText(decoration.ownerId, decoration.range.startLineNumber, decoration.range.startColumn, decoration.options.before, 0));
            }
            if (decoration.options.after && occupiesHorizontalSpace(decoration.options.after)) {
                result.push(new LineInjectedText(decoration.ownerId, decoration.range.endLineNumber, decoration.range.endColumn, decoration.options.after, 1));
            }
        }
        result.sort((a, b) => {
            if (a.lineNumber === b.lineNumber) {
                if (a.column === b.column) {
                    return a.order - b.order;
                }
                return a.column - b.column;
            }
            return a.lineNumber - b.lineNumber;
        });
        return result;
    }
    /**
     * The ranges of `applyInjectedText(...)` that are rendered at a fixed width. Width-only injected
     * text produces an empty range (`startOffset === endOffset`) which reserves horizontal space
     * without covering any character.
     *
     * `injectedTexts` must be sorted by column, which is what `fromDecorations` produces and what
     * `applyInjectedText` already requires. The result is then sorted by `startOffset` and never
     * overlaps: injections at the same column are laid out one after the other, so only an injection
     * with empty content leaves the next one starting at the same offset.
     */
    static getFixedWidthInjectedTextRanges(injectedTexts) {
        const result = [];
        let injectedTextLength = 0;
        for (const injectedText of injectedTexts ?? []) {
            const length = injectedText.options.content.length;
            const startOffset = injectedText.column - 1 + injectedTextLength;
            const endOffset = startOffset + length;
            const widthInEm = injectedText.options.widthInEm;
            if (widthInEm !== undefined) {
                result.push({ startOffset, endOffset, widthInEm });
            }
            injectedTextLength += length;
        }
        return result;
    }
    constructor(ownerId, lineNumber, column, options, order) {
        this.ownerId = ownerId;
        this.lineNumber = lineNumber;
        this.column = column;
        this.options = options;
        this.order = order;
    }
}
/**
 * An event describing that a line has changed in a model.
 * @internal
 */
class ModelRawLineChanged {
    constructor(lineNumber, lineNumberPostEdit) {
        this.changeType = 2 /* RawContentChangedType.LineChanged */;
        this.lineNumber = lineNumber;
        this.lineNumberPostEdit = lineNumberPostEdit;
    }
}
/**
 * An event describing that a line height has changed in the model.
 * @internal
 */
class ModelLineHeightChanged {
    constructor(ownerId, decorationId, lineNumber, lineHeightMultiplier) {
        this.ownerId = ownerId;
        this.decorationId = decorationId;
        this.lineNumber = lineNumber;
        this.lineHeightMultiplier = lineHeightMultiplier;
    }
}
/**
 * An event describing that a line height has changed in the model.
 * @internal
 */
class ModelFontChanged {
    constructor(ownerId, lineNumber) {
        this.ownerId = ownerId;
        this.lineNumber = lineNumber;
    }
}
/**
 * An event describing that line(s) have been deleted in a model.
 * @internal
 */
class ModelRawLinesDeleted {
    constructor(fromLineNumber, toLineNumber, lastUntouchedLinePostEdit) {
        this.changeType = 3 /* RawContentChangedType.LinesDeleted */;
        this.fromLineNumber = fromLineNumber;
        this.toLineNumber = toLineNumber;
        this.lastUntouchedLinePostEdit = lastUntouchedLinePostEdit;
    }
}
/**
 * An event describing that line(s) have been inserted in a model.
 * @internal
 */
class ModelRawLinesInserted {
    /**
     * `toLineNumber` - `fromLineNumber` + 1 denotes the number of lines that were inserted
     */
    get toLineNumber() {
        return this.fromLineNumber + this.count - 1;
    }
    /**
     * The actual end line number of the insertion in the updated buffer.
     */
    get toLineNumberPostEdit() {
        return this.fromLineNumberPostEdit + this.count - 1;
    }
    constructor(fromLineNumber, fromLineNumberPostEdit, count) {
        this.changeType = 4 /* RawContentChangedType.LinesInserted */;
        this.fromLineNumber = fromLineNumber;
        this.fromLineNumberPostEdit = fromLineNumberPostEdit;
        this.count = count;
    }
}
/**
 * An event describing that a model has had its EOL changed.
 * @internal
 */
class ModelRawEOLChanged {
    constructor() {
        this.changeType = 5 /* RawContentChangedType.EOLChanged */;
    }
}
/**
 * An event describing a change in the text of a model.
 * @internal
 */
class ModelRawContentChangedEvent {
    constructor(changes, versionId, isUndoing, isRedoing) {
        this.changes = changes;
        this.versionId = versionId;
        this.isUndoing = isUndoing;
        this.isRedoing = isRedoing;
        this.resultingSelection = null;
    }
    containsEvent(type) {
        for (let i = 0, len = this.changes.length; i < len; i++) {
            const change = this.changes[i];
            if (change.changeType === type) {
                return true;
            }
        }
        return false;
    }
    static merge(a, b) {
        const changes = [].concat(a.changes).concat(b.changes);
        const versionId = b.versionId;
        const isUndoing = (a.isUndoing || b.isUndoing);
        const isRedoing = (a.isRedoing || b.isRedoing);
        return new ModelRawContentChangedEvent(changes, versionId, isUndoing, isRedoing);
    }
}
/**
 * An event describing a change in injected text.
 * @internal
 */
class ModelInjectedTextChangedEvent {
    constructor(changes) {
        this.changes = changes;
    }
}
/**
 * An event describing a change of a line height.
 * @internal
 */
class ModelLineHeightChangedEvent {
    constructor(changes) {
        this.changes = changes;
    }
}
/**
 * An event describing a change in fonts.
 * @internal
 */
class ModelFontChangedEvent {
    constructor(changes) {
        this.changes = changes;
    }
}
/**
 * @internal
 */
class InternalModelContentChangeEvent {
    constructor(rawContentChangedEvent, contentChangedEvent) {
        this.rawContentChangedEvent = rawContentChangedEvent;
        this.contentChangedEvent = contentChangedEvent;
    }
    merge(other) {
        const rawContentChangedEvent = ModelRawContentChangedEvent.merge(this.rawContentChangedEvent, other.rawContentChangedEvent);
        const contentChangedEvent = InternalModelContentChangeEvent._mergeChangeEvents(this.contentChangedEvent, other.contentChangedEvent);
        return new InternalModelContentChangeEvent(rawContentChangedEvent, contentChangedEvent);
    }
    static _mergeChangeEvents(a, b) {
        const changes = [].concat(a.changes).concat(b.changes);
        const eol = b.eol;
        const versionId = b.versionId;
        const isUndoing = (a.isUndoing || b.isUndoing);
        const isRedoing = (a.isRedoing || b.isRedoing);
        const isFlush = (a.isFlush || b.isFlush);
        const isEolChange = a.isEolChange && b.isEolChange; // both must be true to not confuse listeners who skip such edits
        return {
            changes: changes,
            eol: eol,
            isEolChange: isEolChange,
            versionId: versionId,
            isUndoing: isUndoing,
            isRedoing: isRedoing,
            isFlush: isFlush,
            detailedReasons: a.detailedReasons.concat(b.detailedReasons),
            detailedReasonsChangeLengths: a.detailedReasonsChangeLengths.concat(b.detailedReasonsChangeLengths),
        };
    }
}

export { InternalModelContentChangeEvent, LineInjectedText, ModelFontChanged, ModelFontChangedEvent, ModelInjectedTextChangedEvent, ModelLineHeightChanged, ModelLineHeightChangedEvent, ModelRawContentChangedEvent, ModelRawEOLChanged, ModelRawFlush, ModelRawLineChanged, ModelRawLinesDeleted, ModelRawLinesInserted };
