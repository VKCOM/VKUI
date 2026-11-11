import { setVisibility, clearNode, addDisposableListener, EventType, addDisposableGenericMouseDownListener, isHTMLElement, EventHelper, append, $, addStandardDisposableListener, addDisposableGenericMouseUpListener, isEditableElement, isActiveElement, isAncestorOfActiveElement, isMouseEvent, getActiveElement, getWindow, DisposableResizeObserver, scheduleAtNextAnimationFrame, SafeTriangle, getDomNodeZoomLevel } from '../../../base/browser/dom.js';
import { StandardKeyboardEvent } from '../../../base/browser/keyboardEvent.js';
import { renderMarkdown } from '../../../base/browser/markdownRenderer.js';
import { EventType as EventType$1 } from '../../../base/browser/touch.js';
import { ActionBar } from '../../../base/browser/ui/actionbar/actionbar.js';
import { getAnchorRect } from '../../../base/browser/ui/contextview/contextview.js';
import { KeybindingLabel } from '../../../base/browser/ui/keybindingLabel/keybindingLabel.js';
import { HoverAction } from '../../../base/browser/ui/hover/hoverWidget.js';
import { DomScrollableElement } from '../../../base/browser/ui/scrollbar/scrollableElement.js';
import { Switch } from '../../../base/browser/ui/toggle/switch.js';
import { List } from '../../../base/browser/ui/list/listWidget.js';
import { toAction, SubmenuAction } from '../../../base/common/actions.js';
import { CancellationTokenSource } from '../../../base/common/cancellation.js';
import { Codicon } from '../../../base/common/codicons.js';
import { Emitter } from '../../../base/common/event.js';
import { isMarkdownString, MarkdownString } from '../../../base/common/htmlContent.js';
import { DisposableStore, Disposable, MutableDisposable, toDisposable } from '../../../base/common/lifecycle.js';
import { OS } from '../../../base/common/platform.js';
import { ThemeIcon } from '../../../base/common/themables.js';
import { URI } from '../../../base/common/uri.js';
import './actionWidget.css';
import { localize } from '../../../nls.js';
import { IContextViewService } from '../../contextview/browser/contextView.js';
import { IKeybindingService } from '../../keybinding/common/keybinding.js';
import { IOpenerService } from '../../opener/common/opener.js';
import { Link } from '../../opener/browser/link.js';
import { defaultListStyles } from '../../theme/browser/defaultStyles.js';
import { asCssVariable } from '../../theme/common/colorUtils.js';
import '../../theme/common/colors/baseColors.js';
import '../../theme/common/colors/chartsColors.js';
import '../../theme/common/colors/editorColors.js';
import '../../theme/common/colors/inputColors.js';
import '../../theme/common/colors/listColors.js';
import '../../theme/common/colors/menuColors.js';
import '../../theme/common/colors/minimapColors.js';
import '../../theme/common/colors/miscColors.js';
import '../../theme/common/colors/quickpickColors.js';
import '../../theme/common/colors/searchColors.js';
import { ILayoutService } from '../../layout/browser/layoutService.js';
import { IInstantiationService } from '../../instantiation/common/instantiation.js';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var ActionListWidget_1;
const acceptSelectedActionCommand = 'acceptSelectedCodeAction';
const previewSelectedActionCommand = 'previewSelectedCodeAction';
const actionWidgetKeybindingCommands = new Set([acceptSelectedActionCommand, previewSelectedActionCommand, 'toggleSectionCodeAction']);
/** Action ID of the auto-appended toolbar action created from {@link IActionListItem.onRemove}. */
const removeToolbarActionId = 'actionList.remove';
class HeaderRenderer {
    get templateId() { return "header" /* ActionListItemKind.Header */; }
    renderTemplate(container) {
        container.classList.add('group-header');
        const text = document.createElement('span');
        container.append(text);
        return { container, text };
    }
    renderElement(element, _index, templateData) {
        templateData.text.textContent = element.group?.title ?? element.label ?? '';
    }
    disposeTemplate(_templateData) {
        // noop
    }
}
class SeparatorRenderer {
    get templateId() { return "separator" /* ActionListItemKind.Separator */; }
    renderTemplate(container) {
        container.classList.add('separator');
        const text = document.createElement('span');
        container.append(text);
        return { container, text };
    }
    renderElement(element, _index, templateData) {
        templateData.container.classList.toggle('has-label', !!element.label);
        templateData.text.textContent = element.label ?? '';
    }
    disposeTemplate(_templateData) {
        // noop
    }
}
/** Whether the row exposes a submenu or keyboard-accessible hover panel. */
function hasExpandablePanel(item) {
    return (!!item.submenuActions?.length && !item.hover?.content) || !!item.hover?.expandable;
}
function hasSubmenuIndicator(item) {
    return hasExpandablePanel(item) && item.hover?.showIndicator !== false;
}
let ActionItemRenderer = class ActionItemRenderer {
    get templateId() { return "action" /* ActionListItemKind.Action */; }
    constructor(_supportsPreview, _onRemoveItem, _onShowSubmenu, _reservesSubmenuSpace, _groupTitleByIndex, _linkHandler, _hideDefaultKeybindingTooltip, _stopToolbarPointerPropagation, _registerStandaloneToggle, _registerToolbar, _keybindingService, _openerService) {
        this._supportsPreview = _supportsPreview;
        this._onRemoveItem = _onRemoveItem;
        this._onShowSubmenu = _onShowSubmenu;
        this._reservesSubmenuSpace = _reservesSubmenuSpace;
        this._groupTitleByIndex = _groupTitleByIndex;
        this._linkHandler = _linkHandler;
        this._hideDefaultKeybindingTooltip = _hideDefaultKeybindingTooltip;
        this._stopToolbarPointerPropagation = _stopToolbarPointerPropagation;
        this._registerStandaloneToggle = _registerStandaloneToggle;
        this._registerToolbar = _registerToolbar;
        this._keybindingService = _keybindingService;
        this._openerService = _openerService;
    }
    renderTemplate(container) {
        container.classList.add(this.templateId);
        const icon = document.createElement('div');
        icon.className = 'icon';
        container.append(icon);
        const text = document.createElement('span');
        text.className = 'title';
        container.append(text);
        const badge = document.createElement('span');
        badge.className = 'action-item-badge';
        badge.ariaHidden = 'true';
        container.append(badge);
        const description = document.createElement('span');
        description.className = 'description';
        container.append(description);
        const groupTitle = document.createElement('span');
        groupTitle.className = 'group-title';
        container.append(groupTitle);
        const detail = document.createElement('span');
        detail.className = 'detail';
        container.append(detail);
        const keybinding = new KeybindingLabel(container, OS);
        const toolbar = document.createElement('div');
        toolbar.className = 'action-list-item-toolbar';
        container.append(toolbar);
        const submenuIndicator = document.createElement('div');
        submenuIndicator.className = 'action-list-submenu-indicator';
        container.append(submenuIndicator);
        const inlineToggleContainer = document.createElement('div');
        inlineToggleContainer.className = 'action-list-item-inline-toggle';
        container.append(inlineToggleContainer);
        const elementDisposables = new DisposableStore();
        return { container, icon, text, detail, badge, description, groupTitle, keybinding, toolbar, submenuIndicator, inlineToggleContainer, elementDisposables };
    }
    renderElement(element, _index, data) {
        // Clear previous element disposables
        data.elementDisposables.clear();
        if (element.iconClasses?.length) {
            data.icon.className = ['icon', ...element.iconClasses].join(' ');
            data.icon.style.color = '';
        }
        else if (element.group?.icon) {
            data.icon.className = ThemeIcon.asClassName(element.group.icon);
            data.icon.style.color = element.group.icon.color ? asCssVariable(element.group.icon.color.id) : '';
        }
        else {
            data.icon.className = ThemeIcon.asClassName(Codicon.lightBulb);
            data.icon.style.color = 'var(--vscode-editorLightBulb-foreground)';
        }
        if ((!element.item && !element.standaloneToggle) || !element.label) {
            return;
        }
        setVisibility(!element.hideIcon, data.icon);
        // Set aria-expanded for section toggle items
        if (element.isSectionToggle) {
            const expanded = element.group?.icon === Codicon.chevronDown;
            data.container.setAttribute('aria-expanded', String(expanded));
        }
        else {
            data.container.removeAttribute('aria-expanded');
        }
        // Apply optional className - clean up previous to avoid stale classes
        // from virtualized row reuse
        if (data.previousClassNames?.length) {
            data.container.classList.remove(...data.previousClassNames);
        }
        const classNames = element.className?.split(/\s+/).filter(name => name.length > 0) ?? [];
        data.container.classList.toggle('action-list-custom', classNames.length > 0);
        if (classNames.length) {
            data.container.classList.add(...classNames);
        }
        data.previousClassNames = classNames;
        data.text.textContent = stripNewlines(element.label);
        // Render optional badge
        if (element.badge) {
            data.badge.textContent = element.badge;
            data.badge.style.display = '';
        }
        else {
            data.badge.textContent = '';
            data.badge.style.display = 'none';
        }
        if (element.keybinding) {
            data.description.textContent = element.keybinding.getLabel();
            data.description.style.display = 'inline';
            data.description.style.letterSpacing = '0.5px';
        }
        else if (element.description) {
            clearNode(data.description);
            if (typeof element.description === 'string') {
                data.description.textContent = stripNewlines(element.description);
            }
            else {
                const rendered = renderMarkdown(element.description, {
                    actionHandler: (content) => {
                        const uri = URI.parse(content);
                        if (this._linkHandler) {
                            this._linkHandler(uri, element);
                        }
                        else {
                            void this._openerService.open(uri, { allowCommands: true });
                        }
                    }
                });
                data.elementDisposables.add(rendered);
                data.description.appendChild(rendered.element);
            }
            data.description.style.display = 'inline';
        }
        else {
            data.description.textContent = '';
            data.description.style.display = 'none';
        }
        // Render group title (shown to the right, separate from description)
        const groupTitleText = this._groupTitleByIndex.get(_index);
        if (groupTitleText) {
            data.groupTitle.textContent = groupTitleText;
            data.groupTitle.style.display = '';
        }
        else {
            data.groupTitle.textContent = '';
            data.groupTitle.style.display = 'none';
        }
        // Render optional detail (shown as second line below the label)
        if (element.detail) {
            data.detail.textContent = stripNewlines(element.detail);
            data.detail.style.display = '';
        }
        else {
            data.detail.textContent = '';
            data.detail.style.display = 'none';
        }
        data.container.classList.toggle('has-detail', !!element.detail);
        // Render optional inline toggle (shown as its own row below the detail)
        clearNode(data.inlineToggleContainer);
        const toggleConfig = element.standaloneToggle ?? element.inlineToggle;
        if (toggleConfig) {
            const toggleLabel = document.createElement('span');
            toggleLabel.className = 'action-list-item-inline-toggle-label';
            toggleLabel.textContent = stripNewlines(toggleConfig.label);
            if (!element.standaloneToggle) {
                data.inlineToggleContainer.append(toggleLabel);
            }
            data.inlineToggleContainer.style.display = '';
            data.container.classList.toggle('has-inline-toggle', !!element.inlineToggle);
            data.container.classList.toggle('has-standalone-toggle', !!element.standaloneToggle);
            const toggle = data.elementDisposables.add(new Switch({
                // Callers use `title` to say why a switch is unavailable, so it names the
                // control for a screen reader too rather than only appearing on hover.
                ariaLabel: toggleConfig.title ?? toggleConfig.label,
                checked: toggleConfig.checked,
                disabled: toggleConfig.disabled,
            }));
            data.inlineToggleContainer.append(toggle.domNode);
            if (element.standaloneToggle) {
                data.elementDisposables.add(this._registerStandaloneToggle(element, toggle));
            }
            data.elementDisposables.add(toggle.onChange(() => toggleConfig.onChange(toggle.checked)));
            // Keep clicks on the toggle row from selecting the item.
            data.elementDisposables.add(addDisposableListener(data.inlineToggleContainer, EventType.CLICK, e => e.stopPropagation()));
        }
        else {
            data.inlineToggleContainer.style.display = 'none';
            data.container.classList.remove('has-inline-toggle');
            data.container.classList.remove('has-standalone-toggle');
        }
        const actionTitle = this._keybindingService.lookupKeybinding(acceptSelectedActionCommand)?.getLabel();
        const previewTitle = this._keybindingService.lookupKeybinding(previewSelectedActionCommand)?.getLabel();
        data.container.classList.toggle('option-disabled', !!element.disabled);
        if (element.hover !== undefined) {
            // Don't show tooltip when hover content is configured - the rich hover will show instead
            data.container.title = '';
        }
        else if (element.tooltip) {
            data.container.title = element.tooltip;
        }
        else if (element.disabled) {
            data.container.title = element.label;
        }
        else if (element.standaloneToggle) {
            data.container.title = '';
        }
        else if (this._hideDefaultKeybindingTooltip) {
            data.container.title = '';
        }
        else if (actionTitle && previewTitle) {
            if (this._supportsPreview && element.canPreview) {
                data.container.title = localize(1731, "{0} to Apply, {1} to Preview", actionTitle, previewTitle);
            }
            else {
                data.container.title = localize(1732, "{0} to Apply", actionTitle);
            }
        }
        else {
            data.container.title = '';
        }
        // Clear and render toolbar actions
        clearNode(data.toolbar);
        const toolbarActions = [...(element.toolbarActions ?? [])];
        if (element.onRemove) {
            toolbarActions.push(toAction({
                id: removeToolbarActionId,
                label: localize(1733, "Remove"),
                class: ThemeIcon.asClassName(Codicon.close),
                run: async () => {
                    await element.onRemove();
                    this._onRemoveItem?.(element);
                },
            }));
        }
        data.container.classList.toggle('has-toolbar', toolbarActions.length > 0);
        if (toolbarActions.length > 0) {
            const actionBar = new ActionBar(data.toolbar);
            data.elementDisposables.add(actionBar);
            if (this._stopToolbarPointerPropagation) {
                data.elementDisposables.add(addDisposableGenericMouseDownListener(data.toolbar, e => {
                    e.preventDefault();
                    e.stopPropagation();
                }));
                data.elementDisposables.add(addDisposableListener(data.toolbar, EventType.CLICK, e => e.stopPropagation()));
                data.elementDisposables.add(addDisposableListener(data.toolbar, EventType$1.Tap, e => e.stopPropagation()));
            }
            else {
                data.elementDisposables.add(addDisposableGenericMouseDownListener(data.toolbar, e => e.preventDefault()));
            }
            actionBar.push(toolbarActions, { icon: true, label: false });
            data.elementDisposables.add(this._registerToolbar(element, actionBar));
        }
        if (hasSubmenuIndicator(element)) {
            data.submenuIndicator.className = 'action-list-submenu-indicator has-submenu ' + ThemeIcon.asClassName(Codicon.chevronRight);
            data.submenuIndicator.style.display = '';
            data.submenuIndicator.style.visibility = '';
            data.elementDisposables.add(addDisposableListener(data.submenuIndicator, EventType.CLICK, (e) => {
                e.stopPropagation();
                this._onShowSubmenu?.(element);
            }));
        }
        else if (this._reservesSubmenuSpace()) {
            // Reserve space for alignment when other items have submenus
            data.submenuIndicator.className = 'action-list-submenu-indicator';
            data.submenuIndicator.style.display = '';
            data.submenuIndicator.style.visibility = 'hidden';
        }
        else {
            data.submenuIndicator.className = 'action-list-submenu-indicator';
            data.submenuIndicator.style.display = 'none';
        }
        // Keyboard and screen-reader access remain available when the chevron is hidden.
        if (hasExpandablePanel(element)) {
            data.container.setAttribute('aria-haspopup', element.hover?.expandable ? 'dialog' : 'menu');
            data.container.setAttribute('aria-expanded', 'false');
        }
        else {
            data.container.removeAttribute('aria-haspopup');
            if (!element.isSectionToggle) {
                data.container.removeAttribute('aria-expanded');
            }
        }
    }
    disposeTemplate(templateData) {
        templateData.keybinding.dispose();
        templateData.elementDisposables.dispose();
    }
};
ActionItemRenderer = __decorate([
    __param(10, IKeybindingService),
    __param(11, IOpenerService)
], ActionItemRenderer);
class AcceptSelectedEvent extends UIEvent {
    constructor() { super('acceptSelectedAction'); }
}
class PreviewSelectedEvent extends UIEvent {
    constructor() { super('previewSelectedAction'); }
}
function getKeyboardNavigationLabel(item) {
    // Filter out header vs. action vs. separator
    if (item.kind === 'action') {
        return item.label;
    }
    return undefined;
}
/**
 * A standalone action list widget that handles core list rendering, filtering,
 * hover, submenu, and section management without depending on IContextViewService
 * or anchor-based positioning. Suitable for embedding directly in any container.
 */
