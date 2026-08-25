import { onDidRegisterWindow, onWillUnregisterWindow, getWindow, EventType, addDisposableListener, append, $ as $$1, trackFocus, isAncestor, isHTMLElement, reset, isAncestorOfActiveElement, getActiveWindow, addDisposableGenericMouseUpListener, addDisposableGenericMouseDownListener, addDisposableGenericMouseMoveListener } from '../../../base/browser/dom.js';
import { createStyleSheet } from '../../../base/browser/domStylesheets.js';
import { ToolBar } from '../../../base/browser/ui/toolbar/toolbar.js';
import { Button } from '../../../base/browser/ui/button/button.js';
import { CountBadge } from '../../../base/browser/ui/countBadge/countBadge.js';
import { ProgressBar } from '../../../base/browser/ui/progressbar/progressbar.js';
import { CancellationToken } from '../../../base/common/cancellation.js';
import { Emitter, Event } from '../../../base/common/event.js';
import { Disposable, dispose } from '../../../base/common/lifecycle.js';
import Severity from '../../../base/common/severity.js';
import { isString } from '../../../base/common/types.js';
import { isModifierKey } from '../../../base/common/keyCodes.js';
import { localize } from '../../../nls.js';
import { QuickInputHideReason } from '../common/quickInput.js';
import { QuickInputBox } from './quickInputBox.js';
import { InQuickInputContextKey, QuickInputTypeContextKey, EndOfQuickInputBoxContextKey, QuickPick, InputBox, backButton, QuickInputAlignmentContextKey } from './quickInput.js';
import { ILayoutService } from '../../layout/browser/layoutService.js';
import { mainWindow } from '../../../base/browser/window.js';
import { IInstantiationService } from '../../instantiation/common/instantiation.js';
import { IContextMenuService } from '../../contextview/browser/contextView.js';
import { QuickInputList } from './quickInputList.js';
import { IContextKeyService } from '../../contextkey/common/contextkey.js';
import './quickInputActions.js';
import '../../../base/common/observableInternal/index.js';
import { StandardMouseEvent } from '../../../base/browser/mouseEvent.js';
import { IStorageService } from '../../storage/common/storage.js';
import { IConfigurationService } from '../../configuration/common/configuration.js';
import { setTimeout0, platform } from '../../../base/common/platform.js';
import { getWindowControlsStyle } from '../../window/common/window.js';
import { getZoomFactor } from '../../../base/browser/browser.js';
import { createToggleActionViewItemProvider, TriStateCheckbox } from '../../../base/browser/ui/toggle/toggle.js';
import { defaultCheckboxStyles } from '../../theme/browser/defaultStyles.js';
import { QuickInputTreeController } from './tree/quickInputTreeController.js';
import { QuickTree } from './tree/quickTree.js';
import { layout2d } from '../../../base/common/layout.js';
import { getAnchorRect } from '../../../base/browser/ui/contextview/contextview.js';
import { observableValue } from '../../../base/common/observableInternal/observables/observableValue.js';
import { autorun } from '../../../base/common/observableInternal/reactions/autorun.js';

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
var QuickInputController_1;
const $ = $$1;
const VIEWSTATE_STORAGE_KEY = 'workbench.quickInput.viewState';
let QuickInputController = class QuickInputController extends Disposable {
    static { QuickInputController_1 = this; }
    static { this.MAX_WIDTH = 600; } // Max total width of quick input widget
    get currentQuickInput() { return this.controller ?? undefined; }
    get container() { return this._container; }
    constructor(options, layoutService, instantiationService, contextKeyService, storageService, contextMenuService) {
        super();
        this.options = options;
        this.layoutService = layoutService;
        this.instantiationService = instantiationService;
        this.storageService = storageService;
        this.contextMenuService = contextMenuService;
        this.enabled = true;
        this.onDidAcceptEmitter = this._register(new Emitter());
        this.onDidCustomEmitter = this._register(new Emitter());
        this.onDidTriggerButtonEmitter = this._register(new Emitter());
        this.keyMods = { ctrlCmd: false, alt: false, shift: false };
        this.controller = null;
        this.onShowEmitter = this._register(new Emitter());
        this.onShow = this.onShowEmitter.event;
        this.onHideEmitter = this._register(new Emitter());
        this.onHide = this.onHideEmitter.event;
        this._alignment = observableValue(this, 'top');
        this.alignment = this._alignment;
        this.inQuickInputContext = InQuickInputContextKey.bindTo(contextKeyService);
        this.quickInputTypeContext = QuickInputTypeContextKey.bindTo(contextKeyService);
        this.endOfQuickInputBoxContext = EndOfQuickInputBoxContextKey.bindTo(contextKeyService);
        this.idPrefix = options.idPrefix;
        this._container = options.container;
        this.styles = options.styles;
        this._register(Event.runAndSubscribe(onDidRegisterWindow, ({ window, disposables }) => this.registerKeyModsListeners(window, disposables), { window: mainWindow, disposables: this._store }));
        this._register(onWillUnregisterWindow(window => {
            if (this.ui && getWindow(this.ui.container) === window) {
                // The window this quick input is contained in is about to
                // close, so we have to make sure to reparent it back to an
                // existing parent to not loose functionality.
                // (https://github.com/microsoft/vscode/issues/195870)
                this.reparentUI(this.layoutService.mainContainer);
                this.layout(this.layoutService.mainContainerDimension, this.layoutService.mainContainerOffset.quickPickTop);
            }
        }));
        this.viewState = this.loadViewState();
    }
    registerKeyModsListeners(window, disposables) {
        const listener = (e) => {
            this.keyMods.ctrlCmd = e.ctrlKey || e.metaKey;
            this.keyMods.alt = e.altKey;
            this.keyMods.shift = e.shiftKey;
        };
        for (const event of [EventType.KEY_DOWN, EventType.KEY_UP, EventType.MOUSE_DOWN]) {
            disposables.add(addDisposableListener(window, event, listener, true));
        }
    }
    getUI(showInActiveContainer) {
        if (this.ui) {
            // In order to support aux windows, re-parent the controller
            // if the original event is from a different document
            if (showInActiveContainer) {
                if (getWindow(this._container) !== getWindow(this.layoutService.activeContainer)) {
                    this.reparentUI(this.layoutService.activeContainer);
                    this.layout(this.layoutService.activeContainerDimension, this.layoutService.activeContainerOffset.quickPickTop);
                }
            }
            return this.ui;
        }
        const container = append(this._container, $('.quick-input-widget.show-file-icons'));
        container.tabIndex = -1;
        container.style.display = 'none';
        const styleSheet = createStyleSheet(container);
        const titleBar = append(container, $('.quick-input-titlebar'));
        const leftActionBar = this._register(new ToolBar(titleBar, this.contextMenuService, {
            hoverDelegate: this.options.hoverDelegate,
            actionViewItemProvider: createToggleActionViewItemProvider(this.styles.toggle),
            icon: true,
            label: false
        }));
        leftActionBar.getElement().classList.add('quick-input-left-action-bar');
        const title = append(titleBar, $('.quick-input-title'));
        const rightActionBar = this._register(new ToolBar(titleBar, this.contextMenuService, {
            hoverDelegate: this.options.hoverDelegate,
            actionViewItemProvider: createToggleActionViewItemProvider(this.styles.toggle),
            icon: true,
            label: false
        }));
        rightActionBar.getElement().classList.add('quick-input-right-action-bar');
        const headerContainer = append(container, $('.quick-input-header'));
        const checkAll = this._register(new TriStateCheckbox(localize(1827, "Toggle all checkboxes"), false, { ...defaultCheckboxStyles, size: 15 }));
        append(headerContainer, checkAll.domNode);
        this._register(checkAll.onChange(() => {
            const checked = checkAll.checked;
            list.setAllVisibleChecked(checked === true);
        }));
        this._register(addDisposableListener(checkAll.domNode, EventType.CLICK, e => {
            if (e.x || e.y) { // Avoid 'click' triggered by 'space'...
                inputBox.setFocus();
            }
        }));
        const description2 = append(headerContainer, $('.quick-input-description'));
        const inputContainer = append(headerContainer, $('.quick-input-and-message'));
        const filterContainer = append(inputContainer, $('.quick-input-filter'));
        const inputBox = this._register(new QuickInputBox(filterContainer, this.styles.inputBox, this.styles.toggle));
        inputBox.setAttribute('aria-describedby', `${this.idPrefix}message`);
        const visibleCountContainer = append(filterContainer, $('.quick-input-visible-count'));
        visibleCountContainer.setAttribute('aria-live', 'polite');
        visibleCountContainer.setAttribute('aria-atomic', 'true');
        const visibleCount = this._register(new CountBadge(visibleCountContainer, { countFormat: localize(1828, "{0} Results") }, this.styles.countBadge));
        const countContainer = append(filterContainer, $('.quick-input-count'));
        countContainer.setAttribute('aria-live', 'polite');
        const count = this._register(new CountBadge(countContainer, { countFormat: localize(1829, "{0} Selected") }, this.styles.countBadge));
        const inlineActionBar = this._register(new ToolBar(headerContainer, this.contextMenuService, {
            hoverDelegate: this.options.hoverDelegate,
            actionViewItemProvider: createToggleActionViewItemProvider(this.styles.toggle),
            icon: true,
            label: false
        }));
        inlineActionBar.getElement().classList.add('quick-input-inline-action-bar');
        const okContainer = append(headerContainer, $('.quick-input-action'));
        const ok = this._register(new Button(okContainer, this.styles.button));
        ok.label = localize(1830, "OK");
        this._register(ok.onDidClick(e => {
            this.onDidAcceptEmitter.fire();
        }));
        const customButtonContainer = append(headerContainer, $('.quick-input-action'));
        const customButton = this._register(new Button(customButtonContainer, { ...this.styles.button, supportIcons: true }));
        customButton.label = localize(1831, "Custom");
        this._register(customButton.onDidClick(e => {
            this.onDidCustomEmitter.fire();
        }));
        const message = append(inputContainer, $(`#${this.idPrefix}message.quick-input-message`));
        const progressBar = this._register(new ProgressBar(container, this.styles.progressBar));
        progressBar.getContainer().classList.add('quick-input-progress');
        const widget = append(container, $('.quick-input-html-widget'));
        widget.tabIndex = -1;
        const description1 = append(container, $('.quick-input-description'));
        // List
        const listId = this.idPrefix + 'list';
        const list = this._register(this.instantiationService.createInstance(QuickInputList, container, this.options.hoverDelegate, this.options.linkOpenerDelegate, listId, this.styles));
        inputBox.setAttribute('aria-controls', listId);
        this._register(list.onDidChangeFocus(() => {
            if (inputBox.hasFocus()) {
                const activeDescendant = list.getActiveDescendant();
                if (activeDescendant) {
                    inputBox.setAttribute('aria-activedescendant', activeDescendant);
                    inputBox.setListFocusMode(true);
                }
                else {
                    inputBox.removeAttribute('aria-activedescendant');
                    inputBox.setListFocusMode(false);
                }
            }
        }));
        this._register(list.onChangedAllVisibleChecked(checked => {
            // TODO: Support tri-state checkbox when we remove the .indent property that is faking tree structure.
            checkAll.checked = checked;
        }));
        this._register(list.onChangedVisibleCount(c => {
            visibleCount.setCount(c);
        }));
        this._register(list.onChangedCheckedCount(c => {
            // TODO@TylerLeonhardt: Without this setTimeout, the screen reader will not read out
            // the final count of checked items correctly. Investigate a better way
            // to do this. ref https://github.com/microsoft/vscode/issues/258617
            setTimeout0(() => count.setCount(c));
        }));
        this._register(list.onLeave(() => {
            // Defer to avoid the input field reacting to the triggering key.
            // TODO@TylerLeonhardt https://github.com/microsoft/vscode/issues/203675
            setTimeout(() => {
                if (!this.controller) {
                    return;
                }
                inputBox.setFocus();
                if (this.controller instanceof QuickPick && this.controller.canSelectMany) {
                    list.clearFocus();
                }
            }, 0);
        }));
        // Tree
        const tree = this._register(this.instantiationService.createInstance(QuickInputTreeController, container, this.options.hoverDelegate, this.styles));
        this._register(tree.tree.onDidChangeFocus(() => {
            if (inputBox.hasFocus()) {
                const activeDescendant = tree.getActiveDescendant();
                if (activeDescendant) {
                    inputBox.setAttribute('aria-activedescendant', activeDescendant);
                    inputBox.setListFocusMode(true);
                }
                else {
                    inputBox.removeAttribute('aria-activedescendant');
                    inputBox.setListFocusMode(false);
                }
            }
        }));
        this._register(tree.onLeave(() => {
            // Defer to avoid the input field reacting to the triggering key.
            // TODO@TylerLeonhardt https://github.com/microsoft/vscode/issues/203675
            setTimeout(() => {
                if (!this.controller) {
                    return;
                }
                inputBox.setFocus();
                tree.tree.setFocus([]);
            }, 0);
        }));
        // Wire up tree's accept event to the UI's accept emitter for non-pickable items
        this._register(tree.onDidAccept(() => {
            this.onDidAcceptEmitter.fire();
        }));
        this._register(tree.tree.onDidChangeContentHeight(() => this.updateLayout()));
        const focusTracker = trackFocus(container);
        this._register(focusTracker);
        this._register(addDisposableListener(container, EventType.FOCUS, e => {
            const ui = this.getUI();
            if (isAncestor(e.relatedTarget, ui.inputContainer)) {
                const value = ui.inputBox.isSelectionAtEnd();
                if (this.endOfQuickInputBoxContext.get() !== value) {
                    this.endOfQuickInputBoxContext.set(value);
                }
            }
            // Ignore focus events within container
            if (isAncestor(e.relatedTarget, ui.container)) {
                return;
            }
            this.inQuickInputContext.set(true);
            this.previousFocusElement = isHTMLElement(e.relatedTarget) ? e.relatedTarget : undefined;
        }, true));
        this._register(focusTracker.onDidBlur(() => {
            if (!this.getUI().ignoreFocusOut && !this.options.ignoreFocusOut()) {
                this.hide(QuickInputHideReason.Blur);
            }
            this.inQuickInputContext.set(false);
            this.endOfQuickInputBoxContext.set(false);
            this.previousFocusElement = undefined;
        }));
        this._register(inputBox.onKeyDown(e => {
            const value = this.getUI().inputBox.isSelectionAtEnd();
            if (this.endOfQuickInputBoxContext.get() !== value) {
                this.endOfQuickInputBoxContext.set(value);
            }
            // Allow screen readers to read what's in the input
            // Note: this works for arrow keys and selection changes,
            // but not for deletions since that often triggers a
            // change in the list.
            // Don't remove aria-activedescendant when only modifier keys are pressed
            // to prevent screen reader re-announcements when users press Ctrl to silence speech.
            // See: https://github.com/microsoft/vscode/issues/271032
            if (!isModifierKey(e.keyCode)) {
                inputBox.removeAttribute('aria-activedescendant');
                // Reset ARIA popup mode to allow normal text editing with arrow keys
                inputBox.setListFocusMode(false);
            }
        }));
        this._register(addDisposableListener(container, EventType.FOCUS, (e) => {
            inputBox.setFocus();
        }));
        // Drag and Drop support
        this.dndController = this._register(this.instantiationService.createInstance(QuickInputDragAndDropController, this._container, container, [
            {
                node: titleBar,
                includeChildren: true,
                excludeNodes: [leftActionBar.getElement(), rightActionBar.getElement()]
            },
            {
                node: headerContainer,
                includeChildren: false
            }
        ], this.viewState));
        // DnD update layout
        this._register(autorun(reader => {
            const dndViewState = this.dndController?.dndViewState.read(reader);
            if (!dndViewState) {
                return;
            }
            if (dndViewState.top !== undefined && dndViewState.left !== undefined) {
                this.viewState = {
                    ...this.viewState,
                    top: dndViewState.top,
                    left: dndViewState.left
                };
            }
            else {
                // Reset position/size
                this.viewState = undefined;
            }
            this.updateLayout();
            // Save position
            if (dndViewState.done) {
                this.saveViewState(this.viewState);
            }
        }));
        // Mirror DnD alignment into the stable observable
        this._register(autorun(reader => {
            this._alignment.set(this.dndController.alignment.read(reader), undefined);
        }));
        this.ui = {
            container,
            styleSheet,
            leftActionBar,
            titleBar,
            title,
            description1,
            description2,
            widget,
            rightActionBar,
            inlineActionBar,
            checkAll,
            inputContainer,
            filterContainer,
            inputBox,
            visibleCountContainer,
            visibleCount,
            countContainer,
            count,
            okContainer,
            ok,
            message,
            customButtonContainer,
            customButton,
            list,
            tree,
            progressBar,
            onDidAccept: this.onDidAcceptEmitter.event,
            onDidCustom: this.onDidCustomEmitter.event,
            onDidTriggerButton: this.onDidTriggerButtonEmitter.event,
            ignoreFocusOut: false,
            keyMods: this.keyMods,
            show: controller => this.show(controller),
            hide: () => this.hide(),
            setVisibilities: visibilities => this.setVisibilities(visibilities),
            setEnabled: enabled => this.setEnabled(enabled),
            setContextKey: contextKey => this.options.setContextKey(contextKey),
            linkOpenerDelegate: content => this.options.linkOpenerDelegate(content)
        };
        this.updateStyles();
        return this.ui;
    }
    reparentUI(container) {
        if (this.ui) {
            this._container = container;
            append(this._container, this.ui.container);
            this.dndController?.reparentUI(this._container);
        }
    }
    pick(picks, options = {}, token = CancellationToken.None) {
        return new Promise((doResolve, reject) => {
            let resolve = (result) => {
                resolve = doResolve;
                options.onKeyMods?.(input.keyMods);
                doResolve(result);
            };
            if (token.isCancellationRequested) {
                resolve(undefined);
                return;
            }
            const input = this.createQuickPick({ useSeparators: true });
            let activeItem;
            const disposables = [
                input,
                input.onDidAccept(() => {
                    if (input.canSelectMany) {
                        resolve(input.selectedItems.slice());
                        input.hide();
                    }
                    else {
                        const result = input.activeItems[0];
                        if (result) {
                            resolve(result);
                            input.hide();
                        }
                    }
                }),
                input.onDidChangeActive(items => {
                    const focused = items[0];
                    if (focused && options.onDidFocus) {
                        options.onDidFocus(focused);
                    }
                }),
                input.onDidChangeSelection(items => {
                    if (!input.canSelectMany) {
                        const result = items[0];
                        if (result) {
                            resolve(result);
                            input.hide();
                        }
                    }
                }),
                input.onDidTriggerItemButton(event => options.onDidTriggerItemButton && options.onDidTriggerItemButton({
                    ...event,
                    removeItem: () => {
                        const index = input.items.indexOf(event.item);
                        if (index !== -1) {
                            const items = input.items.slice();
                            const removed = items.splice(index, 1);
                            const activeItems = input.activeItems.filter(activeItem => activeItem !== removed[0]);
                            const keepScrollPositionBefore = input.keepScrollPosition;
                            input.keepScrollPosition = true;
                            input.items = items;
                            if (activeItems) {
                                input.activeItems = activeItems;
                            }
                            input.keepScrollPosition = keepScrollPositionBefore;
                        }
                    }
                })),
                input.onDidTriggerSeparatorButton(event => options.onDidTriggerSeparatorButton?.(event)),
                input.onDidChangeValue(value => {
                    if (activeItem && !value && (input.activeItems.length !== 1 || input.activeItems[0] !== activeItem)) {
                        input.activeItems = [activeItem];
                    }
                }),
                token.onCancellationRequested(() => {
                    input.hide();
                }),
                input.onDidHide(() => {
                    dispose(disposables);
                    resolve(undefined);
                }),
            ];
            input.title = options.title;
            if (options.value) {
                input.value = options.value;
            }
            input.canSelectMany = !!options.canPickMany;
            input.placeholder = options.placeHolder;
            input.prompt = options.prompt;
            input.ignoreFocusOut = !!options.ignoreFocusLost;
            input.matchOnDescription = !!options.matchOnDescription;
            input.matchOnDetail = !!options.matchOnDetail;
            if (options.sortByLabel !== undefined) {
                input.sortByLabel = options.sortByLabel;
            }
            input.matchOnLabel = (options.matchOnLabel === undefined) || options.matchOnLabel; // default to true
            input.quickNavigate = options.quickNavigate;
            input.hideInput = !!options.hideInput;
            input.contextKey = options.contextKey;
            input.anchor = options.anchor;
            input.anchorPosition = options.anchorPosition;
            input.busy = true;
            Promise.all([picks, options.activeItem])
                .then(([items, _activeItem]) => {
                activeItem = _activeItem;
                input.busy = false;
                input.items = items;
                if (input.canSelectMany) {
                    input.selectedItems = items.filter(item => item.type !== 'separator' && item.picked);
                }
                if (activeItem) {
                    input.activeItems = [activeItem];
                }
            });
            input.show();
            Promise.resolve(picks).then(undefined, err => {
                reject(err);
                input.hide();
            });
        });
    }
    setValidationOnInput(input, validationResult) {
        if (validationResult && isString(validationResult)) {
            input.severity = Severity.Error;
            input.validationMessage = validationResult;
        }
        else if (validationResult && !isString(validationResult)) {
            input.severity = validationResult.severity;
            input.validationMessage = validationResult.content;
        }
        else {
            input.severity = Severity.Ignore;
            input.validationMessage = undefined;
        }
    }
    input(options = {}, token = CancellationToken.None) {
        return new Promise((resolve) => {
            if (token.isCancellationRequested) {
                resolve(undefined);
                return;
            }
            const input = this.createInputBox();
            const validateInput = options.validateInput || (() => Promise.resolve(undefined));
            const onDidValueChange = Event.debounce(input.onDidChangeValue, (last, cur) => cur, 100);
            let validationValue = options.value || '';
            let validation = Promise.resolve(validateInput(validationValue));
            const disposables = [
                input,
                onDidValueChange(value => {
                    if (value !== validationValue) {
                        validation = Promise.resolve(validateInput(value));
                        validationValue = value;
                    }
                    validation.then(result => {
                        if (value === validationValue) {
                            this.setValidationOnInput(input, result);
                        }
                    });
                }),
                input.onDidAccept(() => {
                    const value = input.value;
                    if (value !== validationValue) {
                        validation = Promise.resolve(validateInput(value));
                        validationValue = value;
                    }
                    validation.then(result => {
                        if (!result || (!isString(result) && result.severity !== Severity.Error)) {
                            resolve(value);
                            input.hide();
                        }
                        else if (value === validationValue) {
                            this.setValidationOnInput(input, result);
                        }
                    });
                }),
                token.onCancellationRequested(() => {
                    input.hide();
                }),
                input.onDidHide(() => {
                    dispose(disposables);
                    resolve(undefined);
                }),
            ];
            input.title = options.title;
            input.value = options.value || '';
            input.valueSelection = options.valueSelection;
            input.prompt = options.prompt;
            input.placeholder = options.placeHolder;
            input.password = !!options.password;
            input.ignoreFocusOut = !!options.ignoreFocusLost;
            input.show();
        });
    }
    createQuickPick(options = { useSeparators: false }) {
        const ui = this.getUI(true);
        return new QuickPick(ui);
    }
    createInputBox() {
        const ui = this.getUI(true);
        return new InputBox(ui);
    }
    show(controller) {
        const ui = this.getUI(true);
        const oldController = this.controller;
        this.controller = controller;
        oldController?.didHide();
        // Anchored controllers always render in the window that owns their anchor element.
        if (isHTMLElement(controller.anchor)) {
            const anchorWindow = getWindow(controller.anchor);
            if (getWindow(this._container) !== anchorWindow) {
                this.reparentUI(this.layoutService.getContainer(anchorWindow));
            }
        }
        this.setEnabled(true);
        ui.leftActionBar.setActions([]);
        ui.title.textContent = '';
        ui.description1.textContent = '';
        ui.description2.textContent = '';
        reset(ui.widget);
        ui.rightActionBar.setActions([]);
        ui.inlineActionBar.setActions([]);
        ui.checkAll.checked = false;
        // ui.inputBox.value = ''; Avoid triggering an event.
        ui.inputBox.placeholder = '';
        ui.inputBox.password = false;
        ui.inputBox.showDecoration(Severity.Ignore);
        ui.visibleCount.setCount(0);
        ui.count.setCount(0);
        ui.countContainer.style.right = '4px';
        reset(ui.message);
        ui.progressBar.stop();
        ui.progressBar.getContainer().setAttribute('aria-hidden', 'true');
        ui.list.setElements([]);
        ui.list.matchOnDescription = false;
        ui.list.matchOnDetail = false;
        ui.list.matchOnLabel = true;
        ui.list.sortByLabel = true;
        ui.tree.updateFilterOptions({
            matchOnDescription: false,
            matchOnLabel: true
        });
        ui.tree.sortByLabel = true;
        ui.ignoreFocusOut = false;
        ui.inputBox.toggles = undefined;
        ui.inputBox.actions = undefined;
        const backKeybindingLabel = this.options.backKeybindingLabel();
        backButton.tooltip = backKeybindingLabel ? localize(1832, "Back ({0})", backKeybindingLabel) : localize(1833, "Back");
        ui.container.style.display = '';
        this.updateLayout();
        this.dndController?.setEnabled(!controller.anchor);
        this.dndController?.layoutContainer();
        if (controller.anchor) {
            // Anchored quick inputs are positioned near a specific element, not
            // at the default top location, so report them as custom-positioned.
            this._alignment.set('custom', undefined);
        }
        else {
            // Re-sync from DnD in case a previous anchored input left us stale.
            this._alignment.set(this.dndController?.alignment.get() ?? 'top', undefined);
        }
        this.onShowEmitter.fire();
        ui.inputBox.setFocus();
        this.quickInputTypeContext.set(controller.type);
    }
    isVisible() {
        return !!this.ui && this.ui.container.style.display !== 'none';
    }
    setVisibilities(visibilities) {
        const ui = this.getUI();
        ui.title.style.display = visibilities.title ? '' : 'none';
        ui.description1.style.display = visibilities.description && (visibilities.inputBox || visibilities.checkAll) ? '' : 'none';
        ui.description2.style.display = visibilities.description && !(visibilities.inputBox || visibilities.checkAll) ? '' : 'none';
        ui.checkAll.domNode.style.display = visibilities.checkAll ? '' : 'none';
        ui.inputContainer.style.display = visibilities.inputBox ? '' : 'none';
        ui.filterContainer.style.display = visibilities.inputBox ? '' : 'none';
        ui.visibleCountContainer.style.display = visibilities.visibleCount ? '' : 'none';
        ui.countContainer.style.display = visibilities.count ? '' : 'none';
        ui.okContainer.style.display = visibilities.ok ? '' : 'none';
        ui.customButtonContainer.style.display = visibilities.customButton ? '' : 'none';
        ui.message.style.display = visibilities.message ? '' : 'none';
        ui.progressBar.getContainer().style.display = visibilities.progressBar ? '' : 'none';
        ui.list.displayed = !!visibilities.list;
        ui.tree.displayed = !!visibilities.tree;
        ui.container.classList.toggle('show-checkboxes', !!visibilities.checkBox);
        ui.container.classList.toggle('hidden-input', !visibilities.inputBox && !visibilities.description);
        this.updateLayout(); // TODO
    }
    setEnabled(enabled) {
        if (enabled !== this.enabled) {
            this.enabled = enabled;
            const ui = this.getUI();
            for (let i = 0; i < ui.leftActionBar.getItemsLength(); i++) {
                const action = ui.leftActionBar.getItemAction(i);
                if (action) {
                    action.enabled = enabled;
                }
            }
            for (let i = 0; i < ui.rightActionBar.getItemsLength(); i++) {
                const action = ui.rightActionBar.getItemAction(i);
                if (action) {
                    action.enabled = enabled;
                }
            }
            if (enabled) {
                ui.checkAll.enable();
            }
            else {
                ui.checkAll.disable();
            }
            ui.inputBox.enabled = enabled;
            ui.ok.enabled = enabled;
            ui.list.enabled = enabled;
        }
    }
    hide(reason) {
        const controller = this.controller;
        if (!controller) {
            return;
        }
        controller.willHide(reason);
        const container = this.ui?.container;
        const focusChanged = container && !isAncestorOfActiveElement(container);
        this.controller = null;
        this.onHideEmitter.fire();
        if (container) {
            container.style.display = 'none';
        }
        if (!focusChanged) {
            let currentElement = this.previousFocusElement;
            while (currentElement && !currentElement.offsetParent) {
                currentElement = currentElement.parentElement ?? undefined;
            }
            if (currentElement?.offsetParent) {
                currentElement.focus();
                this.previousFocusElement = undefined;
            }
            else {
                this.options.returnFocus();
            }
        }
        controller.didHide(reason);
    }
    toggle() {
        if (!this.isVisible()) {
            return;
        }
        if (this.controller instanceof QuickPick && this.controller.canSelectMany) {
            this.getUI().list.toggleCheckbox();
        }
        else if (this.controller instanceof QuickTree) {
            this.getUI().tree.toggleCheckbox();
        }
    }
    toggleHover() {
        if (this.isVisible() && this.controller instanceof QuickPick) {
            this.getUI().list.toggleHover();
        }
    }
    layout(dimension, titleBarOffset) {
        this.dimension = dimension;
        this.titleBarOffset = titleBarOffset;
        this.updateLayout();
    }
    updateLayout() {
        if (this.ui && this.isVisible()) {
            const style = this.ui.container.style;
            let width = Math.min(this.dimension.width * 0.62 /* golden cut */, QuickInputController_1.MAX_WIDTH);
            style.width = width + 'px';
            let listHeight = this.dimension && this.dimension.height * 0.4;
            // Position
            if (this.controller?.anchor) {
                const target = this.controller.anchor;
                const isElement = isHTMLElement(target);
                const anchorWindow = isElement ? getWindow(target) : getActiveWindow();
                const container = this.layoutService.getContainer(anchorWindow).getBoundingClientRect();
                const verticalPadding = 6 + 26 + 16; // Accounts for input box and padding
                let anchor = getAnchorRect(target);
                let preferredAnchorPosition = 1 /* AnchorPosition.ABOVE */;
                let listHeightRatio = 0.2;
                let maxListHeight = 200;
                if (this.controller.anchorPosition === 'overlay') {
                    width = anchor.width + 12;
                    listHeightRatio = 0.4;
                    anchor = {
                        top: anchor.top - 7,
                        left: anchor.left - 7,
                        width: anchor.width,
                        height: 0
                    };
                    maxListHeight = Math.min(400, container.bottom - anchor.top - verticalPadding);
                    preferredAnchorPosition = 0 /* AnchorPosition.BELOW */;
                }
                else {
                    width = 380;
                }
                listHeight = this.dimension ? Math.min(this.dimension.height * listHeightRatio, maxListHeight) : maxListHeight;
                // Beware:
                // We need to add some extra pixels to the height to account for the input and padding.
                const containerHeight = Math.floor(listHeight) + verticalPadding;
                const { top, left, right, bottom, anchorAlignment, anchorPosition } = layout2d(container, { width, height: containerHeight }, anchor, { anchorPosition: preferredAnchorPosition });
                if (anchorAlignment === 1 /* AnchorAlignment.RIGHT */) {
                    style.right = `${right}px`;
                    style.left = 'initial';
                }
                else {
                    style.left = `${left}px`;
                    style.right = 'initial';
                }
                if (anchorPosition === 1 /* AnchorPosition.ABOVE */) {
                    style.bottom = `${bottom}px`;
                    style.top = 'initial';
                }
                else {
                    style.top = `${top}px`;
                    style.bottom = 'initial';
                }
                style.width = `${width}px`;
                style.height = '';
            }
            else {
                style.top = `${this.viewState?.top !== undefined ? Math.round(this.dimension.height * this.viewState.top) : this.titleBarOffset}px`;
                style.left = `${Math.round((this.dimension.width * (this.viewState?.left ?? 0.5 /* center */)) - (width / 2))}px`;
                style.right = '';
                style.bottom = '';
                style.height = '';
            }
            this.ui.inputBox.layout();
            this.ui.list.layout(listHeight);
            this.ui.tree.layout(listHeight);
        }
    }
    applyStyles(styles) {
        this.styles = styles;
        this.updateStyles();
    }
    updateStyles() {
        if (this.ui) {
            const { quickInputTitleBackground, quickInputBackground, quickInputForeground, widgetBorder, } = this.styles.widget;
            this.ui.titleBar.style.backgroundColor = quickInputTitleBackground ?? '';
            this.ui.container.style.backgroundColor = quickInputBackground ?? '';
            this.ui.container.style.color = quickInputForeground ?? '';
            this.ui.container.style.border = widgetBorder ? `1px solid ${widgetBorder}` : '';
            this.ui.list.style(this.styles.list);
            this.ui.tree.tree.style(this.styles.list);
            const content = [];
            if (this.styles.pickerGroup.pickerGroupBorder) {
                content.push(`.quick-input-list .quick-input-list-entry { border-top-color:  ${this.styles.pickerGroup.pickerGroupBorder}; }`);
            }
            if (this.styles.pickerGroup.pickerGroupForeground) {
                content.push(`.quick-input-list .quick-input-list-separator { color:  ${this.styles.pickerGroup.pickerGroupForeground}; }`);
            }
            if (this.styles.pickerGroup.pickerGroupForeground) {
                content.push(`.quick-input-list .quick-input-list-separator-as-item { color: var(--vscode-descriptionForeground); }`);
            }
            if (this.styles.keybindingLabel.keybindingLabelBackground ||
                this.styles.keybindingLabel.keybindingLabelBorder ||
                this.styles.keybindingLabel.keybindingLabelBottomBorder ||
                this.styles.keybindingLabel.keybindingLabelShadow ||
                this.styles.keybindingLabel.keybindingLabelForeground) {
                content.push('.quick-input-list .monaco-keybinding > .monaco-keybinding-key {');
                if (this.styles.keybindingLabel.keybindingLabelBackground) {
                    content.push(`background-color: ${this.styles.keybindingLabel.keybindingLabelBackground};`);
                }
                if (this.styles.keybindingLabel.keybindingLabelBorder) {
                    // Order matters here. `border-color` must come before `border-bottom-color`.
                    content.push(`border-color: ${this.styles.keybindingLabel.keybindingLabelBorder};`);
                }
                if (this.styles.keybindingLabel.keybindingLabelBottomBorder) {
                    content.push(`border-bottom-color: ${this.styles.keybindingLabel.keybindingLabelBottomBorder};`);
                }
                if (this.styles.keybindingLabel.keybindingLabelShadow) {
                    content.push(`box-shadow: inset 0 -1px 0 ${this.styles.keybindingLabel.keybindingLabelShadow};`);
                }
                if (this.styles.keybindingLabel.keybindingLabelForeground) {
                    content.push(`color: ${this.styles.keybindingLabel.keybindingLabelForeground};`);
                }
                content.push('}');
            }
            const newStyles = content.join('\n');
            if (newStyles !== this.ui.styleSheet.textContent) {
                this.ui.styleSheet.textContent = newStyles;
            }
        }
    }
    loadViewState() {
        try {
            const data = JSON.parse(this.storageService.get(VIEWSTATE_STORAGE_KEY, -1 /* StorageScope.APPLICATION */, '{}'));
            if (data.top !== undefined || data.left !== undefined) {
                return data;
            }
        }
        catch { }
        return undefined;
    }
    saveViewState(viewState) {
        const isMainWindow = this.layoutService.activeContainer === this.layoutService.mainContainer;
        if (!isMainWindow) {
            return;
        }
        if (viewState !== undefined) {
            this.storageService.store(VIEWSTATE_STORAGE_KEY, JSON.stringify(viewState), -1 /* StorageScope.APPLICATION */, 1 /* StorageTarget.MACHINE */);
        }
        else {
            this.storageService.remove(VIEWSTATE_STORAGE_KEY, -1 /* StorageScope.APPLICATION */);
        }
    }
};
QuickInputController = QuickInputController_1 = __decorate([
    __param(1, ILayoutService),
    __param(2, IInstantiationService),
    __param(3, IContextKeyService),
    __param(4, IStorageService),
    __param(5, IContextMenuService)
], QuickInputController);
let QuickInputDragAndDropController = class QuickInputDragAndDropController extends Disposable {
    constructor(_container, _quickInputContainer, _quickInputDragAreas, initialViewState, _layoutService, contextKeyService, configurationService) {
        super();
        this._container = _container;
        this._quickInputContainer = _quickInputContainer;
        this._quickInputDragAreas = _quickInputDragAreas;
        this._layoutService = _layoutService;
        this.configurationService = configurationService;
        this.dndViewState = observableValue(this, undefined);
        this._enabled = true;
        this._snapThreshold = 20;
        this._snapLineHorizontalRatio = 0.25;
        this._alignment = observableValue(this, 'top');
        this.alignment = this._alignment;
        this._quickInputAlignmentContext = QuickInputAlignmentContextKey.bindTo(contextKeyService);
        const customWindowControls = getWindowControlsStyle(this.configurationService) === "custom" /* WindowControlsStyle.CUSTOM */;
        // Do not allow the widget to overflow or underflow window controls.
        // Use CSS calculations to avoid having to force layout with `.clientWidth`
        this._controlsOnLeft = customWindowControls && platform === 1 /* Platform.Mac */;
        this._controlsOnRight = customWindowControls && (platform === 3 /* Platform.Windows */ || platform === 2 /* Platform.Linux */);
        this._registerLayoutListener();
        this.registerMouseListeners();
        this.dndViewState.set({ ...initialViewState, done: true }, undefined);
        // Initialize alignment from restored state. The exact snap alignment will
        // be refined in layoutContainer() once pixel dimensions are available.
        if (initialViewState?.top !== undefined && initialViewState?.left !== undefined) {
            this._setAlignmentState(undefined);
        }
    }
    reparentUI(container) {
        this._container = container;
    }
    layoutContainer(dimension = this._layoutService.activeContainerDimension) {
        if (!this._enabled) {
            return;
        }
        const state = this.dndViewState.get();
        const dragAreaRect = this._quickInputContainer.getBoundingClientRect();
        if (state?.top !== undefined && state?.left !== undefined) {
            const a = Math.round(state.left * 1e2) / 1e2;
            const b = dimension.width;
            const c = dragAreaRect.width;
            const d = a * b - c / 2;
            this._layout(state.top * dimension.height, d);
        }
    }
    setEnabled(enabled) {
        this._enabled = enabled;
        this._quickInputContainer.classList.toggle('no-drag', !enabled);
    }
    _setAlignmentState(value) {
        this._quickInputAlignmentContext.set(value);
        this._alignment.set(value ?? 'custom', undefined);
    }
    _registerLayoutListener() {
        this._register(Event.filter(this._layoutService.onDidLayoutContainer, e => e.container === this._container)((e) => this.layoutContainer(e.dimension)));
    }
    registerMouseListeners() {
        const dragArea = this._quickInputContainer;
        // Double click
        this._register(addDisposableGenericMouseUpListener(dragArea, (event) => {
            if (!this._enabled) {
                return;
            }
            const originEvent = new StandardMouseEvent(getWindow(dragArea), event);
            if (originEvent.detail !== 2) {
                return;
            }
            // Ignore event if the target is not the drag area
            const area = this._quickInputDragAreas.find(({ node, includeChildren }) => includeChildren ? isAncestor(originEvent.target, node) : originEvent.target === node);
            if (!area || area.excludeNodes?.some(node => isAncestor(originEvent.target, node))) {
                return;
            }
            this.dndViewState.set({ top: undefined, left: undefined, done: true }, undefined);
            this._setAlignmentState('top');
        }));
        // Mouse down
        this._register(addDisposableGenericMouseDownListener(dragArea, (e) => {
            if (!this._enabled) {
                return;
            }
            const activeWindow = getWindow(this._layoutService.activeContainer);
            const originEvent = new StandardMouseEvent(activeWindow, e);
            // Ignore event if the target is not the drag area
            const area = this._quickInputDragAreas.find(({ node, includeChildren }) => includeChildren ? isAncestor(originEvent.target, node) : originEvent.target === node);
            if (!area || area.excludeNodes?.some(node => isAncestor(originEvent.target, node))) {
                return;
            }
            // Mouse position offset relative to dragArea
            const dragAreaRect = this._quickInputContainer.getBoundingClientRect();
            const dragOffsetX = originEvent.browserEvent.clientX - dragAreaRect.left;
            const dragOffsetY = originEvent.browserEvent.clientY - dragAreaRect.top;
            let isMovingQuickInput = false;
            const mouseMoveListener = addDisposableGenericMouseMoveListener(activeWindow, (e) => {
                const mouseMoveEvent = new StandardMouseEvent(activeWindow, e);
                mouseMoveEvent.preventDefault();
                if (!isMovingQuickInput) {
                    isMovingQuickInput = true;
                }
                this._layout(e.clientY - dragOffsetY, e.clientX - dragOffsetX);
            });
            const mouseUpListener = addDisposableGenericMouseUpListener(activeWindow, (e) => {
                if (isMovingQuickInput) {
                    // Save position
                    const state = this.dndViewState.get();
                    this.dndViewState.set({ top: state?.top, left: state?.left, done: true }, undefined);
                }
                // Dispose listeners
                mouseMoveListener.dispose();
                mouseUpListener.dispose();
            });
        }));
    }
    _layout(topCoordinate, leftCoordinate) {
        const snapCoordinateYTop = this._getTopSnapValue();
        const snapCoordinateY = this._getCenterYSnapValue();
        const snapCoordinateX = this._getCenterXSnapValue();
        // Make sure the quick input is not moved outside the container
        topCoordinate = Math.max(0, Math.min(topCoordinate, this._container.clientHeight - this._quickInputContainer.clientHeight));
        if (topCoordinate < this._layoutService.activeContainerOffset.top) {
            if (this._controlsOnLeft) {
                leftCoordinate = Math.max(leftCoordinate, 80 / getZoomFactor(getActiveWindow()));
            }
            else if (this._controlsOnRight) {
                leftCoordinate = Math.min(leftCoordinate, this._container.clientWidth - this._quickInputContainer.clientWidth - (140 / getZoomFactor(getActiveWindow())));
            }
        }
        const snappingToTop = Math.abs(topCoordinate - snapCoordinateYTop) < this._snapThreshold;
        topCoordinate = snappingToTop ? snapCoordinateYTop : topCoordinate;
        const snappingToCenter = Math.abs(topCoordinate - snapCoordinateY) < this._snapThreshold;
        topCoordinate = snappingToCenter ? snapCoordinateY : topCoordinate;
        const top = topCoordinate / this._container.clientHeight;
        // Make sure the quick input is not moved outside the container
        leftCoordinate = Math.max(0, Math.min(leftCoordinate, this._container.clientWidth - this._quickInputContainer.clientWidth));
        const snappingToCenterX = Math.abs(leftCoordinate - snapCoordinateX) < this._snapThreshold;
        leftCoordinate = snappingToCenterX ? snapCoordinateX : leftCoordinate;
        const b = this._container.clientWidth;
        const c = this._quickInputContainer.clientWidth;
        const d = leftCoordinate;
        const left = (d + c / 2) / b;
        this.dndViewState.set({ top, left, done: false }, undefined);
        if (snappingToCenterX) {
            if (snappingToTop) {
                this._setAlignmentState('top');
                return;
            }
            else if (snappingToCenter) {
                this._setAlignmentState('center');
                return;
            }
        }
        this._setAlignmentState(undefined);
    }
    _getTopSnapValue() {
        return this._layoutService.activeContainerOffset.quickPickTop;
    }
    _getCenterYSnapValue() {
        return Math.round(this._container.clientHeight * this._snapLineHorizontalRatio);
    }
    _getCenterXSnapValue() {
        return Math.round(this._container.clientWidth / 2) - Math.round(this._quickInputContainer.clientWidth / 2);
    }
};
QuickInputDragAndDropController = __decorate([
    __param(4, ILayoutService),
    __param(5, IContextKeyService),
    __param(6, IConfigurationService)
], QuickInputDragAndDropController);

export { QuickInputController };
