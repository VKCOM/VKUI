import { BugIndicatingError } from '../../../../../base/common/errors.js';
import '../../../../../base/common/observableInternal/index.js';
import { splitLines, commonPrefixLength, commonSuffixLength } from '../../../../../base/common/strings.js';
import { StringReplacement, StringEdit, applyEditsToRanges } from '../../../../common/core/edits/stringEdit.js';
import { TextEdit, TextReplacement } from '../../../../common/core/edits/textEdit.js';
import { Range } from '../../../../common/core/range.js';
import { OffsetRange } from '../../../../common/core/ranges/offsetRange.js';
import { StringText } from '../../../../common/core/text/abstractText.js';
import { getPositionOffsetTransformerFromTextModel } from '../../../../common/core/text/getPositionOffsetTransformerFromTextModel.js';
import { TextLength } from '../../../../common/core/text/textLength.js';
import { linesDiffComputers } from '../../../../common/diff/linesDiffComputers.js';
import { InlineCompletionTriggerKind } from '../../../../common/languages.js';
import { TextModelText } from '../../../../common/model/textModelText.js';
import { computeEditKind } from './editKind.js';
import { inlineCompletionIsVisible } from './inlineCompletionIsVisible.js';
import { InlineSuggestAlternativeAction } from './InlineSuggestAlternativeAction.js';
import { TextModelValueReference } from './textModelValueReference.js';
import { observableSignal } from '../../../../../base/common/observableInternal/observables/observableSignal.js';
import { observableValue } from '../../../../../base/common/observableInternal/observables/observableValue.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var InlineSuggestionItem;
(function (InlineSuggestionItem) {
    function create(data, textModel, shouldDiffEdit = true) {
        if (!data.isInlineEdit && !data.action?.uri && data.action?.kind === 'edit') {
            return InlineCompletionItem.create(data, textModel, data.action);
        }
        else {
            return InlineEditItem.create(data, textModel, shouldDiffEdit);
        }
    }
    InlineSuggestionItem.create = create;
})(InlineSuggestionItem || (InlineSuggestionItem = {}));
function hashInlineSuggestionAction(action) {
    const obj = action?.kind === 'edit' ? {
        ...action, alternativeAction: InlineSuggestAlternativeAction.toString(action.alternativeAction),
        target: action?.target.uri.toString(),
    } : {
        ...action,
        target: action?.target.uri.toString(),
    };
    return JSON.stringify(obj);
}
class InlineSuggestionItemBase {
    constructor(_data, identity, hint, 
    /**
     * Reference to the text model this item targets.
     * For cross-file edits, this may differ from the current editor's model.
     */
    originalTextRef) {
        this._data = _data;
        this.identity = identity;
        this.hint = hint;
        this.originalTextRef = originalTextRef;
    }
    /**
     * A reference to the original inline completion list this inline completion has been constructed from.
     * Used for event data to ensure referential equality.
    */
    get source() { return this._data.source; }
    get isFromExplicitRequest() { return this._data.context.triggerKind === InlineCompletionTriggerKind.Explicit; }
    get forwardStable() { return this.source.inlineSuggestions.enableForwardStability ?? false; }
    get targetRange() {
        if (this.hint) {
            return this.hint.range;
        }
        if (this.action?.kind === 'edit') {
            return this.action.textReplacement.range;
        }
        else if (this.action?.kind === 'jumpTo') {
            return Range.fromPositions(this.action.position);
        }
        throw new BugIndicatingError('InlineSuggestionItem: Either hint or action must be set');
    }
    get semanticId() { return this.hash; }
    get gutterMenuLinkAction() { return this._sourceInlineCompletion.gutterMenuLinkAction; }
    get command() { return this._sourceInlineCompletion.command; }
    get supportsRename() { return this._data.supportsRename; }
    get warning() { return this._sourceInlineCompletion.warning; }
    get showInlineEditMenu() { return !!this._sourceInlineCompletion.showInlineEditMenu; }
    get hash() {
        return hashInlineSuggestionAction(this.action);
    }
    get requestUuid() { return this._data.context.requestUuid; }
    get partialAccepts() { return this._data.partialAccepts; }
    /**
     * A reference to the original inline completion this inline completion has been constructed from.
     * Used for event data to ensure referential equality.
    */
    get _sourceInlineCompletion() { return this._data.sourceInlineCompletion; }
    addRef() {
        this.identity.addRef();
        this.source.addRef();
    }
    removeRef() {
        this.identity.removeRef();
        this.source.removeRef();
    }
    reportInlineEditShown(commandService, viewKind, viewData, model, timeWhenShown) {
        const insertText = this.action?.kind === 'edit' ? this.action.textReplacement.text : ''; // TODO@hediet support insertText === undefined
        this._data.reportInlineEditShown(commandService, insertText, viewKind, viewData, this.computeEditKind(model), timeWhenShown);
    }
    reportPartialAccept(acceptedCharacters, info, partialAcceptance) {
        this._data.reportPartialAccept(acceptedCharacters, info, partialAcceptance);
    }
    reportEndOfLife(reason) {
        this._data.reportEndOfLife(reason);
    }
    setEndOfLifeReason(reason) {
        this._data.setEndOfLifeReason(reason);
    }
    setIsPreceeded(item) {
        this._data.setIsPreceeded(item.partialAccepts);
    }
    setNotShownReasonIfNotSet(reason) {
        this._data.setNotShownReason(reason);
    }
    /**
     * Avoid using this method. Instead introduce getters for the needed properties.
    */
    getSourceCompletion() {
        return this._sourceInlineCompletion;
    }
    setRenameProcessingInfo(info) {
        this._data.setRenameProcessingInfo(info);
    }
    withAction(action) {
        return this._data.withAction(action);
    }
    addPerformanceMarker(marker) {
        this._data.addPerformanceMarker(marker);
    }
}
class InlineSuggestionIdentity {
    constructor() {
        this._onDispose = observableSignal(this);
        this.onDispose = this._onDispose;
        this._jumpedTo = observableValue(this, false);
        this._refCount = 0;
        this.id = 'InlineCompletionIdentity' + InlineSuggestionIdentity.idCounter++;
    }
    static { this.idCounter = 0; }
    get jumpedTo() {
        return this._jumpedTo;
    }
    addRef() {
        this._refCount++;
    }
    removeRef() {
        this._refCount--;
        if (this._refCount === 0) {
            this._onDispose.trigger(undefined);
        }
    }
    setJumpTo(tx) {
        this._jumpedTo.set(true, tx);
    }
}
class InlineSuggestHint {
    static create(hint) {
        return new InlineSuggestHint(Range.lift(hint.range), hint.content, hint.style);
    }
    constructor(range, content, style) {
        this.range = range;
        this.content = content;
        this.style = style;
    }
    withEdit(edit, positionOffsetTransformer) {
        const offsetRange = new OffsetRange(positionOffsetTransformer.getOffset(this.range.getStartPosition()), positionOffsetTransformer.getOffset(this.range.getEndPosition()));
        const newOffsetRange = applyEditsToRanges([offsetRange], edit)[0];
        if (!newOffsetRange) {
            return undefined;
        }
        const newRange = positionOffsetTransformer.getRange(newOffsetRange);
        return new InlineSuggestHint(newRange, this.content, this.style);
    }
}
class InlineCompletionItem extends InlineSuggestionItemBase {
    static create(data, textModel, action) {
        const identity = new InlineSuggestionIdentity();
        const transformer = textModel.getTransformer();
        const insertText = action.insertText.replace(/\r\n|\r|\n/g, textModel.getEOL());
        const edit = reshapeInlineCompletion(new StringReplacement(transformer.getOffsetRange(action.range), insertText), textModel);
        const trimmedEdit = edit.removeCommonSuffixAndPrefix(textModel.getValue());
        const textEdit = transformer.getTextReplacement(edit);
        const displayLocation = data.hint ? InlineSuggestHint.create(data.hint) : undefined;
        return new InlineCompletionItem(edit, trimmedEdit, textEdit, textEdit.range, action.snippetInfo, data.additionalTextEdits, data, identity, displayLocation, textModel);
    }
    constructor(_edit, _trimmedEdit, _textEdit, _originalRange, snippetInfo, additionalTextEdits, data, identity, displayLocation, originalTextRef) {
        super(data, identity, displayLocation, originalTextRef);
        this._edit = _edit;
        this._trimmedEdit = _trimmedEdit;
        this._textEdit = _textEdit;
        this._originalRange = _originalRange;
        this.snippetInfo = snippetInfo;
        this.additionalTextEdits = additionalTextEdits;
        this.isInlineEdit = false;
    }
    get action() {
        return {
            kind: 'edit',
            textReplacement: this.getSingleTextEdit(),
            snippetInfo: this.snippetInfo,
            stringEdit: new StringEdit([this._trimmedEdit]),
            alternativeAction: undefined,
            target: this.originalTextRef,
        };
    }
    get hash() {
        return JSON.stringify(this._trimmedEdit.toJson());
    }
    getSingleTextEdit() { return this._textEdit; }
    withIdentity(identity) {
        return new InlineCompletionItem(this._edit, this._trimmedEdit, this._textEdit, this._originalRange, this.snippetInfo, this.additionalTextEdits, this._data, identity, this.hint, this.originalTextRef);
    }
    withEdit(textModelEdit, textModel) {
        // If the edit is to a different model than our target, it's a noop
        if (!this.originalTextRef.targets(textModel)) {
            return this; // unchanged
        }
        const newEditRange = applyEditsToRanges([this._edit.replaceRange], textModelEdit);
        if (newEditRange.length === 0) {
            return undefined;
        }
        const newEdit = new StringReplacement(newEditRange[0], this._textEdit.text);
        const positionOffsetTransformer = getPositionOffsetTransformerFromTextModel(textModel);
        const newTextEdit = positionOffsetTransformer.getTextReplacement(newEdit);
        let newDisplayLocation = this.hint;
        if (newDisplayLocation) {
            newDisplayLocation = newDisplayLocation.withEdit(textModelEdit, positionOffsetTransformer);
            if (!newDisplayLocation) {
                return undefined;
            }
        }
        const trimmedEdit = newEdit.removeCommonSuffixAndPrefix(textModel.getValue());
        return new InlineCompletionItem(newEdit, trimmedEdit, newTextEdit, this._originalRange, this.snippetInfo, this.additionalTextEdits, this._data, this.identity, newDisplayLocation, this.originalTextRef);
    }
    canBeReused(model, position) {
        // TODO@hediet I believe this can be simplified to `return true;`, as applying an edit should kick out this suggestion.
        const updatedRange = this._textEdit.range;
        const result = !!updatedRange
            && updatedRange.containsPosition(position)
            && this.isVisible(model, position)
            && TextLength.ofRange(updatedRange).isGreaterThanOrEqualTo(TextLength.ofRange(this._originalRange));
        return result;
    }
    isVisible(model, cursorPosition) {
        const singleTextEdit = this.getSingleTextEdit();
        return inlineCompletionIsVisible(singleTextEdit, this._originalRange, model, cursorPosition);
    }
    computeEditKind(model) {
        return computeEditKind(new StringEdit([this._edit]), model);
    }
    get editRange() { return this.getSingleTextEdit().range; }
}
class InlineEditItem extends InlineSuggestionItemBase {
    static create(data, textModel, shouldDiffEdit = true) {
        let action;
        let edits = [];
        if (data.action?.kind === 'edit') {
            const offsetEdit = shouldDiffEdit ? getDiffedStringEdit(textModel, data.action.range, data.action.insertText) : getStringEdit(textModel, data.action.range, data.action.insertText); // TODO compute async
            const textEdit = TextEdit.fromStringEdit(offsetEdit, textModel);
            const singleTextEdit = offsetEdit.isEmpty() ? new TextReplacement(new Range(1, 1, 1, 1), '') : textEdit.toReplacement(textModel); // FIXME: .toReplacement() can throw because offsetEdit is empty because we get an empty diff in getStringEdit after diffing
            edits = offsetEdit.replacements.map(edit => {
                const replacedRange = Range.fromPositions(textModel.getPositionAt(edit.replaceRange.start), textModel.getTransformer().getPosition(edit.replaceRange.endExclusive));
                const replacedText = textModel.getValueInRange(replacedRange);
                return SingleUpdatedNextEdit.create(edit, replacedText);
            });
            action = {
                kind: 'edit',
                snippetInfo: data.action.snippetInfo,
                stringEdit: offsetEdit,
                textReplacement: singleTextEdit,
                alternativeAction: data.action.alternativeAction,
                target: textModel,
            };
        }
        else if (data.action?.kind === 'jumpTo') {
            action = {
                kind: 'jumpTo',
                position: data.action.position,
                offset: textModel.getTransformer().getOffset(data.action.position),
                target: textModel,
            };
        }
        else {
            action = undefined;
            if (!data.hint) {
                throw new BugIndicatingError('InlineEditItem: action is undefined and no hint is provided');
            }
        }
        const identity = new InlineSuggestionIdentity();
        const hint = data.hint ? InlineSuggestHint.create(data.hint) : undefined;
        return new InlineEditItem(action, data, identity, edits, hint, false, textModel.getVersionId(), textModel);
    }
    constructor(_action, data, identity, _edits, hint, _lastChangePartOfInlineEdit = false, _inlineEditModelVersion, originalTextRef) {
        super(data, identity, hint, originalTextRef);
        this._action = _action;
        this._edits = _edits;
        this._lastChangePartOfInlineEdit = _lastChangePartOfInlineEdit;
        this._inlineEditModelVersion = _inlineEditModelVersion;
        this.snippetInfo = undefined;
        this.additionalTextEdits = [];
        this.isInlineEdit = true;
    }
    get updatedEditModelVersion() { return this._inlineEditModelVersion; }
    // public get updatedEdit(): StringEdit { return this._edit; }
    get action() {
        return this._action;
    }
    withIdentity(identity) {
        return new InlineEditItem(this._action, this._data, identity, this._edits, this.hint, this._lastChangePartOfInlineEdit, this._inlineEditModelVersion, this.originalTextRef);
    }
    canBeReused(model, position) {
        // TODO@hediet I believe this can be simplified to `return true;`, as applying an edit should kick out this suggestion.
        return this._lastChangePartOfInlineEdit && this.updatedEditModelVersion === model.getVersionId();
    }
    withEdit(textModelChanges, textModel) {
        // If the edit is to a different model than our target, it's a noop
        if (!this.originalTextRef.targets(textModel)) {
            return this; // unchanged
        }
        const edit = this._applyTextModelChanges(textModelChanges, this._edits, textModel);
        return edit;
    }
    _applyTextModelChanges(textModelChanges, edits, textModel) {
        const positionOffsetTransformer = getPositionOffsetTransformerFromTextModel(textModel);
        let lastChangePartOfInlineEdit = false;
        let inlineEditModelVersion = this._inlineEditModelVersion;
        let newAction;
        const updatedTarget = TextModelValueReference.snapshot(textModel);
        if (this.action?.kind === 'edit') { // TODO What about rename?
            edits = edits.map(innerEdit => innerEdit.applyTextModelChanges(textModelChanges));
            if (edits.some(edit => edit.edit === undefined)) {
                return undefined; // change is invalid, so we will have to drop the completion
            }
            const newTextModelVersion = textModel.getVersionId();
            lastChangePartOfInlineEdit = edits.some(edit => edit.lastChangeUpdatedEdit);
            if (lastChangePartOfInlineEdit) {
                inlineEditModelVersion = newTextModelVersion ?? -1;
            }
            if (newTextModelVersion === null || inlineEditModelVersion + 20 < newTextModelVersion) {
                return undefined; // the completion has been ignored for a while, remove it
            }
            edits = edits.filter(innerEdit => !innerEdit.edit.isEmpty);
            if (edits.length === 0) {
                return undefined; // the completion has been typed by the user
            }
            const newEdit = new StringEdit(edits.map(edit => edit.edit));
            const newTextEdit = positionOffsetTransformer.getTextEdit(newEdit).toReplacement(new TextModelText(textModel));
            newAction = {
                kind: 'edit',
                textReplacement: newTextEdit,
                snippetInfo: this.snippetInfo,
                stringEdit: newEdit,
                alternativeAction: this.action.alternativeAction,
                target: updatedTarget,
            };
        }
        else if (this.action?.kind === 'jumpTo') {
            const jumpToOffset = this.action.offset;
            const newJumpToOffset = textModelChanges.applyToOffsetOrUndefined(jumpToOffset);
            if (newJumpToOffset === undefined) {
                return undefined;
            }
            const newJumpToPosition = positionOffsetTransformer.getPosition(newJumpToOffset);
            newAction = {
                kind: 'jumpTo',
                position: newJumpToPosition,
                offset: newJumpToOffset,
                target: updatedTarget,
            };
        }
        else {
            newAction = undefined;
        }
        let newDisplayLocation = this.hint;
        if (newDisplayLocation) {
            newDisplayLocation = newDisplayLocation.withEdit(textModelChanges, positionOffsetTransformer);
            if (!newDisplayLocation) {
                return undefined;
            }
        }
        return new InlineEditItem(newAction, this._data, this.identity, edits, newDisplayLocation, lastChangePartOfInlineEdit, inlineEditModelVersion, updatedTarget);
    }
    computeEditKind(model) {
        const edit = this.action?.kind === 'edit' ? this.action.stringEdit : undefined;
        if (!edit) {
            return undefined;
        }
        return computeEditKind(edit, model);
    }
}
function getDiffedStringEdit(textModel, editRange, replaceText) {
    const eol = textModel.getEOL();
    const editOriginalText = textModel.getValueOfRange(editRange);
    const editReplaceText = replaceText.replace(/\r\n|\r|\n/g, eol);
    const diffAlgorithm = linesDiffComputers.getDefault();
    const lineDiffs = diffAlgorithm.computeDiff(splitLines(editOriginalText), splitLines(editReplaceText), {
        ignoreTrimWhitespace: false,
        computeMoves: false,
        extendToSubwords: true,
        maxComputationTimeMs: 50,
    });
    const innerChanges = lineDiffs.changes.flatMap(c => c.innerChanges ?? []);
    function addRangeToPos(pos, range) {
        const start = TextLength.fromPosition(range.getStartPosition());
        return TextLength.ofRange(range).createRange(start.addToPosition(pos));
    }
    const modifiedText = new StringText(editReplaceText);
    const offsetEdit = new StringEdit(innerChanges.map(c => {
        const rangeInModel = addRangeToPos(editRange.getStartPosition(), c.originalRange);
        const originalRange = textModel.getTransformer().getOffsetRange(rangeInModel);
        const replaceText = modifiedText.getValueOfRange(c.modifiedRange);
        const edit = new StringReplacement(originalRange, replaceText);
        const originalText = textModel.getValueOfRange(rangeInModel);
        return reshapeInlineEdit(edit, originalText, innerChanges.length, textModel);
    }));
    return offsetEdit;
}
function getStringEdit(textModel, editRange, replaceText) {
    return new StringEdit([new StringReplacement(textModel.getTransformer().getOffsetRange(editRange), replaceText)]);
}
class SingleUpdatedNextEdit {
    static create(edit, replacedText) {
        const prefixLength = commonPrefixLength(edit.newText, replacedText);
        const suffixLength = commonSuffixLength(edit.newText, replacedText);
        const trimmedNewText = edit.newText.substring(prefixLength, edit.newText.length - suffixLength);
        return new SingleUpdatedNextEdit(edit, trimmedNewText, prefixLength, suffixLength);
    }
    get edit() { return this._edit; }
    get lastChangeUpdatedEdit() { return this._lastChangeUpdatedEdit; }
    constructor(_edit, _trimmedNewText, _prefixLength, _suffixLength, _lastChangeUpdatedEdit = false) {
        this._edit = _edit;
        this._trimmedNewText = _trimmedNewText;
        this._prefixLength = _prefixLength;
        this._suffixLength = _suffixLength;
        this._lastChangeUpdatedEdit = _lastChangeUpdatedEdit;
    }
    applyTextModelChanges(textModelChanges) {
        const c = this._clone();
        c._applyTextModelChanges(textModelChanges);
        return c;
    }
    _clone() {
        return new SingleUpdatedNextEdit(this._edit, this._trimmedNewText, this._prefixLength, this._suffixLength, this._lastChangeUpdatedEdit);
    }
    _applyTextModelChanges(textModelChanges) {
        this._lastChangeUpdatedEdit = false; // TODO @benibenj make immutable
        if (!this._edit) {
            throw new BugIndicatingError('UpdatedInnerEdits: No edit to apply changes to');
        }
        const result = this._applyChanges(this._edit, textModelChanges);
        if (!result) {
            this._edit = undefined;
            return;
        }
        this._edit = result.edit;
        this._lastChangeUpdatedEdit = result.editHasChanged;
    }
    _applyChanges(edit, textModelChanges) {
        let editStart = edit.replaceRange.start;
        let editEnd = edit.replaceRange.endExclusive;
        let editReplaceText = edit.newText;
        let editHasChanged = false;
        const shouldPreserveEditShape = this._prefixLength > 0 || this._suffixLength > 0;
        for (let i = textModelChanges.replacements.length - 1; i >= 0; i--) {
            const change = textModelChanges.replacements[i];
            // INSERTIONS (only support inserting at start of edit)
            const isInsertion = change.newText.length > 0 && change.replaceRange.isEmpty;
            if (isInsertion && !shouldPreserveEditShape && change.replaceRange.start === editStart && editReplaceText.startsWith(change.newText)) {
                editStart += change.newText.length;
                editReplaceText = editReplaceText.substring(change.newText.length);
                editEnd += change.newText.length;
                editHasChanged = true;
                continue;
            }
            if (isInsertion && shouldPreserveEditShape && change.replaceRange.start === editStart + this._prefixLength && this._trimmedNewText.startsWith(change.newText)) {
                editEnd += change.newText.length;
                editHasChanged = true;
                this._prefixLength += change.newText.length;
                this._trimmedNewText = this._trimmedNewText.substring(change.newText.length);
                continue;
            }
            // DELETIONS
            const isDeletion = change.newText.length === 0 && change.replaceRange.length > 0;
            if (isDeletion && change.replaceRange.start >= editStart + this._prefixLength && change.replaceRange.endExclusive <= editEnd - this._suffixLength) {
                // user deleted text IN-BETWEEN the deletion range
                editEnd -= change.replaceRange.length;
                editHasChanged = true;
                continue;
            }
            // user did exactly the edit
            if (change.equals(edit)) {
                editHasChanged = true;
                editStart = change.replaceRange.endExclusive;
                editReplaceText = '';
                continue;
            }
            // MOVE EDIT
            if (change.replaceRange.start > editEnd) {
                // the change happens after the completion range
                continue;
            }
            if (change.replaceRange.endExclusive < editStart) {
                // the change happens before the completion range
                editStart += change.newText.length - change.replaceRange.length;
                editEnd += change.newText.length - change.replaceRange.length;
                continue;
            }
            // The change intersects the completion, so we will have to drop the completion
            return undefined;
        }
        // the resulting edit is a noop as the original and new text are the same
        if (this._trimmedNewText.length === 0 && editStart + this._prefixLength === editEnd - this._suffixLength) {
            return { edit: new StringReplacement(new OffsetRange(editStart + this._prefixLength, editStart + this._prefixLength), ''), editHasChanged: true };
        }
        return { edit: new StringReplacement(new OffsetRange(editStart, editEnd), editReplaceText), editHasChanged };
    }
}
function reshapeInlineCompletion(edit, textModel) {
    // If the insertion is a multi line insertion starting on the next line
    // Move it forwards so that the multi line insertion starts on the current line
    const eol = textModel.getEOL();
    if (edit.replaceRange.isEmpty && edit.newText.includes(eol)) {
        edit = reshapeMultiLineInsertion(edit, textModel);
    }
    return edit;
}
function reshapeInlineEdit(edit, originalText, totalInnerEdits, textModel) {
    // TODO: EOL are not properly trimmed by the diffAlgorithm #12680
    const eol = textModel.getEOL();
    if (edit.newText.endsWith(eol) && originalText.endsWith(eol)) {
        edit = new StringReplacement(edit.replaceRange.deltaEnd(-eol.length), edit.newText.slice(0, -eol.length));
    }
    // INSERTION
    // If the insertion ends with a new line and is inserted at the start of a line which has text,
    // we move the insertion to the end of the previous line if possible
    if (totalInnerEdits === 1 && edit.replaceRange.isEmpty && edit.newText.includes(eol)) {
        const startPosition = textModel.getTransformer().getPosition(edit.replaceRange.start);
        const hasTextOnInsertionLine = textModel.getLineLength(startPosition.lineNumber) !== 0;
        if (hasTextOnInsertionLine) {
            edit = reshapeMultiLineInsertion(edit, textModel);
        }
    }
    // The diff algorithm extended a simple edit to the entire word
    // shrink it back to a simple edit if it is deletion/insertion only
    if (totalInnerEdits === 1) {
        const prefixLength = commonPrefixLength(originalText, edit.newText);
        const suffixLength = commonSuffixLength(originalText.slice(prefixLength), edit.newText.slice(prefixLength));
        // reshape it back to an insertion
        if (prefixLength + suffixLength === originalText.length) {
            return new StringReplacement(edit.replaceRange.deltaStart(prefixLength).deltaEnd(-suffixLength), edit.newText.substring(prefixLength, edit.newText.length - suffixLength));
        }
        // reshape it back to a deletion
        if (prefixLength + suffixLength === edit.newText.length) {
            return new StringReplacement(edit.replaceRange.deltaStart(prefixLength).deltaEnd(-suffixLength), '');
        }
    }
    return edit;
}
function reshapeMultiLineInsertion(edit, textModel) {
    if (!edit.replaceRange.isEmpty) {
        throw new BugIndicatingError('Unexpected original range');
    }
    if (edit.replaceRange.start === 0) {
        return edit;
    }
    const eol = textModel.getEOL();
    const startPosition = textModel.getTransformer().getPosition(edit.replaceRange.start);
    const startColumn = startPosition.column;
    const startLineNumber = startPosition.lineNumber;
    // If the insertion ends with a new line and is inserted at the start of a line which has text,
    // we move the insertion to the end of the previous line if possible
    if (startColumn === 1 && startLineNumber > 1 && edit.newText.endsWith(eol) && !edit.newText.startsWith(eol)) {
        return new StringReplacement(edit.replaceRange.delta(-1), eol + edit.newText.slice(0, -eol.length));
    }
    return edit;
}

export { InlineCompletionItem, InlineEditItem, InlineSuggestHint, InlineSuggestionIdentity, InlineSuggestionItem };
