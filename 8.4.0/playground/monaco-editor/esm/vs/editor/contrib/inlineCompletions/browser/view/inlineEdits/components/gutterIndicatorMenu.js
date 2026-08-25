import { n } from '../../../../../../../base/browser/dom.js';
import { ActionBar } from '../../../../../../../base/browser/ui/actionbar/actionbar.js';
import { renderIcon } from '../../../../../../../base/browser/ui/iconLabel/iconLabels.js';
import { KeybindingLabel } from '../../../../../../../base/browser/ui/keybindingLabel/keybindingLabel.js';
import { Codicon } from '../../../../../../../base/common/codicons.js';
import '../../../../../../../base/common/observableInternal/index.js';
import { OS } from '../../../../../../../base/common/platform.js';
import { ThemeIcon } from '../../../../../../../base/common/themables.js';
import { localize } from '../../../../../../../nls.js';
import { ICommandService } from '../../../../../../../platform/commands/common/commands.js';
import { IContextKeyService } from '../../../../../../../platform/contextkey/common/contextkey.js';
import { nativeHoverDelegate } from '../../../../../../../platform/hover/browser/hover.js';
import { IKeybindingService } from '../../../../../../../platform/keybinding/common/keybinding.js';
import { defaultKeybindingLabelStyles } from '../../../../../../../platform/theme/browser/defaultStyles.js';
import { asCssVariable } from '../../../../../../../platform/theme/common/colorUtils.js';
import { descriptionForeground } from '../../../../../../../platform/theme/common/colors/baseColors.js';
import '../../../../../../../platform/theme/common/colors/chartsColors.js';
import { editorHoverBorder } from '../../../../../../../platform/theme/common/colors/editorColors.js';
import '../../../../../../../platform/theme/common/colors/inputColors.js';
import { editorActionListForeground } from '../../../../../../../platform/theme/common/colors/listColors.js';
import '../../../../../../../platform/theme/common/colors/menuColors.js';
import '../../../../../../../platform/theme/common/colors/minimapColors.js';
import '../../../../../../../platform/theme/common/colors/miscColors.js';
import '../../../../../../../platform/theme/common/colors/quickpickColors.js';
import '../../../../../../../platform/theme/common/colors/searchColors.js';
import { inlineSuggestCommitId, hideInlineCompletionId, inlineSuggestCommitAlternativeActionId, toggleShowCollapsedId } from '../../../controller/commandIds.js';
import { observableValue } from '../../../../../../../base/common/observableInternal/observables/observableValue.js';
import { constObservable } from '../../../../../../../base/common/observableInternal/observables/constObservable.js';
import { observableFromEvent } from '../../../../../../../base/common/observableInternal/observables/observableFromEvent.js';
import { derived } from '../../../../../../../base/common/observableInternal/observables/derived.js';
import { autorun } from '../../../../../../../base/common/observableInternal/reactions/autorun.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
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
let GutterIndicatorMenuContent = class GutterIndicatorMenuContent {
    constructor(_editorObs, _data, _close, _contextKeyService, _keybindingService, _commandService) {
        this._editorObs = _editorObs;
        this._data = _data;
        this._close = _close;
        this._contextKeyService = _contextKeyService;
        this._keybindingService = _keybindingService;
        this._commandService = _commandService;
        this._inlineEditsShowCollapsed = this._editorObs.getOption(71 /* EditorOption.inlineSuggest */).map(s => s.edits.showCollapsed);
    }
    toDisposableLiveElement() {
        return this._createHoverContent().toDisposableLiveElement();
    }
    _createHoverContent() {
        const activeElement = observableValue('active', undefined);
        const createOptionArgs = (options) => {
            return {
                title: options.title,
                icon: options.icon,
                keybinding: typeof options.commandId === 'string' ? this._getKeybinding(options.commandArgs ? undefined : options.commandId) : derived(this, reader => typeof options.commandId === 'string' ? undefined : this._getKeybinding(options.commandArgs ? undefined : options.commandId.read(reader)).read(reader)),
                isActive: activeElement.map(v => v === options.id),
                onHoverChange: v => activeElement.set(v ? options.id : undefined, undefined),
                onAction: () => {
                    const commandId = typeof options.commandId === 'string' ? options.commandId : options.commandId.get();
                    this._close(true, commandId);
                    return this._commandService.executeCommand(commandId, ...(options.commandArgs ?? []));
                },
            };
        };
        const extensionCommandGroups = this._data.extensionCommands.map(group => group.map((c, idx) => option(createOptionArgs({
            id: c.command.id + '_' + idx,
            title: c.command.title,
            icon: c.icon ?? Codicon.symbolEvent,
            commandId: c.command.id,
            commandArgs: c.command.arguments
        }))));
        const extensionCommandNodes = [];
        for (const group of extensionCommandGroups) {
            if (group.length > 0) {
                extensionCommandNodes.push(separator());
                extensionCommandNodes.push(...group);
            }
        }
        if (this._data.extensionCommandsOnly) {
            // drop leading separator
            return hoverContent(extensionCommandNodes.slice(1));
        }
        const title = header(this._data.displayName);
        const gotoAndAccept = option(createOptionArgs({
            id: 'gotoAndAccept',
            title: localize(1256, "Go To / Accept"),
            icon: Codicon.check,
            commandId: inlineSuggestCommitId,
        }));
        const reject = option(createOptionArgs({
            id: 'reject',
            title: localize(1257, "Reject"),
            icon: Codicon.close,
            commandId: hideInlineCompletionId
        }));
        const alternativeCommand = this._data.alternativeAction ? option(createOptionArgs({
            id: 'alternativeCommand',
            title: this._data.alternativeAction.command.title,
            icon: this._data.alternativeAction.icon,
            commandId: inlineSuggestCommitAlternativeActionId,
        })) : undefined;
        const modelOptions = [];
        const toggleCollapsedMode = this._inlineEditsShowCollapsed.map(showCollapsed => showCollapsed ?
            option(createOptionArgs({
                id: 'showExpanded',
                title: localize(1258, "Show Expanded"),
                icon: Codicon.expandAll,
                commandId: toggleShowCollapsedId
            }))
            : option(createOptionArgs({
                id: 'showCollapsed',
                title: localize(1259, "Show Collapsed"),
                icon: Codicon.collapseAll,
                commandId: toggleShowCollapsedId
            })));
        const snooze = option(createOptionArgs({
            id: 'snooze',
            title: localize(1260, "Snooze"),
            icon: Codicon.bellSlash,
            commandId: 'editor.action.inlineSuggest.snooze'
        }));
        const settings = option(createOptionArgs({
            id: 'settings',
            title: localize(1261, "Settings"),
            icon: Codicon.gear,
            commandId: 'workbench.action.openSettings',
            commandArgs: ['@tag:nextEditSuggestions']
        }));
        const actions = this._data.action ? [this._data.action] : [];
        const actionBarFooter = actions.length > 0 ? actionBar(actions.map(action => ({
            id: action.id,
            label: action.title + '...',
            enabled: true,
            run: () => this._commandService.executeCommand(action.id, ...(action.arguments ?? [])),
            class: undefined,
            tooltip: action.tooltip ?? action.title
        })), { hoverDelegate: nativeHoverDelegate /* unable to show hover inside another hover */ }) : undefined;
        return hoverContent([
            title,
            gotoAndAccept,
            alternativeCommand,
            reject,
            toggleCollapsedMode,
            modelOptions.length ? separator() : undefined,
            ...modelOptions,
            snooze,
            settings,
            ...extensionCommandNodes,
            actionBarFooter ? separator() : undefined,
            actionBarFooter
        ]);
    }
    _getKeybinding(commandId) {
        if (!commandId) {
            return constObservable(undefined);
        }
        return observableFromEvent(this._contextKeyService.onDidChangeContext, () => this._keybindingService.lookupKeybinding(commandId)); // TODO: use contextkeyservice to use different renderings
    }
};
GutterIndicatorMenuContent = __decorate([
    __param(3, IContextKeyService),
    __param(4, IKeybindingService),
    __param(5, ICommandService)
], GutterIndicatorMenuContent);
function hoverContent(content) {
    return n.div({
        class: 'content',
        style: {
            margin: 4,
            minWidth: 180,
        }
    }, content);
}
function header(title) {
    return n.div({
        class: 'header',
        style: {
            color: asCssVariable(descriptionForeground),
            fontSize: '13px',
            fontWeight: '600',
            padding: '0 4px',
            lineHeight: 28,
        }
    }, [title]);
}
function option(props) {
    return derived({ name: 'inlineEdits.option' }, (_reader) => n.div({
        class: ['monaco-menu-option', props.isActive?.map(v => v && 'active')],
        onmouseenter: () => props.onHoverChange?.(true),
        onmouseleave: () => props.onHoverChange?.(false),
        onclick: props.onAction,
        onkeydown: e => {
            if (e.key === 'Enter') {
                props.onAction?.();
            }
        },
        tabIndex: 0,
        style: {
            borderRadius: 3, // same as hover widget border radius
        }
    }, [
        n.elem('span', {
            style: {
                fontSize: 16,
                display: 'flex',
            }
        }, [ThemeIcon.isThemeIcon(props.icon) ? renderIcon(props.icon) : props.icon.map(icon => renderIcon(icon))]),
        n.elem('span', {}, [props.title]),
        n.div({
            style: { marginLeft: 'auto' },
            ref: elem => {
                const keybindingLabel = _reader.store.add(new KeybindingLabel(elem, OS, {
                    disableTitle: true,
                    ...defaultKeybindingLabelStyles,
                    keybindingLabelShadow: undefined,
                    keybindingLabelForeground: asCssVariable(descriptionForeground),
                    keybindingLabelBackground: 'transparent',
                    keybindingLabelBorder: 'transparent',
                    keybindingLabelBottomBorder: undefined,
                }));
                _reader.store.add(autorun(reader => {
                    keybindingLabel.set(props.keybinding.read(reader));
                }));
            }
        })
    ]));
}
// TODO: make this observable
function actionBar(actions, options) {
    return derived({ name: 'inlineEdits.actionBar' }, (_reader) => n.div({
        class: ['action-widget-action-bar'],
        style: {
            padding: '3px 24px',
        }
    }, [
        n.div({
            ref: elem => {
                const actionBar = _reader.store.add(new ActionBar(elem, options));
                actionBar.push(actions, { icon: false, label: true });
            }
        })
    ]));
}
function separator() {
    return n.div({
        id: 'inline-edit-gutter-indicator-menu-separator',
        class: 'menu-separator',
        style: {
            color: asCssVariable(editorActionListForeground),
            padding: '2px 0',
        }
    }, n.div({
        style: {
            borderBottom: `1px solid ${asCssVariable(editorHoverBorder)}`,
        }
    }));
}

export { GutterIndicatorMenuContent };