let ActionListWidget = ActionListWidget_1 = class ActionListWidget extends Disposable {
    constructor(user, _supportsPreview, items, _delegate, accessibilityProvider, _options, _keybindingService, _openerService, _instantiationService) {
        super();
        this._supportsPreview = _supportsPreview;
        this._delegate = _delegate;
        this._options = _options;
        this._keybindingService = _keybindingService;
        this._openerService = _openerService;
        this._instantiationService = _instantiationService;
        this._headerLineHeight = 24;
        this._separatorLineHeight = 8;
        this.cts = this._register(new CancellationTokenSource());
        this._submenuDisposables = this._register(new DisposableStore());
        this._submenuHoverActionElements = [];
        this._itemMoveAnimation = this._register(new MutableDisposable());
        this._collapsedSections = new Set();
        this._filterText = '';
        this._imeSessionInProgress = false;
        this._isMeasuringWidth = false;
        this._suppressHover = false;
        this._hoverEnabled = true;
        this._ignoreInitialHover = true;
        this._hasLaidOut = false;
        this._filterCts = this._register(new MutableDisposable());
        this._groupTitleByIndex = new Map();
        this._standaloneToggles = new Map();
        this._itemToolbars = new Map();
        this._onDidRequestLayout = this._register(new Emitter());
        /**
         * Fired when the widget's visible item set changes and the parent should
         * re-layout (e.g. after filtering or collapsing a section).
         */
        this.onDidRequestLayout = this._onDidRequestLayout.event;
        this._visibleMenuItems = items;
        this._initialFocusItemId = this._options?.initialFocusItemId;
        this._filterText = this._options?.showFilter ? this._options.initialFilterValue ?? '' : '';
        this.domNode = document.createElement('div');
        this.domNode.classList.add('actionList');
        if (this._options?.inlineDescription) {
            this.domNode.classList.add('inline-description');
        }
        if (this._options?.className) {
            const classNames = this._options.className.split(/\s+/).filter(className => className.length > 0);
            if (classNames.length > 0) {
                this.domNode.classList.add(...classNames);
            }
        }
        this._actionLineHeight = 24;
        // Create submenu container appended to domNode
        this._submenuContainer = document.createElement('div');
        this._submenuContainer.className = 'action-list-submenu-panel action-widget';
        this._submenuContainer.style.display = 'none';
        if (this._options?.persistentHover) {
            this._submenuContainer.style.boxSizing = 'border-box';
        }
        // Make focusable so clicking the hover panel keeps focus inside the
        // tracked element instead of moving it to document.body (which would
        // trigger the blur handler and dismiss the widget).
        this._submenuContainer.tabIndex = -1;
        this.domNode.append(this._submenuContainer);
        // A panel showing only hover content has no inner list to own the keyboard, so
        // the way back to the row it belongs to lives here. A panel that does have a
        // submenu list stops these keys before they reach this handler.
        this._register(addDisposableListener(this._submenuContainer, 'keydown', (e) => {
            if ((e.key === 'Enter' || e.key === ' ') && this._currentSubmenuElement?.hover?.tabThroughPanel) {
                const target = isHTMLElement(e.target) ? e.target : undefined;
                if (target && this._currentSubmenuElement.hover.getTabbableElements?.().includes(target)) {
                    e.stopPropagation();
                    return;
                }
            }
            if (e.key !== 'ArrowLeft' && e.key !== 'Escape') {
                return;
            }
            EventHelper.stop(e, true);
            const dismissWidget = e.key === 'Escape' && this._currentSubmenuWidget !== undefined;
            this._hideSubmenu();
            if (dismissWidget) {
                this.hide();
                return;
            }
            this._setKeyboardNavigation(true);
            this._list.domFocus();
        }));
        this._register(addDisposableListener(this._submenuContainer, 'mouseenter', () => {
            this._cancelSubmenuHide();
            if (this._usesSubmenuPointerIntent()) {
                this._cancelSubmenuShow();
                this._resetSubmenuPointer();
            }
        }));
        this._register(addDisposableListener(this._submenuContainer, 'mouseleave', () => {
            this._scheduleSubmenuHide();
        }));
        // A panel scheduled while crossing a row must not pop up after the pointer has left.
        this._register(addDisposableListener(this.domNode, EventType.MOUSE_LEAVE, () => {
            this._cancelSubmenuShow();
            this._resetSubmenuPointer();
        }));
        if (this._usesSubmenuPointerIntent()) {
            this._register(addDisposableListener(this.domNode, EventType.MOUSE_MOVE, event => {
                if (isHTMLElement(event.target) && this._expandedTrigger?.contains(event.target)) {
                    this._updateSubmenuPointer(event);
                }
            }));
        }
        this._register(toDisposable(() => {
            this._cancelSubmenuHide();
            this._cancelSubmenuShow();
        }));
        // Initialize collapsed sections
        if (this._options?.collapsedByDefault) {
            for (const section of this._options.collapsedByDefault) {
                this._collapsedSections.add(section);
            }
        }
        const virtualDelegate = {
            getHeight: element => {
                return this._getItemHeight(element);
            },
            getTemplateId: element => element.kind
        };
        // Read on every render: whether any item opens a panel can change when the items
        // are rebuilt in place, and a stale answer shifts every row by a chevron's width.
        const reservesSubmenuSpace = () => {
            const reserve = this._options?.reserveSubmenuSpace ?? true;
            return reserve === 'always' || (reserve && this._allMenuItems.some(hasSubmenuIndicator));
        };
        this._list = this._register(new List(user, this.domNode, virtualDelegate, [
            new ActionItemRenderer(this._supportsPreview, (item) => this._removeItem(item), (item) => this._showSubmenuForItem(item), reservesSubmenuSpace, this._groupTitleByIndex, this._options?.linkHandler, this._options?.hideDefaultKeybindingTooltip ?? false, this._options?.stopToolbarPointerPropagation ?? false, (item, toggle) => {
                this._standaloneToggles.set(item, toggle);
                return toDisposable(() => {
                    if (this._standaloneToggles.get(item) === toggle) {
                        this._standaloneToggles.delete(item);
                    }
                });
            }, (item, toolbar) => {
                this._itemToolbars.set(item, toolbar);
                this._updateToolbarFocusability();
                return toDisposable(() => {
                    if (this._itemToolbars.get(item) === toolbar) {
                        this._itemToolbars.delete(item);
                    }
                });
            }, this._keybindingService, this._openerService),
            new HeaderRenderer(),
            new SeparatorRenderer(),
        ], {
            keyboardSupport: false,
            typeNavigationEnabled: !this._options?.showFilter && !this._options?.onType,
            keyboardNavigationLabelProvider: { getKeyboardNavigationLabel },
            accessibilityProvider: {
                getAriaLabel: element => {
                    if (element.kind === "action" /* ActionListItemKind.Action */) {
                        let label = element.label ? stripNewlines(element?.label) : '';
                        if (element.badge) {
                            label = label + ', ' + stripNewlines(element.badge);
                        }
                        if (element.detail) {
                            label = label + ', ' + stripNewlines(element.detail);
                        }
                        if (element.ariaDescription) {
                            label = label + ', ' + stripNewlines(element.ariaDescription);
                        }
                        else if (element.description) {
                            const descText = typeof element.description === 'string' ? element.description : element.description.value;
                            label = label + ', ' + stripNewlines(descText);
                        }
                        if (element.hover?.content && !element.ariaDescription && !element.description) {
                            const hoverContent = element.hover.content;
                            const hoverText = typeof hoverContent === 'string' ? hoverContent : isMarkdownString(hoverContent) ? hoverContent.value : isHTMLElement(hoverContent) ? hoverContent.textContent ?? undefined : undefined;
                            if (hoverText && (!element.detail || stripNewlines(element.detail) !== stripNewlines(hoverText))) {
                                label = label + ', ' + stripNewlines(hoverText);
                            }
                        }
                        if (element.group?.title) {
                            label = label + ', ' + element.group.title;
                        }
                        const toggleConfig = element.standaloneToggle ?? element.inlineToggle;
                        if (toggleConfig) {
                            label = element.standaloneToggle
                                ? (toggleConfig.checked
                                    ? localize(1734, "{0}, on", toggleConfig.label)
                                    : localize(1735, "{0}, off", toggleConfig.label))
                                : label + ', ' + (toggleConfig.checked
                                    ? localize(1736, "{0}, on", toggleConfig.label)
                                    : localize(1737, "{0}, off", toggleConfig.label));
                        }
                        if (element.disabled) {
                            label = localize(1738, "{0}, Disabled Reason: {1}", label, element.disabled);
                        }
                        if (element.submenuActions?.length) {
                            label = localize(1739, "{0}, use right arrow to access options", label);
                        }
                        return label;
                    }
                    return null;
                },
                getWidgetAriaLabel: () => localize(1740, "Action Widget"),
                getSetSize: () => this._visibleMenuItems.filter(item => item.kind === "action" /* ActionListItemKind.Action */).length,
                getPosInSet: (_element, index) => Math.max(this._visibleMenuItems.slice(0, index + 1).filter(item => item.kind === "action" /* ActionListItemKind.Action */).length, 1),
                getRole: (e) => {
                    switch (e.kind) {
                        case "action" /* ActionListItemKind.Action */:
                            return 'option';
                        case "separator" /* ActionListItemKind.Separator */:
                            return 'separator';
                        default:
                            return 'separator';
                    }
                },
                getWidgetRole: () => 'listbox',
                ...accessibilityProvider
            },
        }));
        this._list.style(defaultListStyles);
        this._register(this._list.onKeyDown(() => this._setKeyboardNavigation(true)));
        this._register(addDisposableListener(this._list.getHTMLElement(), EventType.MOUSE_MOVE, (e) => {
            if (e.movementX !== 0 || e.movementY !== 0) {
                this._setKeyboardNavigation(false);
            }
        }));
        this._register(this._list.onMouseClick(e => this.onListClick(e)));
        // Ignore the initial mouseover when a keyboard-invoked menu appears beneath a stationary pointer,
        // so the item under the pointer does not take keyboard focus.
        this._register(this._list.onMouseOver(e => {
            if (!this._ignoreInitialHover) {
                this.onListHover(e);
            }
        }));
        const initialMouseMove = this._register(new MutableDisposable());
        initialMouseMove.value = this._list.onMouseMove(e => {
            if (e.browserEvent.movementX !== 0 || e.browserEvent.movementY !== 0) {
                initialMouseMove.clear();
                this._ignoreInitialHover = false;
                this.onListHover(e);
            }
        });
        this._register(this._list.onMouseDown(() => {
            initialMouseMove.clear();
            this._ignoreInitialHover = false;
            this._setKeyboardNavigation(false);
        }));
        this._register(this._list.onDidChangeFocus(() => {
            this._updateToolbarFocusability();
            this.onFocus();
        }));
        this._register(this._list.onDidChangeSelection(e => this.onListSelection(e)));
        this._register(this._list.onDidScroll(() => {
            if (!this._isMeasuringWidth) {
                this._layoutSubmenu?.();
            }
        }));
        this._allMenuItems = [...items];
        // Create filter input and/or secondary heading
        if (this._options?.showFilter || this._options?.secondaryHeading) {
            this._filterContainer = document.createElement('div');
            this._filterContainer.className = 'action-list-filter';
            const filterRow = append(this._filterContainer, $('.action-list-filter-row'));
            if (this._options?.showFilter) {
                this._filterInput = document.createElement('input');
                this._filterInput.type = 'text';
                this._filterInput.className = 'action-list-filter-input';
                this._filterInput.placeholder = this._options?.filterPlaceholder ?? localize(1741, "Search...");
                this._filterInput.value = this._filterText;
                this._filterInput.setAttribute('aria-label', localize(1742, "Filter items"));
                filterRow.appendChild(this._filterInput);
                this._register(addDisposableListener(this._filterInput, EventType.KEY_DOWN, e => {
                    this._setKeyboardNavigation(true);
                    if (e.isComposing || !this._filterInput?.closest('.action-list-submenu-panel')) {
                        return;
                    }
                    const keybinding = this._keybindingService.softDispatch(new StandardKeyboardEvent(e), this._filterInput);
                    const isActionWidgetKeybinding = keybinding.kind === 2 /* ResultKind.KbFound */
                        && keybinding.commandId !== null
                        && actionWidgetKeybindingCommands.has(keybinding.commandId);
                    if (isActionWidgetKeybinding || (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey)) {
                        e.stopPropagation();
                    }
                }));
                this._register(addDisposableListener(this._filterInput, EventType.MOUSE_DOWN, () => this._setKeyboardNavigation(false)));
                if (this._options.tabThroughItemActions) {
                    this._register(addDisposableListener(this._filterInput, 'keydown', e => this._handleTabThroughPanelKeyDown(e), true));
                }
                if (this._options.filterAsCombobox) {
                    const listElement = this._list.getHTMLElement();
                    listElement.id = this._list.domId;
                    this._filterInput.setAttribute('role', 'combobox');
                    this._filterInput.setAttribute('aria-label', this._filterInput.placeholder);
                    this._filterInput.setAttribute('aria-autocomplete', 'list');
                    this._filterInput.setAttribute('aria-expanded', 'true');
                    this._filterInput.setAttribute('aria-controls', listElement.id);
                    this._register(this._list.onDidChangeFocus(() => this._updateFilterActiveDescendant()));
                    this._register(addDisposableListener(this._filterInput, 'focus', () => this._updateFilterActiveDescendant()));
                    this._register(addDisposableListener(this._filterInput, 'blur', () => this._updateFilterActiveDescendant()));
                    this._register(addStandardDisposableListener(this._filterInput, 'keydown', e => {
                        const isComposing = this._imeSessionInProgress || e.browserEvent.isComposing || e.keyCode === 114 /* KeyCode.KEY_IN_COMPOSITION */;
                        if (isComposing || e.keyCode === 15 /* KeyCode.LeftArrow */ || e.keyCode === 17 /* KeyCode.RightArrow */ || e.keyCode === 14 /* KeyCode.Home */ || e.keyCode === 13 /* KeyCode.End */) {
                            e.stopPropagation();
                            return;
                        }
                        const isNavigation = e.keyCode === 16 /* KeyCode.UpArrow */ || e.keyCode === 18 /* KeyCode.DownArrow */;
                        if (!isNavigation && e.keyCode !== 3 /* KeyCode.Enter */) {
                            return;
                        }
                        if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) {
                            if (isNavigation) {
                                e.stopPropagation();
                            }
                            return;
                        }
                        EventHelper.stop(e, true);
                        if (e.keyCode === 16 /* KeyCode.UpArrow */) {
                            this.focusPrevious();
                        }
                        else if (e.keyCode === 18 /* KeyCode.DownArrow */) {
                            this.focusNext();
                        }
                        else {
                            this.acceptSelected();
                        }
                    }));
                }
                const filterActions = this._options?.filterActions ?? [];
                if (filterActions.length > 0) {
                    const filterActionsContainer = append(filterRow, $('.action-list-filter-actions'));
                    const filterActionBar = this._register(new ActionBar(filterActionsContainer));
                    filterActionBar.push(filterActions, { icon: true, label: false });
                }
                // While an IME composition is running the input holds intermediate text (e.g. pinyin)
                // which must not drive the filter: re-filtering splices the list, re-highlights a row and
                // re-layouts the popup, all of which disrupt the composition and the IME candidate window.
                // Filter once the composition commits instead.
                const onFilterValueChanged = () => {
                    const value = this._filterInput.value;
                    // Restart cancelled compositions without duplicating the trailing input event's live request.
                    if (this._imeSessionInProgress || value === this._filterText && !this._filterCts.value?.token.isCancellationRequested) {
                        return;
                    }
                    this._filterText = value;
                    this._applyOrUpdateFilter();
                };
                this._register(addDisposableListener(this._filterInput, 'compositionstart', () => {
                    this._imeSessionInProgress = true;
                    // A dynamic filter request issued for the previous value can still be in flight.
                    // Letting it resolve now would splice and re-layout the list underneath the IME
                    // candidate window - the very disruption this guard exists to prevent. The
                    // committed value starts a fresh request from `compositionend`.
                    this._filterCts.value?.cancel();
                }));
                this._register(addDisposableListener(this._filterInput, 'compositionend', () => {
                    this._imeSessionInProgress = false;
                    onFilterValueChanged();
                }));
                this._register(addDisposableListener(this._filterInput, 'input', onFilterValueChanged));
            }
            if (this._options?.secondaryHeading) {
                const filterLabelEl = append(filterRow, $('.action-list-filter-label'));
                filterLabelEl.textContent = this._options.secondaryHeading;
            }
        }
        // Create footer text
        if (this._options?.footerText) {
            this._footerContainer = document.createElement('div');
            this._footerContainer.className = 'action-list-footer';
            this._footerContainer.textContent = this._options.footerText;
        }
        // Create header banner
        if (this._options?.headerText) {
            this._headerContainer = document.createElement('div');
            this._headerContainer.className = 'action-list-header';
            if (this._options.headerIcon) {
                const icon = append(this._headerContainer, $('span.action-list-header-icon'));
                icon.classList.add(...ThemeIcon.asClassNameArray(this._options.headerIcon));
                // Decorative: the header text already conveys the meaning.
                icon.setAttribute('aria-hidden', 'true');
            }
            const text = append(this._headerContainer, $('span.action-list-header-text'));
            text.textContent = this._options.headerText;
            // The banner is chrome, not an item: pointing at it dismisses a row's hover panel.
            this._register(addDisposableListener(this._headerContainer, EventType.MOUSE_ENTER, () => {
                if (this._options?.persistentHover) {
                    this._cancelSubmenuShow();
                    this._resetSubmenuPointer();
                }
                else {
                    this._hideSubmenu();
                }
            }));
            if (this._options.headerLink) {
                const { label, uri } = this._options.headerLink;
                // Trailing space so the link reads as a continuation of the banner text.
                text.textContent += ' ';
                this._register(this._instantiationService.createInstance(Link, text, { label, href: uri.toString(true) }, {}));
            }
            if (this._options.headerDismiss) {
                const onDismiss = this._options.headerDismiss;
                const dismissButton = append(this._headerContainer, $('span.action-list-header-dismiss'));
                dismissButton.appendChild($(ThemeIcon.asCSSSelector(Codicon.close)));
                dismissButton.tabIndex = 0;
                dismissButton.setAttribute('role', 'button');
                dismissButton.setAttribute('aria-label', localize(1743, "Dismiss"));
                const dismiss = () => {
                    onDismiss();
                    // Refocus the widget first so removing the focused button doesn't trip close-on-blur.
                    this.focus();
                    this._headerContainer?.remove();
                    // Drop the reference so the banner no longer reserves header height, then
                    // request a re-layout so the popup shrinks to fit the remaining content.
                    this._headerContainer = undefined;
                    this._onDidRequestLayout.fire();
                };
                // Generic mouse-up maps to pointer events on iOS, so tap/pen activation
                // works without extra gesture plumbing (raw 'click' is unreliable there).
                this._register(addDisposableGenericMouseUpListener(dismissButton, () => dismiss()));
                this._register(addDisposableListener(dismissButton, EventType.KEY_DOWN, (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        dismiss();
                    }
                }));
            }
        }
        this._applyFilter();
        if (this._list.length) {
            this._focusCheckedOrFirst();
        }
        // ArrowRight opens submenu for the focused item and moves focus into it
        this._register(addDisposableListener(this.domNode, 'keydown', (e) => {
            if (e.key === 'ArrowRight' && !e.isComposing) {
                const focused = this._list.getFocus();
                if (focused.length > 0) {
                    const element = this._list.element(focused[0]);
                    if (element?.submenuActions?.length || element?.hover?.expandable) {
                        EventHelper.stop(e, true);
                        const rowElement = this._getRowElement(focused[0]);
                        if (rowElement) {
                            this._showSubmenuForElement(element, rowElement);
                            if (element.hover?.tabThroughPanel) {
                                this._focusFirstTabThroughPanelControl(element, rowElement);
                            }
                            else if (this._currentSubmenuWidget) {
                                this._currentSubmenuWidget.focus();
                            }
                            else {
                                this._submenuContainer.focus();
                            }
                        }
                    }
                }
            }
        }));
        this._register(addDisposableListener(this.domNode, 'keydown', e => this._handleTabThroughPanelKeyDown(e), true));
        if (this._filterInput || this._options?.onType) {
            this._register(addDisposableListener(this.domNode, 'keydown', (e) => {
                const target = e.target;
                if ((this._options?.onType || this._options?.filterAsCombobox) && isHTMLElement(target)
                    && (isEditableElement(target) || target.closest('button, a, [contenteditable="true"], .action-list-submenu-panel'))) {
                    return;
                }
                if ((!this._filterInput || !isActiveElement(this._filterInput))
                    && !e.isComposing && e.key.length === 1 && e.key !== ' ' && !e.ctrlKey && !e.metaKey && !e.altKey) {
                    e.preventDefault();
                    e.stopPropagation();
                    if (this._filterInput) {
                        this._filterInput.focus();
                        this._filterInput.value = e.key;
                        this._filterText = e.key;
                        this._applyOrUpdateFilter();
                    }
                    else {
                        this._options?.onType?.(e.key);
                    }
                }
            }));
        }
    }
    _toggleSection(section) {
        const expanding = this._collapsedSections.has(section);
        if (expanding) {
            this._collapsedSections.delete(section);
        }
        else {
            this._collapsedSections.add(section);
            const focusedItem = this.getFocusedElement();
            if (focusedItem?.section === section && !focusedItem.isSectionToggle) {
                const toggleIndex = this._visibleMenuItems.findIndex(item => item.section === section && item.isSectionToggle);
                if (toggleIndex >= 0) {
                    this._list.setFocus([toggleIndex]);
                }
            }
        }
        this._options?.onDidToggleSection?.(section, this._collapsedSections.has(section));
        this._applyFilter();
        if (expanding) {
            // A popup that keeps one height cannot grow, so the new rows would sit unseen
            // below the fold.
            this._revealFirstItemOfSection(section);
        }
    }
    _revealFirstItemOfSection(section) {
        for (let index = 0; index < this._list.length; index++) {
            const item = this._list.element(index);
            if (item.section === section && !item.isSectionToggle) {
                this._list.reveal(index);
                return;
            }
        }
    }
    _applyOrUpdateFilter() {
        if (!this._delegate.onFilter) {
            this._applyFilter();
            return;
        }
        const filterText = this._filterText;
        this._filterCts.value?.cancel();
        const cts = new CancellationTokenSource();
        this._filterCts.value = cts;
        this._delegate.onFilter(filterText, cts.token).then(items => {
            if (cts.token.isCancellationRequested) {
                return;
            }
            this._allMenuItems = [...items];
            this._applyFilter(true);
        }).catch(() => { }).finally(() => {
            // Retain cancelled requests so an interrupted IME search can restart with unchanged text.
            if (this._filterCts.value === cts && !cts.token.isCancellationRequested) {
                this._filterCts.clear();
            }
        });
    }
    _applyFilter(skipTextFilter = false, fireLayout = true, focusItemId) {
        this._itemMoveAnimation.clear();
        const filterLower = skipTextFilter ? '' : this._filterText.toLowerCase();
        const isFiltering = !skipTextFilter && filterLower.length > 0;
        const visible = [];
        // Remember the focused item before splice
        const focusedIndexes = this._list.getFocus();
        let focusedItem;
        if (focusedIndexes.length > 0) {
            focusedItem = this._list.element(focusedIndexes[0]);
        }
        if (isFiltering) {
            let pendingSeparator;
            let filteredSectionItems = [];
            let hasMatchingActionInSection = false;
            const flushFilteredSection = () => {
                if (pendingSeparator && hasMatchingActionInSection) {
                    visible.push(pendingSeparator);
                }
                visible.push(...filteredSectionItems);
                pendingSeparator = undefined;
                filteredSectionItems = [];
                hasMatchingActionInSection = false;
            };
            const matchesFilter = (item) => {
                const label = (item.label ?? '').toLowerCase();
                const descValue = typeof item.description === 'string' ? item.description : (item.description?.value ?? '');
                return label.includes(filterLower) || descValue.toLowerCase().includes(filterLower);
            };
            for (const item of this._allMenuItems) {
                if (item.kind === "header" /* ActionListItemKind.Header */) {
                    continue;
                }
                if (item.kind === "separator" /* ActionListItemKind.Separator */) {
                    flushFilteredSection();
                    pendingSeparator = item.label ? item : undefined;
                    continue;
                }
                if (item.showAlways) {
                    filteredSectionItems.push(item);
                    continue;
                }
                if (item.isSectionToggle) {
                    continue;
                }
                if (item.filterItems) {
                    const matchingFilterItems = matchesFilter(item) ? item.filterItems : item.filterItems.filter(matchesFilter);
                    if (matchingFilterItems.length > 0) {
                        hasMatchingActionInSection = true;
                        filteredSectionItems.push(...matchingFilterItems);
                    }
                    continue;
                }
                if (matchesFilter(item)) {
                    hasMatchingActionInSection = true;
                    filteredSectionItems.push(item);
                }
            }
            flushFilteredSection();
        }
        else {
            for (const item of this._allMenuItems) {
                if (item.kind === "header" /* ActionListItemKind.Header */) {
                    visible.push(item);
                    continue;
                }
                if (item.kind === "separator" /* ActionListItemKind.Separator */) {
                    if (item.section && this._collapsedSections.has(item.section)) {
                        continue;
                    }
                    visible.push(item);
                    continue;
                }
                // Update icon for section toggle items based on collapsed state
                if (item.isSectionToggle && item.section) {
                    const collapsed = this._collapsedSections.has(item.section);
                    visible.push({
                        ...item,
                        group: { ...item.group, icon: collapsed ? Codicon.chevronRight : Codicon.chevronDown },
                    });
                    continue;
                }
                // Not filtering - check collapsed sections
                if (item.section && this._collapsedSections.has(item.section)) {
                    continue;
                }
                visible.push(item);
            }
        }
        // Remove orphaned separators while keeping labeled separators that act as
        // section headers above their following action items.
        const hasActionBefore = [];
        let seenAction = false;
        for (let i = 0; i < visible.length; i++) {
            hasActionBefore[i] = seenAction;
            if (visible[i].kind === "action" /* ActionListItemKind.Action */) {
                seenAction = true;
            }
        }
        const hasActionBeforeNextSeparator = [];
        let seenActionInSection = false;
        for (let i = visible.length - 1; i >= 0; i--) {
            if (visible[i].kind === "action" /* ActionListItemKind.Action */) {
                seenActionInSection = true;
                continue;
            }
            if (visible[i].kind !== "separator" /* ActionListItemKind.Separator */) {
                continue;
            }
            hasActionBeforeNextSeparator[i] = seenActionInSection;
            seenActionInSection = false;
        }
        for (let i = visible.length - 1; i >= 0; i--) {
            const item = visible[i];
            if (item.kind !== "separator" /* ActionListItemKind.Separator */) {
                continue;
            }
            const hasFollowingActionInSection = hasActionBeforeNextSeparator[i];
            const isLeadingUnlabeledDivider = !item.label && !hasActionBefore[i];
            if (!hasFollowingActionInSection || isLeadingUnlabeledDivider) {
                visible.splice(i, 1);
            }
        }
        // Recompute group title positions based on visible items
        if (this._options?.showGroupTitleOnFirstItem) {
            this._recomputeGroupTitles(visible);
        }
        // Capture whether the filter input currently has focus before splice
        // which may cause DOM changes that shift focus.
        const filterInputHasFocus = this._filterInput && isActiveElement(this._filterInput);
        // Focus is only ours to restore if the list had it. Something outside the list,
        // like a footer control, can rebuild the items while keeping focus itself.
        const listHasFocus = isAncestorOfActiveElement(this._list.getHTMLElement());
        this._visibleMenuItems = visible;
        this._list.splice(0, this._list.length, visible);
        // Notify the parent that a re-layout is needed
        if (fireLayout) {
            this._onDidRequestLayout.fire();
        }
        // Restore focus after splice destroyed DOM elements,
        // otherwise the blur handler in ActionWidgetService closes the widget.
        // Keep focus on the filter input if the user is typing a filter.
        if (filterInputHasFocus) {
            this._filterInput?.focus();
            // Keep a highlighted item in the list so Enter works without pressing DownArrow first
            this._focusCheckedOrFirst();
        }
        else if (this._hasLaidOut) {
            // Restore focus to the previously focused item
            if (focusedItem || focusItemId) {
                const focusedItemId = focusItemId ?? focusedItem?.item?.id;
                if (focusedItemId) {
                    for (let i = 0; i < this._list.length; i++) {
                        const el = this._list.element(i);
                        if (el.item?.id === focusedItemId) {
                            this._list.setFocus([i]);
                            this._list.reveal(i);
                            break;
                        }
                    }
                    if (listHasFocus) {
                        // The focused row or its toolbar may have been removed by the update.
                        this._focusCheckedOrFirst();
                        this._list.domFocus();
                    }
                }
            }
        }
    }
    /**
     * Returns the filter container element, if filter is enabled.
     * The caller is responsible for appending it to the widget DOM.
     */
    get filterContainer() {
        return this._filterContainer;
    }
    get footerContainer() {
        return this._footerContainer;
    }
    get headerContainer() {
        return this._headerContainer;
    }
    get filterInput() {
        return this._filterInput;
    }
    get closeAnimation() {
        return this._options?.closeAnimation;
    }
    focusCondition(element) {
        return !element.disabled && element.kind === "action" /* ActionListItemKind.Action */;
    }
    _setKeyboardNavigation(keyboardNavigation) {
        if (this._keyboardNavigation === keyboardNavigation) {
            return;
        }
        this._keyboardNavigation = keyboardNavigation;
        const listElement = this._list.getHTMLElement();
        listElement.classList.toggle('keyboard-navigation', keyboardNavigation === true);
        listElement.classList.toggle('mouse-navigation', keyboardNavigation === false);
    }
    _updateFilterActiveDescendant() {
        if (!this._filterInput) {
            return;
        }
        const [focused] = this._list.getFocus();
        if (isActiveElement(this._filterInput) && focused !== undefined) {
            this._filterInput.setAttribute('aria-activedescendant', this._list.getElementID(focused));
        }
        else {
            this._filterInput.removeAttribute('aria-activedescendant');
        }
    }
    focus() {
        this._setKeyboardNavigation(undefined);
        if (this._filterInput && this._options?.focusFilterOnOpen) {
            this._filterInput.focus();
            // Highlight the first item so Enter works immediately
            this._focusCheckedOrFirst();
            return;
        }
        this._list.domFocus();
        this._focusCheckedOrFirst();
        this._showTabThroughPanelForFocusedItem();
    }
    clearFocus() {
        this._list.setFocus([]);
    }
    getFocusedElement() {
        const focused = this._list.getFocus();
        if (focused.length > 0) {
            return this._list.element(focused[0]);
        }
        return undefined;
    }
    _updateToolbarFocusability() {
        if (!this._options?.tabThroughItemActions) {
            return;
        }
        const [index] = this._list.getFocus();
        const focused = index !== undefined && index < this._list.length ? this._list.element(index) : undefined;
        for (const [item, toolbar] of this._itemToolbars) {
            toolbar.setFocusable(item === focused);
        }
    }
    _focusCheckedOrFirst() {
        const suppressHover = this._suppressHover;
        this._suppressHover = true;
        try {
            const initialFocusItemId = this._initialFocusItemId;
            this._initialFocusItemId = undefined;
            if (initialFocusItemId) {
                for (let i = 0; i < this._list.length; i++) {
                    const element = this._list.element(i);
                    if (this.focusCondition(element) && element.item?.id === initialFocusItemId) {
                        this._list.setFocus([i]);
                        this._list.reveal(i);
                        return;
                    }
                }
            }
            const [focusedIndex] = this._list.getFocus();
            if (focusedIndex !== undefined) {
                const focusedElement = this._list.element(focusedIndex);
                if (focusedElement && this.focusCondition(focusedElement)) {
                    this._list.reveal(focusedIndex);
                    return;
                }
            }
            // Try to focus the checked item first
            for (let i = 0; i < this._list.length; i++) {
                const element = this._list.element(i);
                if (this.focusCondition(element) && element.item?.checked) {
                    this._list.setFocus([i]);
                    this._list.reveal(i);
                    return;
                }
            }
            // Set focus on the first focusable item without moving DOM focus
            this._list.focusFirst(undefined, this.focusCondition);
            const focused = this._list.getFocus();
            if (focused.length > 0) {
                this._list.reveal(focused[0]);
            }
        }
        finally {
            this._suppressHover = suppressHover;
            if (this._options?.filterAsCombobox) {
                // The focused row may be unchanged when the filter regains DOM focus.
                this._updateFilterActiveDescendant();
            }
        }
    }
    hide(didCancel) {
        this._delegate.onHide(didCancel);
        this.cts.cancel();
        this._filterCts.value?.cancel();
        this._filterCts.clear();
        this._hideSubmenu();
    }
    clearFilter() {
        if (this._filterInput && this._filterText) {
            this._filterInput.value = '';
            this._filterText = '';
            this._applyOrUpdateFilter();
            return true;
        }
        return false;
    }
    /**
     * Whether this widget uses dynamic height (has filter or collapsible sections).
     */
    get hasDynamicHeight() {
        if (this._options?.showFilter) {
            return true;
        }
        return this._allMenuItems.some(item => item.isSectionToggle);
    }
    /**
     * The height of a single action row in pixels.
     */
    get lineHeight() {
        return this._actionLineHeight;
    }
    /**
     * Returns the height for an action item, using a taller line height
     * for items with a detail (second line).
     */
    _getItemHeight(item) {
        return this._itemHeightWith(item, this._options);
    }
    /** Row heights depend on the options of the tab the items belong to, not the shown one. */
    _itemHeightWith(item, options) {
        switch (item.kind) {
            case "header" /* ActionListItemKind.Header */:
                return this._headerLineHeight;
            case "separator" /* ActionListItemKind.Separator */:
                return item.label ? this._actionLineHeight : this._separatorLineHeight;
            default:
                if (item.inlineToggle) {
                    return options?.inlineToggleItemHeight ?? 70;
                }
                return item.detail ? (options?.detailItemHeight ?? 48) : this._actionLineHeight;
        }
    }
    /**
     * Computes the total height of all items (including collapsed/filtered items).
     */
    computeFullHeight() {
        return this.computeHeightForItems(this._allMenuItems, undefined, this._options);
    }
    /** Height the list would need for `items`, leaving out anything in a collapsed section. */
    computeHeightForItems(items, collapsedSections, options) {
        let height = 0;
        for (const item of items) {
            // The toggle is the row that reopens its own section, so it stays on screen.
            if (collapsedSections && item.section && !item.isSectionToggle && collapsedSections.has(item.section)) {
                continue;
            }
            height += this._itemHeightWith(item, options);
        }
        return height;
    }
    /**
     * Computes the total height of visible items in the list.
     */
    computeListHeight() {
        const visibleCount = this._list.length;
        let listHeight = 0;
        for (let i = 0; i < visibleCount; i++) {
            const element = this._list.element(i);
            listHeight += this._getItemHeight(element);
        }
        return listHeight;
    }
    /**
     * Lays out the list widget with the given explicit dimensions.
     */
    layout(height, width) {
        this._hasLaidOut = true;
        this._list.layout(height, width);
        this.domNode.style.height = `${height}px`;
        // Keep the filter above the list. Skipped when the caller mounted the filter
        // somewhere else entirely (e.g. inside a tab bar), where it has no list to sit above.
        const listParent = this.domNode.parentElement;
        if (listParent && this._filterContainer?.parentElement === listParent) {
            listParent.insertBefore(this._filterContainer, this.domNode);
        }
        this._layoutSubmenu?.();
    }
    computeMaxWidth(minWidth) {
        const visibleCount = this._list.length;
        const effectiveMinWidth = Math.max(minWidth, this._options?.minWidth ?? 0);
        const rawMaxWidthCap = this._options?.maxWidth ?? Number.POSITIVE_INFINITY;
        const maxWidthCap = Math.max(rawMaxWidthCap, effectiveMinWidth);
        const clamp = (w) => Math.min(Math.max(w, effectiveMinWidth), maxWidthCap);
        const totalItemCount = this._allMenuItems.length;
        if (totalItemCount >= 50) {
            return clamp(380);
        }
        if (totalItemCount > visibleCount) {
            // Temporarily splice in all items to measure widths,
            // preventing width jumps when expanding/collapsing sections.
            const visibleItems = [];
            for (let i = 0; i < visibleCount; i++) {
                visibleItems.push(this._list.element(i));
            }
            const height = this._list.renderHeight;
            const scrollTop = this._list.scrollTop;
            const focus = this._list.getFocus();
            const wasMeasuringWidth = this._isMeasuringWidth;
            this._isMeasuringWidth = true;
            try {
                const allItems = [...this._allMenuItems];
                this._list.splice(0, visibleCount, allItems);
                let allItemsHeight = 0;
                for (const item of allItems) {
                    allItemsHeight += this._getItemHeight(item);
                }
                this._list.layout(allItemsHeight);
                const itemWidths = this._measureItemWidths(allItems);
                return clamp(Math.max(...itemWidths));
            }
            finally {
                try {
                    this._list.splice(0, this._list.length, visibleItems);
                    this._list.layout(height);
                    this._list.scrollTop = scrollTop;
                    const suppressHover = this._suppressHover;
                    this._suppressHover = true;
                    try {
                        this._list.setFocus(focus);
                    }
                    finally {
                        this._suppressHover = suppressHover;
                    }
                }
                finally {
                    this._isMeasuringWidth = wasMeasuringWidth;
                }
            }
        }
        // All items are visible, measure them directly
        const visibleItems = [];
        for (let i = 0; i < visibleCount; i++) {
            visibleItems.push(this._list.element(i));
        }
        const itemWidths = this._measureItemWidths(visibleItems);
        return clamp(Math.max(...itemWidths));
    }
    focusPrevious() {
        this._setKeyboardNavigation(true);
        if (this._focusFilterResult('previous')) {
            return;
        }
        if (this._filterInput && isActiveElement(this._filterInput)) {
            this._list.domFocus();
            // An item is already highlighted; advance from it instead of jumping to last
            const current = this._list.getFocus();
            if (current.length > 0) {
                this._list.focusPrevious(1, false, undefined, this.focusCondition);
                const focused = this._list.getFocus();
                // If we couldn't move (already at first), go to filter
                if (focused.length > 0 && focused[0] >= current[0]) {
                    this._filterInput.focus();
                }
                else if (focused.length > 0) {
                    this._list.reveal(focused[0]);
                }
            }
            else {
                this._list.focusLast(undefined, this.focusCondition);
                const focused = this._list.getFocus();
                if (focused.length > 0) {
                    this._list.reveal(focused[0]);
                }
            }
            return;
        }
        const previousFocus = this._list.getFocus();
        this._list.focusPrevious(1, true, undefined, this.focusCondition);
        const focused = this._list.getFocus();
        if (focused.length > 0) {
            // If focus wrapped (was at first focusable, now at last), move to filter instead
            if (this._filterInput && previousFocus.length > 0 && focused[0] > previousFocus[0]) {
                this._list.setFocus([]);
                this._filterInput.focus();
                return;
            }
            this._list.reveal(focused[0]);
        }
    }
    focusNext() {
        this._setKeyboardNavigation(true);
        if (this._focusFilterResult('next')) {
            return;
        }
        if (this._filterInput && isActiveElement(this._filterInput)) {
            this._list.domFocus();
            // An item is already highlighted; advance from it instead of jumping to first
            const current = this._list.getFocus();
            if (current.length > 0) {
                this._list.focusNext(1, false, undefined, this.focusCondition);
                const focused = this._list.getFocus();
                if (focused.length > 0) {
                    this._list.reveal(focused[0]);
                }
            }
            else {
                this._list.focusFirst(undefined, this.focusCondition);
                const focused = this._list.getFocus();
                if (focused.length > 0) {
                    this._list.reveal(focused[0]);
                }
            }
            return;
        }
        const previousFocus = this._list.getFocus();
        this._list.focusNext(1, true, undefined, this.focusCondition);
        const focused = this._list.getFocus();
        if (focused.length > 0) {
            // If focus wrapped (was at last focusable, now at first), move to filter instead
            if (this._filterInput && previousFocus.length > 0 && focused[0] < previousFocus[0]) {
                this._list.setFocus([]);
                this._filterInput.focus();
                return;
            }
            this._list.reveal(focused[0]);
        }
    }
    _focusFilterResult(direction) {
        if (!this._options?.filterAsCombobox || !this._filterInput || !isActiveElement(this._filterInput)) {
            return false;
        }
        if (direction === 'previous') {
            this._list.focusPrevious(1, true, undefined, this.focusCondition);
        }
        else {
            this._list.focusNext(1, true, undefined, this.focusCondition);
        }
        const [focused] = this._list.getFocus();
        if (focused !== undefined) {
            this._list.reveal(focused);
        }
        return true;
    }
    collapseFocusedSection() {
        const section = this._getFocusedSection();
        if (section && !this._collapsedSections.has(section)) {
            this._toggleSection(section);
        }
    }
    expandFocusedSection() {
        const section = this._getFocusedSection();
        if (section && this._collapsedSections.has(section)) {
            this._toggleSection(section);
        }
    }
    toggleFocusedSection() {
        const focused = this._list.getFocus();
        if (focused.length === 0) {
            return false;
        }
        const element = this._list.element(focused[0]);
        if (element.isSectionToggle && element.section) {
            this._toggleSection(element.section);
            return true;
        }
        return false;
    }
    _getFocusedSection() {
        const focused = this._list.getFocus();
        if (focused.length === 0) {
            return undefined;
        }
        const element = this._list.element(focused[0]);
        if (element.isSectionToggle && element.section) {
            return element.section;
        }
        return element.section;
    }
    acceptSelected(preview) {
        const focused = this._list.getFocus();
        if (focused.length === 0) {
            return;
        }
        const focusIndex = focused[0];
        const element = this._list.element(focusIndex);
        if (!this.focusCondition(element)) {
            return;
        }
        const event = preview ? new PreviewSelectedEvent() : new AcceptSelectedEvent();
        this._list.setSelection([focusIndex], event);
    }
    onListSelection(e) {
        if (!e.elements.length) {
            return;
        }
        const element = e.elements[0];
        if (element.standaloneToggle) {
            this._list.setSelection([]);
            const toggle = this._standaloneToggles.get(element);
            if (toggle && !toggle.disabled) {
                toggle.checked = !toggle.checked;
                element.standaloneToggle.onChange(toggle.checked);
            }
            return;
        }
        if (element.isSectionToggle && element.section) {
            this._list.setSelection([]);
            const section = element.section;
            queueMicrotask(() => {
                this._toggleSection(section);
            });
            return;
        }
        const isPointerActivation = isMouseEvent(e.browserEvent) || e.browserEvent?.type === EventType$1.Tap;
        if (isPointerActivation) {
            const target = e.browserEvent.target;
            if (isHTMLElement(target) && (target.closest('.action-list-item-toolbar') || target.closest('.action-list-submenu-indicator') || target.closest('.action-list-item-inline-toggle'))) {
                this._list.setSelection([]);
                return;
            }
        }
        if (element.openSubmenuOnClick && element.submenuActions?.length && (isPointerActivation || e.browserEvent instanceof AcceptSelectedEvent)) {
            this._list.setSelection([]);
            this._showSubmenuForItem(element);
            if (!isPointerActivation) {
                this._currentSubmenuWidget?.focus();
            }
            return;
        }
        if (element.item && this.focusCondition(element)) {
            const isPreviewEvent = e.browserEvent instanceof PreviewSelectedEvent;
            this._delegate.onSelect(element.item, isPreviewEvent && this._supportsPreview);
        }
        else {
            this._list.setSelection([]);
        }
    }
    onFocus() {
        const focused = this._list.getFocus();
        if (focused.length === 0) {
            return;
        }
        const focusIndex = focused[0];
        const element = this._list.element(focusIndex);
        this._delegate.onFocus?.(element.item);
        // Show hover on focus change (suppress during programmatic initial focus)
        if (!this._suppressHover) {
            if (this._options?.persistentHover) {
                this._cancelSubmenuShow();
                this._resetSubmenuPointer();
                this._list.reveal(focusIndex);
            }
            this._showHoverForElement(element, focusIndex);
        }
    }
    _removeItem(item) {
        const index = this._allMenuItems.indexOf(item);
        if (index >= 0) {
            this._allMenuItems.splice(index, 1);
            this._applyFilter();
        }
    }
    _recomputeGroupTitles(items) {
        this._groupTitleByIndex.clear();
        const seenTitles = new Set();
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if (item.kind === "action" /* ActionListItemKind.Action */ && item.group?.title && !seenTitles.has(item.group.title)) {
                seenTitles.add(item.group.title);
                this._groupTitleByIndex.set(i, item.group.title);
            }
        }
    }
    _measureItemWidths(items) {
        const rows = [];
        for (let i = 0; i < items.length; i++) {
            const element = this._getRowElement(i);
            if (element) {
                element.style.width = 'auto';
                rows.push({ element, item: items[i] });
            }
        }
        try {
            return rows.map(({ element, item }) => element.getBoundingClientRect().width + (item.detail ? 0 : this._computeToolbarWidth(item)));
        }
        finally {
            for (const { element } of rows) {
                element.style.width = '';
            }
        }
    }
    _computeToolbarWidth(item) {
        let actionCount = item.toolbarActions?.length ?? 0;
        if (item.onRemove) {
            actionCount++;
        }
        if (actionCount === 0) {
            return 0;
        }
        // Each toolbar action button is ~22px (16px icon + padding), plus a 6px row gap and 10px trailing margin.
        const actionButtonWidth = 22;
        return actionCount * actionButtonWidth + 6 + 10;
    }
    _getRowElement(index) {
        if (index < 0) {
            return null;
        }
        // eslint-disable-next-line no-restricted-syntax
        return this.domNode.ownerDocument.getElementById(this._list.getElementID(index));
    }
    _showTabThroughPanelForFocusedItem() {
        const focused = this._list.getFocus();
        if (focused.length === 0) {
            return;
        }
        const index = focused[0];
        const element = this._list.element(index);
        if (!element.hover?.tabThroughPanel) {
            return;
        }
        const row = this._getRowElement(index);
        if (row) {
            this._showSubmenuForElement(element, row);
        }
    }
    _getTabThroughPanelControls(element, row) {
        if (element.hover?.tabThroughPanel && this._currentSubmenuElement !== element) {
            this._showSubmenuForElement(element, row);
        }
        return {
            toolbar: this._itemToolbars.get(element),
            panelControls: [
                ...element.hover?.getTabbableElements?.() ?? [],
                ...this._submenuHoverActionElements,
            ],
        };
    }
    _focusFirstTabThroughPanelControl(element, row) {
        const controls = this._getTabThroughPanelControls(element, row);
        if (controls.toolbar?.length()) {
            controls.toolbar.focus(0);
        }
        else {
            (controls.panelControls[0] ?? this._list.getHTMLElement()).focus();
        }
    }
    _handleTabThroughPanelKeyDown(event) {
        if (event.isComposing) {
            return;
        }
        const focused = this._list.getFocus();
        if (focused.length === 0) {
            return;
        }
        const index = focused[0];
        const element = this._list.element(index);
        if (!element.hover?.tabThroughPanel && !this._options?.tabThroughItemActions) {
            return;
        }
        const row = this._getRowElement(index);
        const activeElement = getActiveElement();
        if (!row || !isHTMLElement(activeElement)) {
            return;
        }
        const controls = this._getTabThroughPanelControls(element, row);
        const inToolbar = controls.toolbar?.isFocused() ?? false;
        const inPanel = this._submenuContainer.contains(activeElement);
        if ((event.key === 'ArrowUp' || event.key === 'ArrowDown') && (inToolbar || inPanel)) {
            EventHelper.stop(event, true);
            this._list.domFocus();
            if (event.key === 'ArrowUp') {
                this.focusPrevious();
            }
            else {
                this.focusNext();
            }
            return;
        }
        // Ctrl/Meta/Alt+Tab are editor- and OS-level shortcuts (e.g. editor group
        // navigation); only plain Tab and Shift+Tab drive panel traversal.
        if (event.key !== 'Tab' || event.ctrlKey || event.metaKey || event.altKey) {
            return;
        }
        let target;
        if (event.shiftKey) {
            if (inPanel) {
                const panelControlIndex = controls.panelControls.indexOf(activeElement);
                if (panelControlIndex > 0) {
                    target = controls.panelControls[panelControlIndex - 1];
                }
                else if (controls.toolbar?.length()) {
                    EventHelper.stop(event, true);
                    controls.toolbar.focus(controls.toolbar.length() - 1);
                    return;
                }
                else {
                    target = this._list.getHTMLElement();
                }
            }
            else if (controls.toolbar?.isFocused()) {
                const toolbarIndex = controls.toolbar.viewItems.findIndex((_, actionIndex) => controls.toolbar?.isFocused(actionIndex));
                if (toolbarIndex > 0) {
                    EventHelper.stop(event, true);
                    controls.toolbar.focus(toolbarIndex - 1);
                    return;
                }
                target = this._options?.filterAsCombobox ? this._filterInput : this._list.getHTMLElement();
            }
        }
        else if (activeElement === this._list.getHTMLElement() || activeElement === this._filterInput) {
            if (controls.toolbar?.length()) {
                EventHelper.stop(event, true);
                controls.toolbar.focus(0);
                return;
            }
            target = controls.panelControls[0];
        }
        else {
            if (controls.toolbar?.isFocused()) {
                const toolbarIndex = controls.toolbar.viewItems.findIndex((_, actionIndex) => controls.toolbar?.isFocused(actionIndex));
                if (toolbarIndex + 1 < controls.toolbar.length()) {
                    EventHelper.stop(event, true);
                    controls.toolbar.focus(toolbarIndex + 1);
                    return;
                }
                target = controls.panelControls[0];
            }
            else {
                const panelControlIndex = controls.panelControls.indexOf(activeElement);
                if (panelControlIndex >= 0) {
                    target = controls.panelControls[panelControlIndex + 1] ?? this._list.getHTMLElement();
                }
            }
        }
        if (target) {
            EventHelper.stop(event, true);
            target.focus();
        }
    }
    _showHoverForElement(element, index) {
        if (this._currentSubmenuElement === element) {
            return;
        }
        const hasHoverContent = !!element.hover?.content;
        const hasSubmenuActions = !!element.submenuActions?.length;
        if (hasHoverContent || hasSubmenuActions) {
            const rowElement = this._getRowElement(index);
            if (rowElement) {
                this._showSubmenuForElement(element, rowElement);
            }
            return;
        }
        if (!this._options?.persistentHover) {
            this._hideSubmenu();
        }
    }
    _showSubmenuForItem(item) {
        const index = this._list.indexOf(item);
        if (index >= 0) {
            const rowElement = this._getRowElement(index);
            if (rowElement) {
                this._showSubmenuForElement(item, rowElement);
            }
        }
    }
    _showSubmenuForElement(element, anchor) {
        if (!this._hoverEnabled || this._currentSubmenuElement === element) {
            return;
        }
        this._currentSubmenuElement = element;
        this._clearSubmenuContainer();
        // Marks the row the panel belongs to as open, so a screen reader can tell what
        // ArrowRight opened. Reset in `_clearSubmenuContainer`.
        anchor.setAttribute('aria-expanded', 'true');
        this._expandedTrigger = anchor;
        // Set after clearing, which is what removes the previous item's class.
        this._submenuPanelClassName = element.hover?.panelClassName;
        if (this._submenuPanelClassName) {
            this._submenuContainer.classList.add(this._submenuPanelClassName);
        }
        const preserveVerticalPosition = element.hover?.preserveVerticalPosition;
        const hasSubmenuActions = !!element.submenuActions?.length;
        const content = preserveVerticalPosition ? $('.action-list-submenu-content') : this._submenuContainer;
        const viewport = preserveVerticalPosition ? $('.action-list-submenu-viewport', undefined, content) : undefined;
        const scrollbar = viewport && !hasSubmenuActions ? this._submenuDisposables.add(new DomScrollableElement(viewport, {
            horizontal: 2 /* ScrollbarVisibility.Hidden */,
            vertical: 1 /* ScrollbarVisibility.Auto */,
            consumeMouseWheelIfScrollbarIsNeeded: true,
            useShadows: false,
        })) : undefined;
        if (scrollbar && viewport) {
            this._submenuContainer.appendChild(scrollbar.getDomNode());
            this._submenuDisposables.add(addDisposableListener(viewport, EventType.SCROLL, () => scrollbar.scanDomNode()));
            this._submenuDisposables.add(addDisposableListener(this._submenuContainer, EventType.KEY_DOWN, e => {
                const event = new StandardKeyboardEvent(e);
                if (event.equals(12 /* KeyCode.PageDown */) || event.equals(11 /* KeyCode.PageUp */)) {
                    EventHelper.stop(e, true);
                    scrollbar.setScrollPosition({
                        scrollTop: scrollbar.getScrollPosition().scrollTop + (event.equals(12 /* KeyCode.PageDown */) ? 1 : -1) * viewport.clientHeight,
                    });
                }
            }));
        }
        else if (viewport) {
            this._submenuContainer.appendChild(viewport);
        }
        // When the item has hover content, render it as a header
        let hoverHeader;
        const hoverContent = typeof element.hover?.content === 'function' ? element.hover.content() : element.hover?.content;
        if (hoverContent) {
            if (isHTMLElement(hoverContent)) {
                hoverHeader = hoverContent;
                // The hover element is owned by the caller and reused across shows,
                // so its disposable must NOT be tied to the per-navigation submenu
                // store (which is cleared every time the submenu switches). Tearing
                // it down there would destroy reused content — e.g. Button widgets
                // remove their DOM on dispose, leaving an empty hover. Track it for
                // the widget's lifetime instead.
                if (element.hover?.disposable) {
                    this._register(element.hover.disposable);
                }
            }
            else {
                const markdown = typeof hoverContent === 'string' ? new MarkdownString(hoverContent) : hoverContent;
                const linkHandler = this._options?.linkHandler;
                const rendered = renderMarkdown(markdown, {
                    actionHandler: (url) => {
                        const uri = URI.parse(url);
                        if (linkHandler) {
                            linkHandler(uri, element);
                        }
                        else {
                            this._openerService.open(uri, { allowCommands: true });
                        }
                    },
                });
                this._submenuDisposables.add(rendered);
                hoverHeader = rendered.element;
            }
            hoverHeader.classList.add('action-list-submenu-hover-header');
            hoverHeader.classList.toggle('content-owns-padding', element.hover?.contentOwnsPadding === true);
            if (element.submenuActions?.length) {
                hoverHeader.classList.add('has-submenu');
            }
            content.appendChild(hoverHeader);
        }
        if (element.hover?.actions?.length) {
            const statusBarElement = $('.hover-row.status-bar');
            const actionsElement = append(statusBarElement, $('.actions'));
            for (const action of element.hover.actions) {
                const keybinding = this._keybindingService.lookupKeybinding(action.commandId);
                const hoverAction = this._submenuDisposables.add(HoverAction.render(actionsElement, {
                    label: action.label,
                    commandId: action.commandId,
                    run: target => action.run(target),
                    iconClass: action.iconClass,
                }, keybinding?.getLabel() ?? null));
                this._submenuHoverActionElements.push(hoverAction.actionContainer);
            }
            this._submenuContainer.appendChild(statusBarElement);
        }
        // Show container before creating widget so List can measure during construction
        this._submenuContainer.style.display = '';
        this._submenuContainer.style.position = 'absolute';
        // An expandable hover panel is a named region the user travels into, so it says
        // what it is. A panel carrying a submenu list leaves the semantics to that list.
        if (element.hover?.expandable) {
            this._submenuContainer.setAttribute('role', 'dialog');
            if (element.label) {
                this._submenuContainer.setAttribute('aria-label', element.label);
            }
        }
        else {
            this._submenuContainer.removeAttribute('role');
        }
        const targetWindow = getWindow(this.domNode);
        let totalHeight = 0;
        let maxWidth = hoverHeader ? hoverHeader.offsetWidth : 0;
        let submenuWidget;
        if (hasSubmenuActions) {
            const submenuItems = this._createSubmenuItems(element.submenuActions);
            const submenuDelegate = {
                onHide: () => { },
                onSelect: (action) => {
                    action.run();
                    const parentItem = this._currentSubmenuElement?.item;
                    this._hideSubmenu();
                    if (parentItem) {
                        this._delegate.onSelect(parentItem);
                    }
                    this.hide();
                },
            };
            const createdSubmenuWidget = this._submenuDisposables.add(this._instantiationService.createInstance((ActionListWidget_1), 'submenu', false, submenuItems, submenuDelegate, undefined, element.submenuOptions));
            submenuWidget = createdSubmenuWidget;
            if (createdSubmenuWidget.headerContainer) {
                content.appendChild(createdSubmenuWidget.headerContainer);
            }
            if (createdSubmenuWidget.filterContainer) {
                content.appendChild(createdSubmenuWidget.filterContainer);
            }
            content.appendChild(createdSubmenuWidget.domNode);
            if (createdSubmenuWidget.footerContainer) {
                content.appendChild(createdSubmenuWidget.footerContainer);
            }
            this._currentSubmenuWidget = createdSubmenuWidget;
            // The submenu widget's constructor focuses its first item by
            // default; clear that until the user actually navigates into
            // the submenu (via ArrowRight) so it doesn't render as if
            // selected while the parent list still has focus.
            createdSubmenuWidget.clearFocus();
            totalHeight = createdSubmenuWidget.computeListHeight();
            createdSubmenuWidget.layout(totalHeight);
            const submenuMaxWidth = createdSubmenuWidget.computeMaxWidth(0);
            maxWidth = Math.max(maxWidth, submenuMaxWidth, createdSubmenuWidget.footerContainer?.offsetWidth ?? 0);
            createdSubmenuWidget.layout(totalHeight, maxWidth);
            createdSubmenuWidget.domNode.style.width = `${maxWidth}px`;
            if (element.submenuOptions) {
                this._submenuContainer.style.boxSizing = 'border-box';
                this._submenuContainer.style.width = `${maxWidth + 10}px`;
            }
            this._submenuDisposables.add(createdSubmenuWidget.onDidRequestLayout(() => {
                totalHeight = createdSubmenuWidget.computeListHeight();
                createdSubmenuWidget.layout(totalHeight, maxWidth);
                this._layoutSubmenu?.();
            }));
            // Keyboard navigation in submenu
            this._submenuDisposables.add(addDisposableListener(content, 'keydown', (e) => {
                if (e.key === 'Escape') {
                    EventHelper.stop(e, true);
                    this._hideSubmenu();
                    this.hide();
                }
                else if (e.key === 'ArrowLeft') {
                    EventHelper.stop(e, true);
                    this._hideSubmenu();
                    this._setKeyboardNavigation(true);
                    this._list.domFocus();
                }
                else if (e.key === 'Enter' || e.key === ' ') {
                    EventHelper.stop(e, true);
                    createdSubmenuWidget.acceptSelected();
                }
                else if (e.key === 'ArrowDown') {
                    EventHelper.stop(e, true);
                    createdSubmenuWidget.focusNext();
                }
                else if (e.key === 'ArrowUp') {
                    EventHelper.stop(e, true);
                    createdSubmenuWidget.focusPrevious();
                }
            }));
        }
        let openingPanelHeight;
        let openingPanelTop;
        const layout = () => {
            const currentElement = this._currentSubmenuElement;
            if (!currentElement || this._layoutSubmenu !== layout) {
                return;
            }
            // Width measurement and virtualization can replace or recycle the original row.
            const index = this._list.indexOf(currentElement);
            const row = index >= 0 ? this._getRowElement(index) : null;
            const persistent = this._options?.persistentHover;
            if (!row && (!persistent || !this._allMenuItems.includes(currentElement))) {
                this._hideSubmenu();
                return;
            }
            if (this._expandedTrigger !== row) {
                if (this._expandedTrigger?.hasAttribute('aria-expanded')) {
                    this._expandedTrigger.setAttribute('aria-expanded', 'false');
                }
                this._expandedTrigger = row ?? undefined;
            }
            row?.setAttribute('aria-expanded', 'true');
            const parentRect = this.domNode.getBoundingClientRect();
            const alignToParent = persistent || currentElement.hover?.alignToParent;
            const edgeRect = alignToParent
                ? this.domNode.parentElement?.closest('.action-widget')?.getBoundingClientRect() ?? parentRect
                : parentRect;
            const anchorRect = row?.getBoundingClientRect() ?? edgeRect;
            const zoom = alignToParent || preserveVerticalPosition ? getDomNodeZoomLevel(this.domNode) : 1;
            if (persistent) {
                this._submenuContainer.style.width = `${edgeRect.width / zoom}px`;
            }
            const panelRect = this._submenuContainer.getBoundingClientRect();
            let panelWidth = alignToParent ? panelRect.width : maxWidth + 10;
            const spaceRight = targetWindow.innerWidth - (alignToParent ? edgeRect.right : anchorRect.right);
            const spaceLeft = edgeRect.left;
            const gap = alignToParent ? 0 : 4;
            const viewportMargin = 4;
            // On a narrow viewport (e.g. a phone) neither side may have room for the
            // panel next to its anchor. Clamp its width to what actually fits
            // on-screen so it can be reflowed into the viewport rather than
            // overflowing off one edge.
            if (!alignToParent) {
                const availableWidth = targetWindow.innerWidth - 2 * viewportMargin;
                if (panelWidth > availableWidth) {
                    panelWidth = Math.max(availableWidth, 0);
                }
                this._submenuContainer.style.boxSizing = 'border-box';
                this._submenuContainer.style.width = `${panelWidth}px`;
            }
            let showRight = spaceRight >= panelWidth || spaceRight >= spaceLeft;
            if (persistent && this._submenuSide && (this._submenuSide === 'right' ? spaceRight : spaceLeft) >= panelWidth) {
                showRight = this._submenuSide === 'right';
            }
            if (persistent) {
                this._submenuSide = showRight ? 'right' : 'left';
            }
            let left = showRight
                ? edgeRect.right - parentRect.left + gap
                : edgeRect.left - parentRect.left - panelWidth - gap;
            // Clamp the final position so the panel always renders fully
            // on-screen, which the width clamp above alone cannot guarantee once
            // the anchor itself sits close to a viewport edge.
            const pageLeft = parentRect.left + left;
            if (pageLeft < viewportMargin) {
                left += viewportMargin - pageLeft;
            }
            else if (pageLeft + panelWidth > targetWindow.innerWidth - viewportMargin) {
                left -= (pageLeft + panelWidth) - (targetWindow.innerWidth - viewportMargin);
            }
            this._submenuContainer.style.left = `${left / zoom}px`;
            const panelHeight = panelRect.height;
            if (preserveVerticalPosition) {
                openingPanelHeight ??= panelHeight / zoom;
            }
            const anchorHeight = openingPanelHeight !== undefined ? openingPanelHeight * zoom : panelHeight;
            let top = openingPanelTop !== undefined
                ? openingPanelTop * zoom
                : row && currentElement.hover?.alignToAnchorTop
                    ? anchorRect.top - parentRect.top
                    : row
                        ? anchorRect.top - parentRect.top + (anchorRect.height - anchorHeight) / 2
                        : panelRect.top - parentRect.top;
            if (preserveVerticalPosition && currentElement.hover?.alignToAnchorTop && viewport && submenuWidget) {
                const outerChromeHeight = panelRect.height - viewport.getBoundingClientRect().height;
                const submenuChromeHeight = (submenuWidget.headerContainer?.offsetHeight ?? 0)
                    + (submenuWidget.filterContainer?.offsetHeight ?? 0)
                    + (submenuWidget.footerContainer?.offsetHeight ?? 0);
                const desiredPanelHeight = outerChromeHeight + (submenuChromeHeight + totalHeight) * zoom;
                top = Math.min(top, targetWindow.innerHeight - parentRect.top - desiredPanelHeight - 8);
            }
            const panelBottom = parentRect.top + top + anchorHeight;
            if (panelBottom > targetWindow.innerHeight && !(preserveVerticalPosition && currentElement.hover?.alignToAnchorTop)) {
                top -= panelBottom - targetWindow.innerHeight + 8;
            }
            if (parentRect.top + top < 0) {
                top = -parentRect.top;
            }
            if (preserveVerticalPosition) {
                openingPanelTop ??= top / zoom;
            }
            if (viewport && scrollbar) {
                const chromeHeight = (panelRect.height - scrollbar.getDomNode().getBoundingClientRect().height) / zoom;
                const availableHeight = Math.max(0, (targetWindow.innerHeight - parentRect.top - top - 8) / zoom - chromeHeight);
                viewport.style.height = `${Math.min(content.getBoundingClientRect().height / zoom, availableHeight)}px`;
                scrollbar.scanDomNode();
            }
            else if (viewport && submenuWidget) {
                const chromeHeight = (panelRect.height - viewport.getBoundingClientRect().height) / zoom;
                const availableHeight = Math.max(0, (targetWindow.innerHeight - parentRect.top - top - 8) / zoom - chromeHeight);
                const submenuChromeHeight = (submenuWidget.headerContainer?.offsetHeight ?? 0)
                    + (submenuWidget.filterContainer?.offsetHeight ?? 0)
                    + (submenuWidget.footerContainer?.offsetHeight ?? 0);
                const submenuHeight = totalHeight === 0 ? 0 : Math.max(this._actionLineHeight, Math.min(totalHeight, availableHeight - submenuChromeHeight));
                submenuWidget.layout(submenuHeight, maxWidth);
                viewport.style.height = `${submenuChromeHeight + submenuHeight}px`;
            }
            this._submenuContainer.style.top = `${top / zoom}px`;
        };
        this._layoutSubmenu = layout;
        layout();
        // tabThroughPanel content (e.g. a GitHub reference hover) can grow when
        // focus reveals bounded text, in which case the panel must reposition
        // itself, not just the row that measured it before the content changed.
        if ((this._options?.persistentHover || element.hover?.alignToParent || element.hover?.tabThroughPanel || preserveVerticalPosition) && this._currentSubmenuElement === element) {
            if (!submenuWidget) {
                const scheduledLayout = this._submenuDisposables.add(new MutableDisposable());
                const observer = this._submenuDisposables.add(new DisposableResizeObserver('ActionListWidget.hoverPanel', () => {
                    if (!scheduledLayout.value) {
                        // Layout can resize the observed panel, so run it outside resize observation.
                        scheduledLayout.value = scheduleAtNextAnimationFrame(targetWindow, () => {
                            scheduledLayout.clear();
                            layout();
                        });
                    }
                }, targetWindow));
                this._submenuDisposables.add(observer.observe(preserveVerticalPosition ? content : this._submenuContainer, { box: 'border-box' }));
            }
            if (this._options?.persistentHover || preserveVerticalPosition) {
                this._submenuDisposables.add(addDisposableListener(targetWindow, EventType.RESIZE, () => {
                    this._cancelSubmenuShow();
                    this._resetSubmenuPointer();
                    layout();
                }));
            }
        }
    }
    _createSubmenuItems(submenuActions) {
        const submenuItems = [];
        const submenuGroups = submenuActions.filter((action) => action instanceof SubmenuAction);
        const groupsWithActions = submenuGroups.filter(group => group.actions.length > 0);
        for (let groupIndex = 0; groupIndex < groupsWithActions.length; groupIndex++) {
            const group = groupsWithActions[groupIndex];
            if (group.label) {
                submenuItems.push({
                    kind: "header" /* ActionListItemKind.Header */,
                    group: { title: group.label },
                    label: group.label,
                });
            }
            for (const child of group.actions) {
                const extendedChild = child;
                const icon = extendedChild.icon
                    ?? ThemeIcon.fromId(child.checked ? Codicon.check.id : Codicon.blank.id);
                const hoverContent = extendedChild.hoverContent;
                const hover = hoverContent
                    ? new MarkdownString().appendText(`${child.label}\n`).appendMarkdown(hoverContent)
                    : undefined;
                submenuItems.push({
                    item: child,
                    kind: "action" /* ActionListItemKind.Action */,
                    label: child.label,
                    description: child.tooltip && child.tooltip !== child.label ? child.tooltip : undefined,
                    group: { title: '', icon },
                    hideIcon: false,
                    hover: hover ? { content: hover } : undefined,
                    tooltip: child.tooltip || child.label,
                    onRemove: extendedChild.onRemove,
                    submenuActions: child instanceof SubmenuAction ? [new SubmenuAction(child.id, '', child.actions)] : undefined,
                });
            }
            if (groupIndex < groupsWithActions.length - 1) {
                submenuItems.push({ kind: "separator" /* ActionListItemKind.Separator */, label: '' });
            }
        }
        for (const action of submenuActions) {
            if (!(action instanceof SubmenuAction)) {
                const extendedAction = action;
                const icon = extendedAction.icon
                    ?? ThemeIcon.fromId(action.checked ? Codicon.check.id : Codicon.blank.id);
                const hoverContent = extendedAction.hoverContent;
                const hover = hoverContent
                    ? new MarkdownString().appendText(`${action.label}\n`).appendMarkdown(hoverContent)
                    : undefined;
                submenuItems.push({
                    item: action,
                    kind: "action" /* ActionListItemKind.Action */,
                    label: action.label,
                    description: action.tooltip && action.tooltip !== action.label ? action.tooltip : undefined,
                    group: { title: '', icon },
                    hideIcon: false,
                    hover: hover ? { content: hover } : undefined,
                    tooltip: action.tooltip || action.label,
                    onRemove: extendedAction.onRemove,
                });
            }
        }
        return submenuItems;
    }
    _hideSubmenu() {
        this._cancelSubmenuHide();
        this._cancelSubmenuShow();
        this._currentSubmenuElement = undefined;
        this._submenuSide = undefined;
        this._clearSubmenuContainer();
        this._submenuContainer.style.display = 'none';
    }
    /**
     * Clears the submenu/hover panel. If focus currently lives inside the panel
     * (e.g. the user clicked a button in the hover content), focus is first moved
     * back to the list. Otherwise clearing the panel would drop focus to <body>,
     * which blurs the action widget and dismisses it.
     */
    _clearSubmenuContainer() {
        this._layoutSubmenu = undefined;
        this._resetSubmenuPointer();
        if (this._submenuContainer.contains(getActiveElement())) {
            this._list.domFocus();
        }
        this._submenuDisposables.clear();
        this._currentSubmenuWidget = undefined;
        this._submenuHoverActionElements = [];
        if (this._submenuPanelClassName) {
            this._submenuContainer.classList.remove(this._submenuPanelClassName);
            this._submenuPanelClassName = undefined;
        }
        this._submenuContainer.removeAttribute('role');
        this._submenuContainer.removeAttribute('aria-label');
        // The row that opened the panel is no longer expanded. Skipped when the row has
        // since been recycled onto an item with no panel, which drops the attribute.
        if (this._expandedTrigger?.hasAttribute('aria-expanded')) {
            this._expandedTrigger.setAttribute('aria-expanded', 'false');
        }
        this._expandedTrigger = undefined;
        clearNode(this._submenuContainer);
        this._submenuContainer.style.width = '';
        this._submenuContainer.style.boxSizing = this._options?.persistentHover ? 'border-box' : '';
    }
    _scheduleSubmenuHide() {
        this._cancelSubmenuHide();
        if (this._options?.persistentHover) {
            return;
        }
        this._submenuHideTimeout = setTimeout(() => {
            this._hideSubmenu();
        }, 300);
    }
    _cancelSubmenuHide() {
        if (this._submenuHideTimeout !== undefined) {
            clearTimeout(this._submenuHideTimeout);
            this._submenuHideTimeout = undefined;
        }
    }
    _scheduleSubmenuShow(element, pointer) {
        this._cancelSubmenuShow();
        let delay = this._options?.submenuHoverDelay ?? 500;
        if (this._usesSubmenuPointerIntent()) {
            delay = 0;
            const origin = this._submenuPointerOrigin;
            if (origin && pointer.clientX !== origin.x && this._currentSubmenuElement && new SafeTriangle(origin.x, origin.y, this._submenuContainer).contains(pointer.clientX, pointer.clientY)) {
                // Give a diagonal path into the current card a bounded grace period.
                const now = Date.now();
                this._submenuPointerGraceDeadline ??= now + 200;
                delay = Math.max(0, this._submenuPointerGraceDeadline - now);
            }
        }
        const show = () => {
            this._submenuShowTimeout = undefined;
            const index = this._list.indexOf(element);
            const rowElement = index >= 0 ? this._getRowElement(index) : null;
            if (rowElement) {
                this._showSubmenuForElement(element, rowElement);
                if (this._usesSubmenuPointerIntent()) {
                    this._updateSubmenuPointer(pointer);
                }
            }
        };
        if (delay === 0) {
            show();
        }
        else {
            this._submenuShowTimeout = setTimeout(show, delay);
        }
    }
    _updateSubmenuPointer(event) {
        this._submenuPointerOrigin = { x: event.clientX, y: event.clientY };
        this._submenuPointerGraceDeadline = undefined;
    }
    _resetSubmenuPointer() {
        this._submenuPointerOrigin = undefined;
        this._submenuPointerGraceDeadline = undefined;
    }
    _usesSubmenuPointerIntent() {
        return this._options?.persistentHover === true || this._options?.submenuPointerIntent === true;
    }
    _cancelSubmenuShow() {
        if (this._submenuShowTimeout !== undefined) {
            clearTimeout(this._submenuShowTimeout);
            this._submenuShowTimeout = undefined;
        }
    }
    async onListHover(e) {
        this._setKeyboardNavigation(false);
        const element = e.element;
        if (element && element.item && this.focusCondition(element)) {
            const focus = typeof e.index === 'number' ? [e.index] : [];
            const activeElement = getActiveElement();
            if (this._options?.tabThroughItemActions && this._list.getFocus()[0] !== e.index
                && isHTMLElement(activeElement) && this.domNode.contains(activeElement) && activeElement.closest('.action-list-item-toolbar')) {
                // Moving to another row hides the focused toolbar, so keep DOM focus in the list.
                this._list.domFocus();
            }
            // Check if the hover target is inside a toolbar - if so, skip the splice
            // to avoid re-rendering which would destroy the element mid-hover.
            // But still maintain submenu state for items with submenu actions.
            const isHoveringToolbar = isHTMLElement(e.browserEvent.target) && e.browserEvent.target.closest('.action-list-item-toolbar') !== null;
            if (isHoveringToolbar) {
                if (!element.submenuActions?.length) {
                    this._cancelSubmenuShow();
                }
                this._list.setFocus(this._options?.tabThroughItemActions ? focus : []);
                return;
            }
            // Set focus immediately for responsive hover feedback
            const hasPanel = !!(element.submenuActions?.length || element.hover?.content);
            const suppressHover = this._suppressHover;
            if (hasPanel || this._usesSubmenuPointerIntent()) {
                this._suppressHover = true;
            }
            try {
                this._list.setFocus(focus);
            }
            finally {
                this._suppressHover = suppressHover;
            }
            if (hasPanel) {
                if (this._currentSubmenuElement === element) {
                    this._cancelSubmenuHide();
                    this._cancelSubmenuShow();
                    if (this._usesSubmenuPointerIntent()) {
                        this._updateSubmenuPointer(e.browserEvent);
                    }
                }
                else {
                    if (!this._usesSubmenuPointerIntent()) {
                        this._hideSubmenu();
                    }
                    this._scheduleSubmenuShow(element, e.browserEvent);
                }
                return;
            }
            if (this._currentSubmenuElement === element) {
                this._cancelSubmenuHide();
            }
            else {
                this._cancelSubmenuShow();
                if (this._options?.submenuPointerIntent) {
                    this._scheduleSubmenuHide();
                }
                else if (!this._options?.persistentHover) {
                    this._hideSubmenu();
                }
            }
            if (this._delegate.onHover && !element.disabled && element.kind === "action" /* ActionListItemKind.Action */ && this._currentSubmenuElement !== element) {
                const result = await this._delegate.onHover(element.item, this.cts.token);
                const canPreview = result ? result.canPreview : undefined;
                if (canPreview !== element.canPreview) {
                    element.canPreview = canPreview;
                    if (typeof e.index === 'number') {
                        this._list.splice(e.index, 1, [element]);
                        this._list.setFocus([e.index]);
                    }
                }
            }
        }
        else if (element && element.hover?.content && typeof e.index === 'number') {
            if (this._currentSubmenuElement === element) {
                this._cancelSubmenuHide();
                this._cancelSubmenuShow();
            }
            else {
                if (!this._options?.persistentHover) {
                    this._hideSubmenu();
                }
                this._scheduleSubmenuShow(element, e.browserEvent);
            }
        }
    }
    onListClick(e) {
        if (e.element && this.focusCondition(e.element)) {
            this._list.setFocus([]);
        }
    }
};
ActionListWidget = ActionListWidget_1 = __decorate([
    __param(6, IKeybindingService),
    __param(7, IOpenerService),
    __param(8, IInstantiationService)
], ActionListWidget);
/**
 * An action list that wraps {@link ActionListWidget} with context-view positioning
 * and anchor-based height computation.
 */
