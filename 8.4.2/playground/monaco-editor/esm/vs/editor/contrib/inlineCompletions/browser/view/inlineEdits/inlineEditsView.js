import { $ } from '../../../../../../base/browser/dom.js';
import { equals } from '../../../../../../base/common/equals.js';
import { BugIndicatingError, onUnexpectedError } from '../../../../../../base/common/errors.js';
import { Event } from '../../../../../../base/common/event.js';
import { Disposable } from '../../../../../../base/common/lifecycle.js';
import '../../../../../../base/common/observableInternal/index.js';
import { IInstantiationService } from '../../../../../../platform/instantiation/common/instantiation.js';
import { observableCodeEditor } from '../../../../../browser/observableCodeEditor.js';
import { TextReplacement } from '../../../../../common/core/edits/textEdit.js';
import { Range } from '../../../../../common/core/range.js';
import { LineRange } from '../../../../../common/core/ranges/lineRange.js';
import { StringText } from '../../../../../common/core/text/abstractText.js';
import { TextLength } from '../../../../../common/core/text/textLength.js';
import { RangeMapping, lineRangeMappingFromRangeMappings } from '../../../../../common/diff/rangeMapping.js';
import { TextModel } from '../../../../../common/model/textModel.js';
import { InlineEditTabAction, InlineCompletionViewKind, InlineCompletionViewData } from './inlineEditsViewInterface.js';
import { InlineEditsCollapsedView } from './inlineEditsViews/inlineEditsCollapsedView.js';
import { InlineEditsCustomView } from './inlineEditsViews/inlineEditsCustomView.js';
import { InlineEditsDeletionView } from './inlineEditsViews/inlineEditsDeletionView.js';
import { InlineEditsInsertionView } from './inlineEditsViews/inlineEditsInsertionView.js';
import { InlineEditsLineReplacementView } from './inlineEditsViews/inlineEditsLineReplacementView.js';
import { InlineEditsLongDistanceHint } from './inlineEditsViews/longDistanceHint/inlineEditsLongDistanceHint.js';
import { InlineEditsSideBySideView } from './inlineEditsViews/inlineEditsSideBySideView.js';
import { WordReplacementsViewData, InlineEditsWordReplacementView } from './inlineEditsViews/inlineEditsWordReplacementView.js';
import { OriginalEditorInlineDiffView } from './inlineEditsViews/originalEditorInlineDiffView.js';
import { createReindentEdit, applyEditToModifiedRangeMappings } from './utils/utils.js';
import './view.css';
import { JumpToView } from './inlineEditsViews/jumpToView.js';
import { StringEdit } from '../../../../../common/core/edits/stringEdit.js';
import { OffsetRange } from '../../../../../common/core/ranges/offsetRange.js';
import { getPositionOffsetTransformerFromTextModel } from '../../../../../common/core/text/getPositionOffsetTransformerFromTextModel.js';
import { InlineCompletionEditorType } from '../../model/provideInlineCompletions.js';
import { derived, derivedOpts } from '../../../../../../base/common/observableInternal/observables/derived.js';
import { observableValue } from '../../../../../../base/common/observableInternal/observables/observableValue.js';
import { mapObservableArrayCached } from '../../../../../../base/common/observableInternal/utils/utils.js';
import { autorun } from '../../../../../../base/common/observableInternal/reactions/autorun.js';

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
let InlineEditsView = class InlineEditsView extends Disposable {
    constructor(_editor, _model, _simpleModel, _inlineSuggestInfo, _showCollapsed, _instantiationService) {
        super();
        this._editor = _editor;
        this._model = _model;
        this._simpleModel = _simpleModel;
        this._inlineSuggestInfo = _inlineSuggestInfo;
        this._showCollapsed = _showCollapsed;
        this._instantiationService = _instantiationService;
        this._tabAction = derived(reader => this._model.read(reader)?.tabAction.read(reader) ?? InlineEditTabAction.Inactive);
        this.displayRange = derived(this, reader => {
            const state = this._uiState.read(reader);
            if (!state) {
                return undefined;
            }
            if (state.target.uri.toString() !== this._editorObs.model.read(reader)?.uri.toString()) {
                return undefined;
            }
            if (state.state?.kind === 'custom') {
                const range = state.state.displayLocation?.range;
                if (!range) {
                    throw new BugIndicatingError('custom view should have a range');
                }
                return new LineRange(range.startLineNumber, range.endLineNumber);
            }
            if (state.state?.kind === 'insertionMultiLine') {
                return this._insertion.originalLines.read(reader);
            }
            return state.edit.displayRange;
        });
        this._currentInlineEditCache = undefined;
        this._uiState = derived(this, reader => {
            const model = this._model.read(reader);
            const textModel = this._editorObs.model.read(reader);
            if (!model || !textModel || !this._constructorDone.read(reader)) {
                return undefined;
            }
            const inlineEdit = model.inlineEdit;
            let diff;
            let mappings;
            let newText = undefined;
            if (inlineEdit.edit) {
                mappings = RangeMapping.fromEdit(inlineEdit.edit);
                newText = new StringText(inlineEdit.edit.apply(inlineEdit.originalText));
                diff = lineRangeMappingFromRangeMappings(mappings, inlineEdit.originalText, newText);
            }
            else {
                mappings = [];
                diff = [];
                newText = inlineEdit.originalText;
            }
            let state = this._determineRenderState(model, reader, diff, newText);
            if (!state) {
                onUnexpectedError(new Error(`unable to determine view: tried to render ${this._previousView?.view}`));
                return undefined;
            }
            const longDistanceHint = this._getLongDistanceHintState(model, reader);
            if (longDistanceHint && longDistanceHint.isVisible) {
                state.viewData.setLongDistanceViewData(longDistanceHint.lineNumber, inlineEdit.lineEdit.lineRange.startLineNumber);
            }
            if (state.kind === InlineCompletionViewKind.SideBySide) {
                const indentationAdjustmentEdit = createReindentEdit(newText.getValue(), inlineEdit.modifiedLineRange, textModel.getOptions().tabSize);
                newText = new StringText(indentationAdjustmentEdit.applyToString(newText.getValue()));
                mappings = applyEditToModifiedRangeMappings(mappings, indentationAdjustmentEdit);
                diff = lineRangeMappingFromRangeMappings(mappings, inlineEdit.originalText, newText);
            }
            this._previewTextModel.setLanguage(textModel.getLanguageId());
            const previousNewText = this._previewTextModel.getValue();
            if (previousNewText !== newText.getValue()) {
                this._previewTextModel.setEOL(textModel.getEndOfLineSequence());
                const updateOldValueEdit = StringEdit.replace(new OffsetRange(0, previousNewText.length), newText.getValue());
                const updateOldValueEditSmall = updateOldValueEdit.removeCommonSuffixPrefix(previousNewText);
                const textEdit = getPositionOffsetTransformerFromTextModel(this._previewTextModel).getTextEdit(updateOldValueEditSmall);
                this._previewTextModel.edit(textEdit);
            }
            if (this._showCollapsed.read(reader)) {
                state = { kind: InlineCompletionViewKind.Collapsed, viewData: state.viewData };
            }
            model.handleInlineEditShownNextFrame(state.kind, state.viewData);
            const nextCursorPosition = inlineEdit.action?.kind === 'jumpTo' ? inlineEdit.action.position : null;
            return {
                state,
                diff,
                edit: inlineEdit,
                newText: newText.getValue(),
                newTextLineCount: inlineEdit.modifiedLineRange.length,
                editorType: model.editorType,
                longDistanceHint,
                nextCursorPosition: nextCursorPosition,
                target: inlineEdit.inlineCompletion.originalTextRef,
            };
        });
        this.inlineEditsIsHovered = derived(this, reader => {
            return this._sideBySide.isHovered.read(reader)
                || this._wordReplacementViews.read(reader).some(v => v.isHovered.read(reader))
                || this._deletion.isHovered.read(reader)
                || this._inlineDiffView.isHovered.read(reader)
                || this._lineReplacementView.isHovered.read(reader)
                || this._insertion.isHovered.read(reader)
                || this._customView.isHovered.read(reader)
                || this._longDistanceHint.map((v, r) => v?.isHovered.read(r) ?? false).read(reader);
        });
        this.gutterIndicatorOffset = derived(this, reader => {
            // TODO: have a better way to tell the gutter indicator view where the edit is inside a viewzone
            if (this._uiState.read(reader)?.state?.kind === 'insertionMultiLine') {
                return this._insertion.startLineOffset.read(reader);
            }
            return 0;
        });
        this._editorObs = observableCodeEditor(this._editor);
        this._constructorDone = observableValue(this, false);
        this._previewTextModel = this._register(this._instantiationService.createInstance(TextModel, '', this._editor.getModel().getLanguageId(), { ...TextModel.DEFAULT_CREATION_OPTIONS, bracketPairColorizationOptions: { enabled: true, independentColorPoolPerBracketType: false } }, null));
        this._sideBySide = this._register(this._instantiationService.createInstance(InlineEditsSideBySideView, this._editor, this._model.map(m => m?.inlineEdit), this._previewTextModel, this._uiState.map(s => s && s.state?.kind === InlineCompletionViewKind.SideBySide ? ({
            newTextLineCount: s.newTextLineCount,
            editorType: s.editorType,
        }) : undefined), this._tabAction));
        this._deletion = this._register(this._instantiationService.createInstance(InlineEditsDeletionView, this._editor, this._model.map(m => m?.inlineEdit), this._uiState.map(s => s && s.state?.kind === InlineCompletionViewKind.Deletion ? ({
            originalRange: s.state.originalRange,
            deletions: s.state.deletions,
            editorType: s.editorType,
        }) : undefined), this._tabAction));
        this._insertion = this._register(this._instantiationService.createInstance(InlineEditsInsertionView, this._editor, this._uiState.map(s => s && s.state?.kind === InlineCompletionViewKind.InsertionMultiLine ? ({
            lineNumber: s.state.lineNumber,
            startColumn: s.state.column,
            text: s.state.text,
            editorType: s.editorType,
        }) : undefined), this._tabAction));
        this._inlineCollapsedView = this._register(this._instantiationService.createInstance(InlineEditsCollapsedView, this._editor, this._model.map((m, reader) => this._uiState.read(reader)?.state?.kind === InlineCompletionViewKind.Collapsed ? m?.inlineEdit : undefined)));
        this._customView = this._register(this._instantiationService.createInstance(InlineEditsCustomView, this._editor, this._model.map((m, reader) => this._uiState.read(reader)?.state?.kind === InlineCompletionViewKind.Custom ? m?.displayLocation : undefined), this._tabAction, this._uiState.map(s => s?.editorType ?? InlineCompletionEditorType.TextEditor)));
        this._showLongDistanceHint = this._editorObs.getOption(71 /* EditorOption.inlineSuggest */).map(this, s => s.edits.showLongDistanceHint);
        this._longDistanceHint = derived(this, reader => {
            if (!this._showLongDistanceHint.read(reader)) {
                return undefined;
            }
            return reader.store.add(this._instantiationService.createInstance(InlineEditsLongDistanceHint, this._editor, this._uiState.map((s, reader) => s?.longDistanceHint ? ({
                hint: s.longDistanceHint,
                newTextLineCount: s.newTextLineCount,
                edit: s.edit,
                diff: s.diff,
                editorType: s.editorType,
                model: this._simpleModel.read(reader),
                inlineSuggestInfo: this._inlineSuggestInfo.read(reader),
                nextCursorPosition: s.nextCursorPosition,
                target: s.target,
            }) : undefined), this._previewTextModel, this._tabAction));
        }).recomputeInitiallyAndOnChange(this._store);
        this._inlineDiffViewState = derived(this, reader => {
            const e = this._uiState.read(reader);
            if (!e || !e.state) {
                return undefined;
            }
            if (e.state.kind === 'wordReplacements' || e.state.kind === 'insertionMultiLine' || e.state.kind === 'collapsed' || e.state.kind === 'custom' || e.state.kind === 'jumpTo') {
                return undefined;
            }
            return {
                modifiedText: new StringText(e.newText),
                diff: e.diff,
                mode: e.state.kind,
                modifiedCodeEditor: this._sideBySide.previewEditor,
                editorType: e.editorType,
            };
        });
        this._inlineDiffView = this._register(new OriginalEditorInlineDiffView(this._editor, this._inlineDiffViewState, this._previewTextModel));
        this._jumpToView = this._register(this._instantiationService.createInstance(JumpToView, this._editorObs, { style: 'label' }, derived(reader => {
            const s = this._uiState.read(reader);
            if (s?.state?.kind === InlineCompletionViewKind.JumpTo) {
                return { jumpToPosition: s.state.position };
            }
            return undefined;
        })));
        const wordReplacements = derivedOpts({
            equalsFn: equals.arrayC(equals.thisC())
        }, reader => {
            const s = this._uiState.read(reader);
            return s?.state?.kind === InlineCompletionViewKind.WordReplacements ? s.state.replacements.map(replacement => new WordReplacementsViewData(replacement, s.editorType, s.state?.alternativeAction)) : [];
        });
        this._wordReplacementViews = mapObservableArrayCached(this, wordReplacements, (viewData, store) => {
            return store.add(this._instantiationService.createInstance(InlineEditsWordReplacementView, this._editorObs, viewData, this._tabAction));
        });
        this._lineReplacementView = this._register(this._instantiationService.createInstance(InlineEditsLineReplacementView, this._editorObs, this._uiState.map(s => s?.state?.kind === InlineCompletionViewKind.LineReplacement ? ({
            originalRange: s.state.originalRange,
            modifiedRange: s.state.modifiedRange,
            modifiedLines: s.state.modifiedLines,
            replacements: s.state.replacements,
        }) : undefined), this._uiState.map(s => s?.editorType ?? InlineCompletionEditorType.TextEditor), this._tabAction));
        this._useCodeShifting = this._editorObs.getOption(71 /* EditorOption.inlineSuggest */).map(s => s.edits.allowCodeShifting);
        this._renderSideBySide = this._editorObs.getOption(71 /* EditorOption.inlineSuggest */).map(s => s.edits.renderSideBySide);
        this._register(autorun((reader) => {
            const model = this._model.read(reader);
            if (!model) {
                return;
            }
            reader.store.add(Event.any(this._sideBySide.onDidClick, this._lineReplacementView.onDidClick, this._insertion.onDidClick, ...this._wordReplacementViews.read(reader).map(w => w.onDidClick), this._inlineDiffView.onDidClick, this._customView.onDidClick)(clickEvent => {
                if (this._viewHasBeenShownLongerThan(350)) {
                    clickEvent.event.preventDefault();
                    model.accept(clickEvent.alternativeAction);
                }
            }));
        }));
        this._wordReplacementViews.recomputeInitiallyAndOnChange(this._store);
        const minEditorScrollHeight = derived(this, reader => {
            return Math.max(...this._wordReplacementViews.read(reader).map(v => v.minEditorScrollHeight.read(reader)), this._lineReplacementView.minEditorScrollHeight.read(reader), this._customView.minEditorScrollHeight.read(reader));
        }).recomputeInitiallyAndOnChange(this._store);
        let viewZoneId;
        this._register(autorun(reader => {
            const minScrollHeight = minEditorScrollHeight.read(reader);
            const textModel = this._editorObs.model.read(reader);
            if (!textModel) {
                return;
            }
            this._editor.changeViewZones(accessor => {
                const scrollHeight = this._editor.getScrollHeight();
                const viewZoneHeight = minScrollHeight - scrollHeight + 1 /* Add 1px so there is a small gap */;
                if (viewZoneHeight !== 0 && viewZoneId !== undefined) {
                    accessor.removeZone(viewZoneId);
                    viewZoneId = undefined;
                }
                if (viewZoneHeight <= 0) {
                    return;
                }
                viewZoneId = accessor.addZone({
                    afterLineNumber: textModel.getLineCount(),
                    heightInPx: viewZoneHeight,
                    domNode: $('div.minScrollHeightViewZone'),
                });
            });
        }));
        this._constructorDone.set(true, undefined); // TODO: remove and use correct initialization order
    }
    _getLongDistanceHintState(model, reader) {
        if (model.inlineEdit.inlineCompletion.identity.jumpedTo.read(reader)) {
            return undefined;
        }
        if (model.inlineEdit.action === undefined) {
            return undefined;
        }
        if (model.inlineEdit.originalText.uri.toString() !== this._editorObs.model.read(reader)?.uri.toString()) {
            return {
                isVisible: true,
                lineNumber: model.inlineEdit.cursorPosition.lineNumber,
            };
        }
        if (this._currentInlineEditCache?.inlineSuggestionIdentity !== model.inlineEdit.inlineCompletion.identity) {
            this._currentInlineEditCache = {
                inlineSuggestionIdentity: model.inlineEdit.inlineCompletion.identity,
                firstCursorLineNumber: model.inlineEdit.cursorPosition.lineNumber,
            };
        }
        return {
            lineNumber: this._currentInlineEditCache.firstCursorLineNumber,
            isVisible: !model.inViewPort.read(reader),
        };
    }
    _getCacheId(model) {
        return model.inlineEdit.inlineCompletion.identity.id;
    }
    _determineView(model, reader, diff, newText) {
        // Check if we can use the previous view if it is the same InlineCompletion as previously shown
        const inlineEdit = model.inlineEdit;
        const canUseCache = this._previousView?.id === this._getCacheId(model) && this._previousView?.uri.toString() === this._editorObs.model.get().uri.toString();
        const reconsiderViewEditorWidthChange = this._previousView?.editorWidth !== this._editorObs.layoutInfoWidth.read(reader) &&
            (this._previousView?.view === InlineCompletionViewKind.SideBySide ||
                this._previousView?.view === InlineCompletionViewKind.LineReplacement);
        if (canUseCache && !reconsiderViewEditorWidthChange) {
            return this._previousView.view;
        }
        const action = model.inlineEdit.inlineCompletion.action;
        if (action?.kind === 'edit' && action.alternativeAction) {
            return InlineCompletionViewKind.WordReplacements;
        }
        const targetUri = model.inlineEdit.inlineCompletion.originalTextRef.uri;
        const currentUri = this._editorObs.model.read(reader)?.uri;
        if (currentUri && targetUri.toString() !== currentUri.toString()) {
            return InlineCompletionViewKind.Custom;
        }
        if (model.displayLocation && !model.inlineEdit.inlineCompletion.identity.jumpedTo.read(reader)) {
            return InlineCompletionViewKind.Custom;
        }
        // Determine the view based on the edit / diff
        const numOriginalLines = inlineEdit.originalLineRange.length;
        const numModifiedLines = inlineEdit.modifiedLineRange.length;
        const inner = diff.flatMap(d => d.innerChanges ?? []);
        const isSingleInnerEdit = inner.length === 1;
        if (model.editorType !== InlineCompletionEditorType.DiffEditor) {
            if (isSingleInnerEdit
                && this._useCodeShifting.read(reader) !== 'never'
                && isSingleLineInsertion(diff)) {
                if (isSingleLineInsertionAfterPosition(diff, inlineEdit.cursorPosition)) {
                    return InlineCompletionViewKind.InsertionInline;
                }
                // If we have a single line insertion before the cursor position, we do not want to move the cursor by inserting
                // the suggestion inline. Use a line replacement view instead. Do not use word replacement view.
                return InlineCompletionViewKind.LineReplacement;
            }
            if (isDeletion(inner, inlineEdit, newText)) {
                return InlineCompletionViewKind.Deletion;
            }
            if (isSingleMultiLineInsertion(diff) && this._useCodeShifting.read(reader) === 'always') {
                return InlineCompletionViewKind.InsertionMultiLine;
            }
            const allInnerChangesNotTooLong = inner.every(m => TextLength.ofRange(m.originalRange).columnCount < InlineEditsWordReplacementView.MAX_LENGTH && TextLength.ofRange(m.modifiedRange).columnCount < InlineEditsWordReplacementView.MAX_LENGTH);
            if (allInnerChangesNotTooLong && isSingleInnerEdit && numOriginalLines === 1 && numModifiedLines === 1) {
                // Do not show indentation changes with word replacement view
                const modifiedText = inner.map(m => newText.getValueOfRange(m.modifiedRange));
                const originalText = inner.map(m => model.inlineEdit.originalText.getValueOfRange(m.originalRange));
                if (!modifiedText.some(v => v.includes('\t')) && !originalText.some(v => v.includes('\t'))) {
                    // Make sure there is no insertion, even if we grow them
                    if (!inner.some(m => m.originalRange.isEmpty()) ||
                        !growEditsUntilWhitespace(inner.map(m => new TextReplacement(m.originalRange, '')), inlineEdit.originalText).some(e => e.range.isEmpty() && TextLength.ofRange(e.range).columnCount < InlineEditsWordReplacementView.MAX_LENGTH)) {
                        return InlineCompletionViewKind.WordReplacements;
                    }
                }
            }
        }
        if (numOriginalLines > 0 && numModifiedLines > 0) {
            if (numOriginalLines === 1 && numModifiedLines === 1 && model.editorType !== InlineCompletionEditorType.DiffEditor /* prefer side by side in diff editor */) {
                return InlineCompletionViewKind.LineReplacement;
            }
            if (this._renderSideBySide.read(reader) !== 'never' && InlineEditsSideBySideView.fitsInsideViewport(this._editor, this._previewTextModel, inlineEdit, reader)) {
                return InlineCompletionViewKind.SideBySide;
            }
            return InlineCompletionViewKind.LineReplacement;
        }
        if (model.editorType === InlineCompletionEditorType.DiffEditor) {
            if (isDeletion(inner, inlineEdit, newText)) {
                return InlineCompletionViewKind.Deletion;
            }
            if (isSingleMultiLineInsertion(diff) && this._useCodeShifting.read(reader) === 'always') {
                return InlineCompletionViewKind.InsertionMultiLine;
            }
        }
        return InlineCompletionViewKind.SideBySide;
    }
    _determineRenderState(model, reader, diff, newText) {
        if (model.inlineEdit.action?.kind === 'jumpTo') {
            return {
                kind: InlineCompletionViewKind.JumpTo,
                position: model.inlineEdit.action.position,
                viewData: emptyViewData,
            };
        }
        const inlineEdit = model.inlineEdit;
        let view = this._determineView(model, reader, diff, newText);
        if (this._willRenderAboveCursor(reader, inlineEdit, view)) {
            switch (view) {
                case InlineCompletionViewKind.LineReplacement:
                case InlineCompletionViewKind.WordReplacements:
                    view = InlineCompletionViewKind.SideBySide;
                    break;
            }
        }
        this._previousView = { id: this._getCacheId(model), view, editorWidth: this._editor.getLayoutInfo().width, timestamp: Date.now(), uri: this._editorObs.model.get().uri };
        const inner = diff.flatMap(d => d.innerChanges ?? []);
        const textModel = this._editor.getModel();
        const stringChanges = inner.map(m => ({
            originalRange: m.originalRange,
            modifiedRange: m.modifiedRange,
            original: inlineEdit.originalText.getValueOfRange(m.originalRange),
            modified: newText.getValueOfRange(m.modifiedRange)
        }));
        const viewData = getViewData(inlineEdit, stringChanges, textModel);
        switch (view) {
            case InlineCompletionViewKind.InsertionInline: return { kind: InlineCompletionViewKind.InsertionInline, viewData };
            case InlineCompletionViewKind.SideBySide: return { kind: InlineCompletionViewKind.SideBySide, viewData };
            case InlineCompletionViewKind.Collapsed: return { kind: InlineCompletionViewKind.Collapsed, viewData };
            case InlineCompletionViewKind.Custom: return { kind: InlineCompletionViewKind.Custom, displayLocation: model.displayLocation, viewData };
        }
        if (view === InlineCompletionViewKind.Deletion) {
            return {
                kind: InlineCompletionViewKind.Deletion,
                originalRange: inlineEdit.originalLineRange,
                deletions: inner.map(m => m.originalRange),
                viewData,
            };
        }
        if (view === InlineCompletionViewKind.InsertionMultiLine) {
            const change = inner[0];
            return {
                kind: InlineCompletionViewKind.InsertionMultiLine,
                lineNumber: change.originalRange.startLineNumber,
                column: change.originalRange.startColumn,
                text: newText.getValueOfRange(change.modifiedRange),
                viewData,
            };
        }
        const replacements = stringChanges.map(m => new TextReplacement(m.originalRange, m.modified));
        if (replacements.length === 0) {
            return undefined;
        }
        if (view === InlineCompletionViewKind.WordReplacements) {
            let grownEdits = growEditsToEntireWord(replacements, inlineEdit.originalText);
            if (grownEdits.some(e => e.range.isEmpty())) {
                grownEdits = growEditsUntilWhitespace(replacements, inlineEdit.originalText);
            }
            return {
                kind: InlineCompletionViewKind.WordReplacements,
                replacements: grownEdits,
                alternativeAction: model.inlineEdit.action?.alternativeAction,
                viewData,
            };
        }
        if (view === InlineCompletionViewKind.LineReplacement) {
            return {
                kind: InlineCompletionViewKind.LineReplacement,
                originalRange: inlineEdit.originalLineRange,
                modifiedRange: inlineEdit.modifiedLineRange,
                modifiedLines: inlineEdit.modifiedLineRange.mapToLineArray(line => newText.getLineAt(line)),
                replacements: inner.map(m => ({ originalRange: m.originalRange, modifiedRange: m.modifiedRange })),
                viewData,
            };
        }
        return undefined;
    }
    _willRenderAboveCursor(reader, inlineEdit, view) {
        const useCodeShifting = this._useCodeShifting.read(reader);
        if (useCodeShifting === 'always') {
            return false;
        }
        for (const cursorPosition of inlineEdit.multiCursorPositions) {
            if (view === InlineCompletionViewKind.WordReplacements &&
                cursorPosition.lineNumber === inlineEdit.originalLineRange.startLineNumber + 1) {
                return true;
            }
            if (view === InlineCompletionViewKind.LineReplacement &&
                cursorPosition.lineNumber >= inlineEdit.originalLineRange.endLineNumberExclusive &&
                cursorPosition.lineNumber < inlineEdit.modifiedLineRange.endLineNumberExclusive + inlineEdit.modifiedLineRange.length) {
                return true;
            }
        }
        return false;
    }
    _viewHasBeenShownLongerThan(durationMs) {
        const viewCreationTime = this._previousView?.timestamp;
        if (!viewCreationTime) {
            throw new BugIndicatingError('viewHasBeenShownLongThan called before a view has been shown');
        }
        const currentTime = Date.now();
        return (currentTime - viewCreationTime) >= durationMs;
    }
};
InlineEditsView = __decorate([
    __param(5, IInstantiationService)
], InlineEditsView);
const emptyViewData = new InlineCompletionViewData(-1, -1, -1, -1, -1, -1, -1, true);
function getViewData(inlineEdit, stringChanges, textModel) {
    if (!inlineEdit.edit) {
        return emptyViewData;
    }
    const cursorPosition = inlineEdit.cursorPosition;
    const startsWithEOL = stringChanges.length === 0 ? false : stringChanges[0].modified.startsWith(textModel.getEOL());
    const viewData = new InlineCompletionViewData(inlineEdit.edit.replacements.length === 0 ? 0 : inlineEdit.edit.replacements[0].range.getStartPosition().column - cursorPosition.column, inlineEdit.lineEdit.lineRange.startLineNumber - cursorPosition.lineNumber + (startsWithEOL && inlineEdit.lineEdit.lineRange.startLineNumber >= cursorPosition.lineNumber ? 1 : 0), inlineEdit.lineEdit.lineRange.length, inlineEdit.lineEdit.newLines.length, stringChanges.reduce((acc, r) => acc + r.original.length, 0), stringChanges.reduce((acc, r) => acc + r.modified.length, 0), stringChanges.length, stringChanges.every(r => r.original === stringChanges[0].original && r.modified === stringChanges[0].modified));
    return viewData;
}
function isSingleLineInsertion(diff) {
    return diff.every(m => m.innerChanges.every(r => isWordInsertion(r)));
    function isWordInsertion(r) {
        if (!r.originalRange.isEmpty()) {
            return false;
        }
        const isInsertionWithinLine = r.modifiedRange.startLineNumber === r.modifiedRange.endLineNumber;
        if (!isInsertionWithinLine) {
            return false;
        }
        return true;
    }
}
function isSingleLineInsertionAfterPosition(diff, position) {
    if (!position) {
        return false;
    }
    if (!isSingleLineInsertion(diff)) {
        return false;
    }
    const pos = position;
    return diff.every(m => m.innerChanges.every(r => isStableWordInsertion(r)));
    function isStableWordInsertion(r) {
        const insertPosition = r.originalRange.getStartPosition();
        if (pos.isBeforeOrEqual(insertPosition)) {
            return true;
        }
        if (insertPosition.lineNumber < pos.lineNumber) {
            return true;
        }
        return false;
    }
}
function isSingleMultiLineInsertion(diff) {
    const inner = diff.flatMap(d => d.innerChanges ?? []);
    if (inner.length !== 1) {
        return false;
    }
    const change = inner[0];
    if (!change.originalRange.isEmpty()) {
        return false;
    }
    if (change.modifiedRange.startLineNumber === change.modifiedRange.endLineNumber) {
        return false;
    }
    return true;
}
function isDeletion(inner, inlineEdit, newText) {
    const innerValues = inner.map(m => ({ original: inlineEdit.originalText.getValueOfRange(m.originalRange), modified: newText.getValueOfRange(m.modifiedRange) }));
    return innerValues.every(({ original, modified }) => modified.trim() === '' && original.length > 0 && (original.length > modified.length || original.trim() !== ''));
}
function growEditsToEntireWord(replacements, originalText) {
    return _growEdits(replacements, originalText, (char) => /^[a-zA-Z]$/.test(char));
}
function growEditsUntilWhitespace(replacements, originalText) {
    return _growEdits(replacements, originalText, (char) => !(/^\s$/.test(char)));
}
function _growEdits(replacements, originalText, fn) {
    const result = [];
    replacements.sort((a, b) => Range.compareRangesUsingStarts(a.range, b.range));
    for (const edit of replacements) {
        let startIndex = edit.range.startColumn - 1;
        let endIndex = edit.range.endColumn - 2;
        let prefix = '';
        let suffix = '';
        const startLineContent = originalText.getLineAt(edit.range.startLineNumber);
        const endLineContent = originalText.getLineAt(edit.range.endLineNumber);
        if (isIncluded(startLineContent[startIndex])) {
            // grow to the left
            while (isIncluded(startLineContent[startIndex - 1])) {
                prefix = startLineContent[startIndex - 1] + prefix;
                startIndex--;
            }
        }
        if (isIncluded(endLineContent[endIndex]) || endIndex < startIndex) {
            // grow to the right
            while (isIncluded(endLineContent[endIndex + 1])) {
                suffix += endLineContent[endIndex + 1];
                endIndex++;
            }
        }
        // create new edit and merge together if they are touching
        let newEdit = new TextReplacement(new Range(edit.range.startLineNumber, startIndex + 1, edit.range.endLineNumber, endIndex + 2), prefix + edit.text + suffix);
        if (result.length > 0 && Range.areIntersectingOrTouching(result[result.length - 1].range, newEdit.range)) {
            newEdit = TextReplacement.joinReplacements([result.pop(), newEdit], originalText);
        }
        result.push(newEdit);
    }
    function isIncluded(c) {
        if (c === undefined) {
            return false;
        }
        return fn(c);
    }
    return result;
}

export { InlineEditsView };
