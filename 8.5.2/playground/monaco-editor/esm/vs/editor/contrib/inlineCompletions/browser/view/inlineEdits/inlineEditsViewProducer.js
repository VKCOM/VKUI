import { Disposable } from '../../../../../../base/common/lifecycle.js';
import '../../../../../../base/common/observableInternal/index.js';
import { IInstantiationService } from '../../../../../../platform/instantiation/common/instantiation.js';
import { observableCodeEditor } from '../../../../../browser/observableCodeEditor.js';
import { Range } from '../../../../../common/core/range.js';
import { TextReplacement, TextEdit } from '../../../../../common/core/edits/textEdit.js';
import { InlineEditWithChanges } from './inlineEditWithChanges.js';
import { ModelPerInlineEdit } from './inlineEditsModel.js';
import { InlineEditsView } from './inlineEditsView.js';
import { InlineEditTabAction } from './inlineEditsViewInterface.js';
import { SimpleInlineSuggestModel, InlineSuggestionGutterMenuData } from './components/gutterIndicatorView.js';
import { derived } from '../../../../../../base/common/observableInternal/observables/derived.js';

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
let InlineEditsViewAndDiffProducer = class InlineEditsViewAndDiffProducer extends Disposable {
    constructor(_editor, _model, _showCollapsed, instantiationService) {
        super();
        this._editor = _editor;
        this._model = _model;
        this._showCollapsed = _showCollapsed;
        this._inlineEdit = derived(this, (reader) => {
            const model = this._model.read(reader);
            if (!model) {
                return undefined;
            }
            const textModel = this._editor.getModel();
            if (!textModel) {
                return undefined;
            }
            const state = model.inlineEditState.read(reader);
            if (!state) {
                return undefined;
            }
            const action = state.inlineSuggestion.action;
            let diffEdits;
            if (action?.kind === 'edit') {
                const editOffset = action.stringEdit;
                const t = state.inlineSuggestion.originalTextRef.getTransformer();
                const edits = editOffset.replacements.map(e => {
                    const innerEditRange = Range.fromPositions(t.getPosition(e.replaceRange.start), t.getPosition(e.replaceRange.endExclusive));
                    return new TextReplacement(innerEditRange, e.newText);
                });
                diffEdits = new TextEdit(edits);
            }
            else {
                diffEdits = undefined;
            }
            return new InlineEditWithChanges(state.inlineSuggestion.originalTextRef, action, diffEdits, model.primaryPosition.read(undefined), model.allPositions.read(undefined), state.inlineSuggestion.source.inlineSuggestions.commands ?? [], state.inlineSuggestion);
        });
        this._inlineEditModel = derived(this, reader => {
            const model = this._model.read(reader);
            if (!model) {
                return undefined;
            }
            const edit = this._inlineEdit.read(reader);
            if (!edit) {
                return undefined;
            }
            const tabAction = derived(this, reader => {
                /** @description tabAction */
                if (this._editorObs.isFocused.read(reader)) {
                    if (model.tabShouldJumpToInlineEdit.read(reader)) {
                        return InlineEditTabAction.Jump;
                    }
                    if (model.tabShouldAcceptInlineEdit.read(reader)) {
                        return InlineEditTabAction.Accept;
                    }
                }
                return InlineEditTabAction.Inactive;
            });
            return new ModelPerInlineEdit(model, edit, tabAction);
        });
        this._editorObs = observableCodeEditor(this._editor);
        this.view = this._register(instantiationService.createInstance(InlineEditsView, this._editor, this._inlineEditModel, this._model.map(model => model ? SimpleInlineSuggestModel.fromInlineCompletionModel(model) : undefined), this._inlineEdit.map(e => e ? InlineSuggestionGutterMenuData.fromInlineSuggestion(e.inlineCompletion) : undefined), this._showCollapsed));
    }
};
InlineEditsViewAndDiffProducer = __decorate([
    __param(3, IInstantiationService)
], InlineEditsViewAndDiffProducer);

export { InlineEditsViewAndDiffProducer };
