import { Emitter, Event } from '../../../../base/common/event.js';
import '../../../../base/common/observableInternal/index.js';
import { setTimeout0 } from '../../../../base/common/platform.js';
import { localize } from '../../../../nls.js';
import { QuickInput } from '../quickInput.js';
import { getParentNodeState } from './quickInputTree.js';
import { observableValue } from '../../../../base/common/observableInternal/observables/observableValue.js';
import { autorun } from '../../../../base/common/observableInternal/reactions/autorun.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// Contains the API
class QuickTree extends QuickInput {
    static { this.DEFAULT_ARIA_LABEL = localize(1837, "Type to narrow down results."); }
    constructor(ui) {
        super(ui);
        this.type = "quickTree" /* QuickInputType.QuickTree */;
        this._value = observableValue('value', '');
        this._ariaLabel = observableValue('ariaLabel', undefined);
        this._placeholder = observableValue('placeholder', undefined);
        this._matchOnDescription = observableValue('matchOnDescription', false);
        this._matchOnLabel = observableValue('matchOnLabel', true);
        this._sortByLabel = observableValue('sortByLabel', true);
        this._activeItems = observableValue('activeItems', []);
        this._itemTree = observableValue('itemTree', []);
        this._onDidChangeCheckedLeafItems = this._register(new Emitter());
        this._onDidChangeCheckboxState = this._register(new Emitter());
        this._onDidAcceptEmitter = this._register(new Emitter());
        this.onDidAccept = Event.any(ui.onDidAccept, this._onDidAcceptEmitter.event);
        this._registerAutoruns();
        this._register(ui.tree.onDidChangeCheckedLeafItems(e => this._onDidChangeCheckedLeafItems.fire(e)));
        this._register(ui.tree.onDidChangeCheckboxState(e => this._onDidChangeCheckboxState.fire(e.item)));
        // Sync active items with tree focus changes
        this._register(ui.tree.tree.onDidChangeFocus(e => {
            this._activeItems.set(ui.tree.getActiveItems(), undefined);
        }));
    }
    get placeholder() { return this._placeholder.get(); }
    set placeholder(placeholder) { this._placeholder.set(placeholder, undefined); }
    show() {
        if (!this.visible) {
            const visibilities = {
                title: !!this.title || !!this.step || !!this.titleButtons.length,
                description: !!this.description,
                checkAll: true,
                checkBox: true,
                inputBox: true,
                progressBar: true,
                visibleCount: true,
                count: true,
                ok: true,
                list: false,
                tree: true,
                message: !!this.validationMessage,
                customButton: false
            };
            this.ui.setVisibilities(visibilities);
            this.visibleDisposables.add(this.ui.inputBox.onDidChange(value => {
                this._value.set(value, undefined);
            }));
            this.visibleDisposables.add(this.ui.tree.onDidChangeCheckboxState((e) => {
                const checkAllState = getParentNodeState([...this.ui.tree.tree.getNode().children]);
                if (this.ui.checkAll.checked !== checkAllState) {
                    this.ui.checkAll.checked = checkAllState;
                }
            }));
            this.visibleDisposables.add(this.ui.checkAll.onChange(_e => {
                const checked = this.ui.checkAll.checked;
                this.ui.tree.checkAll(checked);
            }));
            this.visibleDisposables.add(this.ui.tree.onDidChangeCheckedLeafItems(e => {
                this.ui.count.setCount(e.length);
            }));
        }
        super.show(); // TODO: Why have show() bubble up while update() trickles down?
        // Initial state
        // TODO@TylerLeonhardt: Without this setTimeout, the screen reader will not read out
        // the final count of checked items correctly. Investigate a better way
        // to do this. ref https://github.com/microsoft/vscode/issues/258617
        setTimeout0(() => this.ui.count.setCount(this.ui.tree.getCheckedLeafItems().length));
        const checkAllState = getParentNodeState([...this.ui.tree.tree.getNode().children]);
        if (this.ui.checkAll.checked !== checkAllState) {
            this.ui.checkAll.checked = checkAllState;
        }
    }
    update() {
        if (!this.visible) {
            return;
        }
        const visibilities = {
            title: !!this.title || !!this.step || !!this.titleButtons.length,
            description: !!this.description,
            checkAll: true,
            checkBox: true,
            inputBox: true,
            progressBar: true,
            visibleCount: true,
            count: true,
            ok: true,
            tree: true,
            message: !!this.validationMessage
        };
        this.ui.setVisibilities(visibilities);
        super.update();
    }
    // TODO: Move to using autoruns instead of update function
    _registerAutoruns() {
        this.registerVisibleAutorun(reader => {
            const value = this._value.read(reader);
            this.ui.inputBox.value = value;
            this.ui.tree.filter(value);
        });
        this.registerVisibleAutorun(reader => {
            let ariaLabel = this._ariaLabel.read(reader);
            if (!ariaLabel) {
                ariaLabel = this.placeholder || QuickTree.DEFAULT_ARIA_LABEL;
                // If we have a title, include it in the aria label.
                if (this.title) {
                    ariaLabel += ` - ${this.title}`;
                }
            }
            if (this.ui.list.ariaLabel !== ariaLabel) {
                this.ui.list.ariaLabel = ariaLabel ?? null;
            }
            if (this.ui.inputBox.ariaLabel !== ariaLabel) {
                this.ui.inputBox.ariaLabel = ariaLabel ?? 'input';
            }
        });
        this.registerVisibleAutorun(reader => {
            const placeholder = this._placeholder.read(reader);
            if (this.ui.inputBox.placeholder !== placeholder) {
                this.ui.inputBox.placeholder = placeholder ?? '';
            }
        });
        this.registerVisibleAutorun((reader) => {
            const matchOnLabel = this._matchOnLabel.read(reader);
            const matchOnDescription = this._matchOnDescription.read(reader);
            this.ui.tree.updateFilterOptions({ matchOnLabel, matchOnDescription });
        });
        this.registerVisibleAutorun((reader) => {
            const sortByLabel = this._sortByLabel.read(reader);
            this.ui.tree.sortByLabel = sortByLabel;
        });
        this.registerVisibleAutorun((reader) => {
            const itemTree = this._itemTree.read(reader);
            this.ui.tree.setTreeData(itemTree);
        });
    }
    registerVisibleAutorun(fn) {
        this._register(autorun((reader) => {
            if (this._visible.read(reader)) {
                fn(reader);
            }
        }));
    }
    focus(focus) {
        this.ui.tree.focus(focus);
        // To allow things like space to check/uncheck items
        this.ui.tree.tree.domFocus();
    }
    /**
     * Programmatically accepts an item. Used internally for keyboard navigation.
     * @param inBackground Whether you are accepting an item in the background and keeping the picker open.
     */
    accept(_inBackground) {
        this._onDidAcceptEmitter.fire();
    }
}

export { QuickTree };
