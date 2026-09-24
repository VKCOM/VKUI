import { Codicon } from '../../../common/codicons.js';
import { Emitter } from '../../../common/event.js';
import { isMarkdownString } from '../../../common/htmlContent.js';
import { stripIcons, getCodiconAriaLabel } from '../../../common/iconLabels.js';
import { ThemeIcon } from '../../../common/themables.js';
import { isHTMLElement } from '../../dom.js';
import { BaseActionViewItem } from '../actionbar/actionViewItems.js';
import { getBaseLayerHoverDelegate } from '../hover/hoverDelegate2.js';
import { Widget } from '../widget.js';
import './toggle.css';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const unthemedToggleStyles = {
    inputActiveOptionBorder: '#007ACC00',
    inputActiveOptionForeground: '#FFFFFF',
    inputActiveOptionBackground: '#0E639C50'
};
class ToggleActionViewItem extends BaseActionViewItem {
    constructor(context, action, options) {
        super(context, action, options);
        const title = this.options.keybinding ?
            `${this._action.label} (${this.options.keybinding})` : this._action.label;
        this.toggle = this._register(new Toggle({
            actionClassName: this._action.class,
            isChecked: !!this._action.checked,
            title,
            notFocusable: true,
            inputActiveOptionBackground: options.toggleStyles?.inputActiveOptionBackground,
            inputActiveOptionBorder: options.toggleStyles?.inputActiveOptionBorder,
            inputActiveOptionForeground: options.toggleStyles?.inputActiveOptionForeground,
        }));
        this._register(this.toggle.onChange(() => {
            this._action.checked = !!this.toggle && this.toggle.checked;
        }));
    }
    render(container) {
        this.element = container;
        this.element.appendChild(this.toggle.domNode);
        this.updateChecked();
        this.updateEnabled();
    }
    updateEnabled() {
        if (this.toggle) {
            if (this.isEnabled()) {
                this.toggle.enable();
                this.element?.classList.remove('disabled');
            }
            else {
                this.toggle.disable();
                this.element?.classList.add('disabled');
            }
        }
    }
    updateChecked() {
        this.toggle.checked = !!this._action.checked;
    }
    updateLabel() {
        const title = this.options.keybinding ?
            `${this._action.label} (${this.options.keybinding})` : this._action.label;
        this.toggle.setTitle(title);
    }
    focus() {
        this.toggle.domNode.tabIndex = 0;
        this.toggle.focus();
    }
    blur() {
        this.toggle.domNode.tabIndex = -1;
        this.toggle.domNode.blur();
    }
    setFocusable(focusable) {
        this.toggle.domNode.tabIndex = focusable ? 0 : -1;
    }
}
class Toggle extends Widget {
    get onChange() { return this._onChange.event; }
    get onKeyDown() { return this._onKeyDown.event; }
    constructor(opts) {
        super();
        this._onChange = this._register(new Emitter());
        this._onKeyDown = this._register(new Emitter());
        this._opts = opts;
        this._title = this._opts.title;
        this._checked = this._opts.isChecked;
        const classes = ['monaco-custom-toggle'];
        if (this._opts.icon) {
            this._icon = this._opts.icon;
            classes.push(...ThemeIcon.asClassNameArray(this._icon));
        }
        if (this._opts.actionClassName) {
            classes.push(...this._opts.actionClassName.split(' '));
        }
        if (this._checked) {
            classes.push('checked');
        }
        this.domNode = document.createElement('div');
        this._register(getBaseLayerHoverDelegate().setupDelayedHover(this.domNode, () => ({
            content: !isMarkdownString(this._title) && !isHTMLElement(this._title) ? stripIcons(this._title) : this._title,
            style: 1 /* HoverStyle.Pointer */,
        }), this._opts.hoverLifecycleOptions));
        this.domNode.classList.add(...classes);
        if (!this._opts.notFocusable) {
            this.domNode.tabIndex = 0;
        }
        this.domNode.setAttribute('role', 'checkbox');
        this.domNode.setAttribute('aria-checked', String(this._checked));
        this.setTitle(this._opts.title);
        this.applyStyles();
        this.onclick(this.domNode, (ev) => {
            if (this.enabled) {
                this.checked = !this._checked;
                this._onChange.fire(false);
                ev.preventDefault();
                ev.stopPropagation();
            }
        });
        this._register(this.ignoreGesture(this.domNode));
        this.onkeydown(this.domNode, (keyboardEvent) => {
            if (!this.enabled) {
                return;
            }
            if (keyboardEvent.keyCode === 10 /* KeyCode.Space */ || keyboardEvent.keyCode === 3 /* KeyCode.Enter */) {
                this.checked = !this._checked;
                this._onChange.fire(true);
                keyboardEvent.preventDefault();
                keyboardEvent.stopPropagation();
                return;
            }
            this._onKeyDown.fire(keyboardEvent);
        });
    }
    get enabled() {
        return this.domNode.getAttribute('aria-disabled') !== 'true';
    }
    focus() {
        this.domNode.focus();
    }
    get checked() {
        return this._checked;
    }
    set checked(newIsChecked) {
        this._checked = newIsChecked;
        this.domNode.setAttribute('aria-checked', String(this._checked));
        this.domNode.classList.toggle('checked', this._checked);
        this.applyStyles();
    }
    setIcon(icon) {
        if (this._icon) {
            this.domNode.classList.remove(...ThemeIcon.asClassNameArray(this._icon));
        }
        this._icon = icon;
        if (this._icon) {
            this.domNode.classList.add(...ThemeIcon.asClassNameArray(this._icon));
        }
    }
    width() {
        return 2 /*margin left*/ + 2 /*border*/ + 2 /*padding*/ + 16 /* icon width */;
    }
    applyStyles() {
        if (this.domNode) {
            this.domNode.style.borderColor = (this._checked && this._opts.inputActiveOptionBorder) || '';
            this.domNode.style.color = (this._checked && this._opts.inputActiveOptionForeground) || 'inherit';
            this.domNode.style.backgroundColor = (this._checked && this._opts.inputActiveOptionBackground) || '';
        }
    }
    enable() {
        this.domNode.setAttribute('aria-disabled', String(false));
        this.domNode.classList.remove('disabled');
        if (!this._opts.notFocusable) {
            this.domNode.tabIndex = 0;
        }
    }
    disable() {
        this.domNode.setAttribute('aria-disabled', String(true));
        this.domNode.classList.add('disabled');
        if (!this._opts.notFocusable) {
            this.domNode.tabIndex = -1;
        }
    }
    setTitle(newTitle) {
        this._title = newTitle;
        const ariaLabel = typeof newTitle === 'string' ? newTitle : isMarkdownString(newTitle) ? newTitle.value : newTitle.textContent;
        this.domNode.setAttribute('aria-label', getCodiconAriaLabel(ariaLabel));
    }
}
class BaseCheckbox extends Widget {
    static { this.CLASS_NAME = 'monaco-checkbox'; }
    constructor(checkbox, domNode, styles) {
        super();
        this.checkbox = checkbox;
        this.domNode = domNode;
        this.styles = styles;
        this._onChange = this._register(new Emitter());
        this.onChange = this._onChange.event;
        this.applyStyles();
    }
    get enabled() {
        return this.checkbox.enabled;
    }
    enable() {
        this.checkbox.enable();
        this.applyStyles(true);
    }
    disable() {
        this.checkbox.disable();
        this.applyStyles(false);
    }
    setTitle(newTitle) {
        this.checkbox.setTitle(newTitle);
    }
    applyStyles(enabled = this.enabled) {
        this.domNode.style.color = (enabled ? this.styles.checkboxForeground : this.styles.checkboxDisabledForeground) || '';
        this.domNode.style.backgroundColor = (enabled ? this.styles.checkboxBackground : this.styles.checkboxDisabledBackground) || '';
        this.domNode.style.borderColor = (enabled ? this.styles.checkboxBorder : this.styles.checkboxDisabledBackground) || '';
        const size = this.styles.size || 18;
        this.domNode.style.width =
            this.domNode.style.height =
                this.domNode.style.fontSize = `${size}px`;
        this.domNode.style.fontSize = `${size - 2}px`;
    }
}
class Checkbox extends BaseCheckbox {
    constructor(title, isChecked, styles) {
        const toggle = new Toggle({ title, isChecked, icon: Codicon.check, actionClassName: BaseCheckbox.CLASS_NAME, hoverLifecycleOptions: styles.hoverLifecycleOptions, ...unthemedToggleStyles });
        super(toggle, toggle.domNode, styles);
        this._register(toggle);
        this._register(this.checkbox.onChange(keyboard => {
            this.applyStyles();
            this._onChange.fire(keyboard);
        }));
    }
    get checked() {
        return this.checkbox.checked;
    }
    set checked(newIsChecked) {
        this.checkbox.checked = newIsChecked;
        this.applyStyles();
    }
    applyStyles(enabled) {
        if (this.checkbox.checked) {
            this.checkbox.setIcon(Codicon.check);
        }
        else {
            this.checkbox.setIcon(undefined);
        }
        super.applyStyles(enabled);
    }
}
class TriStateCheckbox extends BaseCheckbox {
    constructor(title, _state, styles) {
        let icon;
        switch (_state) {
            case true:
                icon = Codicon.check;
                break;
            case 'mixed':
                icon = Codicon.dash;
                break;
            case false:
                icon = undefined;
                break;
        }
        const checkbox = new Toggle({
            title,
            isChecked: _state === true,
            icon,
            actionClassName: Checkbox.CLASS_NAME,
            hoverLifecycleOptions: styles.hoverLifecycleOptions,
            ...unthemedToggleStyles
        });
        super(checkbox, checkbox.domNode, styles);
        this._state = _state;
        this._register(checkbox);
        this._register(this.checkbox.onChange(keyboard => {
            this._state = this.checkbox.checked;
            this.applyStyles();
            this._onChange.fire(keyboard);
        }));
    }
    get checked() {
        return this._state;
    }
    set checked(newState) {
        if (this._state !== newState) {
            this._state = newState;
            this.checkbox.checked = newState === true;
            this.applyStyles();
        }
    }
    applyStyles(enabled) {
        switch (this._state) {
            case true:
                this.checkbox.setIcon(Codicon.check);
                break;
            case 'mixed':
                this.checkbox.setIcon(Codicon.dash);
                break;
            case false:
                this.checkbox.setIcon(undefined);
                break;
        }
        super.applyStyles(enabled);
    }
}
/**
 * Creates an action view item provider that renders toggles for actions with a checked state
 * and falls back to default button rendering for regular actions.
 *
 * @param toggleStyles - Optional styles to apply to toggle items
 * @returns An IActionViewItemProvider that can be used with ActionBar
 */
function createToggleActionViewItemProvider(toggleStyles) {
    return (action, options) => {
        // Only render as a toggle if the action has a checked property
        if (action.checked !== undefined) {
            return new ToggleActionViewItem(null, action, { ...options, toggleStyles });
        }
        // Return undefined to fall back to default button rendering
        return undefined;
    };
}

export { Checkbox, Toggle, ToggleActionViewItem, TriStateCheckbox, createToggleActionViewItemProvider, unthemedToggleStyles };