let ActionList = class ActionList extends Disposable {
    get domNode() {
        return this._widget.domNode;
    }
    get filterContainer() {
        return this._widget.filterContainer;
    }
    get footerContainer() {
        return this._widget.footerContainer;
    }
    get headerContainer() {
        return this._widget.headerContainer;
    }
    get filterInput() {
        return this._widget.filterInput;
    }
    get closeAnimation() {
        return this._widget.closeAnimation;
    }
    get widgetClassName() {
        return this._widgetClassName;
    }
    /**
     * Returns the resolved anchor position after the first layout.
     * Used by the context view delegate to lock the dropdown direction.
     */
    get anchorPosition() {
        if (this._preferredAnchorPosition !== undefined) {
            return this._preferredAnchorPosition;
        }
        if (this._showAbove === undefined) {
            return undefined;
        }
        return this._showAbove ? 1 /* AnchorPosition.ABOVE */ : 0 /* AnchorPosition.BELOW */;
    }
    constructor(user, preview, items, _delegate, accessibilityProvider, options, anchor, _contextViewService, _layoutService, instantiationService) {
        super();
        this._contextViewService = _contextViewService;
        this._layoutService = _layoutService;
        this._lastMinWidth = 0;
        this._hasLaidOut = false;
        this._anchor = anchor;
        this._preferredAnchorPosition = options?.anchorPosition;
        this._useFullHeight = options?.useFullHeight ?? false;
        this._widgetClassName = options?.widgetClassName;
        this._widget = this._register(instantiationService.createInstance((ActionListWidget), user, preview, items, _delegate, accessibilityProvider, options));
        this._register(this._widget.onDidRequestLayout(() => {
            if (this._hasLaidOut) {
                this.layout(this._lastMinWidth);
                this._contextViewService.layout();
            }
        }));
    }
    focus() {
        this._widget.focus();
    }
    hide(didCancel, hideContextView = true) {
        this._widget.hide(didCancel);
        if (hideContextView) {
            this._contextViewService.hideContextView();
        }
    }
    clearFilter() {
        return this._widget.clearFilter();
    }
    focusPrevious() {
        this._widget.focusPrevious();
    }
    focusNext() {
        this._widget.focusNext();
    }
    collapseFocusedSection() {
        this._widget.collapseFocusedSection();
    }
    expandFocusedSection() {
        this._widget.expandFocusedSection();
    }
    toggleFocusedSection() {
        return this._widget.toggleFocusedSection();
    }
    acceptSelected(preview) {
        this._widget.acceptSelected(preview);
    }
    hasDynamicHeight() {
        return this._widget.hasDynamicHeight;
    }
    computeActionWidgetVerticalChromeHeight() {
        const widgetContainer = this.domNode.parentElement?.closest('.action-widget');
        if (!widgetContainer) {
            return 0;
        }
        const style = getWindow(widgetContainer).getComputedStyle(widgetContainer);
        const toPixels = (value) => Number.parseFloat(value) || 0;
        return toPixels(style.paddingTop) + toPixels(style.paddingBottom) + toPixels(style.borderTopWidth) + toPixels(style.borderBottomWidth);
    }
    computeHeight() {
        const listHeight = this._fixedContentHeight ?? this._widget.computeListHeight();
        const filterHeight = this._widget.filterContainer ? 36 : 0;
        const footerHeight = this._widget.footerContainer ? 32 : 0;
        const headerHeight = this._widget.headerContainer && !this._widget.headerContainer.hidden ? this._widget.headerContainer.offsetHeight || 36 : 0;
        const chromeHeight = filterHeight + footerHeight + headerHeight;
        const targetWindow = getWindow(this.domNode);
        let availableHeight;
        if (this.hasDynamicHeight() || this._preferredAnchorPosition !== undefined) {
            const viewportHeight = targetWindow.innerHeight;
            const anchorRect = getAnchorRect(this._anchor);
            const anchorTopInViewport = anchorRect.top - targetWindow.pageYOffset;
            const bottomGap = 30;
            const spaceBelow = viewportHeight - anchorTopInViewport - anchorRect.height - bottomGap;
            const spaceAbove = anchorTopInViewport;
            // Lock the direction on first layout based on whether the full
            // unconstrained list fits below. Once decided, the dropdown stays
            // in the same position even when the visible item count changes.
            if (this._showAbove === undefined) {
                // A pinned height decides the direction too, so a later tab cannot flip it.
                const fullHeight = this._fixedContentHeight ?? this._widget.computeFullHeight();
                this._showAbove = this._preferredAnchorPosition !== undefined
                    ? this._preferredAnchorPosition === 1 /* AnchorPosition.ABOVE */
                    : (chromeHeight + fullHeight > spaceBelow && spaceAbove > spaceBelow);
            }
            availableHeight = Math.max(0, (this._showAbove ? spaceAbove : spaceBelow) - this.computeActionWidgetVerticalChromeHeight());
        }
        else {
            const padding = 10;
            const windowHeight = this._layoutService.getContainer(targetWindow).clientHeight;
            const widgetTop = this.domNode.getBoundingClientRect().top;
            availableHeight = widgetTop > 0 ? windowHeight - widgetTop - padding : windowHeight * 0.7;
        }
        const viewportMaxHeight = this._useFullHeight ? targetWindow.innerHeight : Math.floor(targetWindow.innerHeight * 0.6);
        const actionLineHeight = this._widget.lineHeight;
        if (this._preferredAnchorPosition !== undefined) {
            const maxHeight = Math.min(availableHeight, viewportMaxHeight);
            const height = Math.min(listHeight + chromeHeight, Math.max(0, maxHeight));
            return Math.max(0, height - chromeHeight);
        }
        const maxHeight = Math.min(Math.max(availableHeight, actionLineHeight * 3 + chromeHeight), viewportMaxHeight);
        const height = Math.min(listHeight + chromeHeight, maxHeight);
        return height - chromeHeight;
    }
    layout(minWidth, fixedContentHeight) {
        this._hasLaidOut = true;
        this._lastMinWidth = minWidth;
        if (fixedContentHeight !== undefined) {
            this._fixedContentHeight = fixedContentHeight;
        }
        const listHeight = this.computeHeight();
        this._widget.layout(listHeight);
        const computedWidth = this._widget.computeMaxWidth(minWidth);
        this._cachedMaxWidth = computedWidth;
        this._widget.layout(listHeight, this._cachedMaxWidth);
        return this._cachedMaxWidth;
    }
};
ActionList = __decorate([
    __param(7, IContextViewService),
    __param(8, ILayoutService),
    __param(9, IInstantiationService)
], ActionList);
function stripNewlines(str) {
    return str.replace(/\r\n|\r|\n/g, ' ');
}

export { ActionList, ActionListWidget, acceptSelectedActionCommand, previewSelectedActionCommand };
