import { Separator } from '../../../../base/common/actions.js';
import { h } from '../../../../base/browser/dom.js';
import { Disposable, toDisposable } from '../../../../base/common/lifecycle.js';
import '../../../../base/common/observableInternal/index.js';
import { getActionBarActions, MenuEntryActionViewItem } from '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import { MenuWorkbenchToolBar } from '../../../../platform/actions/browser/toolbar.js';
import { MenuId, IMenuService, MenuItemAction } from '../../../../platform/actions/common/actions.js';
import { IInstantiationService } from '../../../../platform/instantiation/common/instantiation.js';
import { IKeybindingService } from '../../../../platform/keybinding/common/keybinding.js';
import { observableCodeEditor } from '../../../browser/observableCodeEditor.js';
import { derived } from '../../../../base/common/observableInternal/observables/derived.js';
import { autorun } from '../../../../base/common/observableInternal/reactions/autorun.js';
import { constObservable } from '../../../../base/common/observableInternal/observables/constObservable.js';
import { observableFromEvent } from '../../../../base/common/observableInternal/observables/observableFromEvent.js';

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
let FloatingEditorToolbar = class FloatingEditorToolbar extends Disposable {
    static { this.ID = 'editor.contrib.floatingToolbar'; }
    constructor(editor, instantiationService, keybindingService, menuService) {
        super();
        const editorObs = this._register(observableCodeEditor(editor));
        const editorUriObs = derived(reader => editorObs.model.read(reader)?.uri);
        // Widget
        const widget = this._register(instantiationService.createInstance(FloatingEditorToolbarWidget, MenuId.EditorContent, editor.contextKeyService, editorUriObs));
        // Render widget
        this._register(autorun(reader => {
            const hasActions = widget.hasActions.read(reader);
            if (!hasActions) {
                return;
            }
            // Overlay widget
            reader.store.add(editorObs.createOverlayWidget({
                allowEditorOverflow: false,
                domNode: widget.element,
                minContentWidthInPx: constObservable(0),
                position: constObservable({
                    preference: 1 /* OverlayWidgetPositionPreference.BOTTOM_RIGHT_CORNER */
                })
            }));
        }));
    }
};
FloatingEditorToolbar = __decorate([
    __param(1, IInstantiationService),
    __param(2, IKeybindingService),
    __param(3, IMenuService)
], FloatingEditorToolbar);
let FloatingEditorToolbarWidget = class FloatingEditorToolbarWidget extends Disposable {
    constructor(_menuId, _scopedContextKeyService, _toolbarContext, instantiationService, keybindingService, menuService) {
        super();
        const menu = this._register(menuService.createMenu(_menuId, _scopedContextKeyService));
        const menuGroupsObs = observableFromEvent(this, menu.onDidChange, () => menu.getActions());
        const menuPrimaryActionsObs = derived(reader => {
            const menuGroups = menuGroupsObs.read(reader);
            const { primary } = getActionBarActions(menuGroups, () => true);
            return primary.filter(a => a.id !== Separator.ID);
        });
        this.hasActions = derived(reader => menuPrimaryActionsObs.read(reader).length > 0);
        this.element = h('div.floating-menu-overlay-widget').root;
        this._register(toDisposable(() => this.element.remove()));
        this._register(autorun(reader => {
            const primaryActions = menuPrimaryActionsObs.read(reader);
            const hasActions = primaryActions.length > 0;
            const menuPrimaryActionId = hasActions ? primaryActions[0].id : undefined;
            const isSingleButton = primaryActions.length === 1;
            this.element.classList.toggle('single-button', isSingleButton);
            // Set height explicitly to ensure that the floating menu element
            // is rendered in the lower right corner at the correct position.
            this.element.style.height = isSingleButton ? '28px' : '26px';
            if (!hasActions) {
                return;
            }
            // Toolbar
            const toolbar = instantiationService.createInstance(MenuWorkbenchToolBar, this.element, _menuId, {
                actionViewItemProvider: (action, options) => {
                    if (!(action instanceof MenuItemAction)) {
                        return undefined;
                    }
                    return instantiationService.createInstance(class extends MenuEntryActionViewItem {
                        render(container) {
                            super.render(container);
                            // Highlight primary action
                            if (action.id === menuPrimaryActionId) {
                                this.element?.classList.add('primary');
                            }
                        }
                        updateLabel() {
                            const keybinding = keybindingService.lookupKeybinding(action.id);
                            const keybindingLabel = keybinding ? keybinding.getLabel() : undefined;
                            if (this.options.label && this.label) {
                                this.label.textContent = keybindingLabel
                                    ? `${this._commandAction.label} (${keybindingLabel})`
                                    : this._commandAction.label;
                            }
                        }
                    }, action, { ...options, keybindingNotRenderedWithLabel: true });
                },
                hiddenItemStrategy: 0 /* HiddenItemStrategy.Ignore */,
                menuOptions: {
                    shouldForwardArgs: true
                },
                telemetrySource: 'editor.overlayToolbar',
                toolbarOptions: {
                    primaryGroup: () => true,
                    useSeparatorsInPrimaryActions: true
                },
            });
            reader.store.add(toolbar);
            reader.store.add(autorun(reader => {
                const context = _toolbarContext.read(reader);
                toolbar.context = context;
            }));
        }));
    }
};
FloatingEditorToolbarWidget = __decorate([
    __param(3, IInstantiationService),
    __param(4, IKeybindingService),
    __param(5, IMenuService)
], FloatingEditorToolbarWidget);

export { FloatingEditorToolbar, FloatingEditorToolbarWidget };
