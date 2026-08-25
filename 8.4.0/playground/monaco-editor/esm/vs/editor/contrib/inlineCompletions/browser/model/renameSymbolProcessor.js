import { raceTimeout } from '../../../../../base/common/async.js';
import { CancellationTokenSource } from '../../../../../base/common/cancellation.js';
import { LcsDiff, StringDiffSequence } from '../../../../../base/common/diff/diff.js';
import { Disposable } from '../../../../../base/common/lifecycle.js';
import { localize } from '../../../../../nls.js';
import { ICommandService, CommandsRegistry } from '../../../../../platform/commands/common/commands.js';
import { IBulkEditService, ResourceTextEdit } from '../../../../browser/services/bulkEditService.js';
import { TextReplacement } from '../../../../common/core/edits/textEdit.js';
import { Position } from '../../../../common/core/position.js';
import { Range } from '../../../../common/core/range.js';
import { ILanguageConfigurationService } from '../../../../common/languages/languageConfigurationRegistry.js';
import { ILanguageFeaturesService } from '../../../../common/services/languageFeatures.js';
import { EditSources } from '../../../../common/textModelEditSource.js';
import { hasProvider, rawRename } from '../../../rename/browser/rename.js';
import { renameSymbolCommandId } from '../controller/commandIds.js';
import { InlineSuggestionItem } from './inlineSuggestionItem.js';
import { Codicon } from '../../../../../base/common/codicons.js';
import { IRenameSymbolTrackerService } from '../../../../browser/services/renameSymbolTrackerService.js';
import { ICodeEditorService } from '../../../../browser/services/codeEditorService.js';
import { TextModelValueReference } from './textModelValueReference.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var RenameKind;
(function (RenameKind) {
    RenameKind["no"] = "no";
    RenameKind["yes"] = "yes";
    RenameKind["maybe"] = "maybe";
})(RenameKind || (RenameKind = {}));
(function (RenameKind) {
    function fromString(value) {
        switch (value) {
            case 'no': return RenameKind.no;
            case 'yes': return RenameKind.yes;
            case 'maybe': return RenameKind.maybe;
            default: return RenameKind.no;
        }
    }
    RenameKind.fromString = fromString;
})(RenameKind || (RenameKind = {}));
class RenameInferenceEngine {
    constructor() {
    }
    inferRename(textModel, editRange, insertText, wordDefinition) {
        // Extend the edit range to full lines to capture prefix/suffix renames
        const extendedRange = new Range(editRange.startLineNumber, 1, editRange.endLineNumber, textModel.getLineMaxColumn(editRange.endLineNumber));
        const startDiff = editRange.startColumn - extendedRange.startColumn;
        const endDiff = extendedRange.endColumn - editRange.endColumn;
        const originalText = textModel.getValueInRange(extendedRange);
        const modifiedText = textModel.getValueInRange(new Range(extendedRange.startLineNumber, extendedRange.startColumn, extendedRange.startLineNumber, extendedRange.startColumn + startDiff)) +
            insertText +
            textModel.getValueInRange(new Range(extendedRange.endLineNumber, extendedRange.endColumn - endDiff, extendedRange.endLineNumber, extendedRange.endColumn));
        // console.log(`Original: ${originalText} \nmodified: ${modifiedText}`);
        const others = [];
        const renames = [];
        let oldName = undefined;
        let newName = undefined;
        let position = undefined;
        const nesOffset = textModel.getOffsetAt(extendedRange.getStartPosition());
        const { changes: originalChanges } = (new LcsDiff(new StringDiffSequence(originalText), new StringDiffSequence(modifiedText))).ComputeDiff(true);
        if (originalChanges.length === 0) {
            return undefined;
        }
        // Fold the changes to larger changes if the gap between two changes is a full word. This covers cases like renaming
        // `foo` to `abcfoobar`
        const changes = [];
        for (const change of originalChanges) {
            if (changes.length === 0) {
                changes.push(change);
                continue;
            }
            const lastChange = changes[changes.length - 1];
            const gapOriginalLength = change.originalStart - (lastChange.originalStart + lastChange.originalLength);
            if (gapOriginalLength > 0) {
                const gapStartOffset = nesOffset + lastChange.originalStart + lastChange.originalLength;
                const gapStartPos = textModel.getPositionAt(gapStartOffset);
                const wordRange = textModel.getWordAtPosition(gapStartPos);
                if (wordRange) {
                    const wordStartOffset = textModel.getOffsetAt(new Position(gapStartPos.lineNumber, wordRange.startColumn));
                    const wordEndOffset = textModel.getOffsetAt(new Position(gapStartPos.lineNumber, wordRange.endColumn));
                    const gapEndOffset = gapStartOffset + gapOriginalLength;
                    if (wordStartOffset <= gapStartOffset && gapEndOffset <= wordEndOffset && wordStartOffset <= gapEndOffset && gapEndOffset <= wordEndOffset) {
                        lastChange.originalLength = (change.originalStart + change.originalLength) - lastChange.originalStart;
                        lastChange.modifiedLength = (change.modifiedStart + change.modifiedLength) - lastChange.modifiedStart;
                        continue;
                    }
                }
            }
            changes.push(change);
        }
        let tokenDiff = 0;
        for (const change of changes) {
            const originalTextSegment = originalText.substring(change.originalStart, change.originalStart + change.originalLength);
            const insertedTextSegment = modifiedText.substring(change.modifiedStart, change.modifiedStart + change.modifiedLength);
            const startOffset = nesOffset + change.originalStart;
            const startPos = textModel.getPositionAt(startOffset);
            const endOffset = startOffset + change.originalLength;
            const endPos = textModel.getPositionAt(endOffset);
            const range = Range.fromPositions(startPos, endPos);
            const diff = insertedTextSegment.length - change.originalLength;
            // If the original text segment contains a whitespace character we don't consider this a rename since
            // identifiers in programming languages can't contain whitespace characters usually
            if (/\s/.test(originalTextSegment)) {
                others.push(new TextReplacement(range, insertedTextSegment));
                tokenDiff += diff;
                continue;
            }
            if (originalTextSegment.length > 0) {
                wordDefinition.lastIndex = 0;
                const match = wordDefinition.exec(originalTextSegment);
                if (match === null || match.index !== 0 || match[0].length !== originalTextSegment.length) {
                    others.push(new TextReplacement(range, insertedTextSegment));
                    tokenDiff += diff;
                    continue;
                }
            }
            // If the inserted text contains a whitespace character we don't consider this a rename since identifiers in
            // programming languages can't contain whitespace characters usually
            if (/\s/.test(insertedTextSegment)) {
                others.push(new TextReplacement(range, insertedTextSegment));
                tokenDiff += diff;
                continue;
            }
            if (insertedTextSegment.length > 0) {
                wordDefinition.lastIndex = 0;
                const match = wordDefinition.exec(insertedTextSegment);
                if (match === null || match.index !== 0 || match[0].length !== insertedTextSegment.length) {
                    others.push(new TextReplacement(range, insertedTextSegment));
                    tokenDiff += diff;
                    continue;
                }
            }
            const wordRange = textModel.getWordAtPosition(startPos);
            // If we don't have a word range at the start position of the current document then we
            // don't treat it as a rename assuming that the rename refactoring will fail as well since
            // there can't be an identifier at that position.
            if (wordRange === null) {
                others.push(new TextReplacement(range, insertedTextSegment));
                tokenDiff += diff;
                continue;
            }
            const originalStartColumn = change.originalStart + 1;
            const isInsertion = change.originalLength === 0 && change.modifiedLength > 0;
            let tokenInfo;
            // Word info is left aligned whereas token info is right aligned for insertions.
            // We prefer a suffix insertion for renames so we take the word range for the token info.
            if (isInsertion && originalStartColumn === wordRange.endColumn && wordRange.endColumn > wordRange.startColumn) {
                tokenInfo = this.getTokenAtPosition(textModel, new Position(startPos.lineNumber, wordRange.startColumn));
            }
            else {
                tokenInfo = this.getTokenAtPosition(textModel, startPos);
            }
            if (wordRange.startColumn !== tokenInfo.range.startColumn || wordRange.endColumn !== tokenInfo.range.endColumn) {
                others.push(new TextReplacement(range, insertedTextSegment));
                tokenDiff += diff;
                continue;
            }
            if (tokenInfo.type === 0 /* StandardTokenType.Other */) {
                let identifier = textModel.getValueInRange(tokenInfo.range);
                if (identifier.length === 0) {
                    others.push(new TextReplacement(range, insertedTextSegment));
                    tokenDiff += diff;
                    continue;
                }
                if (oldName === undefined) {
                    oldName = identifier;
                }
                else if (oldName !== identifier) {
                    others.push(new TextReplacement(range, insertedTextSegment));
                    tokenDiff += diff;
                    continue;
                }
                // We assume that the new name starts at the same position as the old name from a token range perspective.
                const tokenStartPos = textModel.getOffsetAt(tokenInfo.range.getStartPosition()) - nesOffset + tokenDiff;
                const tokenEndPos = textModel.getOffsetAt(tokenInfo.range.getEndPosition()) - nesOffset + tokenDiff;
                identifier = modifiedText.substring(tokenStartPos, tokenEndPos + diff);
                if (identifier.length === 0) {
                    others.push(new TextReplacement(range, insertedTextSegment));
                    tokenDiff += diff;
                    continue;
                }
                if (newName === undefined) {
                    newName = identifier;
                }
                else if (newName !== identifier) {
                    others.push(new TextReplacement(range, insertedTextSegment));
                    tokenDiff += diff;
                    continue;
                }
                if (position === undefined) {
                    position = tokenInfo.range.getStartPosition();
                }
                if (oldName !== undefined && newName !== undefined && oldName.length > 0 && newName.length > 0 && oldName !== newName) {
                    renames.push(new TextReplacement(tokenInfo.range, newName));
                }
                else {
                    renames.push(new TextReplacement(range, insertedTextSegment));
                }
                tokenDiff += diff;
            }
            else {
                others.push(new TextReplacement(range, insertedTextSegment));
                tokenDiff += insertedTextSegment.length - change.originalLength;
            }
        }
        if (oldName === undefined || newName === undefined || position === undefined || oldName.length === 0 || newName.length === 0 || oldName === newName) {
            return undefined;
        }
        wordDefinition.lastIndex = 0;
        let match = wordDefinition.exec(oldName);
        if (match === null || match.index !== 0 || match[0].length !== oldName.length) {
            return undefined;
        }
        wordDefinition.lastIndex = 0;
        match = wordDefinition.exec(newName);
        if (match === null || match.index !== 0 || match[0].length !== newName.length) {
            return undefined;
        }
        return {
            renames: { edits: renames, position, oldName, newName },
            others: { edits: others }
        };
    }
    getTokenAtPosition(textModel, position) {
        textModel.tokenization.tokenizeIfCheap(position.lineNumber);
        const tokens = textModel.tokenization.getLineTokens(position.lineNumber);
        const idx = tokens.findTokenIndexAtOffset(position.column - 1);
        return {
            type: tokens.getStandardTokenType(idx),
            range: new Range(position.lineNumber, 1 + tokens.getStartOffset(idx), position.lineNumber, 1 + tokens.getEndOffset(idx))
        };
    }
}
class EditorState {
    static create(codeEditorService, textModel) {
        const editor = codeEditorService.getFocusedCodeEditor();
        if (editor === null) {
            return undefined;
        }
        if (editor.getModel() !== textModel) {
            return undefined;
        }
        return new EditorState(editor, textModel.getVersionId());
    }
    constructor(editor, versionId) {
        this.editor = editor;
        this.versionId = versionId;
    }
    equals(other) {
        if (other === undefined) {
            return false;
        }
        return this.editor === other.editor && this.versionId === other.versionId;
    }
}
class RenameSymbolRunnable {
    constructor(languageFeaturesService, commandService, requestUuid, textModel, state, position, newName, lastSymbolRename, oldName) {
        this._result = undefined;
        this._commandService = commandService;
        this._textModel = textModel;
        this._state = state;
        this._requestUuid = requestUuid;
        this._cancellationTokenSource = new CancellationTokenSource();
        if (lastSymbolRename === undefined || oldName === undefined) {
            this._promise = rawRename(languageFeaturesService.renameProvider, textModel, position, newName, this._cancellationTokenSource.token);
            return;
        }
        else {
            this._promise = this.sendNesRenameRequest(textModel, position, oldName, newName, lastSymbolRename);
        }
    }
    get requestUuid() {
        return this._requestUuid;
    }
    isValid(codeEditorService) {
        return this._state.equals(EditorState.create(codeEditorService, this._textModel));
    }
    cancel() {
        this._cancellationTokenSource.cancel();
    }
    async getCount() {
        if (this._cancellationTokenSource.token.isCancellationRequested) {
            return 0;
        }
        const result = await this.getResult();
        if (result === undefined || this._cancellationTokenSource.token.isCancellationRequested) {
            return 0;
        }
        return result.edits.length;
    }
    async getWorkspaceEdit() {
        return this.getResult();
    }
    async getResult() {
        if (this._cancellationTokenSource.token.isCancellationRequested) {
            return undefined;
        }
        if (this._result === undefined) {
            this._result = await this._promise;
        }
        if (this._result.rejectReason || this._cancellationTokenSource.token.isCancellationRequested) {
            return undefined;
        }
        return this._result;
    }
    async sendNesRenameRequest(textModel, position, oldName, newName, lastSymbolRename) {
        try {
            const result = await this._commandService.executeCommand('github.copilot.nes.postRename', textModel.uri, position, oldName, newName, lastSymbolRename);
            if (result === undefined) {
                return { rejectReason: 'Rename failed', edits: [] };
            }
            const edits = [];
            for (const item of result) {
                for (const change of item.changes) {
                    const range = new Range(change.range.start.line + 1, change.range.start.character + 1, change.range.end.line + 1, change.range.end.character + 1);
                    const edit = new ResourceTextEdit(item.file, new TextReplacement(range, change.newText ?? newName));
                    edits.push(edit);
                }
            }
            return { edits };
        }
        catch (error) {
            return { rejectReason: 'Rename failed', edits: [] };
        }
    }
}
let RenameSymbolProcessor = class RenameSymbolProcessor extends Disposable {
    constructor(_commandService, _languageFeaturesService, _languageConfigurationService, bulkEditService, _renameSymbolTrackerService, _codeEditorService) {
        super();
        this._commandService = _commandService;
        this._languageFeaturesService = _languageFeaturesService;
        this._languageConfigurationService = _languageConfigurationService;
        this._renameSymbolTrackerService = _renameSymbolTrackerService;
        this._codeEditorService = _codeEditorService;
        this._renameInferenceEngine = new RenameInferenceEngine();
        this._renameRunnable = undefined;
        this._register(CommandsRegistry.registerCommand(renameSymbolCommandId, async (_, source, renameRunnable) => {
            if (renameRunnable === undefined || !renameRunnable.isValid(this._codeEditorService)) {
                return;
            }
            try {
                const workspaceEdit = await renameRunnable.getWorkspaceEdit();
                if (workspaceEdit === undefined) {
                    return;
                }
                bulkEditService.apply(workspaceEdit, { reason: source });
            }
            finally {
                if (this._renameRunnable === renameRunnable) {
                    this._renameRunnable = undefined;
                }
            }
        }));
    }
    async proposeRenameRefactoring(textModel, suggestItem, context) {
        if (!suggestItem.supportsRename || suggestItem.action?.kind !== 'edit' || context.selectedSuggestionInfo) {
            return suggestItem;
        }
        if (!hasProvider(this._languageFeaturesService.renameProvider, textModel)) {
            return suggestItem;
        }
        const state = EditorState.create(this._codeEditorService, textModel);
        if (state === undefined) {
            return suggestItem;
        }
        const start = Date.now();
        const edit = suggestItem.action.textReplacement;
        const languageConfiguration = this._languageConfigurationService.getLanguageConfiguration(textModel.getLanguageId());
        // Check synchronously if a rename is possible
        const edits = this._renameInferenceEngine.inferRename(textModel, edit.range, edit.text, languageConfiguration.wordDefinition);
        if (edits === undefined || edits.renames.edits.length === 0) {
            return suggestItem;
        }
        const { oldName, newName, position, edits: renameEdits } = edits.renames;
        const trackedWord = this._renameSymbolTrackerService.trackedWord.get();
        let lastSymbolRename = undefined;
        if (trackedWord !== undefined && trackedWord.model === textModel && trackedWord.originalWord === oldName && trackedWord.currentWord === newName) {
            lastSymbolRename = trackedWord.currentRange;
        }
        // Check asynchronously if a rename is possible
        let timedOut = false;
        const check = await raceTimeout(this.checkRenamePrecondition(suggestItem, textModel, position, oldName, newName, lastSymbolRename), 100, () => { timedOut = true; });
        const renamePossible = this.isRenamePossible(suggestItem, check, state, textModel);
        suggestItem.setRenameProcessingInfo({
            createdRename: renamePossible,
            duration: Date.now() - start,
            timedOut,
            droppedOtherEdits: renamePossible ? edits.others.edits.length : undefined,
            droppedRenameEdits: renamePossible ? renameEdits.length - 1 : undefined,
        });
        if (!renamePossible) {
            return suggestItem;
        }
        // Prepare the rename edits
        if (this._renameRunnable === undefined) {
            this._renameRunnable = new RenameSymbolRunnable(this._languageFeaturesService, this._commandService, suggestItem.requestUuid, textModel, state, position, newName, lastSymbolRename, lastSymbolRename !== undefined ? oldName : undefined);
        }
        // Create alternative action
        const source = EditSources.inlineCompletionAccept({
            nes: suggestItem.isInlineEdit,
            requestUuid: suggestItem.requestUuid,
            providerId: suggestItem.source.provider.providerId,
            languageId: textModel.getLanguageId(),
            correlationId: suggestItem.getSourceCompletion().correlationId,
        });
        const command = {
            id: renameSymbolCommandId,
            title: localize(1254, "Rename"),
            arguments: [source, this._renameRunnable],
        };
        const alternativeAction = {
            label: localize(1255, "Rename"),
            icon: Codicon.replaceAll,
            command,
            count: this._renameRunnable.getCount(),
        };
        const renameAction = {
            kind: 'edit',
            range: renameEdits[0].range,
            insertText: renameEdits[0].text,
            snippetInfo: suggestItem.snippetInfo,
            alternativeAction,
            uri: textModel.uri
        };
        const ref = TextModelValueReference.snapshot(textModel);
        return InlineSuggestionItem.create(suggestItem.withAction(renameAction), ref, false);
    }
    async checkRenamePrecondition(suggestItem, textModel, position, oldName, newName, lastSymbolRename) {
        const no = { canRename: RenameKind.no, timedOut: false };
        try {
            const result = await this._commandService.executeCommand('github.copilot.nes.prepareRename', textModel.uri, position, oldName, newName, suggestItem.requestUuid, lastSymbolRename);
            if (result === undefined) {
                return no;
            }
            else if (typeof result === 'string') {
                const canRename = RenameKind.fromString(result);
                if (canRename === RenameKind.yes || canRename === RenameKind.maybe) {
                    return {
                        canRename,
                        oldName,
                        onOldState: false,
                    };
                }
                else {
                    return {
                        canRename,
                        timedOut: false,
                    };
                }
            }
            else {
                return result;
            }
        }
        catch (error) {
            return no;
        }
    }
    isRenamePossible(suggestItem, check, state, textModel) {
        if (check === undefined || check.canRename === RenameKind.no) {
            return false;
        }
        if (!state.equals(EditorState.create(this._codeEditorService, textModel))) {
            return false;
        }
        if (this._renameRunnable === undefined) {
            return true;
        }
        if (this._renameRunnable.requestUuid === suggestItem.requestUuid) {
            return false;
        }
        else {
            this._renameRunnable.cancel();
            this._renameRunnable = undefined;
            return true;
        }
    }
};
RenameSymbolProcessor = __decorate([
    __param(0, ICommandService),
    __param(1, ILanguageFeaturesService),
    __param(2, ILanguageConfigurationService),
    __param(3, IBulkEditService),
    __param(4, IRenameSymbolTrackerService),
    __param(5, ICodeEditorService)
], RenameSymbolProcessor);

export { RenameInferenceEngine, RenameSymbolProcessor };
