import { $, append, addDisposableListener, EventHelper, EventType } from '../../dom.js';
import { Emitter } from '../../../common/event.js';
import { Disposable } from '../../../common/lifecycle.js';
import { getBaseLayerHoverDelegate } from '../hover/hoverDelegate2.js';
import './switch.css';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * A pill switch for a setting that takes effect as soon as it is flipped, e.g. enabling
 * a plugin or letting a model be chosen automatically.
 *
 * Use this rather than a `Checkbox` when the control commits immediately; a checkbox
 * reads as part of a form that is submitted later.
 */
class Switch extends Disposable {
    constructor(options) {
        super();
        this._onChange = this._register(new Emitter());
        /** Fires with the new state when the user flips the switch, not when it is set in code. */
        this.onChange = this._onChange.event;
        this._checked = !!options.checked;
        this._title = options.title ?? options.ariaLabel;
        this.domNode = $('button.monaco-switch');
        this.domNode.type = 'button';
        this.domNode.setAttribute('role', 'switch');
        append(this.domNode, $('.monaco-switch-thumb'));
        this._register(getBaseLayerHoverDelegate().setupDelayedHover(this.domNode, () => ({
            content: this._title,
            style: 1 /* HoverStyle.Pointer */,
        })));
        this.setAriaLabel(options.ariaLabel, options.title);
        this.disabled = !!options.disabled;
        this._applyState();
        this._register(addDisposableListener(this.domNode, EventType.CLICK, e => {
            EventHelper.stop(e, true);
            if (this.domNode.disabled) {
                return;
            }
            this._checked = !this._checked;
            this._applyState();
            this._onChange.fire(this._checked);
        }));
    }
    get checked() {
        return this._checked;
    }
    /** Sets the state without firing {@link onChange}. */
    set checked(checked) {
        if (this._checked !== checked) {
            this._checked = checked;
            this._applyState();
        }
    }
    get disabled() {
        return this.domNode.disabled;
    }
    set disabled(disabled) {
        this.domNode.disabled = disabled;
    }
    setAriaLabel(ariaLabel, title = ariaLabel) {
        this.domNode.setAttribute('aria-label', ariaLabel);
        this._title = title;
    }
    _applyState() {
        this.domNode.setAttribute('aria-checked', String(this._checked));
        this.domNode.classList.toggle('checked', this._checked);
    }
}

export { Switch };
