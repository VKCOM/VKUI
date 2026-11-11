import { HierarchicalKind } from '../../../../base/common/hierarchicalKind.js';
import { escapeRegExpCharacters } from '../../../../base/common/strings.js';
import { EditorAction2, EditorAction, EditorCommand } from '../../../browser/editorExtensions.js';
import { EditorContextKeys } from '../../../common/editorContextKeys.js';
import { quickFixCommandId, refactorCommandId, sourceActionCommandId, organizeImportsCommandId, autoFixCommandId, fixAllCommandId, codeActionCommandId } from './codeAction.js';
import { localize, localize2 } from '../../../../nls.js';
import { MenuId } from '../../../../platform/actions/common/actions.js';
import { ContextKeyExpr } from '../../../../platform/contextkey/common/contextkey.js';
import { CodeActionTriggerSource, CodeActionKind, CodeActionCommandArgs } from '../common/types.js';
import { CodeActionController } from './codeActionController.js';
import { SUPPORTED_CODE_ACTIONS } from './codeActionModel.js';
import { Codicon } from '../../../../base/common/codicons.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function contextKeyForSupportedActions(kind) {
    return ContextKeyExpr.regex(SUPPORTED_CODE_ACTIONS.keys()[0], new RegExp('(\\s|^)' + escapeRegExpCharacters(kind.value) + '\\b'));
}
const argsSchema = {
    type: 'object',
    defaultSnippets: [{ body: { kind: '' } }],
    properties: {
        'kind': {
            type: 'string',
            description: localize(882, "Kind of the code action to run."),
        },
        'apply': {
            type: 'string',
            description: localize(883, "Controls when the returned actions are applied."),
            default: "ifSingle" /* CodeActionAutoApply.IfSingle */,
            enum: ["first" /* CodeActionAutoApply.First */, "ifSingle" /* CodeActionAutoApply.IfSingle */, "never" /* CodeActionAutoApply.Never */],
            enumDescriptions: [
                localize(884, "Always apply the first returned code action."),
                localize(885, "Apply the first returned code action if it is the only one."),
                localize(886, "Do not apply the returned code actions."),
            ]
        },
        'preferred': {
            type: 'boolean',
            default: false,
            description: localize(887, "Controls if only preferred code actions should be returned."),
        }
    }
};
function triggerCodeActionsForEditorSelection(editor, notAvailableMessage, filter, autoApply, triggerAction = CodeActionTriggerSource.Default) {
    if (editor.hasModel()) {
        const controller = CodeActionController.get(editor);
        controller?.manualTriggerAtCurrentPosition(notAvailableMessage, triggerAction, filter, autoApply);
    }
}
class QuickFixAction extends EditorAction2 {
    constructor() {
        super({
            id: quickFixCommandId,
            title: localize2(904, "Quick Fix..."),
            precondition: ContextKeyExpr.and(EditorContextKeys.writable, EditorContextKeys.hasCodeActionsProvider),
            icon: Codicon.lightBulb,
            f1: true,
            keybinding: {
                when: EditorContextKeys.textInputFocus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 89 /* KeyCode.Period */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            menu: {
                id: MenuId.InlineChatEditorAffordance,
                group: '1_quickfix',
                order: 0,
                when: ContextKeyExpr.and(EditorContextKeys.writable, EditorContextKeys.hasCodeActionsProvider)
            }
        });
    }
    runEditorCommand(_accessor, editor) {
        return triggerCodeActionsForEditorSelection(editor, localize(888, "No code actions available"), undefined, undefined, CodeActionTriggerSource.QuickFix);
    }
}
class CodeActionCommand extends EditorCommand {
    constructor() {
        super({
            id: codeActionCommandId,
            precondition: ContextKeyExpr.and(EditorContextKeys.writable, EditorContextKeys.hasCodeActionsProvider),
            metadata: {
                description: 'Trigger a code action',
                args: [{ name: 'args', schema: argsSchema, }]
            }
        });
    }
    runEditorCommand(_accessor, editor, userArgs) {
        const args = CodeActionCommandArgs.fromUser(userArgs, {
            kind: HierarchicalKind.Empty,
            apply: "ifSingle" /* CodeActionAutoApply.IfSingle */,
        });
        return triggerCodeActionsForEditorSelection(editor, typeof userArgs?.kind === 'string'
            ? args.preferred
                ? localize(889, "No preferred code actions for '{0}' available", userArgs.kind)
                : localize(890, "No code actions for '{0}' available", userArgs.kind)
            : args.preferred
                ? localize(891, "No preferred code actions available")
                : localize(892, "No code actions available"), {
            include: args.kind,
            includeSourceActions: true,
            onlyIncludePreferredActions: args.preferred,
        }, args.apply);
    }
}
class RefactorAction extends EditorAction {
    constructor() {
        super({
            id: refactorCommandId,
            label: localize2(905, "Refactor..."),
            precondition: ContextKeyExpr.and(EditorContextKeys.writable, EditorContextKeys.hasCodeActionsProvider),
            kbOpts: {
                kbExpr: EditorContextKeys.textInputFocus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 48 /* KeyCode.KeyR */,
                mac: {
                    primary: 256 /* KeyMod.WinCtrl */ | 1024 /* KeyMod.Shift */ | 48 /* KeyCode.KeyR */
                },
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            contextMenuOpts: {
                group: '1_modification',
                order: 2,
                when: ContextKeyExpr.and(EditorContextKeys.writable, contextKeyForSupportedActions(CodeActionKind.Refactor)),
            },
            metadata: {
                description: 'Refactor...',
                args: [{ name: 'args', schema: argsSchema }]
            }
        });
    }
    run(_accessor, editor, userArgs) {
        const args = CodeActionCommandArgs.fromUser(userArgs, {
            kind: CodeActionKind.Refactor,
            apply: "never" /* CodeActionAutoApply.Never */
        });
        return triggerCodeActionsForEditorSelection(editor, typeof userArgs?.kind === 'string'
            ? args.preferred
                ? localize(893, "No preferred refactorings for '{0}' available", userArgs.kind)
                : localize(894, "No refactorings for '{0}' available", userArgs.kind)
            : args.preferred
                ? localize(895, "No preferred refactorings available")
                : localize(896, "No refactorings available"), {
            include: CodeActionKind.Refactor.contains(args.kind) ? args.kind : HierarchicalKind.None,
            onlyIncludePreferredActions: args.preferred
        }, args.apply, CodeActionTriggerSource.Refactor);
    }
}
class SourceAction extends EditorAction {
    constructor() {
        super({
            id: sourceActionCommandId,
            label: localize2(906, "Source Action..."),
            precondition: ContextKeyExpr.and(EditorContextKeys.writable, EditorContextKeys.hasCodeActionsProvider),
            contextMenuOpts: {
                group: '1_modification',
                order: 2.1,
                when: ContextKeyExpr.and(EditorContextKeys.writable, contextKeyForSupportedActions(CodeActionKind.Source)),
            },
            metadata: {
                description: 'Source Action...',
                args: [{ name: 'args', schema: argsSchema }]
            }
        });
    }
    run(_accessor, editor, userArgs) {
        const args = CodeActionCommandArgs.fromUser(userArgs, {
            kind: CodeActionKind.Source,
            apply: "never" /* CodeActionAutoApply.Never */
        });
        return triggerCodeActionsForEditorSelection(editor, typeof userArgs?.kind === 'string'
            ? args.preferred
                ? localize(897, "No preferred source actions for '{0}' available", userArgs.kind)
                : localize(898, "No source actions for '{0}' available", userArgs.kind)
            : args.preferred
                ? localize(899, "No preferred source actions available")
                : localize(900, "No source actions available"), {
            include: CodeActionKind.Source.contains(args.kind) ? args.kind : HierarchicalKind.None,
            includeSourceActions: true,
            onlyIncludePreferredActions: args.preferred,
        }, args.apply, CodeActionTriggerSource.SourceAction);
    }
}
class OrganizeImportsAction extends EditorAction {
    constructor() {
        super({
            id: organizeImportsCommandId,
            label: localize2(907, "Organize Imports"),
            precondition: ContextKeyExpr.and(EditorContextKeys.writable, contextKeyForSupportedActions(CodeActionKind.SourceOrganizeImports)),
            kbOpts: {
                kbExpr: EditorContextKeys.textInputFocus,
                primary: 1024 /* KeyMod.Shift */ | 512 /* KeyMod.Alt */ | 45 /* KeyCode.KeyO */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            metadata: {
                description: localize2(908, "Organize imports in the current file. Also called 'Optimize Imports' by some tools")
            }
        });
    }
    run(_accessor, editor) {
        return triggerCodeActionsForEditorSelection(editor, localize(901, "No organize imports action available"), { include: CodeActionKind.SourceOrganizeImports, includeSourceActions: true }, "ifSingle" /* CodeActionAutoApply.IfSingle */, CodeActionTriggerSource.OrganizeImports);
    }
}
class FixAllAction extends EditorAction {
    constructor() {
        super({
            id: fixAllCommandId,
            label: localize2(909, "Fix All"),
            precondition: ContextKeyExpr.and(EditorContextKeys.writable, contextKeyForSupportedActions(CodeActionKind.SourceFixAll))
        });
    }
    run(_accessor, editor) {
        return triggerCodeActionsForEditorSelection(editor, localize(902, "No fix all action available"), { include: CodeActionKind.SourceFixAll, includeSourceActions: true }, "ifSingle" /* CodeActionAutoApply.IfSingle */, CodeActionTriggerSource.FixAll);
    }
}
class AutoFixAction extends EditorAction {
    constructor() {
        super({
            id: autoFixCommandId,
            label: localize2(910, "Auto Fix..."),
            precondition: ContextKeyExpr.and(EditorContextKeys.writable, contextKeyForSupportedActions(CodeActionKind.QuickFix)),
            kbOpts: {
                kbExpr: EditorContextKeys.textInputFocus,
                primary: 512 /* KeyMod.Alt */ | 1024 /* KeyMod.Shift */ | 89 /* KeyCode.Period */,
                mac: {
                    primary: 2048 /* KeyMod.CtrlCmd */ | 512 /* KeyMod.Alt */ | 89 /* KeyCode.Period */
                },
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    run(_accessor, editor) {
        return triggerCodeActionsForEditorSelection(editor, localize(903, "No auto fixes available"), {
            include: CodeActionKind.QuickFix,
            onlyIncludePreferredActions: true
        }, "ifSingle" /* CodeActionAutoApply.IfSingle */, CodeActionTriggerSource.AutoFix);
    }
}

export { AutoFixAction, CodeActionCommand, FixAllAction, OrganizeImportsAction, QuickFixAction, RefactorAction, SourceAction };
