import { append, $ as $$1 } from '../../../base/browser/dom.js';
import { FindInput } from '../../../base/browser/ui/findinput/findInput.js';
import { createToggleActionViewItemProvider } from '../../../base/browser/ui/toggle/toggle.js';
import { Disposable } from '../../../base/common/lifecycle.js';
import Severity from '../../../base/common/severity.js';
import './media/quickInput.css';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const $ = $$1;
class QuickInputBox extends Disposable {
    constructor(parent, inputBoxStyles, toggleStyles) {
        super();
        this.parent = parent;
        this._listFocusMode = false;
        this.onDidChange = (handler) => {
            return this.findInput.onDidChange(handler);
        };
        this.container = append(this.parent, $('.quick-input-box'));
        this.findInput = this._register(new FindInput(this.container, undefined, {
            label: '',
            inputBoxStyles,
            toggleStyles,
            actionViewItemProvider: createToggleActionViewItemProvider(toggleStyles),
            hideHoverOnValueChange: true
        }));
        // Don't set role="textbox" - the input element already has that implicit role
        // Don't set aria-haspopup or aria-autocomplete by default - only add them when list is active
    }
    get onKeyDown() {
        return this.findInput.onKeyDown;
    }
    get value() {
        return this.findInput.getValue();
    }
    set value(value) {
        this.findInput.setValue(value);
    }
    select(range = null) {
        this.findInput.inputBox.select(range);
    }
    getSelection() {
        return this.findInput.inputBox.getSelection();
    }
    isSelectionAtEnd() {
        return this.findInput.inputBox.isSelectionAtEnd();
    }
    get placeholder() {
        return this.findInput.inputBox.inputElement.getAttribute('placeholder') || '';
    }
    set placeholder(placeholder) {
        this.findInput.inputBox.setPlaceHolder(placeholder);
    }
    get password() {
        return this.findInput.inputBox.inputElement.type === 'password';
    }
    set password(password) {
        this.findInput.inputBox.inputElement.type = password ? 'password' : 'text';
    }
    set enabled(enabled) {
        // We can't disable the input box because it is still used for
        // navigating the list. Instead, we disable the list and the OK
        // so that nothing can be selected.
        // TODO: should this be what we do for all find inputs? Or maybe some _other_ API
        // on findInput to change it to readonly?
        this.findInput.inputBox.inputElement.toggleAttribute('readonly', !enabled);
        // TODO: styles of the quick pick need to be moved to the CSS instead of being in line
        // so things like this can be done in CSS
        // this.findInput.inputBox.inputElement.classList.toggle('disabled', !enabled);
    }
    set toggles(toggles) {
        this.findInput.setAdditionalToggles(toggles);
    }
    set actions(actions) {
        this.setActions(actions);
    }
    setActions(actions, actionViewItemProvider) {
        this.findInput.setActions(actions, actionViewItemProvider);
    }
    get ariaLabel() {
        return this.findInput.inputBox.inputElement.getAttribute('aria-label') || '';
    }
    set ariaLabel(ariaLabel) {
        this.findInput.inputBox.inputElement.setAttribute('aria-label', ariaLabel);
    }
    hasFocus() {
        return this.findInput.inputBox.hasFocus();
    }
    setAttribute(name, value) {
        this.findInput.inputBox.inputElement.setAttribute(name, value);
    }
    removeAttribute(name) {
        this.findInput.inputBox.inputElement.removeAttribute(name);
    }
    /**
     * Controls the ARIA popup mode for screen readers.
     * When enabled (hasActiveDescendant=true), indicates a list popup is active.
     * When disabled, removes ARIA attributes to allow normal text input behavior.
     * Only updates attributes when the state actually changes to avoid
     * unnecessary screen reader re-announcements.
     */
    setListFocusMode(hasActiveDescendant) {
        if (this._listFocusMode === hasActiveDescendant) {
            return; // No change, avoid triggering screen reader re-announcements
        }
        this._listFocusMode = hasActiveDescendant;
        const input = this.findInput.inputBox.inputElement;
        if (hasActiveDescendant) {
            // List item is focused - indicate combobox behavior
            input.setAttribute('aria-haspopup', 'listbox');
            input.setAttribute('aria-autocomplete', 'list');
        }
        else {
            // No list item focused - remove combobox attributes for normal text input
            input.removeAttribute('aria-haspopup');
            input.removeAttribute('aria-autocomplete');
        }
    }
    showDecoration(decoration) {
        if (decoration === Severity.Ignore) {
            this.findInput.clearMessage();
        }
        else {
            this.findInput.showMessage({ type: decoration === Severity.Info ? 1 /* MessageType.INFO */ : decoration === Severity.Warning ? 2 /* MessageType.WARNING */ : 3 /* MessageType.ERROR */, content: '' });
        }
    }
    stylesForType(decoration) {
        return this.findInput.inputBox.stylesForType(decoration === Severity.Info ? 1 /* MessageType.INFO */ : decoration === Severity.Warning ? 2 /* MessageType.WARNING */ : 3 /* MessageType.ERROR */);
    }
    setFocus() {
        this.findInput.focus();
    }
    layout() {
        this.findInput.inputBox.layout();
    }
}

export { QuickInputBox };
