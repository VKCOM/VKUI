import { isHTMLElement } from '../../dom.js';
import { ActionBar } from '../actionbar/actionbar.js';
import { DropdownMenuActionViewItem } from '../dropdown/dropdownActionViewItem.js';
import { Action, SubmenuAction, Separator } from '../../../common/actions.js';
import { Codicon } from '../../../common/codicons.js';
import { ThemeIcon } from '../../../common/themables.js';
import { EventMultiplexer } from '../../../common/event.js';
import { Disposable, DisposableStore, toDisposable } from '../../../common/lifecycle.js';
import './toolbar.css';
import { localize } from '../../../../nls.js';
import { createInstantHoverDelegate } from '../hover/hoverDelegateFactory.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const ACTION_MIN_WIDTH = 20; /* 20px codicon */
const ACTION_PADDING = 4; /* 4px padding */
const ACTION_MIN_WIDTH_VAR = '--vscode-toolbar-action-min-width';
/**
 * A widget that combines an action bar for primary actions and a dropdown for secondary actions.
 */
class ToolBar extends Disposable {
    get onDidChangeDropdownVisibility() { return this._onDidChangeDropdownVisibility.event; }
    constructor(container, contextMenuProvider, options = { orientation: 0 /* ActionsOrientation.HORIZONTAL */ }) {
        super();
        this.container = container;
        this.submenuActionViewItems = [];
        this.hasSecondaryActions = false;
        this._onDidChangeDropdownVisibility = this._register(new EventMultiplexer());
        this.originalPrimaryActions = [];
        this.originalSecondaryActions = [];
        this.hiddenActions = [];
        this.disposables = this._register(new DisposableStore());
        options.hoverDelegate = options.hoverDelegate ?? this._register(createInstantHoverDelegate());
        this.options = options;
        this.toggleMenuAction = this._register(new ToggleMenuAction(() => this.toggleMenuActionViewItem?.show(), options.toggleMenuTitle));
        this.element = document.createElement('div');
        this.element.className = 'monaco-toolbar';
        container.appendChild(this.element);
        this.actionBar = this._register(new ActionBar(this.element, {
            orientation: options.orientation,
            ariaLabel: options.ariaLabel,
            actionRunner: options.actionRunner,
            allowContextMenu: options.allowContextMenu,
            highlightToggledItems: options.highlightToggledItems,
            hoverDelegate: options.hoverDelegate,
            actionViewItemProvider: (action, viewItemOptions) => {
                if (action.id === ToggleMenuAction.ID) {
                    this.toggleMenuActionViewItem = new DropdownMenuActionViewItem(action, { getActions: () => this.toggleMenuAction.menuActions }, contextMenuProvider, {
                        actionViewItemProvider: this.options.actionViewItemProvider,
                        actionRunner: this.actionRunner,
                        keybindingProvider: this.options.getKeyBinding,
                        classNames: ThemeIcon.asClassNameArray(options.moreIcon ?? Codicon.toolBarMore),
                        anchorAlignmentProvider: this.options.anchorAlignmentProvider,
                        menuAsChild: !!this.options.renderDropdownAsChildElement,
                        skipTelemetry: this.options.skipTelemetry,
                        isMenu: true,
                        hoverDelegate: this.options.hoverDelegate
                    });
                    this.toggleMenuActionViewItem.setActionContext(this.actionBar.context);
                    this.disposables.add(this._onDidChangeDropdownVisibility.add(this.toggleMenuActionViewItem.onDidChangeVisibility));
                    return this.toggleMenuActionViewItem;
                }
                if (options.actionViewItemProvider) {
                    const result = options.actionViewItemProvider(action, viewItemOptions);
                    if (result) {
                        return result;
                    }
                }
                if (action instanceof SubmenuAction) {
                    const result = new DropdownMenuActionViewItem(action, action.actions, contextMenuProvider, {
                        actionViewItemProvider: this.options.actionViewItemProvider,
                        actionRunner: this.actionRunner,
                        keybindingProvider: this.options.getKeyBinding,
                        classNames: action.class,
                        anchorAlignmentProvider: this.options.anchorAlignmentProvider,
                        menuAsChild: !!this.options.renderDropdownAsChildElement,
                        skipTelemetry: this.options.skipTelemetry,
                        hoverDelegate: this.options.hoverDelegate
                    });
                    result.setActionContext(this.actionBar.context);
                    this.submenuActionViewItems.push(result);
                    this.disposables.add(this._onDidChangeDropdownVisibility.add(result.onDidChangeVisibility));
                    return result;
                }
                return undefined;
            }
        }));
        // Responsive support
        if (this.options.responsiveBehavior?.enabled) {
            this.element.classList.toggle('responsive', true);
            this.element.classList.toggle('responsive-all', this.options.responsiveBehavior.kind === 'all');
            this.element.classList.toggle('responsive-last', this.options.responsiveBehavior.kind === 'last');
            this.element.style.setProperty(ACTION_MIN_WIDTH_VAR, `${this.getConfiguredActionMinWidth()}px`);
            const observer = new ResizeObserver(() => {
                this.updateActions(this.getAvailableWidth());
            });
            observer.observe(this.options.responsiveBehavior?.observedElement ?? this.element);
            this._store.add(toDisposable(() => observer.disconnect()));
        }
    }
    set actionRunner(actionRunner) {
        this.actionBar.actionRunner = actionRunner;
    }
    get actionRunner() {
        return this.actionBar.actionRunner;
    }
    set context(context) {
        this.actionBar.context = context;
        this.toggleMenuActionViewItem?.setActionContext(context);
        for (const actionViewItem of this.submenuActionViewItems) {
            actionViewItem.setActionContext(context);
        }
    }
    getElement() {
        return this.element;
    }
    getItemAction(indexOrElement) {
        return this.actionBar.getAction(indexOrElement);
    }
    getItemWidth(index) {
        return this.actionBar.getWidth(index);
    }
    getItemsLength() {
        return this.actionBar.length();
    }
    setActions(primaryActions, secondaryActions) {
        this.clear();
        // Store primary and secondary actions as rendered initially
        this.originalPrimaryActions = primaryActions ? primaryActions.slice(0) : [];
        this.originalSecondaryActions = secondaryActions ? secondaryActions.slice(0) : [];
        const primaryActionsToSet = primaryActions ? primaryActions.slice(0) : [];
        // Inject additional action to open secondary actions if present
        this.hasSecondaryActions = !!(secondaryActions && secondaryActions.length > 0);
        if (this.hasSecondaryActions && secondaryActions) {
            this.toggleMenuAction.menuActions = secondaryActions.slice(0);
            primaryActionsToSet.push(this.toggleMenuAction);
        }
        if (primaryActionsToSet.length > 0 && this.options.trailingSeparator) {
            primaryActionsToSet.push(new Separator());
        }
        primaryActionsToSet.forEach(action => {
            this.actionBar.push(action, { icon: this.options.icon ?? true, label: this.options.label ?? false, keybinding: this.getKeybindingLabel(action) });
        });
        this.updateOverflowClassName();
        this.applyResponsiveActionMinWidths();
        if (this.options.responsiveBehavior?.enabled) {
            // Reset hidden actions
            this.hiddenActions.length = 0;
            // Set the minimum width
            if (this.options.responsiveBehavior?.minItems !== undefined) {
                const itemCount = this.options.responsiveBehavior.minItems;
                const primaryActionsMinWidth = this.originalPrimaryActions
                    .slice(0, itemCount)
                    .reduce((total, action) => total + this.getActionMinWidth(action), 0);
                // Account for overflow menu
                let overflowWidth = 0;
                if (this.originalSecondaryActions.length > 0 ||
                    itemCount < this.originalPrimaryActions.length) {
                    overflowWidth = ACTION_MIN_WIDTH + ACTION_PADDING;
                }
                this.container.style.minWidth = `${primaryActionsMinWidth + overflowWidth}px`;
                this.element.style.minWidth = `${primaryActionsMinWidth + overflowWidth}px`;
            }
            else {
                const minimumActionWidth = this.originalPrimaryActions.length > 0 ? this.getActionMinWidth(this.originalPrimaryActions[0]) : ACTION_MIN_WIDTH + ACTION_PADDING;
                this.container.style.minWidth = `${minimumActionWidth}px`;
                this.element.style.minWidth = `${minimumActionWidth}px`;
            }
            // Update toolbar actions to fit with container width
            this.updateActions(this.getAvailableWidth());
        }
    }
    getKeybindingLabel(action) {
        const key = this.options.getKeyBinding?.(action);
        return key?.getLabel() ?? undefined;
    }
    getConfiguredActionMinWidth(action) {
        if (action?.id === ToggleMenuAction.ID) {
            return ACTION_MIN_WIDTH;
        }
        return this.options.responsiveBehavior?.getActionMinWidth?.(action ?? this.toggleMenuAction)
            ?? this.options.responsiveBehavior?.actionMinWidth
            ?? ACTION_MIN_WIDTH;
    }
    getActionMinWidth(action) {
        return this.getConfiguredActionMinWidth(action) + ACTION_PADDING;
    }
    getAvailableWidth() {
        if (this.options.responsiveBehavior?.getAvailableWidth) {
            return this.options.responsiveBehavior.getAvailableWidth();
        }
        return this.element.getBoundingClientRect().width;
    }
    applyResponsiveActionMinWidths() {
        if (!this.options.responsiveBehavior?.enabled) {
            return;
        }
        if (this.options.responsiveBehavior.kind === 'last') {
            const hasToggleMenuAction = this.actionBar.hasAction(this.toggleMenuAction);
            const shrinkableIndex = hasToggleMenuAction ? this.actionBar.length() - 2 : this.actionBar.length() - 1;
            const shrinkableAction = shrinkableIndex >= 0 ? this.actionBar.getAction(shrinkableIndex) : undefined;
            const minWidth = `${this.getConfiguredActionMinWidth(shrinkableAction)}px`;
            if (this.element.style.getPropertyValue(ACTION_MIN_WIDTH_VAR) !== minWidth) {
                this.element.style.setProperty(ACTION_MIN_WIDTH_VAR, minWidth);
            }
            return;
        }
        const actionsContainer = this.actionBar.getContainer().firstElementChild;
        if (!isHTMLElement(actionsContainer)) {
            return;
        }
        for (let i = 0; i < actionsContainer.children.length; i++) {
            const actionItem = actionsContainer.children.item(i);
            if (!isHTMLElement(actionItem)) {
                continue;
            }
            const action = this.actionBar.getAction(i);
            const minWidth = `${this.getConfiguredActionMinWidth(action)}px`;
            if (actionItem.style.minWidth !== minWidth) {
                actionItem.style.minWidth = minWidth;
            }
        }
    }
    updateActions(containerWidth) {
        // Actions bar is empty
        if (this.actionBar.isEmpty()) {
            return;
        }
        this.applyResponsiveActionMinWidths();
        // Ensure that the container width respects the minimum width of the
        // element which is set based on the `responsiveBehavior.minItems` option
        const parsedMinWidth = parseInt(this.element.style.minWidth);
        containerWidth = Math.max(containerWidth, Number.isNaN(parsedMinWidth) ? 0 : parsedMinWidth);
        // Each action is assumed to have a minimum width so that actions with a label
        // can shrink to the action's minimum width. We do this so that action visibility
        // takes precedence over the action label.
        const actionBarWidth = (actualWidth) => {
            if (this.options.responsiveBehavior?.kind === 'last') {
                const hasToggleMenuAction = this.actionBar.hasAction(this.toggleMenuAction);
                const primaryActionsCount = hasToggleMenuAction
                    ? this.actionBar.length() - 1
                    : this.actionBar.length();
                if (primaryActionsCount === 0) {
                    return hasToggleMenuAction ? ACTION_MIN_WIDTH + ACTION_PADDING : 0;
                }
                let itemsWidth = 0;
                for (let i = 0; i < primaryActionsCount - 1; i++) {
                    itemsWidth += this.actionBar.getWidth(i) + ACTION_PADDING;
                }
                const action = this.actionBar.getAction(primaryActionsCount - 1);
                itemsWidth += actualWidth ? this.actionBar.getWidth(primaryActionsCount - 1) : this.getActionMinWidth(action); // item to shrink
                itemsWidth += hasToggleMenuAction ? ACTION_MIN_WIDTH + ACTION_PADDING : 0; // toggle menu action
                return itemsWidth;
            }
            else {
                let itemsWidth = 0;
                for (let i = 0; i < this.actionBar.length(); i++) {
                    itemsWidth += actualWidth ? this.actionBar.getWidth(i) : this.getActionMinWidth(this.actionBar.getAction(i));
                }
                return itemsWidth;
            }
        };
        const minimumWidth = actionBarWidth(false);
        // Action bar fits and there are no hidden actions to show
        if (minimumWidth <= containerWidth && this.hiddenActions.length === 0) {
            return;
        }
        if (minimumWidth > containerWidth) {
            // Check for max items limit
            if (this.options.responsiveBehavior?.minItems !== undefined) {
                const primaryActionsCount = this.actionBar.hasAction(this.toggleMenuAction)
                    ? this.actionBar.length() - 1
                    : this.actionBar.length();
                if (primaryActionsCount <= this.options.responsiveBehavior.minItems) {
                    return;
                }
            }
            // Hide actions from the right
            while (actionBarWidth(false) > containerWidth && this.actionBar.length() > 0) {
                const index = this.originalPrimaryActions.length - this.hiddenActions.length - 1;
                if (index < 0) {
                    break;
                }
                // Store the action and its size
                const action = this.originalPrimaryActions[index];
                const size = Math.min(this.getActionMinWidth(action), this.getItemWidth(index));
                this.hiddenActions.unshift({ action, size });
                // Remove the action
                this.actionBar.pull(index);
                // There are no secondary actions, but we have actions that we need to hide so we
                // create the overflow menu. This will ensure that another primary action will be
                // removed making space for the overflow menu.
                if (this.originalSecondaryActions.length === 0 && this.hiddenActions.length === 1) {
                    this.actionBar.push(this.toggleMenuAction, {
                        icon: this.options.icon ?? true,
                        label: this.options.label ?? false,
                        keybinding: this.getKeybindingLabel(this.toggleMenuAction),
                    });
                    this.updateOverflowClassName();
                }
                this.applyResponsiveActionMinWidths();
            }
        }
        else {
            // Show actions from the top of the toggle menu
            while (this.hiddenActions.length > 0) {
                const entry = this.hiddenActions.shift();
                if (actionBarWidth(true) + entry.size > containerWidth) {
                    // Not enough space to show the action
                    this.hiddenActions.unshift(entry);
                    break;
                }
                // Add the action
                this.actionBar.push(entry.action, {
                    icon: this.options.icon ?? true,
                    label: this.options.label ?? false,
                    keybinding: this.getKeybindingLabel(entry.action),
                    index: this.originalPrimaryActions.length - this.hiddenActions.length - 1
                });
                // There are no secondary actions, and there is only one hidden item left so we
                // remove the overflow menu making space for the last hidden action to be shown.
                if (this.originalSecondaryActions.length === 0 && this.hiddenActions.length === 0) {
                    this.toggleMenuAction.menuActions = [];
                    this.actionBar.pull(this.actionBar.length() - 1);
                    this.updateOverflowClassName();
                }
                this.applyResponsiveActionMinWidths();
            }
        }
        // Update overflow menu
        const hiddenActions = this.hiddenActions.map(entry => entry.action);
        if (this.originalSecondaryActions.length > 0 || hiddenActions.length > 0) {
            const secondaryActions = this.originalSecondaryActions.slice(0);
            this.toggleMenuAction.menuActions = Separator.join(hiddenActions, secondaryActions);
        }
        this.updateOverflowClassName();
        this.applyResponsiveActionMinWidths();
    }
    updateOverflowClassName() {
        this.actionBar.domNode.classList.toggle('has-overflow', this.actionBar.hasAction(this.toggleMenuAction));
    }
    clear() {
        this.submenuActionViewItems = [];
        this.disposables.clear();
        this.actionBar.clear();
    }
    dispose() {
        this.clear();
        this.disposables.dispose();
        this.element.remove();
        super.dispose();
    }
}
class ToggleMenuAction extends Action {
    static { this.ID = 'toolbar.toggle.more'; }
    constructor(toggleDropdownMenu, title) {
        title = title || localize(19, "More Actions...");
        super(ToggleMenuAction.ID, title, undefined, true);
        this._menuActions = [];
        this.toggleDropdownMenu = toggleDropdownMenu;
    }
    async run() {
        this.toggleDropdownMenu();
    }
    get menuActions() {
        return this._menuActions;
    }
    set menuActions(actions) {
        this._menuActions = actions;
    }
}

export { ToggleMenuAction, ToolBar };
