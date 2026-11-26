import { createCancelablePromise, TimeoutTimer } from '../../../../base/common/async.js';
import { isCancellationError } from '../../../../base/common/errors.js';
import { Emitter } from '../../../../base/common/event.js';
import { HierarchicalKind } from '../../../../base/common/hierarchicalKind.js';
import { Disposable, MutableDisposable, DisposableStore } from '../../../../base/common/lifecycle.js';
import { isEqual } from '../../../../base/common/resources.js';
import { RawContextKey } from '../../../../platform/contextkey/common/contextkey.js';
import { Progress } from '../../../../platform/progress/common/progress.js';
import { ShowLightbulbIconMode } from '../../../common/config/editorOptions.js';
import { Position } from '../../../common/core/position.js';
import { Selection } from '../../../common/core/selection.js';
import { CodeActionTriggerSource, CodeActionKind } from '../common/types.js';
import { getCodeActions } from './codeAction.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const SUPPORTED_CODE_ACTIONS = new RawContextKey('supportedCodeAction', '');
const APPLY_FIX_ALL_COMMAND_ID = '_typescript.applyFixAllCodeAction';
class CodeActionOracle extends Disposable {
    constructor(_editor, _markerService, _signalChange, _delay = 250) {
        super();
        this._editor = _editor;
        this._markerService = _markerService;
        this._signalChange = _signalChange;
        this._delay = _delay;
        this._autoTriggerTimer = this._register(new TimeoutTimer());
        this.ignoreLightbulbOff = false;
        this._register(this._markerService.onMarkerChanged(e => this._onMarkerChanges(e)));
        this._register(this._editor.onDidChangeCursorPosition(() => this._tryAutoTrigger()));
    }
    trigger(trigger) {
        const selection = this._getRangeOfSelectionUnlessWhitespaceEnclosed(trigger);
        this._signalChange(selection ? { trigger, selection } : undefined);
    }
    _onMarkerChanges(resources) {
        const model = this._editor.getModel();
        if (model && resources.some(resource => isEqual(resource, model.uri))) {
            this._tryAutoTrigger();
        }
    }
    _tryAutoTrigger() {
        this._autoTriggerTimer.cancelAndSet(() => {
            this.trigger({ type: 2 /* CodeActionTriggerType.Auto */, triggerAction: CodeActionTriggerSource.Default });
        }, this._delay);
    }
    _getRangeOfSelectionUnlessWhitespaceEnclosed(trigger) {
        if (!this._editor.hasModel()) {
            return undefined;
        }
        const selection = this._editor.getSelection();
        if (trigger.type === 1 /* CodeActionTriggerType.Invoke */) {
            return selection;
        }
        const enabled = this._editor.getOption(73 /* EditorOption.lightbulb */).enabled;
        if (enabled === ShowLightbulbIconMode.Off && !this.ignoreLightbulbOff) {
            return undefined;
        }
        else if (enabled === ShowLightbulbIconMode.Off || enabled === ShowLightbulbIconMode.On) {
            return selection;
        }
        else if (enabled === ShowLightbulbIconMode.OnCode) {
            const isSelectionEmpty = selection.isEmpty();
            if (!isSelectionEmpty) {
                return selection;
            }
            const model = this._editor.getModel();
            const { lineNumber, column } = selection.getPosition();
            const line = model.getLineContent(lineNumber);
            if (line.length === 0) {
                // empty line
                return undefined;
            }
            else if (column === 1) {
                // look only right
                if (/\s/.test(line[0])) {
                    return undefined;
                }
            }
            else if (column === model.getLineMaxColumn(lineNumber)) {
                // look only left
                if (/\s/.test(line[line.length - 1])) {
                    return undefined;
                }
            }
            else {
                // look left and right
                if (/\s/.test(line[column - 2]) && /\s/.test(line[column - 1])) {
                    return undefined;
                }
            }
        }
        return selection;
    }
}
var CodeActionsState;
(function (CodeActionsState) {
    CodeActionsState.Empty = { type: 0 /* Type.Empty */ };
    class Triggered {
        constructor(trigger, position, _cancellablePromise) {
            this.trigger = trigger;
            this.position = position;
            this._cancellablePromise = _cancellablePromise;
            this.type = 1 /* Type.Triggered */;
            this.actions = _cancellablePromise.catch((e) => {
                if (isCancellationError(e)) {
                    return emptyCodeActionSet;
                }
                throw e;
            });
        }
        cancel() {
            this._cancellablePromise.cancel();
        }
    }
    CodeActionsState.Triggered = Triggered;
})(CodeActionsState || (CodeActionsState = {}));
const emptyCodeActionSet = Object.freeze({
    allActions: [],
    validActions: [],
    dispose: () => { },
    documentation: [],
    hasAutoFix: false,
    hasAIFix: false,
    allAIFixes: false,
});
class CodeActionModel extends Disposable {
    constructor(_editor, _registry, _markerService, contextKeyService, _progressService, _configurationService) {
        super();
        this._editor = _editor;
        this._registry = _registry;
        this._markerService = _markerService;
        this._progressService = _progressService;
        this._configurationService = _configurationService;
        this._codeActionOracle = this._register(new MutableDisposable());
        this._state = CodeActionsState.Empty;
        this._onDidChangeState = this._register(new Emitter());
        this.onDidChangeState = this._onDidChangeState.event;
        this.codeActionsDisposable = this._register(new MutableDisposable());
        this._disposed = false;
        this._ignoreLightbulbOff = false;
        this._supportedCodeActions = SUPPORTED_CODE_ACTIONS.bindTo(contextKeyService);
        this._register(this._editor.onDidChangeModel(() => this._update()));
        this._register(this._editor.onDidChangeModelLanguage(() => this._update()));
        this._register(this._registry.onDidChange(() => this._update()));
        this._register(this._editor.onDidChangeConfiguration((e) => {
            if (e.hasChanged(73 /* EditorOption.lightbulb */)) {
                this._update();
            }
        }));
        this._update();
    }
    dispose() {
        if (this._disposed) {
            return;
        }
        this._disposed = true;
        super.dispose();
        this.setState(CodeActionsState.Empty, true);
    }
    _settingEnabledNearbyQuickfixes() {
        const model = this._editor?.getModel();
        return this._configurationService ? this._configurationService.getValue('editor.codeActionWidget.includeNearbyQuickFixes', { resource: model?.uri }) : false;
    }
    _update() {
        if (this._disposed) {
            return;
        }
        this._codeActionOracle.value = undefined;
        this.setState(CodeActionsState.Empty);
        this.codeActionsDisposable.clear();
        const model = this._editor.getModel();
        if (model
            && this._registry.has(model)
            && !this._editor.getOption(104 /* EditorOption.readOnly */)) {
            const supportedActions = this._registry.all(model).flatMap(provider => provider.providedCodeActionKinds ?? []);
            this._supportedCodeActions.set(supportedActions.join(' '));
            const oracle = new CodeActionOracle(this._editor, this._markerService, trigger => {
                if (!trigger) {
                    this.setState(CodeActionsState.Empty);
                    return;
                }
                const startPosition = trigger.selection.getStartPosition();
                const actions = createCancelablePromise(async (token) => {
                    if (this._settingEnabledNearbyQuickfixes() && trigger.trigger.type === 1 /* CodeActionTriggerType.Invoke */ && (trigger.trigger.triggerAction === CodeActionTriggerSource.QuickFix || trigger.trigger.filter?.include?.contains(CodeActionKind.QuickFix))) {
                        const codeActionSets = new DisposableStore();
                        let codeActionSetsOwnedByResult = false;
                        try {
                            const codeActionSet = codeActionSets.add(await getCodeActions(this._registry, model, trigger.selection, trigger.trigger, Progress.None, token));
                            const allCodeActions = [...codeActionSet.allActions];
                            if (token.isCancellationRequested) {
                                return emptyCodeActionSet;
                            }
                            // Search for non-AI quickfixes in the current code action set - if AI code actions are the only thing found, continue searching for diagnostics in line.
                            const foundQuickfix = codeActionSet.validActions?.some(action => {
                                return action.action.kind &&
                                    CodeActionKind.QuickFix.contains(new HierarchicalKind(action.action.kind)) &&
                                    !action.action.isAI;
                            });
                            const allMarkers = this._markerService.read({ resource: model.uri });
                            if (foundQuickfix) {
                                for (const action of codeActionSet.validActions) {
                                    if (action.action.command?.arguments?.some(arg => typeof arg === 'string' && arg.includes(APPLY_FIX_ALL_COMMAND_ID))) {
                                        action.action.diagnostics = [...allMarkers.filter(marker => marker.relatedInformation)];
                                    }
                                }
                                const result = this._setCodeActions({ validActions: codeActionSet.validActions, allActions: allCodeActions, documentation: codeActionSet.documentation, hasAutoFix: codeActionSet.hasAutoFix, hasAIFix: codeActionSet.hasAIFix, allAIFixes: codeActionSet.allAIFixes, dispose: () => codeActionSets.dispose() });
                                codeActionSetsOwnedByResult = true;
                                return result;
                            }
                            else if (!foundQuickfix) {
                                // If markers exist, and there are no quickfixes found or length is zero, check for quickfixes on that line.
                                if (allMarkers.length > 0) {
                                    const currPosition = trigger.selection.getPosition();
                                    let trackedPosition = currPosition;
                                    let distance = Number.MAX_VALUE;
                                    const currentActions = [...codeActionSet.validActions];
                                    for (const marker of allMarkers) {
                                        const col = marker.endColumn;
                                        const row = marker.endLineNumber;
                                        const startRow = marker.startLineNumber;
                                        // Found quickfix on the same line and check relative distance to other markers
                                        if ((row === currPosition.lineNumber || startRow === currPosition.lineNumber)) {
                                            trackedPosition = new Position(row, col);
                                            const newCodeActionTrigger = {
                                                type: trigger.trigger.type,
                                                triggerAction: trigger.trigger.triggerAction,
                                                filter: { include: trigger.trigger.filter?.include ? trigger.trigger.filter?.include : CodeActionKind.QuickFix },
                                                autoApply: trigger.trigger.autoApply,
                                                context: { notAvailableMessage: trigger.trigger.context?.notAvailableMessage || '', position: trackedPosition }
                                            };
                                            const selectionAsPosition = new Selection(trackedPosition.lineNumber, trackedPosition.column, trackedPosition.lineNumber, trackedPosition.column);
                                            const actionsAtMarker = codeActionSets.add(await getCodeActions(this._registry, model, selectionAsPosition, newCodeActionTrigger, Progress.None, token));
                                            if (token.isCancellationRequested) {
                                                return emptyCodeActionSet;
                                            }
                                            if (actionsAtMarker.validActions.length !== 0) {
                                                for (const action of actionsAtMarker.validActions) {
                                                    if (action.action.command?.arguments?.some(arg => typeof arg === 'string' && arg.includes(APPLY_FIX_ALL_COMMAND_ID))) {
                                                        action.action.diagnostics = [...allMarkers.filter(marker => marker.relatedInformation)];
                                                    }
                                                }
                                                if (codeActionSet.allActions.length === 0) {
                                                    allCodeActions.push(...actionsAtMarker.allActions);
                                                }
                                                // Already filtered through to only get quickfixes, so no need to filter again.
                                                if (Math.abs(currPosition.column - col) < distance) {
                                                    currentActions.unshift(...actionsAtMarker.validActions);
                                                }
                                                else {
                                                    currentActions.push(...actionsAtMarker.validActions);
                                                }
                                            }
                                            distance = Math.abs(currPosition.column - col);
                                        }
                                    }
                                    const filteredActions = currentActions.filter((action, index, self) => self.findIndex((a) => a.action.title === action.action.title) === index);
                                    filteredActions.sort((a, b) => {
                                        if (a.action.isPreferred && !b.action.isPreferred) {
                                            return -1;
                                        }
                                        else if (!a.action.isPreferred && b.action.isPreferred) {
                                            return 1;
                                        }
                                        else if (a.action.isAI && !b.action.isAI) {
                                            return 1;
                                        }
                                        else if (!a.action.isAI && b.action.isAI) {
                                            return -1;
                                        }
                                        else {
                                            return 0;
                                        }
                                    });
                                    // Only retriggers if actually found quickfix on the same line as cursor
                                    const result = this._setCodeActions({ validActions: filteredActions, allActions: allCodeActions, documentation: codeActionSet.documentation, hasAutoFix: codeActionSet.hasAutoFix, hasAIFix: codeActionSet.hasAIFix, allAIFixes: codeActionSet.allAIFixes, dispose: () => codeActionSets.dispose() });
                                    codeActionSetsOwnedByResult = true;
                                    return result;
                                }
                            }
                        }
                        finally {
                            if (!codeActionSetsOwnedByResult) {
                                codeActionSets.dispose();
                            }
                        }
                    }
                    // Case for manual triggers - specifically Source Actions and Refactors
                    if (trigger.trigger.type === 1 /* CodeActionTriggerType.Invoke */) {
                        const codeActions = await getCodeActions(this._registry, model, trigger.selection, trigger.trigger, Progress.None, token);
                        if (token.isCancellationRequested) {
                            codeActions.dispose();
                            return emptyCodeActionSet;
                        }
                        return this._setCodeActions(codeActions);
                    }
                    const codeActionSet = await getCodeActions(this._registry, model, trigger.selection, trigger.trigger, Progress.None, token);
                    if (token.isCancellationRequested) {
                        codeActionSet.dispose();
                        return emptyCodeActionSet;
                    }
                    return this._setCodeActions(codeActionSet);
                });
                if (trigger.trigger.type === 1 /* CodeActionTriggerType.Invoke */) {
                    this._progressService?.showWhile(actions, 250);
                }
                const newState = new CodeActionsState.Triggered(trigger.trigger, startPosition, actions);
                let isManualToAutoTransition = false;
                if (this._state.type === 1 /* CodeActionsState.Type.Triggered */) {
                    // Check if the current state is manual and the new state is automatic
                    isManualToAutoTransition = this._state.trigger.type === 1 /* CodeActionTriggerType.Invoke */ &&
                        newState.type === 1 /* CodeActionsState.Type.Triggered */ &&
                        newState.trigger.type === 2 /* CodeActionTriggerType.Auto */ &&
                        this._state.position !== newState.position;
                }
                // Do not trigger state if current state is manual and incoming state is automatic
                if (!isManualToAutoTransition) {
                    this.setState(newState);
                }
                else {
                    // Reset the new state after getting code actions back.
                    setTimeout(() => {
                        this.setState(newState);
                    }, 500);
                }
            }, undefined);
            oracle.ignoreLightbulbOff = this._ignoreLightbulbOff;
            this._codeActionOracle.value = oracle;
            this._codeActionOracle.value.trigger({ type: 2 /* CodeActionTriggerType.Auto */, triggerAction: CodeActionTriggerSource.Default });
        }
        else {
            this._supportedCodeActions.reset();
        }
    }
    _setCodeActions(actions) {
        this.codeActionsDisposable.value = actions;
        return actions;
    }
    /**
     * Transfers ownership of the current code actions to the caller.
     */
    takeCodeActions(actions) {
        if (this.codeActionsDisposable.value !== actions) {
            return undefined;
        }
        this.codeActionsDisposable.clearAndLeak();
        return actions;
    }
    trigger(trigger) {
        this._codeActionOracle.value?.trigger(trigger);
        this.codeActionsDisposable.clear();
    }
    setState(newState, skipNotify) {
        if (newState === this._state) {
            return;
        }
        // Cancel old request
        if (this._state.type === 1 /* CodeActionsState.Type.Triggered */) {
            this._state.cancel();
        }
        this._state = newState;
        if (!skipNotify && !this._disposed) {
            this._onDidChangeState.fire(newState);
        }
    }
}

export { APPLY_FIX_ALL_COMMAND_ID, CodeActionModel, CodeActionsState, SUPPORTED_CODE_ACTIONS };
