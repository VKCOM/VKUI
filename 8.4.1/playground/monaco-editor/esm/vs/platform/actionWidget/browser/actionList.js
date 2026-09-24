import { setVisibility, clearNode, addDisposableListener, EventType, isHTMLElement, append, $, EventHelper, isActiveElement, isMouseEvent, getWindow, getActiveElement } from '../../../base/browser/dom.js';
import { renderMarkdown } from '../../../base/browser/markdownRenderer.js';
import { ActionBar } from '../../../base/browser/ui/actionbar/actionbar.js';
import { getAnchorRect } from '../../../base/browser/ui/contextview/contextview.js';
import { KeybindingLabel } from '../../../base/browser/ui/keybindingLabel/keybindingLabel.js';
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
        templateData.text.textContent = element.label ?? '';
    }
    disposeTemplate(_templateData) {
        // noop
    }
}
let ActionItemRenderer = class ActionItemRenderer {
    get templateId() { return "action" /* ActionListItemKind.Action */; }
    constructor(_supportsPreview, _onRemoveItem, _onShowSubmenu, _hasAnySubmenuActions, _groupTitleByIndex, _linkHandler, _hideDefaultKeybindingTooltip, _keybindingService, _openerService) {
        this._supportsPreview = _supportsPreview;
        this._onRemoveItem = _onRemoveItem;
        this._onShowSubmenu = _onShowSubmenu;
        this._hasAnySubmenuActions = _hasAnySubmenuActions;
        this._groupTitleByIndex = _groupTitleByIndex;
        this._linkHandler = _linkHandler;
        this._hideDefaultKeybindingTooltip = _hideDefaultKeybindingTooltip;
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
        const elementDisposables = new DisposableStore();
        return { container, icon, text, detail, badge, description, groupTitle, keybinding, toolbar, submenuIndicator, elementDisposables };
    }
    renderElement(element, _index, data) {
        // Clear previous element disposables
        data.elementDisposables.clear();
        if (element.group?.icon) {
            data.icon.className = ThemeIcon.asClassName(element.group.icon);
            if (element.group.icon.color) {
                data.icon.style.color = asCssVariable(element.group.icon.color.id);
            }
        }
        else {
            data.icon.className = ThemeIcon.asClassName(Codicon.lightBulb);
            data.icon.style.color = 'var(--vscode-editorLightBulb-foreground)';
        }
        if (!element.item || !element.label) {
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
        if (data.previousClassName) {
            data.container.classList.remove(data.previousClassName);
        }
        data.container.classList.toggle('action-list-custom', !!element.className);
        if (element.className) {
            data.container.classList.add(element.className);
        }
        data.previousClassName = element.className;
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
        else if (this._hideDefaultKeybindingTooltip) {
            data.container.title = '';
        }
        else if (actionTitle && previewTitle) {
            if (this._supportsPreview && element.canPreview) {
                data.container.title = localize(1705, "{0} to Apply, {1} to Preview", actionTitle, previewTitle);
            }
            else {
                data.container.title = localize(1706, "{0} to Apply", actionTitle);
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
                id: 'actionList.remove',
                label: localize(1707, "Remove"),
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
            actionBar.push(toolbarActions, { icon: true, label: false });
        }
        // Show submenu indicator only for items with submenu actions
        // but not when the item also has hover content (panel auto-shows on hover)
        if (element.submenuActions?.length && !element.hover?.content) {
            data.submenuIndicator.className = 'action-list-submenu-indicator has-submenu ' + ThemeIcon.asClassName(Codicon.chevronRight);
            data.submenuIndicator.style.display = '';
            data.submenuIndicator.style.visibility = '';
            data.elementDisposables.add(addDisposableListener(data.submenuIndicator, EventType.CLICK, (e) => {
                e.stopPropagation();
                this._onShowSubmenu?.(element);
            }));
        }
        else if (this._hasAnySubmenuActions) {
            // Reserve space for alignment when other items have submenus
            data.submenuIndicator.className = 'action-list-submenu-indicator';
            data.submenuIndicator.style.display = '';
            data.submenuIndicator.style.visibility = 'hidden';
        }
        else {
            data.submenuIndicator.className = 'action-list-submenu-indicator';
            data.submenuIndicator.style.display = 'none';
        }
    }
    disposeTemplate(templateData) {
        templateData.keybinding.dispose();
        templateData.elementDisposables.dispose();
    }
};
ActionItemRenderer = __decorate([
    __param(7, IKeybindingService),
    __param(8, IOpenerService)
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
        this._collapsedSections = new Set();
        this._filterText = '';
        this._suppressHover = false;
        this._hasLaidOut = false;
        this._filterCts = this._register(new MutableDisposable());
        this._groupTitleByIndex = new Map();
        this._onDidRequestLayout = this._register(new Emitter());
        /**
         * Fired when the widget's visible item set changes and the parent should
         * re-layout (e.g. after filtering or collapsing a section).
         */
        this.onDidRequestLayout = this._onDidRequestLayout.event;
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
        // Make focusable so clicking the hover panel keeps focus inside the
        // tracked element instead of moving it to document.body (which would
        // trigger the blur handler and dismiss the widget).
        this._submenuContainer.tabIndex = -1;
        this.domNode.append(this._submenuContainer);
        this._register(addDisposableListener(this._submenuContainer, 'mouseenter', () => {
            this._cancelSubmenuHide();
        }));
        this._register(addDisposableListener(this._submenuContainer, 'mouseleave', () => {
            this._scheduleSubmenuHide();
        }));
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
        const reserveSubmenuSpace = this._options?.reserveSubmenuSpace ?? true;
        const hasAnySubmenuActions = reserveSubmenuSpace && items.some(item => !!item.submenuActions?.length && !item.hover?.content);
        this._list = this._register(new List(user, this.domNode, virtualDelegate, [
            new ActionItemRenderer(this._supportsPreview, (item) => this._removeItem(item), (item) => this._showSubmenuForItem(item), hasAnySubmenuActions, this._groupTitleByIndex, this._options?.linkHandler, this._options?.hideDefaultKeybindingTooltip ?? false, this._keybindingService, this._openerService),
            new HeaderRenderer(),
            new SeparatorRenderer(),
        ], {
            keyboardSupport: false,
            typeNavigationEnabled: !this._options?.showFilter,
            keyboardNavigationLabelProvider: { getKeyboardNavigationLabel },
            accessibilityProvider: {
                getAriaLabel: element => {
                    if (element.kind === "action" /* ActionListItemKind.Action */) {
                        let label = element.label ? stripNewlines(element?.label) : '';
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
                        if (element.disabled) {
                            label = localize(1708, "{0}, Disabled Reason: {1}", label, element.disabled);
                        }
                        if (element.submenuActions?.length) {
                            label = localize(1709, "{0}, use right arrow to access options", label);
                        }
                        return label;
                    }
                    return null;
                },
                getWidgetAriaLabel: () => localize(1710, "Action Widget"),
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
        this._register(this._list.onMouseClick(e => this.onListClick(e)));
        this._register(this._list.onMouseOver(e => this.onListHover(e)));
        this._register(this._list.onDidChangeFocus(() => this.onFocus()));
        this._register(this._list.onDidChangeSelection(e => this.onListSelection(e)));
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
                this._filterInput.placeholder = this._options?.filterPlaceholder ?? localize(1711, "Search...");
                this._filterInput.setAttribute('aria-label', localize(1712, "Filter items"));
                filterRow.appendChild(this._filterInput);
                const filterActions = this._options?.filterActions ?? [];
                if (filterActions.length > 0) {
                    const filterActionsContainer = append(filterRow, $('.action-list-filter-actions'));
                    const filterActionBar = this._register(new ActionBar(filterActionsContainer));
                    filterActionBar.push(filterActions, { icon: true, label: false });
                }
                this._register(addDisposableListener(this._filterInput, 'input', () => {
                    this._filterText = this._filterInput.value;
                    this._applyOrUpdateFilter();
                }));
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
        }
        this._applyFilter();
        if (this._list.length) {
            this._focusCheckedOrFirst();
        }
        // ArrowRight opens submenu for the focused item and moves focus into it
        this._register(addDisposableListener(this.domNode, 'keydown', (e) => {
            if (e.key === 'ArrowRight') {
                const focused = this._list.getFocus();
                if (focused.length > 0) {
                    const element = this._list.element(focused[0]);
                    if (element?.submenuActions?.length) {
                        EventHelper.stop(e, true);
                        const rowElement = this._getRowElement(focused[0]);
                        if (rowElement) {
                            this._showSubmenuForElement(element, rowElement);
                            this._currentSubmenuWidget?.focus();
                        }
                    }
                }
            }
        }));
        // When the list has focus and user types a printable character,
        // forward it to the filter input so search begins automatically.
        if (this._filterInput) {
            this._register(addDisposableListener(this.domNode, 'keydown', (e) => {
                if (this._filterInput && !isActiveElement(this._filterInput)
                    && e.key.length === 1 && e.key !== ' ' && !e.ctrlKey && !e.metaKey && !e.altKey) {
                    this._filterInput.focus();
                    this._filterInput.value = e.key;
                    this._filterText = e.key;
                    this._applyOrUpdateFilter();
                    e.preventDefault();
                    e.stopPropagation();
                }
            }));
        }
    }
    _toggleSection(section) {
        if (this._collapsedSections.has(section)) {
            this._collapsedSections.delete(section);
        }
        else {
            this._collapsedSections.add(section);
        }
        this._options?.onDidToggleSection?.(section, this._collapsedSections.has(section));
        this._applyFilter();
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
        }).catch(() => { });
    }
    _applyFilter(skipTextFilter = false, fireLayout = true) {
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
            if (focusedItem) {
                const focusedItemId = focusedItem.item?.id;
                if (focusedItemId) {
                    for (let i = 0; i < this._list.length; i++) {
                        const el = this._list.element(i);
                        if (el.item?.id === focusedItemId) {
                            this._list.setFocus([i]);
                            this._list.reveal(i);
                            // Move DOM focus back to the list: the splice above destroyed
                            // the previously focused row, leaving DOM focus on the body.
                            this._list.domFocus();
                            break;
                        }
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
    focusCondition(element) {
        return !element.disabled && element.kind === "action" /* ActionListItemKind.Action */;
    }
    focus() {
        if (this._filterInput && this._options?.focusFilterOnOpen) {
            this._filterInput.focus();
            // Highlight the first item so Enter works immediately
            this._focusCheckedOrFirst();
            return;
        }
        this._list.domFocus();
        this._focusCheckedOrFirst();
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
    _focusCheckedOrFirst() {
        this._suppressHover = true;
        try {
            // Try to focus the checked item first
            for (let i = 0; i < this._list.length; i++) {
                const element = this._list.element(i);
                if (element.kind === "action" /* ActionListItemKind.Action */ && element.item?.checked) {
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
            this._suppressHover = false;
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
        switch (item.kind) {
            case "header" /* ActionListItemKind.Header */:
                return this._headerLineHeight;
            case "separator" /* ActionListItemKind.Separator */:
                return item.label ? this._actionLineHeight : this._separatorLineHeight;
            default:
                return item.detail ? (this._options?.detailItemHeight ?? 48) : this._actionLineHeight;
        }
    }
    /**
     * Computes the total height of all items (including collapsed/filtered items).
     */
    computeFullHeight() {
        let fullHeight = 0;
        for (const item of this._allMenuItems) {
            fullHeight += this._getItemHeight(item);
        }
        return fullHeight;
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
        // Place filter container on the preferred side.
        if (this._filterContainer && this._filterContainer.parentElement) {
            this._filterContainer.parentElement.insertBefore(this._filterContainer, this.domNode);
        }
    }
    computeMaxWidth(minWidth) {
        const visibleCount = this._list.length;
        const effectiveMinWidth = Math.max(minWidth, this._options?.minWidth ?? 0);
        const rawMaxWidthCap = this._options?.maxWidth ?? Number.POSITIVE_INFINITY;
        const maxWidthCap = Math.max(rawMaxWidthCap, effectiveMinWidth);
        const clamp = (w) => Math.min(Math.max(w, effectiveMinWidth), maxWidthCap);
        let maxWidth = effectiveMinWidth;
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
            const allItems = [...this._allMenuItems];
            this._list.splice(0, visibleCount, allItems);
            let allItemsHeight = 0;
            for (const item of allItems) {
                allItemsHeight += this._getItemHeight(item);
            }
            this._list.layout(allItemsHeight);
            const itemWidths = [];
            for (let i = 0; i < allItems.length; i++) {
                const element = this._getRowElement(i);
                if (element) {
                    element.style.width = 'auto';
                    const width = element.getBoundingClientRect().width;
                    element.style.width = '';
                    itemWidths.push(width + this._computeToolbarWidth(allItems[i]));
                }
            }
            maxWidth = clamp(Math.max(...itemWidths));
            // Restore visible items
            this._list.splice(0, allItems.length, visibleItems);
            return maxWidth;
        }
        // All items are visible, measure them directly
        const itemWidths = [];
        for (let i = 0; i < visibleCount; i++) {
            const element = this._getRowElement(i);
            if (element) {
                element.style.width = 'auto';
                const width = element.getBoundingClientRect().width;
                element.style.width = '';
                itemWidths.push(width + this._computeToolbarWidth(this._list.element(i)));
            }
        }
        return clamp(Math.max(...itemWidths));
    }
    focusPrevious() {
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
        if (element.isSectionToggle && element.section) {
            this._list.setSelection([]);
            const section = element.section;
            queueMicrotask(() => {
                this._toggleSection(section);
            });
            return;
        }
        // Don't select when clicking the toolbar or submenu indicator
        if (isMouseEvent(e.browserEvent)) {
            const target = e.browserEvent.target;
            if (isHTMLElement(target) && (target.closest('.action-list-item-toolbar') || target.closest('.action-list-submenu-indicator'))) {
                this._list.setSelection([]);
                return;
            }
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
    _computeToolbarWidth(item) {
        let actionCount = item.toolbarActions?.length ?? 0;
        if (item.onRemove) {
            actionCount++;
        }
        if (actionCount === 0) {
            return 0;
        }
        // Each toolbar action button is ~22px (16px icon + padding) plus 6px row gap
        const actionButtonWidth = 22;
        return actionCount * actionButtonWidth + 6;
    }
    _getRowElement(index) {
        // eslint-disable-next-line no-restricted-syntax
        return this.domNode.ownerDocument.getElementById(this._list.getElementID(index));
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
        // Navigated to an item with no hover/submenu — fully tear down any
        // previous submenu so a blank panel doesn't linger.
        this._hideSubmenu();
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
        if (this._currentSubmenuElement === element) {
            return;
        }
        this._submenuDisposables.clear();
        this._currentSubmenuElement = element;
        this._clearSubmenuContainer();
        // When the item has hover content, render it as a header
        let hoverHeader;
        const hoverContent = element.hover?.content;
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
            if (element.submenuActions?.length) {
                hoverHeader.classList.add('has-submenu');
            }
            this._submenuContainer.appendChild(hoverHeader);
        }
        const hasSubmenuActions = !!element.submenuActions?.length;
        // Show container before creating widget so List can measure during construction
        this._submenuContainer.style.display = '';
        this._submenuContainer.style.position = 'absolute';
        this._submenuContainer.removeAttribute('role');
        const anchorRect = anchor.getBoundingClientRect();
        const parentRect = this.domNode.getBoundingClientRect();
        const targetWindow = getWindow(this.domNode);
        let totalHeight = 0;
        let maxWidth = hoverHeader ? hoverHeader.offsetWidth : 0;
        if (hasSubmenuActions) {
            // Convert submenu actions into ActionListWidget items
            const submenuItems = [];
            const submenuGroups = element.submenuActions.filter((a) => a instanceof SubmenuAction);
            const groupsWithActions = submenuGroups.filter(g => g.actions.length > 0);
            for (let gi = 0; gi < groupsWithActions.length; gi++) {
                const group = groupsWithActions[gi];
                if (group.label) {
                    submenuItems.push({
                        kind: "header" /* ActionListItemKind.Header */,
                        group: { title: group.label },
                        label: group.label,
                    });
                }
                for (let ci = 0; ci < group.actions.length; ci++) {
                    const child = group.actions[ci];
                    const extendedChild = child;
                    const icon = extendedChild.icon
                        ?? ThemeIcon.fromId(child.checked ? Codicon.check.id : Codicon.blank.id);
                    const hoverContent = extendedChild.hoverContent;
                    submenuItems.push({
                        item: child,
                        kind: "action" /* ActionListItemKind.Action */,
                        label: child.label,
                        description: child.tooltip || undefined,
                        group: { title: '', icon },
                        hideIcon: false,
                        hover: hoverContent ? { content: hoverContent } : {},
                        onRemove: extendedChild.onRemove,
                    });
                }
                if (gi < groupsWithActions.length - 1) {
                    submenuItems.push({ kind: "separator" /* ActionListItemKind.Separator */, label: '' });
                }
            }
            // Also include non-SubmenuAction items directly
            for (const action of element.submenuActions) {
                if (!(action instanceof SubmenuAction)) {
                    const extendedAction = action;
                    submenuItems.push({
                        item: action,
                        kind: "action" /* ActionListItemKind.Action */,
                        label: action.label,
                        description: action.tooltip || undefined,
                        group: { title: '' },
                        hideIcon: false,
                        hover: {},
                        onRemove: extendedAction.onRemove,
                    });
                }
            }
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
            const submenuWidget = this._submenuDisposables.add(this._instantiationService.createInstance((ActionListWidget_1), 'submenu', false, submenuItems, submenuDelegate, undefined, undefined));
            this._submenuContainer.appendChild(submenuWidget.domNode);
            this._currentSubmenuWidget = submenuWidget;
            // The submenu widget's constructor focuses its first item by
            // default; clear that until the user actually navigates into
            // the submenu (via ArrowRight) so it doesn't render as if
            // selected while the parent list still has focus.
            submenuWidget.clearFocus();
            totalHeight = submenuWidget.computeListHeight();
            submenuWidget.layout(totalHeight);
            const submenuMaxWidth = submenuWidget.computeMaxWidth(0);
            maxWidth = Math.max(maxWidth, submenuMaxWidth);
            submenuWidget.layout(totalHeight, maxWidth);
            submenuWidget.domNode.style.width = `${maxWidth}px`;
            // Keyboard navigation in submenu
            this._submenuDisposables.add(addDisposableListener(submenuWidget.domNode, 'keydown', (e) => {
                if (e.key === 'ArrowLeft' || e.key === 'Escape') {
                    EventHelper.stop(e, true);
                    this._hideSubmenu();
                    this._list.domFocus();
                }
                else if (e.key === 'Enter') {
                    EventHelper.stop(e, true);
                    const focused = submenuWidget.getFocusedElement();
                    if (focused?.item) {
                        focused.item.run();
                        const parentItem = this._currentSubmenuElement?.item;
                        this._hideSubmenu();
                        if (parentItem) {
                            this._delegate.onSelect(parentItem);
                        }
                        this.hide();
                    }
                }
                else if (e.key === 'ArrowDown') {
                    EventHelper.stop(e, true);
                    submenuWidget.focusNext();
                }
                else if (e.key === 'ArrowUp') {
                    EventHelper.stop(e, true);
                    submenuWidget.focusPrevious();
                }
            }));
        }
        // Position: prefer right side, fall back to left if not enough space
        const viewportWidth = targetWindow.innerWidth;
        const spaceRight = viewportWidth - anchorRect.right;
        const spaceLeft = parentRect.left;
        const panelWidth = maxWidth + 10; // account for border/padding
        const gap = 4;
        if (spaceRight >= panelWidth || spaceRight >= spaceLeft) {
            this._submenuContainer.style.left = `${parentRect.right - parentRect.left + gap}px`;
        }
        else {
            this._submenuContainer.style.left = `${-panelWidth - gap}px`;
        }
        const hoverHeaderHeight = hoverHeader ? hoverHeader.offsetHeight : 0;
        const totalPanelHeight = totalHeight + hoverHeaderHeight;
        const viewportHeight = targetWindow.innerHeight;
        const anchorHeight = anchorRect.height;
        let top = anchorRect.top - parentRect.top + (anchorHeight - totalPanelHeight) / 2;
        const panelBottom = parentRect.top + top + totalPanelHeight;
        if (panelBottom > viewportHeight) {
            top -= (panelBottom - viewportHeight + 8);
        }
        if (parentRect.top + top < 0) {
            top = -parentRect.top;
        }
        this._submenuContainer.style.top = `${top}px`;
    }
    _hideSubmenu() {
        this._cancelSubmenuHide();
        this._cancelSubmenuShow();
        this._submenuDisposables.clear();
        this._currentSubmenuWidget = undefined;
        this._currentSubmenuElement = undefined;
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
        if (this._submenuContainer.contains(getActiveElement())) {
            this._list.domFocus();
        }
        clearNode(this._submenuContainer);
    }
    _scheduleSubmenuHide() {
        this._cancelSubmenuHide();
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
    _scheduleSubmenuShow(element, index) {
        this._cancelSubmenuShow();
        this._submenuShowTimeout = setTimeout(() => {
            this._submenuShowTimeout = undefined;
            const rowElement = typeof index === 'number' ? this._getRowElement(index) : null;
            if (rowElement) {
                this._showSubmenuForElement(element, rowElement);
            }
        }, 500);
    }
    _cancelSubmenuShow() {
        if (this._submenuShowTimeout !== undefined) {
            clearTimeout(this._submenuShowTimeout);
            this._submenuShowTimeout = undefined;
        }
    }
    async onListHover(e) {
        const element = e.element;
        if (element && element.item && this.focusCondition(element)) {
            // Check if the hover target is inside a toolbar - if so, skip the splice
            // to avoid re-rendering which would destroy the element mid-hover.
            // But still maintain submenu state for items with submenu actions.
            const isHoveringToolbar = isHTMLElement(e.browserEvent.target) && e.browserEvent.target.closest('.action-list-item-toolbar') !== null;
            if (isHoveringToolbar) {
                if (!element.submenuActions?.length) {
                    this._cancelSubmenuShow();
                }
                this._list.setFocus([]);
                return;
            }
            // Set focus immediately for responsive hover feedback
            const hasPanel = !!(element.submenuActions?.length || element.hover?.content);
            if (hasPanel) {
                this._suppressHover = true;
            }
            this._list.setFocus(typeof e.index === 'number' ? [e.index] : []);
            if (hasPanel) {
                this._suppressHover = false;
            }
            // Show hover/submenu panel on row hover with a delay
            if (hasPanel) {
                if (this._currentSubmenuElement === element) {
                    this._cancelSubmenuHide();
                    this._cancelSubmenuShow();
                }
                else {
                    this._hideSubmenu();
                    this._scheduleSubmenuShow(element, e.index);
                }
                return;
            }
            if (this._currentSubmenuElement === element) {
                this._cancelSubmenuHide();
            }
            else {
                this._cancelSubmenuShow();
                this._hideSubmenu();
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
            // Show hover for disabled items that have hover content (with delay)
            if (this._currentSubmenuElement === element) {
                this._cancelSubmenuHide();
                this._cancelSubmenuShow();
            }
            else {
                this._hideSubmenu();
                this._scheduleSubmenuShow(element, e.index);
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
    /**
     * Returns the resolved anchor position after the first layout.
     * Used by the context view delegate to lock the dropdown direction.
     */
    get anchorPosition() {
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
    hide(didCancel) {
        this._widget.hide(didCancel);
        this._contextViewService.hideContextView();
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
        const listHeight = this._widget.computeListHeight();
        const filterHeight = this._widget.filterContainer ? 36 : 0;
        const footerHeight = this._widget.footerContainer ? 32 : 0;
        const headerHeight = this._widget.headerContainer ? this._widget.headerContainer.offsetHeight || 36 : 0;
        const chromeHeight = filterHeight + footerHeight + headerHeight;
        const targetWindow = getWindow(this.domNode);
        let availableHeight;
        if (this.hasDynamicHeight()) {
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
                const fullHeight = chromeHeight + this._widget.computeFullHeight();
                this._showAbove = fullHeight > spaceBelow && spaceAbove > spaceBelow;
            }
            availableHeight = Math.max(0, (this._showAbove ? spaceAbove : spaceBelow) - this.computeActionWidgetVerticalChromeHeight());
        }
        else {
            const padding = 10;
            const windowHeight = this._layoutService.getContainer(targetWindow).clientHeight;
            const widgetTop = this.domNode.getBoundingClientRect().top;
            availableHeight = widgetTop > 0 ? windowHeight - widgetTop - padding : windowHeight * 0.7;
        }
        const viewportMaxHeight = Math.floor(targetWindow.innerHeight * 0.6);
        const actionLineHeight = this._widget.lineHeight;
        const maxHeight = Math.min(Math.max(availableHeight, actionLineHeight * 3 + chromeHeight), viewportMaxHeight);
        const height = Math.min(listHeight + chromeHeight, maxHeight);
        return height - chromeHeight;
    }
    layout(minWidth) {
        this._hasLaidOut = true;
        this._lastMinWidth = minWidth;
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
